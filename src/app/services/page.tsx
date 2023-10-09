import HeroSection from "../components/sections/HeroSection";
import ServicesCards from "../components/sections/services/ServicesCards";
import ServicesDataTables from "../components/sections/services/ServicesDataTables";
import ServicesList from "../components/sections/services/ServicesList";
import ServicesRequest from "../components/sections/services/ServiceRequest";

export default function ServicesPage() {
  return (
    <main>
      <HeroSection />
      <ServicesCards/>
      <ServicesDataTables/>
      <ServicesList/>
      <ServicesRequest/>
    </main>
  );
}
