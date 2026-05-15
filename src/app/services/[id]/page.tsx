"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { useParams } from 'next/navigation';

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceId = params.id;

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

        <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
          <h1 className="text-4xl font-bold mb-4 capitalize">Service: {serviceId?.toString().replace('-', ' ')}</h1>
          <p className="text-lg mb-6 max-w-2xl text-center">Description détaillée du service sélectionné et ses avantages pour votre terrain.</p>
          <div className="bg-[var(--card)] p-6 rounded-xl border border-[var(--accent)]">
             <span className="text-2xl font-semibold">Prix estimatif: Sur demande</span>
          </div>
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