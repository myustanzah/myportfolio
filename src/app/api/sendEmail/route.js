
import nodemailer from "nodemailer";
import { Interested } from "@/helper/enums"; // Gunakan alias jika sudah disetting di tsconfig.json

export async function POST(request) {
  try {
    const body = await request.json();
    
    const { fName, lName, email, interested, msg } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.SMTP_EMAIL,
      subject: `from ${email} ${fName + " " + lName + " "} ${Interested[interested]}`,
      text: msg,
    });

    return new Response(JSON.stringify({ success: true, message: "Email terkirim!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500, headers: { "Content-Type": "application/json" }, }
    );
  }
}
