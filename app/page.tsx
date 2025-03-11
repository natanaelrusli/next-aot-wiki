import Header from "@/components/Header";
import FeaturesSection from "@/components/FeaturesSection";
import TopEpisodesSection from "@/components/TopEpisodesSection";
import JoinCommunity from "@/components/JoinCommunity";
import StayUpdated from "@/components/StayUpdated";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Header />
        <FeaturesSection />
        <TopEpisodesSection />
        <JoinCommunity />
        <StayUpdated />
      </main>
    </div>
  );
}
