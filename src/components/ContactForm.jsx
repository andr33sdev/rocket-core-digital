import { useState } from "react";
import logo from "../assets/RocketLogo.svg";

function ContactForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://getform.io/f/arogqxyb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md"
      >
        <input
          type="email"
          name="email"
          required
          placeholder="Your email address"
          className="w-full sm:flex-1 px-4 py-2 rounded-2xl border border-white/40 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-2 rounded-2xl bg-white text-[#3567a5] font-semibold hover:bg-[#fbfbfb] transition-all disabled:opacity-70 cursor-pointer"
        >
          {status === "loading" ? "Sending..." : "Notify me"}
        </button>

        {status === "success" && (
          <p className="text-green-200 mt-3">Thanks! We’ll be in touch soon</p>
        )}
        {status === "error" && (
          <p className="text-red-200 mt-3">Oops! Something went wrong</p>
        )}
      </form>
    </div>
  );
}

export default ContactForm;