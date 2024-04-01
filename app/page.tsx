import dynamic from "next/dynamic";
import Header from "@/app/components/Header";
import Progress from "@/app/components/Progress";

const Map = dynamic(() => import("@/app/components/Map"), {
  ssr: false,
  loading: () => <Progress />,
});

export default function Home() {
  return (
    <main className="flex h-screen w-full max-w-[1440px] flex-col items-center justify-center font-rubik">
      <Header />
      <Map />
    </main>
  );
}
