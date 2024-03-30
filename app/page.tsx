import dynamic from "next/dynamic";
import { Box, CircularProgress } from "@mui/material";
import Header from "@/app/components/Header";

const Map = dynamic(() => import("@/app/components/Map"), {
  ssr: false,
  loading: () => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
        maxHeight: 700,
      }}
    >
      <CircularProgress />
    </Box>
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
