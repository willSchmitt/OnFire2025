import { Description } from "@/components/Description";
import Header from "@/components/Header";
import Image from "next/image";
// import BackgroundFire from "../../public/bg-fire.jpg";
import Carousel from "@/components/Carousel";
import { InfoButtons } from "@/components/InfoButtons";

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
      <Description targetId="secao2" />
      <Carousel />
      <InfoButtons />
    </main>
  );
}
