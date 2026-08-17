import TeamFormPage from "../[id]/page";

export default function NewTeamPage() {
  return <TeamFormPage params={Promise.resolve({ id: "new" })} />;
}
