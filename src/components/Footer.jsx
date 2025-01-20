import React from "react";
import terms from "../constants/terms.pdf"; // Update the path if necessary
import policy from "../resume/policy.pdf"; // Update the path if necessary
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#303030" }} className="py-4 text-white">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 mx-auto sm:flex-row">
        {/* Copyright */}
        <div className="text-center sm:text-left">
          <p className="text-sm">
            © {currentYear} Paolo Sartorio |{" "}
            <a
              href={policy}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              {t("footer.privacyPolicy")}
            </a>{" "}
            |{" "}
            <a
              href={terms}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              {t("footer.termsConditions")}
            </a>{" "}
            |{" "}
            <span className="hover:text-teal-400">
              {t("footer.allRightsReserved")}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
