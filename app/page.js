import AboutOmni from "@/components/AboutOmni";
import HeroSecton from "@/components/HeroSecton";
import PeopeleAlsoViewed from "@/components/PeopeleAlsoViewed";

export const metadata = {
  title: "Lobor Cost Calculator",
  description:
    "Using lobaor cost calculator, Now its so simple to calculate all the expenses of your labors",
};

export default function Home() {
  return (
    <main>
      <HeroSecton />

      <PeopeleAlsoViewed />

      <AboutOmni />
    </main>
  );
}
