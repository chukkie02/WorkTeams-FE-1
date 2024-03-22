import { Button } from "../ui/button";
import HeroImg from '../../assets/HeroImg.png';

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 h-full md:grid-cols-2 md:mt-10 place-items-center">
      <img src={HeroImg} className="md:order-last md:place-self-stretch object-cover" alt="Hero Image" />
      <section className="text-center md:text-left ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[50px] xl:leading-tight xl:place-self-stretch font-extrabold mb-2 text-custom-purple_400">Turning <span className="text-custom-orange_400">‘me’</span> goals into <span className="text-custom-orange_400">‘we’</span> achievements</h1>
        <p className="text-sm md:text-xl lg:text-2xl xl:w-[500px] text-custom-gray_300 font-normal leading-normal">
          Boost productivity and peace of mind with WorkTeams – the ultimate
          task manager and to-do list app.
        </p>
        <Button className="mt-4 py-5 xl:w-[320px] xl:h-[50px]">Join for free</Button>
      </section>
    </div>
  );
};

export default HeroSection;
