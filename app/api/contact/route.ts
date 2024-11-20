import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'zelisline@gmail.com',
    pass: 'tilz ssmi nhbc atir'
  }
});

// SVG logo as a base64 encoded image
const logoSvg = `
<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#047857;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#10B981;stop-opacity:1" />
    </linearGradient>
    <filter id="shadow">
      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.2"/>
    </filter>
  </defs>
  <circle cx="30" cy="30" r="28" fill="url(#grad)" filter="url(#shadow)" />
  <text x="30" y="38" font-family="Georgia" font-size="28" font-weight="bold" fill="white" text-anchor="middle" filter="url(#shadow)">AF</text>
</svg>`;

const logoBase64 = Buffer.from(logoSvg).toString('base64');

export async function POST(req: Request) {
  try {
    const { user_name, user_email, message } = await req.json();

    // Common footer template
    const footerTemplate = `
      <div style="margin-top: 40px; padding-top: 30px; border-top: 2px solid #047857;">
        <table style="width: 100%; color: #1a202c; font-size: 15px; font-family: Georgia, serif;">
          <tr>
            <td style="padding: 15px; vertical-align: top; width: 80px;">
              <img src="data:image/svg+xml;base64,${logoBase64}" alt="AF Logo" style="width: 60px; height: 60px;"/>
            </td>
            <td style="padding: 15px;">
              <div style="font-family: Georgia, serif; font-size: 20px; color: #047857; margin-bottom: 5px;">Amino Fabian</div>
              <div style="font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 14px; color: #4a5568; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 8px;">Full Stack Developer</div>
              <div style="margin-top: 8px; line-height: 1.6;">
                <a href="mailto:aminofabian@gmail.com" style="color: #047857; text-decoration: none; font-family: Georgia, serif;">aminofabian@gmail.com</a>
              </div>
              <div style="margin-top: 4px;">
                <a href="tel:+254714282874" style="color: #047857; text-decoration: none; font-family: Georgia, serif;">+254 714 282 874</a>
              </div>
              <div style="color: #4a5568; margin-top: 4px; font-style: italic;">P.O. Box 35393-00100, Nairobi, Kenya</div>
            </td>
          </tr>
        </table>
      </div>
    `;

    // Send notification email to admin
    const adminMailOptions = {
      from: 'zelisline@gmail.com',
      to: 'zelisline@gmail.com',
      subject: `New Contact Form Message from ${user_name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 650px; margin: 0 auto; padding: 30px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="data:image/svg+xml;base64,${logoBase64}" alt="AF Logo" style="width: 80px; height: 80px;"/>
          </div>
          
          <h2 style="color: #047857; margin-bottom: 30px; text-align: center; font-family: Georgia, serif; font-size: 28px; font-weight: normal; border-bottom: 2px solid #047857; padding-bottom: 15px;">
            New Contact Form Message
          </h2>
          
          <div style="background-color: #f8fafc; border-radius: 10px; padding: 25px; margin-bottom: 25px; box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);">
            <div style="margin-bottom: 20px;">
              <div style="color: #4a5568; font-weight: bold; margin-bottom: 8px; font-size: 16px; letter-spacing: 0.5px;">From:</div>
              <div style="color: #1a202c; padding: 12px; background-color: white; border-radius: 6px; border: 1px solid #e2e8f0; font-size: 16px;">
                ${user_name}
              </div>
            </div>
            
            <div style="margin-bottom: 20px;">
              <div style="color: #4a5568; font-weight: bold; margin-bottom: 8px; font-size: 16px; letter-spacing: 0.5px;">Email:</div>
              <div style="color: #1a202c; padding: 12px; background-color: white; border-radius: 6px; border: 1px solid #e2e8f0; font-size: 16px;">
                ${user_email}
              </div>
            </div>
            
            <div>
              <div style="color: #4a5568; font-weight: bold; margin-bottom: 8px; font-size: 16px; letter-spacing: 0.5px;">Message:</div>
              <div style="color: #1a202c; padding: 12px; background-color: white; border-radius: 6px; border: 1px solid #e2e8f0; font-size: 16px; line-height: 1.8; white-space: pre-wrap;">
                ${message}
              </div>
            </div>
          </div>
          
          ${footerTemplate}
        </div>
      `
    };

    // Send auto-response email to user
    const userMailOptions = {
      from: 'zelisline@gmail.com',
      to: user_email,
      subject: 'Thank you for contacting Amino Fabian',
      html: `
        <div style="font-family: Georgia, serif; max-width: 650px; margin: 0 auto; padding: 30px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="data:image/svg+xml;base64,${logoBase64}" alt="AF Logo" style="width: 80px; height: 80px;"/>
          </div>

          <h2 style="color: #047857; margin-bottom: 30px; text-align: center; font-family: Georgia, serif; font-size: 28px; font-weight: normal; border-bottom: 2px solid #047857; padding-bottom: 15px;">
            Message Received
          </h2>
          
          <div style="color: #1a202c; line-height: 1.8; font-size: 16px;">
            <p style="margin-bottom: 20px;">Dear ${user_name},</p>
            
            <p style="margin-bottom: 20px;">Thank you for reaching out! I have received your message and will get back to you as soon as possible.</p>
            
            <p style="margin-bottom: 20px;">For your reference, here's a copy of your message:</p>
          </div>

          <div style="margin: 25px 0; padding: 20px; background-color: #f8fafc; border-radius: 10px; border: 1px solid #e2e8f0; box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);">
            <div style="white-space: pre-wrap; color: #4a5568; line-height: 1.8; font-size: 16px;">${message}</div>
          </div>
          
          <div style="color: #1a202c; line-height: 1.8; font-size: 16px; margin-bottom: 25px;">
            <p style="margin-bottom: 15px;">If you need immediate assistance, feel free to reach out through:</p>
            <ul style="color: #4a5568; padding-left: 20px;">
              <li style="margin-bottom: 10px;">Phone: <a href="tel:+254714282874" style="color: #047857; text-decoration: none;">+254 714 282 874</a></li>
              <li style="margin-bottom: 10px;">Email: <a href="mailto:aminofabian@gmail.com" style="color: #047857; text-decoration: none;">aminofabian@gmail.com</a></li>
            </ul>
          </div>

          ${footerTemplate}
          
          <div style="margin-top: 25px; text-align: center; color: #718096; font-size: 14px; font-style: italic;">
            <p>This is an automated response. Please don't reply to this email.</p>
          </div>
        </div>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
