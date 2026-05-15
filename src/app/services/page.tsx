"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Leaf, Scissors, TreeDeciduous, Shovel, Snowflake } from "lucide-react";

export default function ServicesPage() {
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
                { name: "Accueil", id: "/" },
                { name: "Services", id: "/services" },
                { name: "Tarifs", id: "/pricing" },
                { name: "Contact", id: "/contact" },
                { name: "Facebook", id: "https://www.facebook.com/" },
            ]}
            brandName="Entretien Saisonnier JRS inc."
            />
        </div>

        <div id="services" data-section="services">
            <FeatureBento
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            title="Nos services détaillés"
            description="Des solutions professionnelles pour garder votre extérieur impeccable toute l'année."
            features={[
                { title: "Tonte de pelouse", description: "Tonte hebdomadaire avec ramassage de gazon pour une pelouse uniforme.", bentoComponent: "reveal-icon", icon: Scissors },
                { title: "Nettoyage saisonnier", description: "Ouverture et fermeture, ratissage de feuilles et nettoyage des débris.", bentoComponent: "reveal-icon", icon: Leaf },
                { title: "Taille de haies", description: "Taille précise de vos haies et arbustes par des experts paysagistes.", bentoComponent: "reveal-icon", icon: TreeDeciduous },
                { title: "Aménagement", description: "Installation de paillis, plantation et entretien de plates-bandes.", bentoComponent: "reveal-icon", icon: Shovel },
                { title: "Service hivernal", description: "Gestion des entrées et déneigement résidentiel ponctuel.", bentoComponent: "reveal-icon", icon: Snowflake }
            ]}
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