import Image from "next/image";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Heart, Star, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

type Episode = {
  id: number;
  name: string;
  episode: string;
  img: string;
  characters: string[];
};

async function getEpisodes(): Promise<Episode[]> {
  const response = await fetch("https://api.attackontitanapi.com/episodes", {
    next: { revalidate: 3600 }, // Revalidate every hour
  });

  if (!response.ok) {
    throw new Error("Failed to fetch episodes");
  }

  const data = await response.json();

  return data.results.slice(5, 9);
}

async function TopEpisodesSection() {
  const episodes = await getEpisodes();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Top Episodes
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the highest-rated Attack on Titan episodes
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {episodes.map((episode) => (
            <Card key={episode.id} className="overflow-hidden">
              <div className="relative">
                <Image
                  src={episode.img || "/placeholder.svg"}
                  width={300}
                  height={400}
                  alt={`Episode ${episode.episode}: ${episode.name}`}
                  className="aspect-[3/4] object-cover w-full"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="flex items-center gap-1 bg-black/60 hover:bg-black/60">
                    <Star className="h-3 w-3 fill-current" />{" "}
                    {(Math.random() * 4 + 1).toFixed()}
                  </Badge>
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="line-clamp-1">
                  Episode {episode.episode}: {episode.name}
                </CardTitle>
                <CardDescription className="line-clamp-1">
                  Season 1
                </CardDescription>
              </CardHeader>
              <CardFooter className="p-4 pt-0 flex justify-start">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Heart className="h-4 w-4" />
                  <span className="sr-only">Add to favorites</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href={"/episodes"}>
            <Button variant="outline" size="lg">
              View All Episodes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TopEpisodesSection;
