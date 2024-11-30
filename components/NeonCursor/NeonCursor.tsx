'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import './NeonCursor.css';

const NeonCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const trailsRef = useRef<(HTMLDivElement | null)[]>([]);
    const requestRef = useRef<number>();
    const previousTimeRef = useRef<number>();
    const trailPositions = useRef<{ x: number; y: number }[]>(Array(5).fill({ x: 0, y: 0 }));

    const animate = useCallback((time: number) => {
        if (previousTimeRef.current !== undefined) {
            trailPositions.current = trailPositions.current.map((pos, index) => {
                const targetPos = index === 0 ? position : trailPositions.current[index - 1];
                return {
                    x: pos.x + (targetPos.x - pos.x) * 0.2,
                    y: pos.y + (targetPos.y - pos.y) * 0.2
                };
            });

            trailsRef.current.forEach((trail, index) => {
                if (trail) {
                    const pos = trailPositions.current[index];
                    const scale = 1 - (index * 0.15);
                    const opacity = 1 - (index * 0.2);
                    trail.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(${scale})`;
                    trail.style.opacity = String(opacity);
                }
            });
        }
        previousTimeRef.current = time;
        requestRef.current = requestAnimationFrame(animate);
    }, [position]);

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, [animate]);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
    }, []);

    const handleMouseOver = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.matches('a, button, input, [role="button"], [data-hover="true"]')) {
            setIsHovering(true);
        }
    }, []);

    const handleMouseOut = useCallback(() => {
        setIsHovering(false);
    }, []);

    const handleMouseDown = useCallback(() => setIsClicking(true), []);
    const handleMouseUp = useCallback(() => setIsClicking(false), []);

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseMove, handleMouseOver, handleMouseOut, handleMouseDown, handleMouseUp]);

    const setTrailRef = useCallback((el: HTMLDivElement | null, index: number) => {
        trailsRef.current[index] = el;
    }, []);

    return (
        <div className="neon-cursor-container">
            <div
                className={`cursor-main ${isHovering ? 'hover' : ''} ${isClicking ? 'clicking' : ''}`}
                style={{
                    transform: `translate(${position.x}px, ${position.y}px)`
                }}
            />
            {Array(5).fill(null).map((_, index) => (
                <div
                    key={index}
                    ref={(el) => setTrailRef(el, index)}
                    className={`cursor-trail ${index === 0 ? 'active' : ''}`}
                />
            ))}
            <div
                className="cursor-glow"
                style={{
                    transform: `translate(${position.x - 20}px, ${position.y - 20}px)`
                }}
            />
        </div>
    );
};

export default NeonCursor;
