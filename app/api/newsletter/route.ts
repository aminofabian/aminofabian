import { NextResponse } from 'next/server';

const MAILERLITE_API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNDE2OWMwODViNThmNmE5OTVjYmY3ZGY3ZDFiZTE3MjYxZTI0MmE5ZTVkYzEwZjY4YTRhM2ZmNmQ0NjVmZjUxOWI2ODZkODNlNDk2NTAxM2MiLCJpYXQiOjE3MzIwODQ5MzIuMjc4NjA0LCJuYmYiOjE3MzIwODQ5MzIuMjc4NjA4LCJleHAiOjQ4ODc3NTg1MzIuMjc0MTA0LCJzdWIiOiIxMjA5MDQwIiwic2NvcGVzIjpbXX0.vohVLJLQcFQvrcZjZZC7GarEJHx_MijzXDFas2NJmOoV2qiiU-VMPEgXrPR__pxdkncXNdULGeZGZSByVG1EBTAh_V6XLJuEkEm1KeKB1kaeK6mKDYdkEN1ou0SPrdiLobdHOUxwgpX_O-S0uAEqnOdm99VGNChjal9wwuv4I_-HUkghSkJgI_YxDS7HwwWm1MZWtjoaGxWUFv7ZZygGcknAuyV0beKplROp2CL4wTlMfO8uhE_h78paNpYH1_5lbv_Wxg-eBw-oUTVPVXJJlUJL7_vwOJj4QnxAEDHk770aME8JJnAGPZHVB5QuigyCdblrymHo8XhctWUbX1bKyA6e3A4g5RU4sCFUGH2gcFCMsJSDJ2kj_nMJW11LCEcWM2-o2j8uXVTLfy7OM_e0OoCGKItjZ4tB4lD9iVVTWmSwcDgRZDd6RiBYkVqWSpNBi_WKAngbBnOZ8Y3Q_qG9r3ZynqH8s7WhOFYSBjYSOFVQ9eqj7RwnOmTP4Ng6G391W04fCzwVYNwWLgVhIbh6GDP103WS-yiFW_d3hKFUxqSdbY6q-guL9ImYRLoL-8V_MeTgEoKvd9DmJtixAE4rhT3mbYGT6MORVyKjkAQ0weqjyOAoANdO1ZjzMyrldI4uDEkHK5lDjW-T6hTNZeMJz4EtawHHicDs8y_1FE-bpyQ';
const MAILERLITE_API_URL = 'https://connect.mailerlite.com/api';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Create a subscriber in MailerLite
    const response = await fetch(`${MAILERLITE_API_URL}/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        groups: [], // You can add group IDs if you want to add the subscriber to specific groups
        status: 'active'
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('MailerLite API error:', data);
      return NextResponse.json(
        { error: data.message || 'Failed to subscribe' },
        { status: response.status }
      );
    }

    return NextResponse.json(
      { message: 'Successfully subscribed to newsletter' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
