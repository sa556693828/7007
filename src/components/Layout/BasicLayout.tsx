import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
// import LoadingPage from "../LoadingPage/LoadingPage";
//   import Loading from "../../pages/Loading";
import Footer from "../Footer/Footer";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const isMobile = useBreakpointValue({ base: true, lg: false });
  const urlPath = useRouter().pathname;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, [router]);

  if (isLoading)
    return (
      <main
        className={`flex min-h-[100dvh] max-w-[100vw] items-center justify-center text-black dark:text-white ${isVisible ? "opacity-0" : "opacity-100"} transition-all duration-[800ms]`}
      >
        Loading
      </main>
    );

  return (
    <>
      <Header urlPath={urlPath} />
      <main className="min-h-[100dvh] max-w-[100vw] text-black dark:text-white">
        {children}
      </main>
      {urlPath !== "/nft" && <Footer urlPath={urlPath} />}
    </>
  );
}
