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
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
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
        {
          name: "Accueil",
          id: "hero",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Tarifs",
          id: "pricing",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Entretien Saisonnier"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDoubleCarousel
      background={{
        variant: "gradient-bars",
      }}
      title="Entretien professionnel pour votre terrain à Granby"
      description="Nous offrons des services complets d'entretien paysager saisonnier pour particuliers et entreprises. Confiez vos espaces verts aux experts locaux."
      leftCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/senior-man-working-field_329181-12419.jpg?_wi=1",
          imageAlt: "landscaping service garden maintenance",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/people-helping-neighbors-with-grass-lawn_23-2149139731.jpg",
          imageAlt: "landscaping service garden maintenance",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/gardener-with-weedwacker-cutting-grass-garden_329181-20539.jpg",
          imageAlt: "landscaping service garden maintenance",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-senior-man-cutting-overgrown-bushes_651396-1547.jpg",
          imageAlt: "landscaping service garden maintenance",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/unrecognizable-man-psushing-wheelbarrow-full-seedling_329181-20532.jpg",
          imageAlt: "landscaping service garden maintenance",
        },
      ]}
      rightCarouselItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/senior-mows-grass-yard-with-lawn-mower_1157-29769.jpg",
          imageAlt: "landscaping service garden maintenance",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/contrasting-outdoor-textures_23-2149702189.jpg",
          imageAlt: "landscaping service garden maintenance",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-gardener-woman-with-short-hair-apron-hat-showing-shovel-smiling-with-happy-face_141793-102537.jpg",
          imageAlt: "landscaping service garden maintenance",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/senior-man-working-field-with-plants_329181-12433.jpg",
          imageAlt: "landscaping service garden maintenance",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-strong-man-gloves-cutting-leaves-his-garden-farmer-spending-summer-morning-working-garden-near-countryside-house_176420-19902.jpg",
          imageAlt: "landscaping service garden maintenance",
        },
      ]}
      buttons={[
        {
          text: "Demandez une soumission",
          href: "#contact",
        },
      ]}
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/front-view-senior-man-garden_23-2148256666.jpg",
          alt: "Front view senior man in garden",
        },
        {
          src: "http://img.b2bpic.net/free-photo/senior-man-working-field-with-flowers_329181-12453.jpg",
          alt: "Senior man working in the field with flowers",
        },
        {
          src: "http://img.b2bpic.net/free-photo/male-hands-cutting-bushes-with-big-scissors_651396-1549.jpg",
          alt: "Male hands cutting bushes with big scissors",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-man-safety-mask-gloves-shaping-bushes_651396-3823.jpg",
          alt: "Young man in safety mask and gloves shaping bushes",
        },
        {
          src: "http://img.b2bpic.net/free-photo/hard-working-mature-man-garden_329181-4627.jpg",
          alt: "Hard working mature man in garden",
        },
      ]}
      avatarText="Reconnu par plus de 500+ clients locaux"
      marqueeItems={[
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/smiling-elderly-female-gardener-wearing-gardening-hat-gloves-holding-spade-neck_141793-103701.jpg",
          alt: "Smiling elderly female gardener wearing gardening hat and gloves holding spade on neck behind",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/gardening-mid-aged-man-working-garden-with-gtareden-inventory_259150-58928.jpg",
          alt: "Gardening. Mid aged man working in a garden with gtareden inventory",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/senior-man-working-field_329181-12430.jpg",
          alt: "Senior man working in the field",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/focused-male-florist-standing-rows-with-potted-plants-cutting-bush-greenhouse-man-working-garden-growing-plants-pots-gardening-job-concept_74855-12788.jpg",
          alt: "Focused male florist standing among rows with potted plants and cutting bush in greenhouse. Man working in garden, growing plants in pots. Gardening job concept",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/cropped-view-gardening-worker-wearing-protective-gloves-while-trimming-plants_344912-2291.jpg",
          alt: "Cropped view of gardening worker wearing protective gloves while trimming plants",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="Experts paysagistes à Granby"
      description="Avec des années d'expérience, Entretien Saisonnier transforme votre terrain en havre de paix. Qualité et ponctualité sont nos priorités."
      metrics={[
        {
          value: "15+",
          title: "Années d'expérience",
        },
        {
          value: "500+",
          title: "Projets réalisés",
        },
        {
          value: "98%",
          title: "Satisfaction client",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/happy-plant-parents-holding-their-potted-plants_53876-130018.jpg?_wi=1"
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
          title: "Tonte de pelouse",
          description: "Tonte régulière pour un gazon uniforme et en santé toute la saison.",
          bentoComponent: "reveal-icon",
          icon: Scissors,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-mowing-yard-close-up_23-2148579933.jpg",
          imageAlt: "lawn mowing service grass trimming",
        },
        {
          title: "Nettoyage saisonnier",
          description: "Ouverture et fermeture de terrain, ramassage de feuilles et débris.",
          bentoComponent: "reveal-icon",
          icon: Leaf,
          imageSrc: "http://img.b2bpic.net/free-photo/senior-man-working-field_329181-12419.jpg?_wi=2",
          imageAlt: "lawn mowing service grass trimming",
        },
        {
          title: "Taille de haies",
          description: "Taille précise de vos haies et arbustes pour une apparence impeccable.",
          bentoComponent: "reveal-icon",
          icon: Leaf,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-plant-parents-holding-their-potted-plants_53876-130018.jpg?_wi=2",
          imageAlt: "lawn mowing service grass trimming",
        },
      ]}
      title="Nos services d'entretien"
      description="Solutions adaptées à chaque saison pour la santé et la beauté de vos espaces extérieurs."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Engrais organique",
          price: "29.99$",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-container-leaves_23-2148883456.jpg",
          imageAlt: "lawn fertilizer bag product",
        },
        {
          id: "2",
          name: "Semence gazon",
          price: "19.99$",
          imageSrc: "http://img.b2bpic.net/free-photo/gardener-repotting-houseplant_53876-127240.jpg",
          imageAlt: "grass seed bag lawn care",
        },
        {
          id: "3",
          name: "Paillis cèdre",
          price: "12.50$",
          imageSrc: "http://img.b2bpic.net/free-photo/adult-reusing-objects-creative-ways_23-2149411787.jpg",
          imageAlt: "mulch bag for gardening",
        },
        {
          id: "4",
          name: "Nutriments sol",
          price: "24.99$",
          imageSrc: "http://img.b2bpic.net/free-photo/creative-flat-lay-gardening-concept_23-2148195487.jpg",
          imageAlt: "garden plant nutrients pack",
        },
        {
          id: "5",
          name: "Coupe-bordure",
          price: "89.99$",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-gardening-composition_23-2148128654.jpg",
          imageAlt: "lawn lawn edger tool",
        },
        {
          id: "6",
          name: "Sécateur pro",
          price: "34.50$",
          imageSrc: "http://img.b2bpic.net/free-photo/tools-plants-wooden-table-with-copy-space_23-2148509953.jpg",
          imageAlt: "garden weeding tool small",
        },
      ]}
      title="Produits spécialisés"
      description="Découvrez notre gamme de produits pour entretenir votre jardin comme un pro."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",
          badge: "Basique",
          price: "49$",
          subtitle: "Pour les petits terrains",
          features: [
            "Tonte hebdomadaire",
            "Soufflage des trottoirs",
            "Support par email",
          ],
        },
        {
          id: "pro",
          badge: "Populaire",
          price: "89$",
          subtitle: "La tranquillité totale",
          features: [
            "Tout du forfait basique",
            "Taille de haies mensuelle",
            "Fertilisation incluse",
          ],
        },
        {
          id: "premium",
          badge: "Premium",
          price: "149$",
          subtitle: "Entretien complet pro",
          features: [
            "Tout du forfait Pro",
            "Aménagement paysager",
            "Priorité intervention",
          ],
        },
      ]}
      title="Forfaits entretien"
      description="Des options flexibles pour répondre aux besoins de votre terrain."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Marie L.",
          role: "Résidente",
          company: "Granby",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-women-posing-together_23-2149962675.jpg",
          imageAlt: "happy home owner garden",
        },
        {
          id: "2",
          name: "Jean-Pierre C.",
          role: "Entreprise",
          company: "Granby",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-sitting-near-house-looking-camera_259150-59313.jpg",
          imageAlt: "customer portrait outdoors",
        },
        {
          id: "3",
          name: "Sophie G.",
          role: "Résidente",
          company: "Bromont",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-senior-man-hat-gardening-with-granddaugher_1157-38489.jpg",
          imageAlt: "happy client garden work",
        },
        {
          id: "4",
          name: "Marc-André D.",
          role: "Résidente",
          company: "Granby",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/greenhouse-owner-presenting-flowers-options-potential-customer-retailer_158595-7006.jpg",
          imageAlt: "customer smile garden maintenance",
        },
        {
          id: "5",
          name: "Julie B.",
          role: "Propriétaire",
          company: "Granby",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-smiley-woman-holding-her-her_23-2148631401.jpg",
          imageAlt: "happy garden service client",
        },
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
        {
          id: "q1",
          title: "Quelle est votre zone de service?",
          content: "Nous desservons Granby et les villes avoisinantes dans un rayon de 30 km.",
        },
        {
          id: "q2",
          title: "Faites-vous l'ouverture de terrain?",
          content: "Oui, nous offrons un service complet d'ouverture de terrain chaque printemps.",
        },
        {
          id: "q3",
          title: "Comment demander une soumission?",
          content: "Vous pouvez remplir notre formulaire de contact ou nous appeler directement.",
        },
      ]}
      title="Questions fréquentes"
      description="Tout ce que vous devez savoir sur nos services saisonniers."
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Contactez-nous"
      title="Prêt à transformer votre terrain?"
      description="Contactez-nous aujourd'hui pour une estimation gratuite sans engagement."
      imageSrc="http://img.b2bpic.net/free-photo/greenhouse-owner-presenting-flowers-options-potential-customer-retailer_158595-7007.jpg"
      mediaAnimation="slide-up"
      buttonText="Envoyer"
      imageAlt="professional garden service contact"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Entretien Saisonnier"
      columns={[
        {
          title: "Liens",
          items: [
            {
              label: "Accueil",
              href: "#hero",
            },
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Tarifs",
              href: "#pricing",
            },
          ],
        },
        {
          title: "Informations",
          items: [
            {
              label: "À propos",
              href: "#about",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      copyrightText="© 2025 Entretien Saisonnier | Granby, QC"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
