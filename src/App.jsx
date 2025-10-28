import logo from "./assets/RocketLogo.svg";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="bg-[#3567a5] font-sans w-screen h-screen flex items-center justify-center">
      <div className="text-center items-center flex flex-col px-6">
        <img src={logo} alt="Rocket Core Digital Logo" className="w-56 mb-8" />
        <h1 className="text-xl font-semibold text-[#fbfbfb] mb-6">
          <div className="flex flex-col gap-1">
            <span>We’re working on something great!</span>
            <span>Leave your email and we’ll get in touch soon 🚀</span>
          </div>
        </h1>

        <ContactForm />

        <p className="text-white/80 mt-6 text-sm">
          Or contact us directly at{" "}
          <a
            href="mailto:contact@rocketcoredigital.com"
            className="underline text-white hover:text-white/80"
          >
            contact@rocketcoredigital.com
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
