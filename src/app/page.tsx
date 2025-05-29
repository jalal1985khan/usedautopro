import Header from '@/app/components/Header';
import HeroSection from '@/app/components/HeroSection';
import FindPartForm from '@/app/components/FindPartForm';
import SpecialOffers from '@/app/components/SpecialOffers';
import WelcomeSection from '@/app/components/WelcomeSection';
import WhyChooseUs from '@/app/components/WhyChooseUs';
import CarMakeGrid from '@/app/components/CarMakeGrid';
import Testimonials from '@/app/components/Testimonials';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <div className="relative">
        <HeroSection />
        <div className="absolute top-0 right-0 w-full max-w-md p-4 hidden lg:block" style={{zIndex: 20}}>
          <FindPartForm />
        </div>
      </div>
      <div className="block lg:hidden px-4 mt-[-60px] relative z-20">
        <FindPartForm />
      </div>
      <SpecialOffers />
      <WelcomeSection />
      <WhyChooseUs />
      <CarMakeGrid />
      <Testimonials />
      <Footer />
    </>
  );
}