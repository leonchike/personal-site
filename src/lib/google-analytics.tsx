import Script from "next/script";

const GoogleAnalytics = () => {
  const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

  if (!GA_ID) {
    return null;
  }

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js? 
      id=${GA_ID}`}
      ></Script>
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_ID}');
        `,
        }}
      ></Script>
    </>
  );
};
export default GoogleAnalytics;
