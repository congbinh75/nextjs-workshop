import "@/styles/globals.css";
import "@/styles/base.css";
import "@/styles/vendor.css";
import "@/styles/main.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout;
  if (getLayout) {
    return getLayout(<Component {...pageProps} />);
  }
  return <Component {...pageProps} />;
}
