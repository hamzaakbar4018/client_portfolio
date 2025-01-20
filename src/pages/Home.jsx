import React from 'react';
import img from '../../public/img/dd.jpg';
import Footer from '../components/Footer';
import { useTheme } from '../constants/ThemeContext';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className={theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}>
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 mt-16">
        {/* Image Section */}
        <div className="flex justify-center mb-12">
          <img src={img} alt="About" className="w-56 h-56 rounded-lg shadow-lg" />
        </div>

        {/* Content Section */}
        <div className="max-w-3xl mb-10 text-center">
          <h1 className="mb-6 text-3xl font-bold">{t('pages.home.welcome')}</h1>
          <p className="mb-6 text-lg leading-relaxed">{t('pages.home.tagline')}</p>
          {t('pages.home.description', { returnObjects: true }).map((paragraph, index) => (
            <p key={index} className="mb-6 text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
