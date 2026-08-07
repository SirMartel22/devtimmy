import AboutMe from "../components/AboutMe";

export const metadata = {
  title: "About Me | DevTimmy",
  description: "About DevTimmy - Full-Stack Developer",
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen">
      <AboutMe />
    </main>
  );
}
