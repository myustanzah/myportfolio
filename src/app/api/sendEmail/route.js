
// import nodemailer from "nodemailer";
// import { Interested } from "../../../../utils/nums";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   let { fName, lName, email, interested, msg } = req.body;

//   // Buat transporter SMTP
//   const transporter = nodemailer.createTransport({
//     service: "gmail", // atau 'hotmail', 'yahoo', dll
//     auth: {
//       user: process.env.SMTP_EMAIL,     // dari .env
//       pass: process.env.SMTP_PASSWORD,  // dari .env
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: email, // pengirim
//       to: process.env.SMTP_EMAIL, // tujuan
//       subject: `from ${email} ${fName + " " + lName + " "} ${Interested[interested]}`,
//       text: msg,
//     });

//     res.status(200).json({ success: true, message: "Email terkirim!" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// }

import nodemailer from "nodemailer";
import { Interested } from "../../../../utils/nums"; // Gunakan alias jika sudah disetting di tsconfig.json

export async function POST(request) {
  try {
    const body = await request.json();
    console.log(body)
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
