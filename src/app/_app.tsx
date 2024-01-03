import React from "react";
import { AppProps } from "next/app";

import RootLayout from "layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component pageProps={pageProps} />
    </RootLayout>
  );
}