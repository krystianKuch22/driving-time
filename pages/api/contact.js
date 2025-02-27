import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { phone, email, message } = req.body;

    // Prosta walidacja
    if (!phone || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Konfiguracja transportera Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // Możesz użyć innej usługi, np. 'outlook', 'yahoo'
      auth: {
        user: process.env.EMAIL_USER, // Twój e-mail
        pass: process.env.EMAIL_PASS, // Hasło aplikacji lub hasło do SMTP
      },
    });

    try {
      // Wysyłanie wiadomości
      await transporter.sendMail({
        from: email, // Adres nadawcy (email od użytkownika)
        to: process.env.EMAIL_USER, // Twój adres e-mail (odbiorca)
        subject: `New Contact Form Submission from ${phone}`,
        text: message, // Treść wiadomości
        html: `<p><strong>Phone:</strong> ${phone}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong></p>
               <p>${message}</p>`, // Opcjonalnie: HTML wiadomości
      });

      res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to send message." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
