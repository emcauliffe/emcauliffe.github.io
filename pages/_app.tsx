import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";

import "../styles/globals.css";
import "../styles/katex.css";
import "highlight.js/styles/a11y-light.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
