import Image from "next/image";
import React from "react";
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

const TopEpisodesSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Top Episodes
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover what's the most popular episodes.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="relative">
                <Image
                  src={`/placeholder.svg?height=400&width=300`}
                  width={300}
                  height={400}
                  alt={`Trending anime ${i}`}
                  className="aspect-[3/4] object-cover w-full"
                />
                <div className="absolute top-2 right-2">
                  <Badge className="flex items-center gap-1 bg-black/60 hover:bg-black/60">
                    <Star className="h-3 w-3 fill-current" /> 4.{9 - i}
                  </Badge>
                </div>
              </div>
              <CardHeader className="p-4">
                <CardTitle className="line-clamp-1">
                  Trending Anime Title {i}
                </CardTitle>
                <CardDescription className="line-clamp-1">
                  Action, Adventure, Fantasy
                </CardDescription>
              </CardHeader>
              <CardFooter className="p-4 pt-0 flex justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  {Math.floor(Math.random() * 1000) + 100} watching
                </div>
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
};

export default TopEpisodesSection;
