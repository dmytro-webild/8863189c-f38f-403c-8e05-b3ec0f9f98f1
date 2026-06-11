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
                { name: "Contact", id: "/contact" },
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
            onSubmit={(email) => { window.location.href = `mailto:entretien.saisonnier.rv@gmail.com?subject=Nouvelle demande de service&body=Courriel: ${email}%0D%0A%0D%0ANom:%0D%0AAdresse:%0D%0AService souhaité:%0D%0A`; }}
            buttonText="Envoyer"
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterBaseCard
            logoText="Entretien Saisonnier JRS inc.\nTel. 579-420-4510"
            columns={[
                { title: "Liens", items: [{ label: "Accueil", href: "/" }, { label: "Services", href: "/services" }, { label: "Tarifs", href: "/#pricing" }] },
                { title: "Informations", items: [{ label: "À propos", href: "/#about" }, { label: "Contact", href: "/contact" }] },
            ]}
            copyrightText="© 2025 Entretien Saisonnier | Granby, QC"
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}