import React, { useState } from "react";
import Footer from "../components/Footer";
import { publications, sortOptions } from "../constants";
import { useTheme } from "../constants/ThemeContext";
import pub from "../../public/img/pub.jpg";
import { useTranslation } from "react-i18next";

const Publications = () => {
  const { theme } = useTheme();
  const { t, i18n } = useTranslation();
  const [sortBy, setSortBy] = useState("latest");
  const currentLanguage = i18n.language;

  const sortedPublications = [...publications].sort((a, b) => {
    if (sortBy === "latest") return new Date(b.date) - new Date(a.date);
    if (sortBy === "oldest") return new Date(a.date) - new Date(b.date);
    return 0;
  });

  // Translation keys
  const translations = {
    en: {
      title: "Publications",
      description: "This section highlights my academic publications, which explore critical issues in criminal justice, human rights, and punishment. Full texts of some works are available here, while others can be accessed through external links to open-access sources.",
      sortBy: "Sort by",
      tableHeaders: {
        date: "Date",
        title: "Title",
        subtitle: "Subtitle",
        keywords: "Keywords",
        author: "Author"
      }
    },
    es: {
      title: "Publicaciones",
      description: "Esta sección destaca mis publicaciones académicas, que exploran temas críticos en justicia penal, derechos humanos y castigo. Los textos completos de algunos trabajos están disponibles aquí, mientras que otros se pueden acceder a través de enlaces externos a fuentes de acceso abierto.",
      sortBy: "Ordenar por",
      tableHeaders: {
        date: "Fecha",
        title: "Título",
        subtitle: "Subtítulo",
        keywords: "Palabras clave",
        author: "Autor"
      }
    },
    fr: {
      title: "Publications",
      description: "Cette section met en lumière mes publications académiques qui explorent les questions critiques de justice pénale, droits humains et châtiment. Les textes intégraux de certains travaux sont disponibles ici, tandis que d'autres sont accessibles via des liens externes vers des sources en libre accès.",
      sortBy: "Trier par",
      tableHeaders: {
        date: "Date",
        title: "Titre",
        subtitle: "Sous-titre",
        keywords: "Mots-clés",
        author: "Auteur"
      }
    },
    it: {
      title: "Pubblicazioni",
      description: "Questa sezione evidenzia le mie pubblicazioni accademiche, che esplorano questioni critiche nella giustizia penale, diritti umani e punizione. I testi completi di alcune opere sono disponibili qui, mentre altri sono accessibili attraverso link esterni a fonti ad accesso aperto.",
      sortBy: "Ordina per",
      tableHeaders: {
        date: "Data",
        title: "Titolo",
        subtitle: "Sottotitolo",
        keywords: "Parole chiave",
        author: "Autore"
      }
    }
  };

  const currentTranslations = translations[currentLanguage] || translations.en;

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${pub})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Title and Description */}
      <div className="relative z-10 px-4 py-16 text-center text-white">
        <h1 className="mt-4 text-4xl font-bold">
          {currentTranslations.title}
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg font-normal">
          {currentTranslations.description}
        </p>
      </div>

      {/* Content Section */}
      <div className="container relative z-10 px-4 py-8 mx-auto lg:px-16">
        {/* Sort Options */}
        <div className="flex items-center mb-4 space-x-4 ml-14">
          <label className="text-lg font-bold text-white">
            {currentTranslations.sortBy}:
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={`px-3 py-2 border rounded-md shadow-sm ${
              theme === "dark"
                ? "bg-gray-800 text-white border-gray-600"
                : "bg-gray-100 text-black border-gray-300"
            }`}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label[currentLanguage] || option.label.en}
              </option>
            ))}
          </select>
        </div>

        {/* Publications Table */}
        <div className="overflow-x-auto">
          <table
            className={`w-full max-w-5xl mx-auto ${
              theme === "dark" ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <thead>
              <tr
                className={`${
                  theme === "dark"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                <th className="p-4">{currentTranslations.tableHeaders.date}</th>
                <th className="p-4">{currentTranslations.tableHeaders.title}</th>
                <th className="p-4">{currentTranslations.tableHeaders.subtitle}</th>
                <th className="p-4">{currentTranslations.tableHeaders.keywords}</th>
                <th className="p-4">{currentTranslations.tableHeaders.author}</th>
              </tr>
            </thead>
            <tbody>
              {sortedPublications.map((pub) => (
                <tr
                  key={pub.id}
                  className={`${
                    theme === "dark"
                      ? "hover:bg-gray-700"
                      : "hover:bg-gray-100"
                  }`}
                >
                  <td className="p-4">{pub.date}</td>
                  <td className="p-4">
                    {pub.link ? (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-semibold underline ${
                          theme === "dark" ? "text-teal-400" : "text-teal-600"
                        }`}
                      >
                        {pub.title[currentLanguage] || pub.title.en}
                      </a>
                    ) : (
                      <span
                        className={`font-semibold ${
                          theme === "dark" ? "text-teal-400" : "text-teal-600"
                        }`}
                      >
                        {pub.title[currentLanguage] || pub.title.en}
                      </span>
                    )}
                  </td>
                  <td className="p-4">{pub.subtitle[currentLanguage] || pub.subtitle.en}</td>
                  <td className="p-4">{pub.keywords[currentLanguage] || pub.keywords.en}</td>
                  <td className="p-4">{pub.authors}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Publications;