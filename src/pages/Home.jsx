import ContactForm from "../components/ContactForm";

function Home() {
  return (
    <div className="bg-[#3567a5] font-sans w-screen h-screen flex flex-col items-center pt-30">
      <div className="text-center items-center flex flex-col px-6 mt-10">
        <h1 className="text-3xl font-semibold text-[#fbfbfb] mb-6">
          Welcome to Rocket Core Digital 🚀
        </h1>
        <p className="text-white/80">
          We’re working on something great! Stay tuned for updates.
        </p>
      </div>
    </div>
  );
}

export default Home;