import GovernanceTeam from "../components/GovernanceTeam";
import GovernancePolicies from "../components/GovernancePolicies";
import GovernanceDetails from "../components/GovernanceDetails";
import GovernanceInitiatives from "../components/GovernanceInitiatives";
import GovernanceCTA from "../components/GovernanceCTA";

export default function GovernancePage() {
  return (
    <main>
      <GovernanceTeam />
      <GovernancePolicies />
      <GovernanceDetails />
      <GovernanceInitiatives />
      <GovernanceCTA />
    </main>
  );
}
