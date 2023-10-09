import HeroSection from "./components/sections/HeroSection";
import MainInfoListSection from "./components/sections/home/MainInfoListSection";
import LocationSection from "./components/sections/home/LocationSection";
import ServicesSection from "./components/sections/home/ServicesSection";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <MainInfoListSection/>
      <ServicesSection/>
      <LocationSection/>
    </main>
  )
}
