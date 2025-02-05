import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Prosta walidacja
    if (!name || !email || !message) {
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
        subject: `New Contact Form Submission from ${name}`,
        text: message, // Treść wiadomości
        html: `<body style="font-family: 'Poppins', Arial, sans-serif">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <td class="body" style="padding: 40px; text-align: left; font-size: 14px; line-height: 1.6;">
            Cześć! <br>
            
            $welcomeMessage <br>
            Logując się akceptujesz 
                <a href="https://www.drivingtime.eu/terms-of-use">regulamin</a>
            oraz
                <a href="https://www.drivingtime.eu/privacy-policy">politykę prywatności</a>
            . <br><br>
                        
            Dane do logowania: <br>
            Login: $email <br>
            Hasło: $password <br><br>
                        
            Pozdrawiamy, <br>
            Zespół Driving Time

            
    <a href="https://apps.apple.com/pl/app/driving-time/id6741388363?itscg=30200&itsct=apps_box_badge&mttnsubad=6741388363" style="display: inline-block;">
    <img src="https://toolbox.marketingtools.apple.com/api/v2/badges/download-on-the-app-store/black/en-us?releaseDate=1738540800" alt="Download on the App Store" style="width: 246px; height: 82px; vertical-align: middle; object-fit: contain;" />
    </a>
    
        </td>
    </table>
</body>`,

        /*`<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong></p>
               <p>${message}</p>`, // Opcjonalnie: HTML wiadomości */
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
