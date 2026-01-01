import React from "react";
import { Helmet } from "@dr.pogodin/react-helmet";
import { useLocation } from "react-router-dom";

const DEFAULTS = {
  siteName: "StartCode Indonesia",
  baseUrl: "https://startcode.id", // ganti ke domain final nanti
  defaultTitle: "StartCode Indonesia | Digital Solutions & IT Consultancy",
  defaultDescription:
    "StartCode Indonesia menyediakan solusi digital: web, mobile, enterprise software, dan produk AI untuk mempercepat transformasi bisnis.",
  defaultImage: "https://startcode.id/startcode-og.png",
  twitterSite: "@startcodeid",
};

export default function Seo({
  title,
  description,
  image,
  canonical,
  noIndex = false,
  lang = "id",
  jsonLd, // optional object
}) {
  const location = useLocation();

  const finalTitle = title ? `${title} | ${DEFAULTS.siteName}` : DEFAULTS.defaultTitle;
  const finalDesc = description || DEFAULTS.defaultDescription;
  const finalImage = image || DEFAULTS.defaultImage;

  const url =
    canonical ||
    `${DEFAULTS.baseUrl}${location.pathname}${location.search || ""}`;

  return (
    <Helmet htmlAttributes={{ lang }}>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <link rel="canonical" href={url} />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={DEFAULTS.siteName} />
      <meta property="og:image" content={finalImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:site" content={DEFAULTS.twitterSite} />

      {/* JSON-LD optional */}
      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  );
}
