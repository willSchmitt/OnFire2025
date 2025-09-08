import { Description } from "@/components/Description";
import Header from "@/components/Header";
import Image from "next/image";
import { InfoButtons } from "@/components/InfoButtons";
import SlideVerticalResponsive from "@/components/SlidePictures";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center gap-10 p-9 text-white overflow-hidden">
      {/* Background */}
      <Image
        src="/bg-fire.jpg"
        alt="Fundo"
        fill
        priority
        className="absolute inset-0 object-cover object-center -z-10"
      />

      <Header />
      <Description />
      <SlideVerticalResponsive />
      <InfoButtons />
    </main>
  );
}
