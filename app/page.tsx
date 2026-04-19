import { VoiceNavbar } from "@/components/sections/VoiceNavbar";
import { VoiceHeroSection } from "@/components/sections/VoiceHeroSection";
import { VoiceProblemSection } from "@/components/sections/VoiceProblemSection";
import { VoiceDemoSection } from "@/components/sections/VoiceDemoSection";
import { VoiceHowItWorksSection } from "@/components/sections/VoiceHowItWorksSection";
import { VoiceFeaturesSection } from "@/components/sections/VoiceFeaturesSection";
import { VoiceUseCasesSection } from "@/components/sections/VoiceUseCasesSection";
import { VoiceTrustSection } from "@/components/sections/VoiceTrustSection";
import { VoicePlansSection } from "@/components/sections/VoicePlansSection";
import { VoiceFAQSection } from "@/components/sections/VoiceFAQSection";
import { VoiceCTASection } from "@/components/sections/VoiceCTASection";
import { VoiceFooter } from "@/components/sections/VoiceFooter";

export default function Page() {
  return (
    <>
      <VoiceNavbar />
      <main>
        <VoiceHeroSection />
        <VoiceProblemSection />
        <VoiceDemoSection />
        <VoiceHowItWorksSection />
        <VoiceFeaturesSection />
        <VoiceUseCasesSection />
        <VoiceTrustSection />
        <VoicePlansSection />
        <VoiceFAQSection />
        <VoiceCTASection />
      </main>
      <VoiceFooter />
    </>
  );
}
