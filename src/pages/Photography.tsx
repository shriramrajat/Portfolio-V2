import { useState, useEffect, useCallback } from "react";
import Layout from "@/components/Layout";

interface Photo {
  id: number;
  src: string;
  caption?: string;
}

const photos: Photo[] = [
  { id: 1, src: "/placeholder.svg", caption: "[Location / Mood]" },
  { id: 2, src: "/placeholder.svg", caption: "[Location / Mood]" },
  { id: 3, src: "/placeholder.svg" },
  { id: 4, src: "/placeholder.svg", caption: "[Location / Mood]" },
  { id: 5, src: "/placeholder.svg" },
  { id: 6, src: "/placeholder.svg", caption: "[Location / Mood]" },
  { id: 7, src: "/placeholder.svg" },
  { id: 8, src: "/placeholder.svg", caption: "[Location / Mood]" },
  { id: 9, src: "/placeholder.svg" },
];

const Photography = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const closeLightbox = useCallback(() => {
    setSelectedPhoto(null);
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!selectedPhoto) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
        setSelectedPhoto(photos[prevIndex]);
      } else if (e.key === "ArrowRight") {
        const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
        const nextIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
        setSelectedPhoto(photos[nextIndex]);
      }
    },
    [selectedPhoto, closeLightbox]
  );

  useEffect(() => {
    if (selectedPhoto) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedPhoto, handleKeyDown]);

  return (
    <Layout>
      <section className="section-spacing">
        <div className="container-narrow">
          <h1 className="mb-10">Photography</h1>

          {/* Grid */}
          <div 
            className="grid grid-cols-2 md:grid-cols-3 gap-1"
            role="list"
            aria-label="Photo gallery"
          >
            {photos.map((photo) => (
              <button
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="aspect-square bg-muted overflow-hidden cursor-pointer border-0 p-0 focus:outline-2 focus:outline-primary focus:outline-offset-2"
                role="listitem"
                aria-label={photo.caption || `Photo ${photo.id}`}
              >
                <img
                  src={photo.src}
                  alt={photo.caption || `Photo ${photo.id}`}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100"
                  loading="lazy"
                />
              </button>
            ))}
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Click any image to view full size. Use arrow keys to navigate, Escape to close.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-background/98 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 md:top-6 md:right-6 text-muted-foreground hover:text-foreground text-sm bg-transparent border-0 cursor-pointer p-2"
            aria-label="Close lightbox"
          >
            Close (Esc)
          </button>

          {/* Navigation hints */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
              const prevIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
              setSelectedPhoto(photos[prevIndex]);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-2xl bg-transparent border-0 cursor-pointer p-2 hidden md:block"
            aria-label="Previous photo"
          >
            ←
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
              const nextIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
              setSelectedPhoto(photos[nextIndex]);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-2xl bg-transparent border-0 cursor-pointer p-2 hidden md:block"
            aria-label="Next photo"
          >
            →
          </button>

          <div 
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.caption || "Full view"}
              className="w-full h-auto max-h-[75vh] object-contain"
            />
            {selectedPhoto.caption && (
              <p className="text-center text-sm text-muted-foreground mt-4 m-0">
                {selectedPhoto.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Photography;
