import Services from "../components/Services";

export const metadata = {
  title: "Services | DevTimmy",
  description: "Services offered by DevTimmy",
};

export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen">
      <Services />
    </main>
  );
}
