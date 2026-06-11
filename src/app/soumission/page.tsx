"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';

export default function SoumissionPage() {
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
            <ContactSplitForm
            title="Demande de soumission"
            description="Remplissez ce formulaire pour recevoir une estimation gratuite pour vos besoins d'entretien paysager."
            inputs={[
              { name: "name", type: "text", placeholder: "Votre nom complet", required: true },
              { name: "email", type: "email", placeholder: "Votre adresse courriel", required: true },
              { name: "address", type: "text", placeholder: "Adresse du terrain", required: true }
            ]}
            textarea={{ name: "message", placeholder: "Détails du service souhaité (ex: tonte, taille, nettoyage...)", rows: 4, required: true }}
            buttonText="Envoyer ma demande"
            onSubmit={(data) => {
              const subject = encodeURIComponent("Nouvelle demande de soumission");
              const body = encodeURIComponent(
                `Nom: ${data.name}\n` +
                `Courriel: ${data.email}\n` +
                `Adresse: ${data.address}\n` +
                `Message: ${data.message}`
              );
              window.location.href = `mailto:entretien.saisonnier.rv@gmail.com?subject=${subject}&body=${body}`;
            }}
            useInvertedBackground={false}
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