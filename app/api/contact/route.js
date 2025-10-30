import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, date, make, model, registration, mileage, phone, postcode, subject, message, recaptchaToken } = body;

    if (!name || !email || !message || !recaptchaToken) {
      return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
    }

    // ✅ reCAPTCHA verification
    const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });

    const recaptchaData = await recaptchaRes.json();
    if (!recaptchaData.success) {
      return new Response(JSON.stringify({ error: "reCAPTCHA failed" }), { status: 400 });
    }

    // ✅ Setup transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Send main email to YOU
    await transporter.sendMail({
      from: `"${name} via SRM Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: subject || "New Request",
      html: `
      <div style="text-transform: uppercase; font-family:Arial,sans-serif;color:#333;padding:20px;background:#cdcdcd;border:2px solid #8acb37;max-width:500px;margin:0 auto;border-radius:8px;">
    <div style="text-align:center; margin-bottom:20px;">
      <img src="https://smart-route-motors.vercel.app/assets/images/branding/logo.png" alt="SRM Vehicle Repair Centre" width="200" style="margin-bottom:10px;" />
    </div>
        <h2>Customer Submitted Vehicle Details</h2>
        <hr>
        <p><strong>SUBJECT:</strong>  ${subject || "N/A"}</p>
        <hr>
        <p><strong>Name:</strong>  ${name}</p>
        <hr>
        <p><strong>Email:</strong>  ${email}</p>
        <hr>
        <p><strong>Date:</strong>  ${date}</p>
        <hr>
        <p><strong>Make:</strong>  ${make}</p>
        <hr>
        <p><strong>Model:</strong>  ${model}</p>
        <hr>
        <p><strong>Registration:</strong>  ${registration}</p>
        <hr>
        <p><strong>Mileage:</strong>  ${mileage}</p>
        <hr>
        <p><strong>Phone:</strong>  ${phone}</p>
        <hr>
        <p><strong>Postcode:</strong>  ${postcode}</p>    
        <hr>    
        <p><strong>Message:</strong>  <span style="text-transform: math-auto;">${message.replace(/\n/g, "")}</span></p>
        <hr>
        <p style="text-align: center;text-transform: math-auto">© SRM Vehicle Repair Centre | <a href="https://smart-route-motors.vercel.app/" style="color:#5d5b5b;text-decoration:none;">www.smart-route-motors.vercel.app</a><br>
  Please contact us at <a href="mailto:srm.vehiclerepaircentre@gmail.com" style="color:#5d5b5b;text-decoration:none;">srm.vehiclerepaircentre@gmail.com</a> for any inquiries.</p>
        </div>
      `,
    });

    // ✅ Generate random ticket number
    const ticketNumber = Math.floor(100000 + Math.random() * 900000);

    // ✅ Auto-reply HTML
    const autoReplyHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 2px solid #8ac13e; background: #efefff;">
        <div style="text-align: center; margin-bottom: 20px;">
        <a href="https://smart-route-motors.vercel.app" target="_blank" style="display: inline-block;">
          <img src="https://smart-route-motors.vercel.app/assets/images/branding/logo.png" alt="srm vehicle repair centre" width="250" />
          </a>
        </div>
        <h2 style="color: #333;"><span" style="color: #232059;">Hi</span> ${name},</h2>
        <p style="color: #555;">
          Thanks for reaching out to <strong>SRM Vehicle Repair Centre</strong>! We've received your message and our team will get back to you within <strong>12 business hours</strong>.
        </p>
        <p style="color: #555;">
          Your support ticket number is: <strong>#${ticketNumber}</strong>
        </p>
        <p style="color: #555;">While you wait, feel free to check out our <strong><a href="https://smart-route-motors.vercel.app/page-faqs" style="color: #232059;">FAQs</a></strong> or <strong><a href="https://smart-route-motors.vercel.app/page-contact" style="color: #232059;">Support Page</a></strong>.</p>
        <hr style="margin: 30px 0;" />
        <p style="color: #888; font-size: 12px; text-align: center;">
          This is an automated message. If you did not submit this form, please disregard this email.
        </p>
        <p style="color: #888; font-size: 12px; text-align: center;">
          srm.vehiclerepaircentre@gmail.com | <a href="https://smart-route-motors.vercel.app" style="color: #888;">© SRM Vehicle Repair Centre | www.smart-route-motors.vercel.app</a>
        </p>
      </div>
    `;

    // ✅ Send auto-reply to USER
    await transporter.sendMail({
      from: `"SRM Vehicle Repair Centre Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `✅ We've received your message – Ticket #${ticketNumber}`,
      html: autoReplyHTML,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("🔥 Contact API error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}