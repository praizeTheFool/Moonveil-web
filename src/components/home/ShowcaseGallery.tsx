import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import showcase1 from "@/assets/showcase-1.png";
import showcase2 from "@/assets/showcase-2.png";
import showcase3 from "@/assets/showcase-3.png";
import showcase4 from "@/assets/showcase-4.png";
import showcase5 from "@/assets/showcase-5.png";
import showcase6 from "@/assets/showcase-6.png";
import showcase7 from "@/assets/showcase-7.png";
import showcase8 from "@/assets/showcase-8.png";

const showcaseImages = [
  { src: showcase1, alt: "Moonveil desktop with terminal and music player" },
  { src: showcase2, alt: "Moonveil minimal workspace" },
  { src: showcase3, alt: "Moonveil file manager view" },
  { src: showcase4, alt: "Moonveil system overview" },
  { src: showcase5, alt: "Moonveil with multiple windows" },
  { src: showcase6, alt: "Moonveil dark theme showcase" },
  { src: showcase7, alt: "Moonveil application launcher" },
  { src: showcase8, alt: "Moonveil notification center" },
];

export function ShowcaseGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? showcaseImages.length - 1 : selectedIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === showcaseImages.length - 1 ? 0 : selectedIndex + 1
      );
    }
  };

  return (
    <section className="py-24 border-t border-border/20">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-center">
            Showcase
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
            A glimpse into the Moonveil experience
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {showcaseImages.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative aspect-video overflow-hidden rounded-lg border border-border/30 bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={selectedIndex !== null} onOpenChange={closeLightbox}>
        <DialogContent className="max-w-[95vw] md:max-w-[85vw] max-h-[95vh] p-0 border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="relative flex items-center justify-center p-2 md:p-4">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute right-2 top-2 z-10 rounded-full bg-background/80 p-2 text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Previous button */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-2 text-muted-foreground transition-colors hover:bg-background hover:text-foreground md:left-4"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Image */}
            {selectedIndex !== null && (
              <img
                src={showcaseImages[selectedIndex].src}
                alt={showcaseImages[selectedIndex].alt}
                className="max-h-[85vh] w-auto rounded-lg object-contain"
              />
            )}

            {/* Next button */}
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-2 text-muted-foreground transition-colors hover:bg-background hover:text-foreground md:right-4"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-background/80 px-3 py-1 text-sm text-muted-foreground">
              {selectedIndex !== null && (
                <>
                  {selectedIndex + 1} / {showcaseImages.length}
                </>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
