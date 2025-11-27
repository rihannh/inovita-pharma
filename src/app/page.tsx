import {Navbar} from '@/components/Navbar';
import {HeroSection} from '@/components/sections/HeroSection';
import {FeaturedProducts} from '@/components/sections/FeaturedProducts';
import {ServicesSection} from '@/components/sections/ServicesSection';
import {CompanyHistory} from '@/components/sections/CompanyHistory';
import {VisionMission} from '@/components/sections/VisionMission';
import {CSRSection} from '@/components/sections/CSRSection';
import {FactorySection} from '@/components/sections/FactorySection';
import {OrganizationStructureSection} from '@/components/sections/OrganizationStructure';
import {Footer} from '@/components/Footer';

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <ServicesSection />
      <CompanyHistory />
      <VisionMission />
      <OrganizationStructureSection />
      <CSRSection />
      <FactorySection />
      <Footer />
    </main>
  );
}
