import LandingPage from './home/page'
import AboutPage from './about/page';
import ProcedurePage from './procedures/surgeryMovingHighlight';
import TreatmentCard from '@/components/treatmentCard/treatmentCard';
import ProcedureTypes from './procedures/menu/procedureTypes';
import CosmeticSurgeryPage from './resources/pop_cosmeticsurgery/popup_allSurgeries';
import CosmeticSurgeryCard from '@/components/cosmeticSurgeryInfo/cosmeticSurgeryCard';
import BreastImplantInfo from '@/components/cosmeticSurgeryInfo/breastImplant/breastImplant';
import LandingPopup from '@/components/landing/page';
import ContactFire from '@/components/contactFire/contactFire';


export default function Home() {
    return (
 <>
        <LandingPopup/>
     <div style={{display: 'flex', alignItems: 'center', justifyItems: 'center'}}> 
   
     {/* <Slick/> */}
{/* <ContactFire/> */}
            <LandingPage />
       
            {/* <AboutPage/>
            <ProcedurePage/> */}
           

            {/* </div> */}
        </div>
        </>
    );
}
