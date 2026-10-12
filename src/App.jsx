import { useEffect, useState } from "react";
import { MotionConfig } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsStrip from "./components/StatsStrip";
import NetworksMarquee from "./components/NetworksMarquee";
import Problem from "./components/Problem";
import Steps from "./components/Steps";
import Brands from "./components/Brands";
import Coverage from "./components/Coverage";
import Founder from "./components/Founder";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import FloatingCtas from "./components/FloatingCtas";

/* ============================================================
   RADDAR — Landing Page v6
   Tráfego: Instagram / orgânico (mobile-first)
   Conversão: WhatsApp único, com atribuição por mensagem
   ============================================================ */

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [barOn, setBarOn] = useState(false);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 8);
      setBarOn(window.scrollY > 520);
    };
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="page">
        <div className="grain" aria-hidden="true" />
        <Header scrolled={scrolled} barOn={barOn} />
        <main>
          <Hero />
          <StatsStrip />
          <NetworksMarquee />
          <Problem />
          <Steps />
          <Brands />
          <Coverage />
          <Founder />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
        <FloatingCtas on={barOn} />
      </div>
    </MotionConfig>
  );
}
