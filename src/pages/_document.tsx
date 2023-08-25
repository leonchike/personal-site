import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#fafafa" />
        <meta property="og:title" content="Chike Nwankwo - Personal Site" />
        <meta property="og:site_name" content="Chike Nwankwo - Personal Site" />
        <meta
          property="og:description"
          content="A space to showcase my experiences and projects."
        />
        <meta
          property="og:image"
          content="https://imagedelivery.net/camphNQlX5poswEZJbu_Cw/5e091063-f025-4510-b7f9-5039b381dd00/public"
        />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {/* Necessary to prevent error: window.gtag is not defined for Next.js-hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          `,
          }}
        />
      </body>
    </Html>
  );
}
