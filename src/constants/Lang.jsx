import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About",
        research: "Research",
        publications: "Publications",
        cv: "CV",
      },
      footer: {
        privacyPolicy: "Privacy Policy",
        termsConditions: "Terms & Conditions",
        allRightsReserved: "All Rights Reserved.",
      },
      pages: {
        home: {
          welcome: "Welcome",
          tagline: "Experience Matters: A Commitment to Justice and Human Rights",
          description: [
            "With over 15 years of experience as a criminal defense attorney and 5 years as a law professor, my work is driven by a profound commitment to comparative criminal law and human rights. I bring a unique perspective to justice, combining practical experience with academic rigor to address real-world legal challenges. My professional journey has bridged the gap between theory and practice, creating impactful solutions that inspire meaningful reform.",
            "Justice is not merely an abstract ideal—it is a dynamic force that influences individuals, communities, and nations. As Martin Luther King Jr. stated, 'Injustice anywhere is a threat to justice everywhere.' This belief fuels my advocacy for human rights, both in the courtroom and through my academic research. My work strives to uphold human dignity and promote justice on a global scale.",
            "Explore my website to discover more about my research, my journey, and my unwavering commitment to fostering justice worldwide."
          ]
          
        },
        about: {
          title: "About Me and My Work",
          description: "Learn more about my journey and values.",
          content: [
            "I did not enter the legal field with criminal law in mind. I initially saw the legal system as a well-oiled machine that ensured only the guilty would be punished. However, my experiences soon revealed a more painful reality. Our criminal justice system, though not without merit, disproportionately targets vulnerable populations—those with limited resources who are often overrepresented behind bars and most in need of help. This systemic issue is not confined to the United States but is a global concern. It was this disparity that led me to seek change.",
            "My work is driven by the belief that justice should be focused not just on punishment but on human rights and second chances. We are more than the worst thing we have done, and how we treat the most derided individuals in our society is the truest reflection of who we are as a people. My goal is to contribute to a justice system that acknowledges human dignity and offers opportunities for redemption and rehabilitation.",
            "I am a visiting professor at IE University Law School in Spain, where I teach criminal law and human rights. I have also been teaching law and human rights at the University of Minnesota Law School since 2020. In 2023, I completed my doctorate in Law at the Universidad Carlos III de Madrid. My research focused on comparative studies of life sentence practices, particularly the reimplementation of life sentences in Spain and the U.S., and the human rights implications of such sentences.",
          ],
        },
        
        research: {
          title: "",
          // intro: "My research focuses on the intersection of comparative criminal law...",
          // doctoral: "In my doctoral research at the Universidad Carlos III de Madrid...",
          expandedAreas:"My research focuses on the intersection of comparative criminal law, human rights, restorative justice, and parole systems. I aim to bring transparency and accountability to the administration of punishment, particularly in the context of tough-on-crime policies that prioritize lengthy incarceration over rehabilitation. These approaches, especially prevalent in the U.S., have consistently proven ineffective, yet they continue to dominate policy discussions. My work challenges these paradigms, emphasizing that valuable lessons can be learned from systems beyond U.S. borders—lessons often overlooked by scholars who dismiss comparative studies between the U.S. and other countries due to perceived differences.",

          expandedAreas2:"In my doctoral research at the Universidad Carlos III de Madrid, I demonstrated the significant value of comparing the Spanish and U.S. legal systems. Despite common assumptions, my findings provided novel insights into how the law-and-order approach, which remained a hallmark of 1970s U.S. policies, is unlikely to bring about lasting change.",

          mainHeading:"My ongoing research has expanded into several new areas:",

          topics: [
            {
              heading: "Virtual Life Sentences",
              description:"While there is growing discourse on the death penalty and life sentences, the status of long-term fixed sentences is often less clear. Sentences with minimum terms that effectively amount to virtual life sentences raise complex human rights questions.",
            },
            {
              heading: "Human Rights and Vulnerable Prisoners",
              description:"My research also delves into the human rights of prisoners, particularly those with mental health conditions. Recent rulings by international courts, including the European Court of Human Rights, emphasize the importance of ensuring that prisoners are not subjected to inhumane or degrading conditions. These decisions underscore the need for alternatives to incarceration, with a focus on rehabilitation and treatment rather than punishment.",
            },
          ],
          closing: "Through comparative analysis and interdisciplinary methods, I approach these issues from diverse perspectives...",
          noTopics: "No topics available.",
        },

        cv: {
          title: "Curriculum Vitae",
          description: "View my detailed academic and professional achievements.",
          education: "Education",
          details: [
            {
              degree: "Doctor of Philosophy (Ph.D.) in Law (cum laude)",
              university: "Universidad Carlos III de Madrid (Spain)",
            },
            {
              degree: "Master of Laws (LL.M.) in Trial Advocacy",
              university: "Temple University James Beasley School of Law (US)",
              highlights: ["Public Interest Fellow"],
            },
            {
              degree: "Juris Doctor (J.D.)",
              university: "William Mitchell College of Law (US)",
              highlights: [
                "Achievement in Public Service Award",
                "Public Interest Legal Fellow",
                "Editor-in-Chief, William Mitchell Law Raza Journal",
              ],
            },
            {
              degree: "Bachelor of Arts (B.A.)",
              major: "Sociology",
              minor: "Physics & Astronomy",
              university: "Brandon University (Canada)",
              highlights: ["Dean’s Honors List"],
            },
          ],
        },
      },
    },
  },
  es: {
    translation: {
      navbar: {
        home: "Inicio",
        about: "Acerca de",
        research: "Investigación",
        publications: "Publicaciones",
        cv: "CV",
      },
      footer: {
        privacyPolicy: "Política de Privacidad",
        termsConditions: "Términos y Condiciones",
        allRightsReserved: "Todos los derechos reservados.",
      },
      pages: {
        home: {
          welcome: "Bienvenido a mi sitio web",
          tagline: "La experiencia importa: un compromiso con la justicia y los derechos humanos",
          description: [
            "Con más de 15 años de experiencia como abogado defensor penal y 5 años como profesor de derecho, mi trabajo está impulsado por un profundo compromiso con el derecho penal comparado y los derechos humanos. Aporto una perspectiva única a la justicia, combinando experiencia práctica con rigor académico para abordar los desafíos legales del mundo real. Mi trayectoria profesional ha cerrado la brecha entre la teoría y la práctica, creando soluciones impactantes que inspiran reformas significativas.",
            "La justicia no es simplemente un ideal abstracto: es una fuerza dinámica que influye en los individuos, las comunidades y las naciones. Como afirmó Martin Luther King Jr.: 'La injusticia en cualquier lugar es una amenaza para la justicia en todas partes'. Esta creencia alimenta mi defensa de los derechos humanos, tanto en los tribunales como a través de mi investigación académica. Mi trabajo se esfuerza por defender la dignidad humana y promover la justicia a escala global.",
            "Explore mi sitio web para descubrir más sobre mi investigación, mi viaje y mi compromiso inquebrantable con el fomento de la justicia en todo el mundo."
          ]
          
          
        },
        about: {
          title: "Acerca de mí y mi trabajo",
          description: "Conozca más sobre mi trayectoria y valores.",
          content: [
            "No ingresé al campo legal con el derecho penal en mente. Inicialmente vi el sistema legal como una máquina bien engrasada que garantizaba que sólo los culpables serían castigados. Sin embargo, mis experiencias pronto revelaron una realidad más dolorosa. Nuestro sistema de justicia penal, aunque no sin mérito, se dirige desproporcionadamente a las poblaciones vulnerables: aquellas con recursos limitados que a menudo están sobrerrepresentadas tras las rejas y son las que más necesitan ayuda. Esta cuestión sistémica no se limita a Estados Unidos, sino que es una preocupación mundial. Fue esta disparidad la que me llevó a buscar el cambio.",
            "Mi trabajo está impulsado por la creencia de que la justicia debe centrarse no sólo en el castigo sino en los derechos humanos y las segundas oportunidades. Somos más que lo peor que hemos hecho, y la forma en que tratamos a las personas más ridiculizadas de nuestra sociedad es el reflejo más verdadero de quiénes somos como pueblo. Mi objetivo es contribuir a un sistema de justicia que reconozca la dignidad humana y ofrezca oportunidades de redención y rehabilitación.",
            "Soy profesor invitado en IE University Law School en España, donde enseño derecho penal y derechos humanos. También doy clases de derecho y derechos humanos en la Facultad de Derecho de la Universidad de Minnesota desde 2020. En 2023, completé mi doctorado en Derecho en la Universidad Carlos III de Madrid. Mi investigación se centró en estudios comparativos de las prácticas de cadena perpetua, particularmente la reimplementación de la cadena perpetua en España y Estados Unidos, y las implicaciones de dichas sentencias para los derechos humanos."
          ],
          
        },
        research: {
          title: "",
          // intro: "My research focuses on the intersection of comparative criminal law...",
          // doctoral: "In my doctoral research at the Universidad Carlos III de Madrid...",
          expandedAreas:"Mi investigación se centra en la intersección del derecho penal comparativo, los derechos humanos, la justicia restaurativa y los sistemas de libertad condicional. Mi objetivo es aportar transparencia y responsabilidad a la administración del castigo, particularmente en el contexto de políticas duras contra el crimen que priorizan el encarcelamiento prolongado sobre la rehabilitación. Estos enfoques, especialmente prevalentes en los Estados Unidos, han demostrado consistentemente ser ineficaces, pero continúan dominando las discusiones políticas. Mi trabajo desafía estos paradigmas, enfatizando que se pueden aprender lecciones valiosas de sistemas más allá de las fronteras de los Estados Unidos — lecciones a menudo ignoradas por académicos que descartan los estudios comparativos entre los Estados Unidos y otros países debido a las diferencias percibidas.",

          expandedAreas2:"En mi investigación doctoral en la Universidad Carlos III de Madrid, demostré el valor significativo de comparar los sistemas legales españoles y estadounidenses. A pesar de las suposiciones comunes, mis hallazgos proporcionaron ideas novedosas sobre cómo es poco probable que el enfoque de la ley y el orden, que siguió siendo un sello distintivo de las políticas de los Estados Unidos de la década de 1970, provoque un cambio duradero.",

          mainHeading:"Mi investigación en curso se ha expandido a varias áreas nuevas:",

          topics: [
            {
              heading: "Sentencias de Vida Virtual",
              description:"Si bien hay un discurso creciente sobre la pena de muerte y las penas de cadena perpetua, el estado de las sentencias fijas a largo plazo a menudo es menos claro. Las sentencias con términos mínimos que efectivamente equivalen a cadenas perpetuas virtuales plantean complejas cuestiones de derechos humanos.",
            },
            {
              heading: "Derechos Humanos y Prisioneros Vulnerables",
              description:"Mi investigación también profundiza en los derechos humanos de los presos, particularmente aquellos con condiciones de salud mental. Las recientes sentencias de los tribunales internacionales, incluido el Tribunal Europeo de Derechos Humanos, hacen hincapié en la importancia de garantizar que los presos no sean sometidos a condiciones inhumanas o degradantes. Estas decisiones subrayan la necesidad de alternativas al encarcelamiento, con un enfoque en la rehabilitación y el tratamiento en lugar del castigo.",
            },
          ],
          closing: "A través del análisis comparativo y los métodos interdisciplinarios, abordo estos temas desde diversas perspectivas...",
          noTopics: "No topics available.",
        },
        
       
        cv: {
          title: "Currículum Vitae",
          description: "Consulte mis logros académicos y profesionales.",
          education: "Educación",
          details: [
            {
              degree: "Doctorado en Filosofía (Ph.D.) en Derecho (cum laude)",
              university: "Universidad Carlos III de Madrid (España)",
            },
            {
              degree: "Máster en Derecho (LL.M.) en Litigación Oral",
              university: "Temple University James Beasley School of Law (Estados Unidos)",
              highlights: ["Becario de Interés Público"],
            },
            {
              degree: "Juris Doctor (J.D.)",
              university: "William Mitchell College of Law (Estados Unidos)",
              highlights: [
                "Premio al Logro en Servicio Público",
                "Becario de Interés Público Legal",
                "Editor en Jefe del William Mitchell Law Raza Journal",
              ],
            },
            {
              degree: "Licenciatura en Artes (B.A.)",
              major: "Sociología",
              minor: "Física y Astronomía",
              university: "Brandon University (Canadá)",
              highlights: ["Lista de Honor del Decano"],
            },
          ],
        },
        
        
      },
    },
  },
  fr: {
    translation: {
      navbar: {
        home: "Accueil",
        about: "À propos",
        research: "Recherche",
        publications: "Publications",
        cv: "CV",
      },
      footer: {
        privacyPolicy: "Politique de confidentialité",
        termsConditions: "Conditions générales",
        allRightsReserved: "Tous droits réservés.",
      },
      pages: {
        home: {
          welcome: "À propos de moi et de mon travail",
          tagline: "L'expérience compte : un engagement envers la justice et les droits humains",
          description: [
            "Avec plus de 15 ans d'expérience en tant qu'avocat de la défense pénale et 5 ans en tant que professeur de droit, mon travail est motivé par un profond engagement envers le droit pénal comparé et les droits de l'homme. J'apporte une perspective unique à la justice, combinant expérience pratique et rigueur académique pour relever des défis juridiques concrets. Mon parcours professionnel a comblé le fossé entre la théorie et la pratique, en créant des solutions percutantes qui inspirent des réformes significatives.",
            "La justice n'est pas simplement un idéal abstrait : c'est une force dynamique qui influence les individus, les communautés et les nations. Comme l'a déclaré Martin Luther King Jr. : « L'injustice, où qu'elle soit, est une menace pour la justice partout. » Cette conviction alimente ma défense des droits de l'homme, tant devant les tribunaux que dans le cadre de mes recherches universitaires. Mon travail s'efforce de défendre la dignité humaine et de promouvoir la justice à l'échelle mondiale.",
            "Explorez mon site Web pour en savoir plus sur mes recherches, mon parcours et mon engagement inébranlable en faveur de la justice dans le monde entier."
          ]
          
        },
        about: {
          title: "À propos de moi et de mon travail",
          description: "En savoir plus sur mon parcours et mes valeurs.",
          content: [
            "Je ne suis pas entré dans le domaine juridique en pensant au droit pénal. Au début, je voyais le système judiciaire comme une machine bien huilée qui garantissait que seuls les coupables seraient punis. Cependant, mes expériences ont vite révélé une réalité plus douloureuse. Notre système de justice pénale, bien que non sans mérite, cible de manière disproportionnée les populations vulnérables – celles qui disposent de ressources limitées, qui sont souvent surreprésentées derrière les barreaux et qui ont le plus besoin d’aide. Ce problème systémique ne se limite pas aux États-Unis mais constitue une préoccupation mondiale. Cela m’a poussé à chercher le changement.",
            "Mon travail est motivé par la conviction que la justice ne doit pas se concentrer uniquement sur la punition mais aussi sur les droits de l'homme et les secondes chances. Nous sommes bien plus que la pire chose que nous ayons faite, et la façon dont nous traitons les individus les plus ridiculisés dans notre société est le reflet le plus vrai de qui nous sommes en tant que peuple. Mon objectif est de contribuer à un système judiciaire qui reconnaît la dignité humaine et offre des opportunités de rédemption et de réhabilitation.",
            "Je suis professeur invité à la faculté de droit de l'Université IE en Espagne, où j'enseigne le droit pénal et les droits de l'homme. J'enseigne également le droit et les droits de l'homme à la faculté de droit de l'Université du Minnesota depuis 2020. En 2023, j'ai obtenu mon doctorat en Droit à l'Université Carlos III de Madrid. Mes recherches se sont concentrées sur des études comparatives des pratiques de condamnation à perpétuité, en particulier la réapplication des peines à perpétuité en Espagne et aux États-Unis, et les implications de ces peines sur les droits de l'homme."
          ],
          
        },
        research: {
          title: "",
          // intro: "My research focuses on the intersection of comparative criminal law...",
          // doctoral: "In my doctoral research at the Universidad Carlos III de Madrid...",
          expandedAreas:"Mes recherches portent sur l'intersection du droit pénal comparé, des droits de la personne, de la justice réparatrice et des systèmes de libération conditionnelle. Je vise à apporter transparence et responsabilité à l'administration de la peine, en particulier dans le contexte des politiques de lutte contre la criminalité qui privilégient la longue incarcération à la réadaptation. Ces approches, particulièrement répandues aux États-Unis, se sont toujours révélées inefficaces, mais elles continuent de dominer les discussions politiques. Mon travail remet en question ces paradigmes, soulignant que des leçons précieuses peuvent être tirées de systèmes au-delà des frontières des États-Unis — leçons souvent négligées par les chercheurs qui rejettent les études comparatives entre les États-Unis et d'autres pays en raison de différences perçues.",

          expandedAreas2:"Dans ma recherche doctorale à l'Universidad Carlos III de Madrid, j'ai démontré la valeur significative de la comparaison des systèmes juridiques espagnols et américains. Malgré des hypothèses communes, mes résultats ont fourni de nouvelles idées sur la façon dont l'approche loi-ordre, qui est restée une caractéristique des politiques des États-Unis des années 1970, ne devrait pas apporter de changement durable.",

          mainHeading:"Mes recherches en cours se sont étendues à plusieurs nouveaux domaines:",

          topics: [
            {
              heading: "Phrases Vie Virtuelle",
              description:"Bien que le discours sur la peine de mort et les peines à perpétuité soit de plus en plus prononcé, le statut des peines à durée déterminée à long terme est souvent moins clair. Les peines avec des peines minimales qui équivalent effectivement à des peines de prison à vie virtuelles soulèvent des questions complexes en matière de droits de la personne.",
            },
            {
              heading: "Droits de l'Homme et Prisonniers Vulnérables",
              description:"Mes recherches portent également sur les droits humains des prisonniers, en particulier ceux qui souffrent de troubles mentaux. Des décisions récentes de tribunaux internationaux, dont la Cour européenne des Droits de l'Homme, soulignent l'importance de veiller à ce que les prisonniers ne soient pas soumis à des conditions inhumaines ou dégradantes. Ces décisions soulignent la nécessité d'alternatives à l'incarcération, en mettant l'accent sur la réadaptation et le traitement plutôt que sur la punition.",
            },
          ],
          closing: "Par l'analyse comparative et les méthodes interdisciplinaires, j'aborde ces questions sous divers angles...",
          noTopics: "No topics available.",
        },
        
        
        cv: {
          title: "Curriculum Vitae",
          description: "Consultez mes réalisations académiques et professionnelles.",
          education: "Éducation",
          details: [
            {
              degree: "Doctorat en droit (mention très bien)",
              university: "Université Carlos III de Madrid (Espagne)",
            },
            {
              degree: "Master de droit (LL.M.) en plaidoirie",
              university: "Temple University James Beasley School of Law (États-Unis)",
              highlights: ["Boursier d'intérêt public"],
            },
            {
              degree: "Juris Doctor (J.D.)",
              university: "William Mitchell College of Law (États-Unis)",
              highlights: [
                "Prix pour service public",
                "Boursier d'intérêt public",
                "Rédacteur en chef du William Mitchell Law Raza Journal",
              ],
            },
            {
              degree: "Licence ès Arts (B.A.)",
              major: "Sociologie",
              minor: "Physique et astronomie",
              university: "Brandon University (Canada)",
              highlights: ["Liste des honneurs du doyen"],
            },
          ],
        },
      },
    },
  },
  
  it: {
    translation: {
      navbar: {
        home: "Home",
        about: "Chi siamo",
        research: "Ricerca",
        publications: "Pubblicazioni",
        cv: "CV",
      },
      footer: {
        privacyPolicy: "Politica sulla privacy",
        termsConditions: "Termini e condizioni",
        allRightsReserved: "Tutti i diritti riservati.",
      },
      pages: {
        home: {
          welcome: "Benvenuti nel mio sito web",
          tagline: "L'esperienza conta: un impegno per la giustizia e i diritti umani",
          description: [
            "Con oltre 15 anni di esperienza come avvocato difensore penale e 5 anni come professore di diritto, il mio lavoro è guidato da un profondo impegno per il diritto penale comparato e i diritti umani. Apporto una prospettiva unica alla giustizia, combinando l'esperienza pratica con il rigore accademico per affrontare le sfide legali del mondo reale. Il mio percorso professionale ha colmato il divario tra teoria e pratica, creando soluzioni di grande impatto che ispirano riforme significative.",
            "La giustizia non è semplicemente un ideale astratto: è una forza dinamica che influenza individui, comunità e nazioni. Come ha affermato Martin Luther King Jr., 'L'ingiustizia ovunque è una minaccia alla giustizia ovunque.' Questa convinzione alimenta la mia difesa dei diritti umani, sia in tribunale che attraverso la mia ricerca accademica. Il mio lavoro mira a sostenere la dignità umana e promuovere la giustizia su scala globale.",
            "Esplora il mio sito web per scoprire di più sulla mia ricerca, sul mio viaggio e sul mio costante impegno nel promuovere la giustizia in tutto il mondo."
          ]
          
        },
        about: {
          title: "Su di me e sul mio lavoro",
          description: "Scopri di più sul mio percorso e sui miei valori.",
          content: [
            "Non sono entrato nel campo legale pensando al diritto penale. Inizialmente vedevo il sistema legale come una macchina ben oliata che assicurava che solo i colpevoli venissero puniti. Tuttavia, le mie esperienze hanno presto rivelato una realtà più dolorosa. Il nostro sistema di giustizia penale , anche se non senza merito, prende di mira in modo sproporzionato le popolazioni vulnerabili, quelle con risorse limitate che sono spesso sovrarappresentate dietro le sbarre e che hanno più bisogno di aiuto. Questo problema sistemico non è limitato agli Stati Uniti ma è una preoccupazione globale mi ha portato a cercare il cambiamento.",
            "Il mio lavoro è guidato dalla convinzione che la giustizia dovrebbe concentrarsi non solo sulla punizione ma sui diritti umani e sulle seconde possibilità. Siamo più della cosa peggiore che abbiamo fatto, e il modo in cui trattiamo gli individui più derisi nella nostra società è il più vero riflessione su chi siamo come popolo. Il mio obiettivo è contribuire a un sistema giudiziario che riconosca la dignità umana e offra opportunità di redenzione e riabilitazione.",
            "Sono visiting professor presso la IE University Law School in Spagna, dove insegno diritto penale e diritti umani. Insegno anche diritto e diritti umani presso la University of Minnesota Law School dal 2020. Nel 2023, ho completato il mio dottorato in Giurisprudenza presso l'Università Carlos III di Madrid. La mia ricerca si è concentrata sugli studi comparativi delle pratiche di condanna all'ergastolo, in particolare sulla reimplementazione delle condanne all'ergastolo in Spagna e negli Stati Uniti, e sulle implicazioni di tali sentenze sui diritti umani.",
          ],
        },
        research: {
          title: "",
          // intro: "My research focuses on the intersection of comparative criminal law...",
          // doctoral: "In my doctoral research at the Universidad Carlos III de Madrid...",
          expandedAreas:"La mia ricerca si concentra sull'intersezione di diritto penale comparato, diritti umani, giustizia riparativa e sistemi di libertà vigilata. Miro a portare trasparenza e responsabilità all'amministrazione della punizione, in particolare nel contesto di politiche difficili da commettere che danno priorità alla lunga detenzione rispetto alla riabilitazione. Questi approcci, particolarmente diffusi negli Stati Uniti, si sono costantemente dimostrati inefficaci, eppure continuano a dominare le discussioni politiche. Il mio lavoro sfida questi paradigmi, sottolineando che preziose lezioni possono essere apprese da sistemi oltre i confini degli Stati Uniti — lezioni spesso trascurate da studiosi che respingono studi comparativi tra gli Stati Uniti e altri paesi a causa delle differenze percepite.",

          expandedAreas2:"Nella mia ricerca di dottorato presso l'Università Carlos III di Madrid, ho dimostrato il valore significativo del confronto tra i sistemi legali spagnoli e statunitensi. Nonostante le ipotesi comuni, le mie scoperte hanno fornito nuove intuizioni su come l'approccio della legge e dell'ordine, che è rimasto un segno distintivo delle politiche statunitensi degli anni '70, è improbabile che porti a cambiamenti duraturi.",

          mainHeading:"La mia ricerca in corso si è estesa in diverse nuove aree:",

          topics: [
            {
              heading: "Frasi di vita virtuali",
              description:"Mentre c'è un crescente discorso sulla pena di morte e l'ergastolo, lo stato delle condanne fisse a lungo termine è spesso meno chiaro. Le frasi con termini minimi che equivalgono effettivamente a ergastoli virtuali sollevano complesse questioni relative ai diritti umani.",
            },
            {
              heading: "Diritti umani e prigionieri vulnerabili",
              description:"La mia ricerca approfondisce anche i diritti umani dei detenuti, in particolare quelli con condizioni di salute mentale. Le recenti sentenze dei tribunali internazionali, compresa la Corte europea dei diritti dell'uomo, sottolineano l'importanza di garantire che i detenuti non siano soggetti a condizioni disumane o degradanti. Queste decisioni sottolineano la necessità di alternative all'incarcerazione, con particolare attenzione alla riabilitazione e al trattamento piuttosto che alla punizione.",
            },
          ],
          closing: "Attraverso analisi comparative e metodi interdisciplinari, affronto questi problemi da diverse prospettive ...",
          noTopics: "No topics available.",
        },
        
       
        cv: {
          title: "Curriculum Vitae",
          description: "Consulta i miei successi accademici e professionali.",
          education: "Educazione",
          details: [
            {
              degree: "Dottorato in Giurisprudenza (cum laude)",
              university: "Università Carlos III di Madrid (Spagna)",
            },
            {
              degree: "Master in Giurisprudenza (LL.M.) in Difesa Processuale",
              university: "Temple University James Beasley School of Law (Stati Uniti)",
              highlights: ["Borsista di interesse pubblico"],
            },
            {
              degree: "Juris Doctor (J.D.)",
              university: "William Mitchell College of Law (Stati Uniti)",
              highlights: [
                "Premio per il servizio pubblico",
                "Borsista di interesse pubblico",
                "Caporedattore del William Mitchell Law Raza Journal",
              ],
            },
            {
              degree: "Laurea in Lettere (B.A.)",
              major: "Sociologia",
              minor: "Fisica e Astronomia",
              university: "Brandon University (Canada)",
              highlights: ["Lista d'onore del decano"],
            },
          ],
        },
      },
    },
  },
  
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;