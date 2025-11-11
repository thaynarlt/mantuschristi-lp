import {
  GOOGLE_FORM_LINK,
  WHATSAPP_LINK,
  featuredRelease,
  previousCollections,
  processSteps,
  valuePoints,
} from "../modules/landing/constants";
import { CallToActionSection } from "../modules/landing/components/CallToActionSection";
import { CollectionsSection } from "../modules/landing/components/CollectionsSection";
import { FooterSection } from "../modules/landing/components/FooterSection";
import { HeroSection } from "../modules/landing/components/HeroSection";
import { ProcessSection } from "../modules/landing/components/ProcessSection";
import { ProjectsSection } from "../modules/landing/components/ProjectsSection";
import { ValuesSection } from "../modules/landing/components/ValuesSection";
import "../modules/landing/styles/base.css";

export function LandingPage() {
  return (
    <div className="page">
      <HeroSection
        featuredRelease={featuredRelease}
        whatsappLink={WHATSAPP_LINK}
      />
      <main>
        <CollectionsSection
          collections={previousCollections}
          formLink={GOOGLE_FORM_LINK}
        />
        <ProjectsSection />
        <ProcessSection steps={processSteps} />
        <ValuesSection values={valuePoints} />
        <CallToActionSection whatsappLink={WHATSAPP_LINK} />
      </main>
      <FooterSection whatsappLink={WHATSAPP_LINK} />
    </div>
  );
}

