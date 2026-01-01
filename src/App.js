import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "@dr.pogodin/react-helmet";
import { ThemeProvider } from "./contexts/ThemeContext";
import LandingPage from "./pages/LandingPage";
import ScrollToTop from "./components/ScrollToTop";
import TrackPageView from "./components/TrackPageView";
import { Toaster } from "./components/ui/toaster";
import "./App.css";

// lazy untuk halaman selain landing
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <div className="App min-h-screen bg-background text-foreground transition-colors">
          <BrowserRouter>
            <ScrollToTop />
            <TrackPageView />

            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>

          <Toaster />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
