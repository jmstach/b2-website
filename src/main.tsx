
  import { createRoot } from "react-dom/client";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import App from "./app/App.tsx";
  import { PrivacyPolicy } from "./app/pages/PrivacyPolicy.tsx";
  import { TermsOfUse } from "./app/pages/TermsOfUse.tsx";
  import { WhatsNew } from "./app/pages/WhatsNew.tsx";
  import "./styles/index.css";

  createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/app" element={<App />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/whats-new" element={<WhatsNew />} />
      </Routes>
    </BrowserRouter>
  );
