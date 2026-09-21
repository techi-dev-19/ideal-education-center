import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { PLACEHOLDER_PAGES } from "./data/pages";

import Home from "./pages/Home";
import OurHistory from "./pages/OurHistory";
import OurVisionaries from "./pages/OurVisionaries";
import Admission from "./pages/Admission";
import Contact from "./pages/Contact";
import Happenings from "./pages/Happenings";
import Kathasangam from "./pages/Kathasangam";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

// URLs are the same as the original site (e.g. /our-history, /contact-us).
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />

        {/* Fully built pages */}
        <Route path="our-history" element={<OurHistory />} />
        {/* <Route path="our-visionaries" element={<OurVisionaries />} /> */}
        <Route path="admission" element={<Admission />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="happenings" element={<Happenings />} />
        <Route path="kathasangam" element={<Kathasangam />} />

        {/* Pages whose content still needs to be added */}
        {PLACEHOLDER_PAGES.map((p) => (
          <Route
            key={p.path}
            path={p.path.slice(1)}
            element={<PlaceholderPage page={p} />}
          />
        ))}

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
