import HiringFormPage from "../[id]/page";

export default function NewHiringPage() {
  return <HiringFormPage params={Promise.resolve({ id: "new" })} />;
}
