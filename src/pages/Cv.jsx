import React from "react";
import img from "../../public/img/CV1.jpg"; // Use CV image as the background
import { useTheme } from "../constants/ThemeContext";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const Cv = () => {
  const { theme } = useTheme(); // Access the current theme
  const { t } = useTranslation(); // Access translations

  return (
    <div
      className={`flex flex-col min-h-screen bg-center bg-cover ${
        theme === "dark" ? "text-gray-200" : "text-gray-800"
      }`}
      style={{
        backgroundImage: `url(${img})`, // Set the CV image as the background
        backgroundAttachment: "fixed", // Ensure the background stays fixed during scroll
      }}
    >
      {/* CV Overview Section */}
      <div className="pt-10 mt-10 mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-white">
          {t("pages.cv.title")}
        </h1>
        <p className="text-lg leading-relaxed text-white">
          {t("pages.cv.description")}
        </p>
      </div>

      {/* CV Content Section */}
      <div
        className={`max-w-3xl p-8 mx-auto mb-12 rounded-xl shadow-md ${
          theme === "dark"
            ? "bg-black text-gray-200 border border-gray-700"
            : "bg-white text-gray-800 border border-gray-300"
        }`}
      >
        <h2 className="mb-6 text-2xl font-semibold">{t("pages.cv.education")}</h2>
        <ul className="space-y-8">
          {t("pages.cv.details", { returnObjects: true }).map((item, index) => (
            <li key={index}>
              <h3 className="text-xl font-bold">{item.degree}</h3>
              <p>{item.university}</p>
              {item.highlights && (
                <ul className="pl-6 list-disc">
                  {item.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Cv;
