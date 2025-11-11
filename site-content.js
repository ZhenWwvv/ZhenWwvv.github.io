// Centralized site content configuration. Update this file to change site data.
// After editing and saving, reload any page to see updates immediately.

window.SITE_CONTENT = {
  profile: {
    name: "Grace Zhen Wang",
    email: "wangzh@iloguest.org",
    phone: "+41 762685041",
    location: "5035 S East End Ave., Chicago, IL, 60615 U.S.",
    title: "Master of Science in Computational Analysis and Public Policy (MSCAPP)",
    subtitle: "Data Science | Software Engineering | Artificial Intelligence",
    emojis: "💻 🎸 ☕ 🧠 ❤️",
    aboutBlurb: "Data scientist with 9+ years across AI, machine learning, data visualization and supply chain optimization — turning complex datasets into actionable insights. Experience at the ILO and multinational firms (Nissan/JATCO, Fortune Brands) bridging technology and public policy to drive data‑informed strategy and impact.",
    // Optional portrait images; use photoSmall as the thumbnail (第三张图),
    // and photoLarge as the zoomed image (第二张图). Fallback to photo.
    photoSmall: "ren.jpg", // e.g. "assets/thumbnail.jpg"
    photoLarge: "ren.jpg", // e.g. "assets/fullsize.jpg"
    photo: "ren.jpg", // legacy single image path (kept for backward compatibility)
    taglines: [
      "Data Science | Software Engineering | AI",
      "Policy Analysis | Public Sector Tech",
      "Coffee, travel, and building useful tools"
    ],
    basedIn: ["Geneva, Switzerland", "Chicago, USA", "Shanghai, China"],
    coffeePhoto: "微信图片_20251110233207_58_252.jpg", // Geneva view
    socials: {
      // Updated per request
      linkedin: "https://www.linkedin.com/in/zhenwww",
      github: "https://github.com/ZhenWwvv",
      instagram: "https://www.instagram.com/nehzzhenwang/",
      youtube: ""
    },
    knownFor: [
      "International Labour Organization – Data Scientist Intern 2025–",
      "The University of Chicago – MSc in Computational Analysis and Public Policy 2023–2026",
      "CHIRP Radio – Full Stack Team Leader & Project Manager 2024–2025",
      "Delta Health Alliance – Data Analyst 2024"
    ],
    links: {
      homepage: "index.html",
      linkedin: "https://www.linkedin.com/in/zhenwww",
      github: "https://github.com/ZhenWwvv"
    }
  },
  education: [
    {
      school: "The University of Chicago",
      degree: "Master of Science in Computational Analysis and Public Policy (MSCAPP)",
      major: "",
      period: { start: "2023-08", end: "2026-06" },
      highlights: []
    }
  ],
  experience: [
    {
      sector: "international",
      id: "il",
      organization: "International Labour Organization (ILO)",
      role: "Data Scientist Intern",
      location: "Geneva, Switzerland",
      period: { start: "2025-05", end: "current" },
      logoDomain: "ilo.org",
      orgInfo: {
        name: "Our Organization & Unit Overview",
        desc1: "The International Labour Organization (ILO) is the only tripartite UN agency that brings together governments, employers, and workers to set labour standards, promote decent work, and advance social justice worldwide.",
        desc2: "Within the ILO, the Youth Employment Unit addresses the key challenges facing young people in the labour market — including unemployment, informal work, and the transition from school to work. The department focuses on evidence-based policy design, knowledge exchange, and partnerships to expand productive and decent employment opportunities for youth, especially those in vulnerable situations.",
        url: "https://www.ilo.org/about-ilo"
      },
      roleInfo: {
        name: "My Role and Responsibilities",
        desc1: "I work within the Youth Employment team, contributing to two flagship initiatives — the Youth Employment Barometer and the YEAP Dashboard. The Barometer is a global research project that collects and analyses youth survey data to understand aspirations and employment realities, while the YEAP Dashboard visualizes cross-country indicators to support data-driven policy strategies.",
        desc2: "Together, these projects aim to amplify youth voices and support the development of more inclusive, sustainable, and future-oriented employment policies.",
        url: "https://www.ilo.org/topics-and-sectors/youth-employment"
      },
      gallery: {
        name: "Events Photo Gallery",
        images: [
          { src: "ee7f93fae4b3d79fd08da49bb4acfadd.jpg", title: "Interesting event during ILC (International Labor Conference)" },
          { src: "IMG_4145.PNG", title: "The global coalition for social justice seminar" },
          { src: "DSC_2775.jpg", title: "Youth Employment and the Green Transition" },
          { src: "48b651a06f942aa20a2814bde7199f0c.JPEG", title: "With colleagues at ILC" },
          { src: "IMG_6272.JPEG", title: "During AI for good" },
          { src: "IMG_6444.JPEG", title: "Met the founder of Alibaba Cloud" },
          { src: "IMG_3609.JPEG", title: "UN Geneva Palais des Nations" }
        ]
      },
      teamMoments: {
        name: "Team Moments & Behind the Scenes",
        videos: [
          { src: "IMG_3609.MOV", title: "Video 1" },
          { src: "IMG_6272.MOV", title: "Video 2" },
          { src: "IMG_6444.MOV", title: "Video 3" }
        ]
      },
      bullets: [
        "Develop interactive dashboards using Dash, Streamlit and Google Looker Studio to visualize global youth employment survey data (YEAP), enabling cross-country policy insights and stakeholder engagement.",
        "Design scalable data pipeline for the Youth Employment Barometer 2025, capturing trends across 100+ countries, addressing sampling bias and regional disparities through automated data cleaning and analysis scripts. Developed custom visual templates (e.g., Sankey, butterfly charts) to support dynamic reporting and global policy advocacy."
      ]
    },
    {
      sector: "public",
      id: "cr",
      organization: "CHIRP Radio (Part-time)",
      role: "Full Stack Team Leader & Project Manager",
      location: "Chicago, IL",
      period: { start: "2024-09", end: "2025-05" },
      logoDomain: "chirpradio.org",
      bullets: [
        "Led a team of 15 members to design a SaaS-based music library system. Structured project plans, milestones, resource allocation, created roadmaps, timelines, and define assignments/deliverables from scratch.",
        "Developed automated workflows and deployed website for DJs and users by leveraging Python, JS, Flask, SQL, and Mutagen, to improve metadata accuracy, user accessibility, system performance and processing time (40%+).",
        "Implemented cloud integration solutions to drive collaborative technical solutions across applications."
      ]
    },
    {
      sector: "public",
      organization: "Delta Health Alliance",
      role: "Health & Education Data Scientist",
      location: "Memphis, TN",
      period: { start: "2024-07", end: "2024-09" },
      logoDomain: "deltahealthalliance.org",
      bullets: [
        "Delivered the research, data analysis and visualization for education and health programs, producing reports.",
        "Analyzed teenage pregnancy, STDs awareness, and infant mortality trends in the U.S. Delta region, assessing intervention impact and demographic disparities."
      ]
    },
    {
      sector: "public",
      id: "ai",
      organization: "AccessBridge International",
      role: "International Trade, Economic Data Scientist",
      location: "Washington, D.C.",
      period: { start: "2024-06", end: "2024-08" },
      logoUrl: "屏幕截图 2025-11-11 151635.png",
      bullets: [
        "Led supplier consultations and stakeholders' collaboration to gather, clean, and integrate multi-source datasets for investment site selection in Mexico's semiconductor and NEV sectors, addressing key criteria including economy, education, real estate, cost, and policy.",
        "Developed full-stack dashboard using Python (Plotly Dash), JavaScript, and geospatial tools; integrated APIs, Matplotlib, and Seaborn for real-time visualization and insights, optimizing predictive capabilities, and preparing data infrastructure for future machine learning models."
      ]
    },
    {
      sector: "private",
      id: "mi",
      organization: "Moen Incorporated / Fortune Brands",
      role: "Global Category Sourcing Manager",
      location: "Guangzhou, China",
      period: { start: "2021-05", end: "2022-06" },
      logoDomain: "moen.com",
      orgInfo: {
        name: "Fortune Brands Innovations (NYSE: FBIN)",
        desc1: "A leader in home, security and commercial building markets, focused on accelerating growth through innovation, brand strength and connected-product.",
        desc2: "Headquartered in Illinois, USA, FBIN operates globally with a portfolio of top brands across water, outdoors & security segments.",
        url: "https://www.fbin.com/"
      },
      roleInfo: {
        name: "Moen Incorporated",
        desc1: "A subsidiary of Fortune Brands Innovations, Moen is an American plumbing-fixture company specializing in faucets and smart water systems, dedicated to enhancing the experience with water.",
        desc2: "Headquartered in North Olmsted, Ohio, Moen leads the industry in innovation and design of residential water solutions worldwide.",
        url: "https://www.moen.com/"
      },
      bullets: [
        "Led 34 new category projects, from market analysis, Brand Design & Innovation Conference planning, budgeting to implementation. Optimized supply chain of 5 entry level faucets, saving more than $1.12 million.",
        "Created analytical reports with Qlik for purchasing management, raw material studies, and project analysis.",
        "Won the High Five Award (The top 5 best practice teams with significant projects and achievements)."
      ]
    },
    {
      sector: "private",
      id: "ja",
      organization: "JATCO Automatic Transmission Ltd / Nissan",
      role: "Assistant Manager in Supply Chain Management",
      location: "Guangzhou, China",
      period: { start: "2017-06", end: "2021-05" },
      logoDomain: "jatco.co.jp",
      logoSvg: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 110\"><defs><linearGradient id=\"nissanBg\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\"><stop offset=\"0%\" stop-color=\"#3a090b\"/><stop offset=\"100%\" stop-color=\"#8c1d1f\"/></linearGradient></defs><rect width=\"320\" height=\"110\" rx=\"18\" fill=\"url(#nissanBg)\"/><text x=\"160\" y=\"62\" text-anchor=\"middle\" font-family=\"'Helvetica Neue', 'Arial Black', Arial, sans-serif\" font-size=\"56\" font-weight=\"700\" fill=\"#ffffff\" letter-spacing=\"8\">NISSAN</text><text x=\"160\" y=\"90\" text-anchor=\"middle\" font-family=\"'Helvetica Neue', Arial, sans-serif\" font-size=\"20\" font-weight=\"600\" fill=\"#ffffff\" letter-spacing=\"4\">GROUP OF CHINA</text></svg>",
      orgInfo: {
        name: "Nissan Motor Corporation",
        desc1: "Nissan Motor Corporation is a leading global automobile manufacturer headquartered in Yokohama, Japan, dedicated to \"driving innovation to enrich people's lives.\" Nissan designs, manufactures, and sells a diverse range of vehicles and mobility technologies worldwide.",
        url: "https://www.nissan-global.com/EN/"
      },
      roleInfo: {
        name: "JATCO Ltd.",
        desc1: "A subsidiary of Nissan Motor Corporation, JATCO is a global leader in automotive transmission systems specializing in CVT, AT, and electric drive technologies, dedicated to advancing efficient and sustainable mobility.",
        url: "https://www.jatco.co.jp/english/"
      },
      bullets: [
        "Conducted global EV supply chain and OEM research, supporting EV transformation and market expansion. Led deep localization of 260+ target parts, yearly saving 12.3% (approx.$95.45million).",
        "Designed data-driven systems for purchase performance review and personnel evaluation, enabling 3-year cost reduction forecasting, multidimensional decision analytics, and a skill-based incentive framework.",
        "Received the President Award (for top departmental professional excellence)."
      ]
    },
    {
      sector: "private",
      organization: "Nidec (Guangzhou) Auto Drive System Co., Ltd",
      role: "Senior Purchasing Specialist",
      location: "Guangzhou, China",
      period: { start: "2013-04", end: "2017-05" },
      logoSvg: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 60\"><rect width=\"200\" height=\"60\" fill=\"white\"/><defs><linearGradient id=\"nidecG\" x1=\"0\" y1=\"0\" x2=\"200\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#00A651\"/><stop offset=\"100%\" stop-color=\"#00B956\"/></linearGradient></defs><text x=\"100\" y=\"42\" font-family=\"Arial, sans-serif\" font-size=\"36\" font-weight=\"900\" fill=\"url(#nidecG)\" text-anchor=\"middle\" transform=\"skewX(-6)\" letter-spacing=\"-1.5\">Nidec</text></svg>",
      bullets: [
        "Designed analysis models and led VAVE to manage cross-departmental cost goals, saved an annual of $6 million.",
        "Developed mold management models to oversee service life and investment planning."
      ]
    }
  ],
  research: [
    {
      title: "Time Series Modeling With Applications in Economics and Public Health (R Programming)",
      venue: "MIT (Massachusetts Institute of Technology)",
      year: "2023",
      authors: "Zhen Wang",
      link: "#",
      supervisor: "Dr. Peter Kempthorne, MIT (Massachusetts Institute of Technology)",
      description: "Team lead, Led a time series forecasting project on the Metaverse's prospects (autocorrelation, residual, ARIMA model)"
    },
    {
      title: "Analysis of the Future Possibility of Metaverse - A Case Study of Tencent",
      venue: "FIBA 2023; to be published in BCP Business & Management (ISSN: 2692-6156)",
      year: "2023",
      authors: "Zhen Wang",
      link: "#"
    }
  ],
  // Optional separate publications list; displayed alongside Research on the Research page
  publications: [
    {
      title: "Analysis of the Future Possibility of Metaverse - A Case Study of Tencent",
      venue: "Accepted by the 2023 2nd International Conference on Finance, Investment and Business Analysis (FIBA 2023)",
      year: "2023",
      authors: "Zhen Wang",
      link: "#"
    }
  ],
  honors: [
    {
      title: "High Five Award",
      issuer: "Moen Incorporated / Fortune Brands",
      year: "",
      notes: "Top 5 best practice teams with significant projects and achievements"
    },
    {
      title: "President Award",
      issuer: "JATCO Automatic Transmission Ltd (Nissan Group)",
      year: "",
      notes: "Recognizing professional excellence (top 1 in department)"
    }
  ],
  community: [],
  skills: {
    languages: ["R", "Python", "SQL", "JS", "MATLAB"],
    tools: ["Git", "GCP", "Databricks", "BigQuery", "OBIEE", "Tableau", "Power BI", "Streamlit", "Flourish", "Qlik", "Looker Studio", "Power Query", "Power Pivot", "VBA"],
    frameworks: ["Machine Learning", "NLP", "Reinforcement Learning", "Bayesian"],
    data: ["R", "Python", "SQL", "Machine Learning", "MATLAB", "BigQuery", "OBIEE", "Tableau", "Power BI", "Streamlit", "Flourish", "Qlik", "Looker Studio", "Power Query", "Power Pivot", "VBA"],
    visualization: ["Tableau", "Power BI", "Streamlit", "Flourish", "Qlik", "Looker Studio", "Power Query", "Power Pivot"]
  },
  media: [],
  projects: [
    {
      title: "Youth Employment Action Plan (YEAP) Analysis Dashboard",
      tags: ["Streamlit", "Data Visualization", "Policy Analytics"],
      period: { start: "2024", end: "2027" },
      bullets: [
        "Web-based dashboard for ILO's YEAP enabling interactive analysis across implementation clusters, capacity development, technical assistance, knowledge dissemination, and advocacy; modular architecture with auto-generated charts and unified styling to support cross-country insights and evidence-based policymaking; publicly deployed on Streamlit Cloud."
      ],
      link: "https://github.com/emplabyouth/emplabyeap"
    },
    {
      title: "AccessBridge Regional Investment Support System",
      tags: ["Plotly Dash", "Geospatial", "Full‑stack"],
      period: { start: "2024", end: "2024" },
      bullets: [
        "Interactive analytics platform for industrial site selection in Mexico's semiconductor and NEV sectors; integrates economic, geographic, workforce, and real estate data to identify optimal locations; modular, scalable architecture for local and cloud deployment to support evidence-based policy and cross-border investment planning."
      ],
      link: "https://github.com/ZhenWwvv/AccessBridge_Regional_Investment_Support_System"
    },
    {
      title: "CHIRP Radio Library Application",
      tags: ["Flask", "Google Cloud Datastore", "Automation"],
      period: { start: "2024", end: "2025" },
      bullets: [
        "Enhances digital music ingestion pipeline and admin interface for CHIRP Radio; enables staff to import, manage, and sync audio metadata to Google Cloud Datastore, supporting DJs on the live broadcast platform NextUp; modernizes infrastructure and replaces legacy components to improve accessibility for non-technical users."
      ],
      link: "https://github.com/ZhenWwvv/CHIRP-Radio-Application/tree/python3"
    },
    {
      title: "Film Insight – Cross Cultural Movie Review Analysis",
      tags: ["NLP", "LDA", "Sentiment Analysis"],
      period: { start: "2023", end: "2023" },
      bullets: [
        "Python dashboard comparing Chinese (Douban) and American (Rotten Tomatoes) user reviews of war movies; web scraping, sentiment analysis, word clouds, LDA topic modeling, and timeline-based rating analysis to uncover cultural differences; CLI dashboard built with Poetry."
      ],
      link: "https://github.com/ZhenWwvv/30122-Film-Insight"
    }
  ]
};


