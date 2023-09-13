import LandingPage from './home/landingpage'
import AboutPage from './about/aboutPage';
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
import Contacts from './contacts/contactsPage';
import FAQ from './faq/faqPage';
import ResourcePage from './resource/resourcePage';
import QuotePage from './quote/quotePage';
import PromoPage from './promo/promoPage';

export default function Home() {
  return (
    <>
      <LandingPopup/>
      <div className="full-flex-centered">
{/* <PromoPage/> */}
        <LandingPage />

      </div>
    </>
  );
}
