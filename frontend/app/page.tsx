import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
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
      <Navigation />
      <div className="page-main">
        <main>
          <Hero />
          <Story />
          <About />
          <Concept />
          <Permits />
          <Pricing />
          <UnitEconomics />
          <RevenueSim />
          <Properties />
          <Competitors />
          <RealCases />
          <Ventilation />
          <OperationalRisks />
          <StrategyBoost />
          <Negotiation />
          <InvestmentTimeline />
          <ActionPlan />
          <Assessment />
          <Follow />
        </main>
        <Footer />
      </div>
    </div>
  );
}
