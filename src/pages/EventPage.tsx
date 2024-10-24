import React from "react";
import Navbar from "../components/Navbar/Navbar.tsx";
import HurricaneHelene from "../components/HurricaneHelene/HurricaneHelene.tsx";
import ArticleSection from "../components/ArticleSection/ArticleSection.tsx";
import NewsSection from "../components/NewsSection/NewsSection.tsx";
function EventPage() {
  return (
    <div>
      <Navbar />
      <HurricaneHelene />
      <NewsSection />
      <ArticleSection />
    </div>
  );
}

export default EventPage;
