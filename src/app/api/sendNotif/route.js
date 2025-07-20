import nodemailer from 'nodemailer';

export async function POST(request) {
  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: "muhammadyustanzah@gmail.com",
      to: process.env.SMTP_EMAIL,
      subject: `From Notif User Akses`,
      text: "Ada user yang melihat portofolio kamu",
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