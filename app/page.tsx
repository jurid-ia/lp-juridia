import { VoiceNavbar } from "@/components/sections/VoiceNavbar";
import { VoiceHeroSection } from "@/components/sections/VoiceHeroSection";
// import { VoiceProblemSection } from "@/components/sections/VoiceProblemSection"; // desabilitado a pedido — re-habilitar quando quiser
import { VoiceDemoSection } from "@/components/sections/VoiceDemoSection";
import { VoiceHowItWorksSection } from "@/components/sections/VoiceHowItWorksSection";
import { VoiceFeaturesSection } from "@/components/sections/VoiceFeaturesSection";
import { VoiceUseCasesSection } from "@/components/sections/VoiceUseCasesSection";
import { VoiceTrustSection } from "@/components/sections/VoiceTrustSection";
// import { VoicePlansSection } from "@/components/sections/VoicePlansSection"; // desabilitado a pedido — re-habilitar quando os preços estiverem definidos
import { VoiceFAQSection } from "@/components/sections/VoiceFAQSection";
import { VoiceCTASection } from "@/components/sections/VoiceCTASection";
import { VoiceFooter } from "@/components/sections/VoiceFooter";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { MobileBottomNav } from "@/components/ui/MobileBottomNav";

export default function Page() {
  return (
    <>
      <VoiceNavbar />
      <main>
        <VoiceHeroSection />
        {/* <VoiceProblemSection /> — desabilitado a pedido */}
        <VoiceDemoSection />
        <VoiceHowItWorksSection />
        <VoiceFeaturesSection />
        <VoiceUseCasesSection />
        <VoiceTrustSection />
        {/* <VoicePlansSection /> — desabilitado a pedido */}
        <VoiceFAQSection />
        <VoiceCTASection />
      </main>
      <VoiceFooter />
      <FloatingWhatsApp />
      <MobileBottomNav />
    </>
  );
}
