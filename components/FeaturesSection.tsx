import { BookOpen, Star, Users } from "lucide-react";
import React from "react";
import { Badge } from "./ui/badge";

type FeatureItemProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const FeatureItem = ({ title, description, icon }: FeatureItemProps) => {
  return (
    <div className="flex flex-col justify-center space-y-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge>Features</Badge>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Everything you need for your AoT journey
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <FeatureItem
            icon={<BookOpen className="h-6 w-6" />}
            title={"Browse Episodes"}
            description="Extensive collection of episodes"
          />
          <FeatureItem
            icon={<Star className="h-6 w-6" />}
            title={"Browse Episodes"}
            description="Extensive collection of episodes"
          />
          <FeatureItem
            icon={<Users className="h-6 w-6" />}
            title={"Browse Episodes"}
            description="Extensive collection of episodes"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
