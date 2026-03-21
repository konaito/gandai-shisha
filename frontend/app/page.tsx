import { Sidebar, MobileNav } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { WhyShisha } from "@/components/WhyShisha";
import { Story } from "@/components/Story";
import { About } from "@/components/About";
import { Concept } from "@/components/Concept";
import { Permits } from "@/components/Permits";
import { Pricing } from "@/components/Pricing";
import { UnitEconomics } from "@/components/UnitEconomics";
import { RevenueSim } from "@/components/RevenueSim";
import { Properties } from "@/components/Properties";
import { Competitors } from "@/components/Competitors";
import { RealCases } from "@/components/RealCases";
import { Ventilation } from "@/components/Ventilation";
import { OperationalRisks } from "@/components/OperationalRisks";
import { StrategyBoost } from "@/components/StrategyBoost";
import { Negotiation } from "@/components/Negotiation";
import { InvestmentTimeline } from "@/components/InvestmentTimeline";
import { ActionPlan } from "@/components/ActionPlan";
import { Assessment } from "@/components/Assessment";
import { Follow } from "@/components/Follow";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="page-layout">
      <Sidebar />
      <div className="page-main">
        <MobileNav />
        <main>
          <Hero />
          {/* Origin */}
          <WhyShisha />
          <Story />
          <About />
          {/* Business */}
          <Concept />
          <Properties />
          <Competitors />
          {/* Numbers */}
          <Pricing />
          <UnitEconomics />
          <RevenueSim />
          <InvestmentTimeline />
          {/* Operations */}
          <Permits />
          <Ventilation />
          <OperationalRisks />
          <RealCases />
          {/* Execution */}
          <StrategyBoost />
          <Negotiation />
          <ActionPlan />
          {/* Closing */}
          <Assessment />
          <Follow />
        </main>
        <Footer />
      </div>
    </div>
  );
}
