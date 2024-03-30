import dynamic from "next/dynamic";
import { Box, CircularProgress } from "@mui/material";
import Header from "@/app/components/Header";

const Map = dynamic(() => import("@/app/components/Map"), {
  ssr: false,
  loading: () => (
    <section className="h-full max-h-[700px] w-full">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <CircularProgress />
      </Box>
    </section>
  ),
});

export default function Home() {
  return (
    <main className="font-rubik flex h-screen w-full max-w-[1440px] flex-col items-center justify-center">
      <Header />
      <Map />
    </main>
  );
}
