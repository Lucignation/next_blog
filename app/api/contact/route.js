import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
require('dotenv').config();

export async function POST(request) {
  const { name, email, phone, message } = await request.json();
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp-relay.sendinblue.com',
    auth: {
      user: 'olumidegerald@gmail.com',
      pass: process.env.password,
    },
  });

  const mailData = {
    from: email,
    to: 'lucignation@gmail.com',
    subject: `Message from ${name}`,
    text: `${message}, phone number: ${phone}`,
    html: `<div>${message}</div><small>phone number: ${phone}</small>`,
  };

  transporter.sendMail({ ...mailData }, (err, info) => {
    if (err) {
      console.log('Error ', err);
    } else {
      console.log('Information ', info);
    }
  });
  return NextResponse.json({ message: 'message sent successfully' });
}
