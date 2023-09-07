/** @format */

import React, { useState } from "react";
import Packages from "@/components/packages/packages";
import styles from "./pricingPage.module.css";

function LeftInfo({ selectedCard }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className={styles.leftInfo}>
      <h3>
        Elegance at Ease with <br />
        Premier Package Bundles
      </h3>
      <br />
      <p>
        Thailand, an iconic destination of lush landscapes and cultural
        grandeur, has brilliantly woven the world of luxury travel with
        state-of-the-art surgical experiences. Picture this: embarking on a
        transformative journey with a single surgery, complemented by a lavish
        stay in Thailand&apos;s finest accommodations, chauffeured travels, and
        a rejuvenating recovery vacation — all meticulously tailored to ensure
        discretion, comfort, and elegance. <br />
        <br />
        For those seeking a more comprehensive transformation, the allure of the
        dual-surgery package beckons. It&apos;s not just about two aesthetic
        enhancements, but about maximizing the recuperative experience in
        Thailand&apos;s paradisiacal settings, and all at a price point that
        delivers unmatched value. And for the true connoisseurs of change, a
        trifecta of surgical procedures awaits. <br />
        <br />
        This trio-package promises not just a threefold refinement but an
        unparalleled synergy of transformations, harmoniously intertwined with a
        lavish sojourn in the Land of Smiles. It&apos;s a holistic immersion
        where top-tier medical precision marries unparalleled luxury, making
        Thailand not just a travel destination, but a beacon for those seeking a
        glamorous metamorphosis at an affordable tariff.
      </p>
      {selectedCard && (
     <button className={styles.button} onClick={() => setShowModal(true)}>
       Click Me
     </button>
)}

      {showModal && (
        <div className={styles.modal}>
          <button
            className={styles.closeButton}
            onClick={() => setShowModal(false)}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}

function LeftInfo1({ selectedCard }) {
    const [showModal, setShowModal] = React.useState(false);
    return (
    <div className={styles.leftInfo}>
      <h3>
        Thailand&apos;s Elite Escape:
        <br /> Luxury, Lodging & Single Surgery Splendor
      </h3>
      <br />
      <p>
        Thailand, a realm where golden temples shimmer under tropical sunsets
        and azure waters kiss pristine sands, seamlessly marries the allure of
        its natural beauty with the finesse of world-class surgical mastery.
        Imagine this: a voyage of self-renewal commencing with a singular
        transformative procedure, further elevated by stays in the most opulent
        resorts nestled amidst nature&apos;s serenades. Every moment is
        accentuated with chauffeured journeys through scenic landscapes,
        ensuring every ride feels like a passage through a dream. And the
        pinnacle? A luxurious recovery experience, where every whim is catered
        to, ensuring that rejuvenation is not just physical but profoundly
        spiritual.
        <br /><br/>
        For the discerning individual, this is not merely a surgical procedure.
        It&apos;s an odyssey of elegance and refinement, unfolding in the heart
        of Thailand, where ancient traditions harmonize with modern luxuries.
        It&apos;s a promise of a new you, emerging from a cocoon of unparalleled
        comfort and splendor, making Thailand not just an escape but a
        metamorphic sanctuary for those seeking the sublime fusion of beauty,
        luxury, and transformation.
      </p>
      {selectedCard && (
     <button className={styles.button} onClick={() => setShowModal(true)}>
       SURGERY PACKAGE 1
     </button>
)}

      {showModal && (
        <div className={styles.modal}>
          <button
            className={styles.closeButton}
            onClick={() => setShowModal(false)}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}

function LeftInfo2({ selectedCard }) {
    const [showModal, setShowModal] = React.useState(false);
    return (
    <div className={styles.leftInfo}>
      <h3>Double Delight: Thailand&apos;s Twin Surgery & Opulent Odyssey</h3>
      <br />
      <p>
        Thailand, the majestic tapestry of timeless traditions and contemporary
        charm, has gracefully sculpted a niche where opulent journeys meet
        surgical artistry. Envision this: embarking on a dual-surgery odyssey,
        each procedure fine-tuned to mirror your aspirations, set amidst the
        backdrop of Thailand&apos;s enchanting vistas. The journey is punctuated
        with stays in palatial suites, where the grandeur of Thai architecture
        meets modern-day luxury. <br/><br/>Every transition is smoothened with chauffeured
        drives, weaving through landscapes that tell tales of yesteryears. And
        as you heal, it&apos;s not just in the cocoon of world-class medical
        facilities, but also in the embrace of nature&apos;s lullabies and the
        pampering of bespoke wellness experiences. For the visionary in you,
        this double procedure package is not just about aesthetic enhancement.
        <br/><br/>
        It&apos;s a symphony of experiences, meticulously orchestrated to sing
        tales of transformation and indulgence. With Thailand as the stage,
        where history, luxury, and innovation dance in harmony, this
        dual-surgery sojourn promises not only a renewed reflection in the
        mirror but a rekindled spirit, basking in the warmth of Thai hospitality
        and the promise of a new dawn.
      </p>
      {selectedCard && (
     <button className={styles.button} onClick={() => setShowModal(true)}>
        SURGERY PACKAGE 2
     </button>
)}

      {showModal && (
        <div className={styles.modal}>
          <button
            className={styles.closeButton}
            onClick={() => setShowModal(false)}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}


function LeftInfo3({ selectedCard }) {
    const [showModal, setShowModal] = React.useState(false);
    return (
    <div className={styles.leftInfo}>
      <h3>
        Trilogy of Transformation: <br />
        Thailand&apos;s Ultimate Threefold Surgical Sojourn
      </h3>
      <br />
      <p>
        Thailand, where the whispers of ancient temples blend seamlessly with
        the rhythm of modern luxury, introduces an epic odyssey of
        transformation with its three-surgery ensemble. Picture a journey where
        each surgical procedure is a chapter, telling tales of meticulous
        artistry and precision, perfectly synchronized to your vision of beauty.
        <br/><br/>
        This trinity of procedures, set against the breathtaking canvas of
        Thailand&apos;s ethereal beauty, is elevated with stays in opulent
        sanctuaries, echoing tales of regal Thai legacy and contemporary
        elegance. Journeys between these paradisiacal retreats are not mere
        transitions, but chauffeured experiences, unraveling the poetic
        landscapes of Thailand, from its bustling urban heartbeats to its serene
        coastal whispers. <br/><br/>The recuperation is a luxurious reverie; a blend of
        world-class post-operative care and holistic wellness rituals, ensconced
        in nature&apos;s embrace and Thailand&apos;s signature warmth. For the
        discerning, the three-surgery package isn&apos;t merely about aesthetic
        metamorphosis. It&apos;s a crescendo of experiences, a magnum opus of
        transformation. With each surgery building on the last, the outcome is
        not just about enhanced beauty but a symphony of harmonized changes,
        echoing the depth, range, and finesse of Thai surgical craftsmanship.
        <br/><br/>
        This is the zenith of surgical travel — a harmonious fusion of
        unparalleled medical expertise, immersive luxury, and the soulful touch
        of Thai heritage. For those seeking perfection in every facet, this
        trilogy of transformations stands unrivaled, a testament to the best
        that Thailand has to offer.
      </p>
      {selectedCard && (
     <button className={styles.button} onClick={() => setShowModal(true)}>
        SURGERY PACKAGE 3
     </button>
)}

      {showModal && (
        <div className={styles.modal}>
          <button
            className={styles.closeButton}
            onClick={() => setShowModal(false)}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
}

export default function PricingPage() {
  const [selectedCard, setSelectedCard] = useState(0);

  const renderLeftInfo = () => {
    switch (selectedCard) {
      case 1:
        return <LeftInfo1 selectedCard={selectedCard} />;
      case 2:
        return <LeftInfo2 selectedCard={selectedCard} />;
      case 3:
        return <LeftInfo3 selectedCard={selectedCard} />;
      default:
        return <LeftInfo selectedCard={selectedCard} />;
    }
  };
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.leftside}>{renderLeftInfo()}</div>
        <div className={styles.rightside}>
          <div className={styles.packageContainer}>
            <Packages onCardSelect={setSelectedCard} />
          </div>
        </div>
      </div>
    </div>
  );
}
