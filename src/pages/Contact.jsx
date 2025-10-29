import ContactForm from "../components/ContactForm";
import logo from "../assets/RocketLogo.svg";

function Contact() {
    return (
        <div className="bg-[#3567a5] font-sans w-screen h-screen flex flex-col items-center pt-30">
            <div className="text-center items-center flex flex-col px-6 mt-10">
                <img src={logo} alt="Rocket Core Digital Logo" className="w-56 mb-8" />
                <h1 className="text-3xl font-semibold text-[#fbfbfb] mb-6">
                    Get in Touch 🚀
                </h1>
                <p className="text-white/80 mb-6">
                    Leave your email and we’ll get in touch soon.
                </p>
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

export default Contact;