import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function TrackPageView() {
  const location = useLocation();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "page_view_spa",
      page_path: location.pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location.pathname]);

  return null;
}
