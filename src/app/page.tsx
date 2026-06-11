"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import { Leaf, Scissors } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-magnetic"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSmall"
        background="noise"
        cardStyle="inset"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        { name: "Accueil", id: "hero" },
        { name: "Services", id: "/services" },
        { name: "Tarifs", id: "pricing" },
        { name: "Soumission", id: "/soumission" },
        { name: "Facebook", id: "https://www.facebook.com/search/top?q=entretien%20saisonnier%20jrs%20inc.&locale=fr_CA" },
      ]}
      brandName="Entretien Saisonnier JRS inc."
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{ variant: "gradient-bars" }}
      title="Entretien professionnel pour votre terrain à Granby"
      description="Nous offrons des services complets d'entretien paysager saisonnier pour particuliers et entreprises. Confiez vos espaces verts aux experts locaux."
      leftCarouselItems={[
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DlQE9j5RwG1pF8sleGqSn5dJUd/uploaded-1778855509339-6i8saesy.jpg", imageAlt: "landscaping service garden maintenance" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DlQE9j5RwG1pF8sleGqSn5dJUd/uploaded-1778856008662-2kt0ravy.png", imageAlt: "landscaping service garden maintenance" },
      ]}
      rightCarouselItems={[
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DlQE9j5RwG1pF8sleGqSn5dJUd/uploaded-1779122427608-wjn8bwlq.jpg", imageAlt: "landscaping service garden maintenance" },
      ]}
      buttons={[{ text: "Demandez une soumission", href: "/soumission" }]}
      avatarText="Reconnu par plus de 100+ clients locaux"
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Experts paysagistes à Granby"
      description="Avec des années d'expérience, Entretien Saisonnier transforme votre terrain en havre de paix. Qualité et ponctualité sont nos priorités."
      metrics={[
        { value: "2+ ", title: "Années d'expérience" },
        { value: "100+ ", title: "Projets réalisés" },
        { value: "98%", title: "Satisfaction client" },
      ]}
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DlQE9j5RwG1pF8sleGqSn5dJUd/uploaded-1778854433759-l14z98kz.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        { title: "Tonte de pelouse", description: "Tonte régulière pour un gazon uniforme.", bentoComponent: "reveal-icon", icon: Scissors },
        { title: "Nettoyage saisonnier", description: "Ouverture et fermeture de terrain.", bentoComponent: "reveal-icon", icon: Leaf },
        { title: "Taille de haies", description: "Taille précise pour une apparence impeccable.", bentoComponent: "reveal-icon", icon: Leaf },
      ]}
      title="Nos services d'entretien"
      description="Solutions adaptées à chaque saison."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      textboxLayout="split-actions"
      useInvertedBackground={true}
      animationType="slide-up"
      plans={[
        { id: "basic", badge: "Basic", price: "45$ / semaine", subtitle: "Forfait standard", features: ["Tonte soignée", "Délimitation", "Support"], buttons: [{ text: "Commander", href: "/soumission" }] },
        { id: "pro", badge: "Populaire", price: "180$ / heure", subtitle: "Tranquillité totale", features: ["Taille de haies", "Fertilisation"], buttons: [{ text: "Commander", href: "/soumission" }] },
        { id: "premium", badge: "Expert", price: "180$ / heure", subtitle: "Complet", features: ["Ramassage feuilles", "Plates-bandes"], buttons: [{ text: "Commander", href: "/soumission" }] },
      ]}
      title="Forfaits entretien"
      description="Des solutions sur mesure pour votre terrain."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Entretien Saisonnier"
      columns={[
        { title: "Liens", items: [{ label: "Accueil", href: "/" }, { label: "Services", href: "/services" }, { label: "Tarifs", href: "/#pricing" }] },
        { title: "Informations", items: [{ label: "À propos", href: "/#about" }, { label: "Soumission", href: "/soumission" }] },
      ]}
      copyrightText="© 2025 Entretien Saisonnier | Granby, QC"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}