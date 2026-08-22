import type { Metadata } from "next";
import AboutSection from "@/components/about-section";

export const metadata: Metadata = {
  title: "About — Guadalupe Miró",
  description:
    "Product designer bridging brand craft and product systems. Currently at Apaleo.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-1 flex-col">
      <AboutSection />
    </div>
  );
}
