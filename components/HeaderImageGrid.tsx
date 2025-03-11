"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

type HeaderImageGridProps = {
  imageUrls: string[];
};

type ImageState = {
  url: string;
  opacity: number;
};

const HeaderImageGrid = ({ imageUrls }: HeaderImageGridProps) => {
  const [images, setImages] = useState<ImageState[]>(
    imageUrls.map((url) => ({ url, opacity: 1 }))
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Step 1: Fade out
      setImages((prev) => prev.map((img) => ({ ...img, opacity: 0 })));

      // Step 2: Change images and fade in
      setTimeout(() => {
        setImages((prev) => {
          const shuffled = [...prev]
            .sort(() => Math.random() - 0.5)
            .map((img) => ({ ...img, opacity: 1 }));
          return shuffled;
        });
      }, 500 + Math.random() * 500); // Wait for fade out to complete
    }, 5000); // Change images every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
      <div className="grid gap-4">
        {images.slice(0, 2).map((image, index) => (
          <div key={image.url} className="overflow-hidden rounded-lg">
            <div
              className="relative w-full h-full"
              style={{
                transition: "opacity 500ms ease-in-out",
                opacity: image.opacity,
              }}
            >
              <Image
                src={image.url}
                width={200}
                height={300}
                alt="Anime cover"
                className="aspect-[2/3] w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-4">
        {images.slice(2, 4).map((image, index) => (
          <div key={image.url} className="overflow-hidden rounded-lg">
            <div
              className="relative w-full h-full"
              style={{
                transition: "opacity 500ms ease-in-out",
                opacity: image.opacity,
              }}
            >
              <Image
                src={image.url}
                width={200}
                height={300}
                alt="Anime cover"
                className="aspect-[2/3] w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderImageGrid;
