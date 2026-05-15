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
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
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
        { name: "Services", id: "services" },
        { name: "Tarifs", id: "pricing" },
        { name: "Contact", id: "/contact" },
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
        { imageSrc: "http://img.b2bpic.net/free-photo/gardener-with-weedwacker-cutting-grass-garden_329181-20539.jpg", imageAlt: "landscaping service garden maintenance" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DlQE9j5RwG1pF8sleGqSn5dJUd/uploaded-1778855458069-s2znur77.jpg", imageAlt: "landscaping service garden maintenance" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DlQE9j5RwG1pF8sleGqSn5dJUd/uploaded-1778855396848-hsmwwzxe.jpg", imageAlt: "landscaping service garden maintenance" },
      ]}
      rightCarouselItems={[
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DlQE9j5RwG1pF8sleGqSn5dJUd/uploaded-1778856364767-3bjl8sig.jpg", imageAlt: "landscaping service garden maintenance" },
        { imageSrc: "http://img.b2bpic.net/free-photo/contrasting-outdoor-textures_23-2149702189.jpg", imageAlt: "landscaping service garden maintenance" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DlQE9j5RwG1pF8sleGqSn5dJUd/uploaded-1778855585031-0qj3mf3o.jpg", imageAlt: "landscaping service garden maintenance" },
        { imageSrc: "http://img.b2bpic.net/free-photo/senior-man-working-field-with-plants_329181-12433.jpg", imageAlt: "landscaping service garden maintenance" },
        { imageSrc: "http://img.b2bpic.net/free-photo/close-up-strong-man-gloves-cutting-leaves-his-garden-farmer-spending-summer-morning-working-garden-near-countryside-house_176420-19902.jpg", imageAlt: "landscaping service garden maintenance" },
      ]}
      buttons={[{ text: "Demandez une soumission", href: "/contact" }]}
      avatars={[
        { src: "http://img.b2bpic.net/free-photo/front-view-senior-man-garden_23-2148256666.jpg", alt: "Front view senior man in garden" },
        { src: "http://img.b2bpic.net/free-photo/senior-man-working-field-with-flowers_329181-12453.jpg", alt: "Senior man working in the field with flowers" },
        { src: "http://img.b2bpic.net/free-photo/male-hands-cutting-bushes-with-big-scissors_651396-1549.jpg", alt: "Male hands cutting bushes with big scissors" },
        { src: "http://img.b2bpic.net/free-photo/young-man-safety-mask-gloves-shaping-bushes_651396-3823.jpg", alt: "Young man in safety mask and gloves shaping bushes" },
        { src: "http://img.b2bpic.net/free-photo/hard-working-mature-man-garden_329181-4627.jpg", alt: "Hard working mature man in garden" },
      ]}
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
      imageAlt="landscaping team working outdoors"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "Tonte de pelouse",          description: "Tonte régulière pour un gazon uniforme et en santé toute la saison.",          bentoComponent: "reveal-icon",          icon: Scissors,
        },
        {
          title: "Nettoyage saisonnier",          description: "Ouverture et fermeture de terrain, ramassage de feuilles et débris.",          bentoComponent: "reveal-icon",          icon: Leaf,
        },
        {
          title: "Taille de haies",          description: "Taille précise de vos haies et arbustes pour une apparence impeccable.",          bentoComponent: "reveal-icon",          icon: Leaf,
        },
      ]}
      title="Nos services d'entretien"
      description="Solutions adaptées à chaque saison pour la santé et la beauté de vos espaces extérieurs."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        { id: "1", name: "Engrais organique", price: "45.00$", variant: "10kg", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DlQE9j5RwG1pF8sleGqSn5dJUd/uploaded-1778860112213-a1qlm6nx.webp" },
        { id: "2", name: "Semence gazon", price: "40.00$", variant: "5kg", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DlQE9j5RwG1pF8sleGqSn5dJUd/uploaded-1778859819971-8t5v2mpw.jpg" },
        { id: "3", name: "Paillis de cèdre", price: "5.00$ le sac", variant: "Sac 50L", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DlQE9j5RwG1pF8sleGqSn5dJUd/uploaded-1778859970002-lo90iwsa.webp" },
        { id: "4", name: "Compost premium", price: "2.20$ / 1kg ", variant: "Sac 20kg", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DlQE9j5RwG1pF8sleGqSn5dJUd/uploaded-1778860016221-ml1h3j3c.jpg" },
      ]}
      title="Produits spécialisés"
      description="Découvrez notre gamme de produits premium pour entretenir votre jardin comme un pro."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      textboxLayout="split-actions"
      useInvertedBackground={true}
      animationType="slide-up"
      plans={[
        {
          id: "basic",          badge: "Basic ",          price: "45$ / semaine",          subtitle: "Forfait standard peut varier selon la superficie   ",          features: ["Tonte soignée", "Délimitation des bordures", "Support prioritaire"],
          buttons: [{ text: "Commander", href: "/contact" }]
        },
        {
          id: "pro",          badge: "Populaire",          price: "180$ / heure",          subtitle: "La tranquillité totale",          features: ["", "Taille de haies et arbuste", "Fertilisation saisonnière", "Nettoyage débris"],
          buttons: [{ text: "Commander", href: "/contact" }]
        },
        {
          id: "premium",          badge: "Expert",          price: "180$ / heure",          subtitle: "Entretien paysager complet",          features: ["Ramassage des feuille a l'automne  ", "Entretien complet des plates-bandes", "Traitement horticole", "Priorité d'intervention"],
          buttons: [{ text: "Commander", href: "/contact" }]
        },
      ]}
      title="Forfaits entretien"
      description="Des forfaits pensés pour la longévité de votre jardin, garantissant une esthétique impeccable et une santé optimale sans que vous ayez à lever le petit doigt."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        { id: "1", name: "Marie L.", role: "Résidente", company: "Granby", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/front-view-women-posing-together_23-2149962675.jpg" },
        { id: "2", name: "Jean-Pierre C.", role: "Entreprise", company: "Granby", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/man-sitting-near-house-looking-camera_259150-59313.jpg" },
        { id: "3", name: "Sophie G.", role: "Résidente", company: "Bromont", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-senior-man-hat-gardening-with-granddaugher_1157-38489.jpg" },
        { id: "4", name: "Marc-André D.", role: "Résidente", company: "Granby", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/greenhouse-owner-presenting-flowers-options-potential-customer-retailer_158595-7006.jpg" },
        { id: "5", name: "Julie B.", role: "Propriétaire", company: "Granby", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-woman-holding-her-her_23-2148631401.jpg" },
      ]}
      title="Ce que nos clients disent"
      description="La satisfaction de nos clients à Granby est notre meilleure publicité."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        { id: "q1", title: "Quelle est votre zone de service?", content: "Nous desservons Granby et les villes avoisinantes dans un rayon de 30 km." },
        { id: "q2", title: "Faites-vous l'ouverture de terrain?", content: "Oui, nous offrons un service complet d'ouverture de terrain chaque printemps." },
        { id: "q3", title: "Comment demander une soumission?", content: "Vous pouvez remplir notre formulaire de contact ou nous appeler directement." },
      ]}
      title="Questions fréquentes"
      description="Tout ce que vous devez savoir sur nos services saisonniers."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Entretien Saisonnier"
      columns={[
        { title: "Liens", items: [{ label: "Accueil", href: "/" }, { label: "Services", href: "/services" }, { label: "Tarifs", href: "/pricing" }] },
        { title: "Informations", items: [{ label: "À propos", href: "/about" }, { label: "FAQ", href: "/faq" }, { label: "Contact", href: "/contact" }] },
      ]}
      copyrightText="© 2025 Entretien Saisonnier | Granby, QC"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}