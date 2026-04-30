import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
};

const items: GalleryItem[] = [
  { src: "/media/angra-1.jpeg", alt: "Angra - foto 1" },
  { src: "/media/angra-2.jpeg", alt: "Angra - foto 2" },
  { src: "/media/angra-3.jpeg", alt: "Angra - foto 3" },
  { src: "/media/angra-4.jpeg", alt: "Angra - foto 4" }
];

export function Gallery() {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {items.map((it) => (
        <div key={it.src} className="card overflow-hidden">
          <div className="relative aspect-[4/5]">
            <Image
              src={it.src}
              alt={it.alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover"
              priority={it.src === "/media/angra-1.jpeg"}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

