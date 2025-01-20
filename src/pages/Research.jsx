import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../constants/ThemeContext";
import Footer from "../components/Footer";
import research from "../../public/img/research1.jpg";

const Research = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen ${theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-white text-gray-800"}`}>
      {/* Content Section */}
      <div
      className="relative flex-grow h-full px-6 py-12 mt-10 bg-center bg-cover"
      style={{ backgroundImage: `url(${research})` }}
      >
        {/* Text Content */}
        <div className={`relative max-w-4xl p-6 mx-auto rounded-lg shadow-lg ${
          theme === "dark"
            ? "bg-gray-800 bg-opacity-90 text-gray-200"
            : "bg-gray-100 bg-opacity-90 text-gray-800"
        }`}>
          <h1 className="mb-8 text-3xl font-bold text-teal-500">
            {t("pages.research.title")}
          </h1>

          <p className="leading-relaxed text-justify">
            {t("pages.research.expandedAreas")}
          </p>

          <p className="mt-4 leading-relaxed text-justify">
            {t("pages.research.expandedAreas2")}
          </p>

          <h2 className="mt-8 text-xl font-semibold text-teal-500">
            {t("pages.research.mainHeading")}
          </h2>

          {t("pages.research.topics", { returnObjects: true }).map((topic, index) => (
            <div key={index} className="mt-6">
              <h3 className="mb-2 font-bold text-teal-500">
                {topic.heading}
              </h3>
              <p className="leading-relaxed text-justify">
                {topic.description}
              </p>
            </div>
          ))}

          <p className="mt-6 leading-relaxed text-justify">
            {t("pages.research.closing")}
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <Footer className="mt-8" />
    </div>
  );
};

export default Research;