import { useState } from "react";

function ContactForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    try {
      // Mismo endpoint de Getform que ya tenías
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

  // Estilo reutilizable para los inputs
  const inputStyle =
    "w-full px-4 py-3 rounded-lg border border-white/40 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-velez-gold/80";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
      {/* Campo de Nombre */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
          Nombre
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Tu nombre completo"
          className={inputStyle}
        />
      </div>

      {/* Campo de Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="tu@email.com"
          className={inputStyle}
        />
      </div>

      {/* Campo de Mensaje */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-white/90 mb-2">
          ¿En qué podemos ayudarte?
        </label>
        <textarea
          name="message"
          id="message"
          rows="4"
          required
          placeholder="Cuéntanos sobre tu proyecto..."
          className={inputStyle}
        />
      </div>

      {/* Botón de Envío (Ahora dorado) */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full mt-2 px-6 py-3 rounded-full bg-velez-gold text-velez-blue-700 font-bold hover:bg-yellow-400 transition-all shadow-lg transform hover:scale-105 disabled:opacity-70 cursor-pointer"
      >
        {status === "loading" ? "Enviando..." : "Enviar Mensaje 🚀"}
      </button>

      {/* Mensajes de Estado */}
      <div className="h-5 mt-2">
        {status === "success" && (
          <p className="text-green-300 text-center">¡Gracias! Estaremos en contacto.</p>
        )}
        {status === "error" && (
          <p className="text-red-300 text-center">Oops! Algo salió mal.</p>
        )}
      </div>
    </form>
  );
}

export default ContactForm;