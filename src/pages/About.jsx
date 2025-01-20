import React from "react";
import Footer from "../components/Footer";
import profile from "../../public/img/about1.jpg";
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { SiOrcid, SiZotero, SiGooglescholar } from "react-icons/si";
import { useTheme } from "../constants/ThemeContext";
import { useTranslation } from "react-i18next";
import lady from "../../public/img/lady.jpg";

const About = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div 
      className={`flex flex-col min-h-screen ${
        theme === "dark" ? "bg-black text-gray-200" : "bg-white text-gray-800"
      }`}
      style={{
        backgroundImage: `url(${lady})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay with flex-grow to push footer down */}
      <div
        className={`flex-grow ${
          theme === "dark" ? "bg-black bg-opacity-80" : "bg-white bg-opacity-70"
        }`}
      >
        {/* Main content */}
        <div className="container px-4 py-12 mx-auto lg:flex lg:gap-12 lg:items-start">
          {/* Left Section: Profile, Name, Role, Social Icons */}
          <div className="flex mt-40 flex-col items-center lg:w-1/3">
            {/* Profile Image */}
            {/* <img
              src={profile}
              alt="Profile"
              className="object-cover w-64 h-64 rounded-lg shadow-lg"
            /> */}

            {/* Name and Role */}
            <h2 className="mt-4 text-lg text-center">
              {t("pages.about.title")}
            </h2>

            {/* Social Media Icons */}
            <div className="flex flex-wrap justify-center gap-3 mt-12">
              <a
                href="mailto:example@example.com"
                className={`flex items-center px-3 py-2 space-x-1 transition border rounded-md ${
                  theme === "dark"
                    ? "text-white border-white hover:text-teal-500 hover:border-teal-500"
                    : "text-gray-800 border-gray-800 hover:text-teal-500 hover:border-teal-500"
                }`}
              >
                <FiMail size={18} />
              </a>
              <a
                href="https://linkedin.com"
                className={`flex items-center px-3 py-2 space-x-1 transition border rounded-md ${
                  theme === "dark"
                    ? "text-white border-white hover:text-teal-500 hover:border-teal-500"
                    : "text-gray-800 border-gray-800 hover:text-teal-500 hover:border-teal-500"
                }`}
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://orcid.org"
                className={`flex items-center px-3 py-2 space-x-1 transition border rounded-md ${
                  theme === "dark"
                    ? "text-white border-white hover:text-teal-500 hover:border-teal-500"
                    : "text-gray-800 border-gray-800 hover:text-teal-500 hover:border-teal-500"
                }`}
              >
                <SiOrcid size={18} />
              </a>
              <a
                href="https://zotero.org"
                className={`flex items-center px-3 py-2 space-x-1 transition border rounded-md ${
                  theme === "dark"
                    ? "text-white border-white hover:text-teal-500 hover:border-teal-500"
                    : "text-gray-800 border-gray-800 hover:text-teal-500 hover:border-teal-500"
                }`}
              >
                <SiZotero size={18} />
              </a>
              <a
                href="https://scholar.google.com"
                className={`flex items-center px-3 py-2 space-x-1 transition border rounded-md ${
                  theme === "dark"
                    ? "text-white border-white hover:text-teal-500 hover:border-teal-500"
                    : "text-gray-800 border-gray-800 hover:text-teal-500 hover:border-teal-500"
                }`}
              >
                <SiGooglescholar size={18} />
              </a>
            </div>
          </div>

          {/* Right Section: Text Content */}
          <div className="mt-8 lg:w-2/3 lg:mt-8">
            {t("pages.about.content", { returnObjects: true }).map(
              (paragraph, index) => (
                <p
                  key={index}
                  className="mt-4 leading-relaxed text-justify"
                >
                  {paragraph}
                </p>
              )
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;