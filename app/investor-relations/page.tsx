import InvestorHeader from "../components/InvestorHeader";
import RevenueModel from "../components/RevenueModel";
import InvestorOpportunities from "../components/InvestorOpportunities";
import PartnershipOpportunities from "../components/PartnershipOpportunities";
import InvestorCTA from "../components/InvestorCTA";

export default function InvestorRelationsPage() {
  return (
    <main>
      <InvestorHeader />
      <RevenueModel />
      <InvestorOpportunities />
      <PartnershipOpportunities />
      <InvestorCTA />
    </main>
  );
}
