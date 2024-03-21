import HeroSection from "./HeroSection";
import NavBar from "./NavBar";

const index = () => {
  return (
    <>
      <header className="font-nunito p-4 md:px-8 md:py-5 xl:px-12 relative w-full h-dvh overflow-hidden  before:bg-custom-purple_100 before:content-[''] before:absolute before:top-0 before:left-0 before:w-screen before:h-dvh before:rounded-b-[100%] before:scale-x-150">
        <div className="relative z-10">
        <NavBar />
        <HeroSection />
        </div>
      </header>
    </>
  );
};

export default index;
