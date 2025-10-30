"use client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect, useRef } from "react";
// import ContactMobile from "./ContactMobile";
export default function Contact1() {
  const [formData, setFormData] = useState({
    date: "",
    make: "",
    model: "",
    registration: "",
    mileage: "",
    firstName: "",
    email: "",
    phone: "",
    postcode: "",
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

    const { date, make, model, registration, firstName, email, phone, mileage, postcode } = formData;

    if (!firstName || !email || !date || !make || !model || !registration) {
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
          name: `${firstName}`,
          email: `${email}`,
          phone: `${phone}`,
          postcode: `${postcode}`,
          date: `${date}`,
          make: `${make}`,
          model: `${model}`,
          registration: `${registration}`,
          mileage: `${mileage}`,
          subject: `New Service Inquiry From: ${firstName}`,
          message: `${formData.message || ""}`,
          recaptchaToken,
          vehicleCondition: Object.entries(formData)
            .filter(([key, value]) => Array.isArray(value) && value.length > 0)
            .map(([key, value]) => `${key}: ${value.join(", ")}`)
            .join("<br>"),
        }),
      });

      if (res.ok) {
        toast.success(
          <div className="text-center">
            <img
              src="/assets/images/branding/logo.png"
              alt="Logo"
              style={{ width: "100px", margin: "0 auto" }}
            />
            <span className="block mt-2">✅ Message sent successfully!</span>
          </div>
        );
        setFormData({
          date: "",
          make: "",
          model: "",
          registration: "",
          mileage: "",
          firstName: "",
          email: "",
          phone: "",
          postcode: "",
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
      <div className="section-outer panel pt-9 lg:pt-10 pb-6 sm:pb-8 lg:pb-9">
        <div className="container max-w-xl">
          <div
            className="section-inner panel mt-2 sm:mt-4 lg:mt-0"
            data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
          >
            <div className="vstack items-center gap-2 lg:gap-4 mb-4 sm:mb-6 lg:mb-8 max-w-750px mx-auto text-center">
              <h1 className="h2 sm:h1 lg:display-6 xl:display-5 m-0">
                Let's get in touch.
              </h1>
              <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70">
                Feel free to reach out to us using the form below, and our
                dedicated team will respond promptly.
              </p>
            </div>

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

            {/* Contact Form */}
            <div className="panel rounded-3 overflow-hidden bg-secondary dark:bg-gray-800">
              <form onSubmit={handleSubmit}
                className="vstack gap-2 p-1 md:p-2 lg:p-6 xl:p-2"
              >
                <p className="fs-6 text-dark dark:text-white text-opacity-70 mb-2">
                  Have a question or feedback? Fill out the form below, and
                  we'll get back to you as soon as possible.
                </p>


                {/* Booking Date */}
                <div className="mb-4 p-3 border rounded bg-white dark:bg-gray-900 dark:text-white">
                  <h3 className="text-lg font-semibold mb-2">Booking Date</h3>
                  <p className="text-sm mb-3">Click on dates that suit you</p>
                  <input
                    className="form-control min-h-100px w-250px bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white text-uppercase"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]} // 🔒 disables past dates
                  />
                </div>

                {/* About Your Vehicle */}
                <div className="mb-4 p-3 border rounded bg-white dark:bg-gray-900 dark:text-white">
                  <h3 className="text-lg font-semibold mb-2">About Your Vehicle</h3>
                  <div className="row child-cols-12 sm:child-cols-6 g-2">
                    <div>

                      <input
                        className="form-control min-h-100px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white text-uppercase"
                        type="text"
                        name="make"
                        value={formData.make}
                        onChange={handleChange}
                        placeholder="Make*"
                        required
                      />

                    </div>
                    <div>
                      <input
                        className="form-control min-h-100px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white text-uppercase"
                        type="text"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        placeholder="Model*"
                        required
                      />
                    </div>
                    <div>
                      <input
                        className="form-control min-h-100px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white text-uppercase"
                        type="text"
                        name="registration"
                        value={formData.registration}
                        onChange={handleChange}
                        placeholder="Registration*"
                        required
                      />
                    </div>
                    <div>
                      <input
                        className="form-control min-h-100px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white text-uppercase"
                        type="text"
                        name="mileage"
                        value={formData.mileage}
                        onChange={handleChange}
                        placeholder="Mileage*"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Personal Details */}
                <div className="mb-4 p-3 border rounded bg-white dark:bg-gray-900 dark:text-white">
                  <h3 className="text-lg font-semibold mb-2">Personal Details</h3>
                  <div className="row child-cols-12 sm:child-cols-6 g-2">
                    <div>
                      <input
                        className="form-control min-h-100px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="FULL NAME*"
                        required
                      />
                    </div>
                    <div>
                      <input
                        className="form-control min-h-100px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="EMAIL*"
                        required
                      />
                    </div>
                    <div>
                      <input
                        className="form-control min-h-100px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="TELEPHONE*"
                        required
                      />
                    </div>
                    <div>
                      <input
                        className="form-control min-h-100px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                        type="text"
                        name="postcode"
                        value={formData.postcode}
                        onChange={handleChange}
                        placeholder="POSTCODE*"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Comments */}
                <div className="mb-4 p-3 border rounded bg-white dark:bg-gray-900 dark:text-white">
                  <h3 className="text-lg font-semibold mb-2">Comments</h3>

                  <textarea
                    className="form-control min-h-100px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Further Relevant Information/Comments:*"
                    required
                  />

                </div>
                {/* Vehicle Condition Section */}
                <div className="">
                <div className="p-3 dark:text-white">
                  <h3 className="text-lg font-semibold mb-2">Vehicle Condition</h3>
                  <p className="text-sm mb-3">
                    Please indicate any panel damage and tyre wear your current car has:
                  </p>
                </div>
                <div
                  className="mt-4 position-relative contact-bg"
                  style={{
                    backgroundImage: "url('/assets/images/contact/c2.png')",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    fontSize: "13px",
                  }}
                >
                  {[
                    [
                      { label: "Rear LH Wing", options: ["Scratches", "Dents"] },
                      { label: "Rear LH Tyre", options: ["1-3mm", "3-5mm", "5-9mm"] },
                      { label: "Rear LH Door", options: ["Scratches", "Dents"] },
                      { label: "Front LH Door", options: ["Scratches", "Dents"] },
                      { label: "Front LH Tyre", options: ["1-3mm", "3-5mm", "5-9mm"] },
                      { label: "Front LH Wing", options: ["Scratches", "Dents"] },
                    ], // first 6

                    [
                      { label: "Rear Bumper", options: ["Scratches", "Dents"] },
                      { label: "Boot Lid", options: ["Scratches", "Dents"] },
                      { label: "Roof", options: ["Scratches", "Dents"] },
                      { label: "Bonnet", options: ["Scratches", "Dents"] },
                      { label: "Front Bumper", options: ["Scratches", "Dents"] },
                    ], // next 5

                    [
                      { label: "Rear RH Wing", options: ["Scratches", "Dents"] },
                      { label: "Rear RH Tyre", options: ["1-3mm", "3-5mm", "5-9mm"] },
                      { label: "Rear RH Door", options: ["Scratches", "Dents"] },
                      { label: "Front RH Door", options: ["Scratches", "Dents"] },
                      { label: "Front RH Tyre", options: ["1-3mm", "3-5mm", "5-9mm"] },
                      { label: "Front RH Wing", options: ["Scratches", "Dents"] },
                    ], // last 6
                  ].map((group, gIdx) => (
                    <div
                      key={gIdx}
                      className="d-flex justify-center lg:justify-between sm:gap-3 gap-2 lg:gap-6 flex-wrap md:pt-2 my-2 lg:pt-6 sm:mb-2 lg:mb-6"
                    >
                      {group.map((item, idx) => (
                        <div
                          key={idx}
                          style={{ background: "rgb(255 255 255 / 68%)" }}
                          className="border p-1 rounded w-128px md:max-w-100px"
                        >
                          <p className="fw-bold text-sm">{item.label}</p>
                          <div className="d-flex flex-column flex-wrap mt-1">
                            {item.options.map((opt, i) => (
                              <label key={i} className="d-flex items-center gap-1 text-sm">
                                <input
                                  type="checkbox"
                                  name={`${item.label}`}
                                  value={opt}
                                  checked={formData[item.label]?.includes(opt) || false}
                                  onChange={(e) => {
                                    const { name, value, checked } = e.target;
                                    setFormData((prev) => {
                                      const current = prev[name] || [];
                                      return {
                                        ...prev,
                                        [name]: checked
                                          ? [...current, value]
                                          : current.filter((v) => v !== value),
                                      };
                                    });
                                  }}
                                />
                                {opt}
                              </label>
                            ))}

                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                </div>

                {/* reCAPTCHA */}
                <div className="mb-2 h-40px">
                  <div ref={recaptchaRef} />
                </div>

                {/* Submit */}
                <button className="btn btn-primary btn-md text-white mt-2" type="submit" disabled={loading}>
                  {loading ? "Sending please wait..." : "Send message"}
                </button>

                <p className="text-center">
                  Or drop us a message via{" "}
                  <a className="uc-link" href="mailto:hello@lexend.co">
                    email
                  </a>
                  .
                </p>
              </form>
            </div>
            {/* End Form */}
          </div>
        </div>
      </div>
    </div>
  );
}