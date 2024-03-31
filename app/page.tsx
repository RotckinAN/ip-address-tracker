import dynamic from "next/dynamic";
import { Box, CircularProgress } from "@mui/material";
import Header from "@/app/components/Header";

const Map = dynamic(() => import("@/app/components/Map"), {
  ssr: false,
  loading: () => (
    <div className="h-full max-h-full w-full xl:max-h-[700px]">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <CircularProgress />
      </Box>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="flex h-screen w-full max-w-[1440px] flex-col items-center justify-center font-rubik">
      <Header />
      <Map />
    </main>
  );
}
