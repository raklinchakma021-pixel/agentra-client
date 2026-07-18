"use client";

import Image from "next/image";

interface Props {
  images: string[];
}

export default function KnowledgeGallery({ images }: Props) {
  return (
    <div className="space-y-4">
      <div className="relative h-[450px] overflow-hidden rounded-2xl">
        <Image
          src={images[0]}
          alt="cover"
          fill
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {images.slice(1).map((image, index) => (
          <div
            key={index}
            className="relative h-40 overflow-hidden rounded-xl"
          >
            <Image
              src={image}
              alt="gallery"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}