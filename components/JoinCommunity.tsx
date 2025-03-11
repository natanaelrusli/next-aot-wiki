import React from "react";
import { Button } from "./ui/button";

const JoinCommunity = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background border-t">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Join Our Community
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Connect with thousands of anime fans, share your thoughts, and
                discover new series to watch.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Sign Up Now</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-lg bg-muted p-4">
                  <blockquote className="text-sm">
                    "AnimeWiki has completely transformed how I discover and
                    track anime. The recommendations are spot on!"
                    <footer className="mt-2 text-xs text-muted-foreground">
                      — Anime Fan
                    </footer>
                  </blockquote>
                </div>
                <div className="overflow-hidden rounded-lg bg-muted p-4">
                  <blockquote className="text-sm">
                    "The community features are amazing. I've found so many
                    like-minded fans to discuss my favorite series with."
                    <footer className="mt-2 text-xs text-muted-foreground">
                      — Manga Lover
                    </footer>
                  </blockquote>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-lg bg-muted p-4">
                  <blockquote className="text-sm">
                    "I love how easy it is to keep track of my watching progress
                    across multiple series."
                    <footer className="mt-2 text-xs text-muted-foreground">
                      — Binge Watcher
                    </footer>
                  </blockquote>
                </div>
                <div className="overflow-hidden rounded-lg bg-muted p-4">
                  <blockquote className="text-sm">
                    "The detailed information about each anime, including staff
                    and voice actors, is incredibly comprehensive."
                    <footer className="mt-2 text-xs text-muted-foreground">
                      — Anime Enthusiast
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
