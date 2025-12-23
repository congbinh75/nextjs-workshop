import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Script src="/js/jquery-2.1.3.min.js"></Script>
      <Script src="/js/plugins.js"></Script>
      <Script src="/js/jquery.appear.js"></Script>
      <Script src="/js/main.js"></Script>
      <Script src="/js/modernizr.js"></Script>
      <Script src="/js/pace.min.js"></Script>
      <body className="antialiased" style={{ backgroundColor: "white" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
