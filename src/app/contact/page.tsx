"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

export default function ContactPage() {
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
                { name: "Tarifs", id: "/#pricing" },
                { name: "Soumission", id: "/soumission" },
                { name: "Facebook", id: "https://www.facebook.com/search/top?q=entretien%20saisonnier%20jrs%20inc.&locale=fr_CA" },
            ]}
            brandName="Entretien Saisonnier JRS inc."
            />
        </div>

        <div id="contact" data-section="contact">
            <ContactSplit
            useInvertedBackground={false}
            background={{ variant: "plain" }}
            tag="Contactez-nous"
            title="Prêt à transformer votre terrain?"
            description="Remplissez vos détails pour obtenir une soumission."
            onSubmit={(email) => {
              const subject = encodeURIComponent("Nouvelle demande de service");
              const body = encodeURIComponent(
                `Courriel: ${email}\n\n` +
                `Nom:\n` +
                `Adresse:\n` +
                `Service souhaité:`
              );
              window.open(`mailto:entretien.saisonnier.rv@gmail.com?subject=${subject}&body=${body}`, '_blank');
            }}
            buttonText="Envoyer"
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterBaseCard
            logoText="Entretien Saisonnier JRS inc.\nTel. 579-420-4510"
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