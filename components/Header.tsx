import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { BookOpen } from "lucide-react";

const Header = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Discover facts about Attack on Titan
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Your ultimate AoT companion.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-1">
                <BookOpen className="h-4 w-4" />
                Browse Episodes
              </Button>
            </div>
          </div>
          <div className="mx-auto flex w-full items-center justify-center">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="https://static.wikia.nocookie.net/shingekinokyojin/images/9/93/Armin_Arlelt_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20210322005647"
                    width={200}
                    height={300}
                    alt="Anime cover"
                    className="aspect-[2/3] object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="https://static.wikia.nocookie.net/shingekinokyojin/images/a/a1/Eren_Jaeger_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20220123225500"
                    width={200}
                    height={300}
                    alt="Anime cover"
                    className="aspect-[2/3] object-cover"
                  />
                </div>
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="https://static.wikia.nocookie.net/shingekinokyojin/images/5/52/Thomas_Wagner_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20171215201507"
                    width={200}
                    height={300}
                    alt="Anime cover"
                    className="aspect-[2/3] object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="https://static.wikia.nocookie.net/shingekinokyojin/images/9/99/Sandra_%28Anime%29_character_image.png/revision/latest/scale-to-width-down/350?cb=20190519180153"
                    width={200}
                    height={300}
                    alt="Anime cover"
                    className="aspect-[2/3] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
