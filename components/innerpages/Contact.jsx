"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Contact1() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef(null);
  const recaptchaId = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.grecaptcha && recaptchaRef.current && !recaptchaId.current) {
        recaptchaId.current = window.grecaptcha.render(recaptchaRef.current, {
          sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        });
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { firstName, lastName, email, phone, company, message } = formData;

    if (!firstName || !lastName || !email || !message) {
      toast.error("❌ Please fill in all required fields.");
      setLoading(false);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("❌ Please enter a valid email address.");
      setLoading(false);
      return;
    }

    const recaptchaToken = grecaptcha.getResponse(recaptchaId.current);
    if (!recaptchaToken) {
      toast.error("❌ Please complete the reCAPTCHA.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${firstName} ${lastName}`,
          email,
          subject: `Request from ${firstName}`,
          message: `Phone: ${phone || "N/A"}\nCompany: ${company || "N/A"}\n\n${message}`,
          recaptchaToken,
        }),
      });

      if (res.ok) {
        toast.success(
          <div className="text-center">
            <img
              src="/assets/images/common/logo-dark.svg"
              alt="Logo"
              style={{ width: "100px", margin: "0 auto" }}
            />
            <span className="block mt-2">✅ Message sent successfully!</span>
          </div>
        );
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
        grecaptcha.reset(recaptchaId.current);
      } else {
        const errorData = await res.json();
        toast.error(`❌ ${errorData.error || "Something went wrong."}`);
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="hero_header" className="hero-header section panel overflow-hidden">
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="toast-center"
        toastClassName="bg-dark text-white rounded p-3 backdrop-blur-sm bg-opacity-80"
      />

      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div className="section-inner panel mt-2 sm:mt-4 lg:mt-0">
            <div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">Let's get in touch.</h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                Feel free to reach out to us using the options below, and our dedicated team will respond to your inquiries promptly.
              </p>
            </div>

            <div className="panel rounded-3 overflow-hidden bg-secondary dark:bg-gray-800">
              <div className="panel row child-cols-12 lg:child-cols-6 g-0">

                <div className="order-1 lg:order-0">
                  <div className="panel overflow-hidden rounded-3 h-100 min-h-350px">
                    <figure className="panel h-100 m-0 rounded">
                      <canvas className="h-100 w-100" />
                      <Image
                        className="media-cover image"
                        alt="Hero image"
                        src="/assets/images/template/hero-contact.jpg"
                        width={1500}
                        height={1000}
                      />
                    </figure>
                    <div className="position-cover text-white vstack justify-end p-4 lg:p-4 xl:p-4">
                      <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-50" />
                      <div className="panel z-1">
                        <div className="vstack gap-3">
                          <p className="fs-7 xl:fs-6 fw-medium">
                            “GTL Web Solutions delivered a seamless eCommerce development experience. Their team helped us build a fast, scalable online store that’s easy to manage and optimized for conversions.”
                          </p>
                          <div className="vstack gap-0">
                            <p className="fs-6 lg:fs-5 fw-medium">David Larry</p>
                            <span className="fs-7 opacity-80">Founder &amp; CEO</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="order-0 lg:order-1">
                  <form onSubmit={handleSubmit} className="vstack gap-2 p-3 sm:p-6 xl:p-8">
                    <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-2">
                      Have a question or feedback? Fill out the form below, and we'll get back to you as soon as possible.
                    </p>

                    {/* First name + Last name */}
                    <div className="row child-cols-12 sm:child-cols-6 g-2">
                      <div>
                        <input
                          className="form-control h-40px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First name"
                          required
                        />
                      </div>
                      <div>
                        <input
                          className="form-control h-40px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          placeholder="Last name"
                          required
                        />
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="row child-cols-12 sm:child-cols-6 g-2">
                      <div>
                        <input
                          className="form-control h-40px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your email"
                          required
                        />
                      </div>
                      <div>
                        <input
                          className="form-control h-40px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone number (optional)"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <input
                      className="form-control h-40px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company name"
                    />

                    {/* Services Dropdown */}
                     
                      <select
                        className="form-control w-full dark:bg-gray-700 text-gray-400 dark:text-white dark:border-white dark:border-opacity-0 text-opacity-60"
                        name="service"
                        value={formData.service || ""}
                        onChange={handleChange}
                        required
                      >
                        <option value=""disabled selected>Select the service you’re interested in</option>
                      
                        <optgroup label="Shopify">
                          <option value="Shopify Plus">Shopify Plus</option>
                          <option value="Shopify Development">Shopify Development</option>
                          <option value="Shopify App Development">Shopify App Development</option>
                          <option value="Custom Storefront">Custom Storefront</option>
                        </optgroup>

                        <optgroup label="E-Commerce Platforms">
                          <option value="WooCommerce">WooCommerce</option>
                          <option value="Squarespace">Squarespace</option>
                          <option value="Webflow">Webflow</option>
                          <option value="BigCommerce">BigCommerce</option>
                          <option value="Magento">Magento</option>
                        </optgroup>

                        <optgroup label="Web Development">
                          <option value="WordPress">WordPress</option>
                          <option value="Next.js">Next.js</option>
                          <option value="React">React</option>
                          <option value="Custom Applications">Custom Applications</option>
                        </optgroup>

                        <optgroup label="Mobile & Apps">
                          <option value="Mobile App Development">Mobile App Development</option>
                          <option value="PWA Development">Progressive Web Apps (PWA)</option>
                          <option value="Headless Commerce">Headless Commerce</option>
                        </optgroup>

                        <optgroup label="Consulting & Support">
                          <option value="Consultation">Consultation</option>
                          <option value="Support & Maintenance">Support & Maintenance</option>
                          <option value="Migration">Platform Migration</option>
                          <option value="Performance Optimization">Performance Optimization</option>
                          <option value="SEO & Marketing">SEO & Marketing</option>
                        </optgroup>
                      </select>
                      <div className="absolute  h-20px w-20px right-3 top-1/2 -translate-y-1/2 pointer-events-none" style={{ position: 'absolute', right: '6px', top: "20px", zIndex: 1 }}>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg></div>
                     

                    {/* Message */}
                    <textarea
                      className="form-control min-h-100px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      required
                    />

                    {/* reCAPTCHA */}
                    <div className="mb-2 h-40px">
                      <div ref={recaptchaRef} />
                    </div>

                    <button className="btn btn-primary btn-md text-white mt-2" type="submit" disabled={loading}>
                      {loading ? "Sending please wait..." : "Send message"}
                    </button>

                    {/* <p className="text-center mt-2">
                      Or drop us a message via{" "}
                      <a className="uc-link" href="mailto:info@gtlofficial.com">
                        email
                      </a>
                      .
                    </p> */}
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
