import LandingPage from './home/landingpage'
import AboutPage from './about/page';
import ProcedurePage from './procedures/surgeryMovingHighlight';
import TreatmentCard from '@/components/treatmentCard/treatmentCard';
import ProcedureTypes from './procedures/menu/procedureTypes';
import CosmeticSurgeryPage from './resources/pop_cosmeticsurgery/popup_allSurgeries';
import CosmeticSurgeryCard from '@/components/cosmeticSurgeryInfo/cosmeticSurgeryCard';
import BreastImplantInfo from '@/components/cosmeticSurgeryInfo/breastImplant/breastImplant';
import LandingPopup from '@/components/landing/page';
import ContactFire from '@/components/contactFire/contactFire';
import AnimInfoCard from '@/components/animInfoCard/animInfoCard';
import Packages from '@/components/packages/packages';
import PricingPage from './pricing/pricingPage';

export default function Home() {
  return (
    <>
       <LandingPopup/> 
      <div className="full-flex-centered">
    <LandingPage />



      </div>
    </>
  );
}
