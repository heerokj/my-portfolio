import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmail({ email, title, message }) {
  const mailData = {
    from: process.env.EMAIL_FROM,
    subject: `[BLOG] ${title}`,
    to: process.env.EMAIL_USER,
    html: `
    <h1>${title}</h1>
    <div>${message}</div>
    </br>
    <p>보낸사람 : ${email}</p>
    </br>
    `,
  };

  return transporter.sendMail(mailData);
}
