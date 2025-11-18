// Centralized site content configuration. Update this file to change site data.
// After editing and saving, reload any page to see updates immediately.

window.SITE_CONTENT = {
  profile: {
    name: "Grace Zhen Wang",
    email: "wangzh@iloguest.org",
    phone: "+41 762685041",
    location: "5035 S East End Ave., Chicago, IL, 60615 U.S.",
    title: "Master of Science in Computational Analysis and Public Policy (MSCAPP)",
    subtitle: "Data Science | Public Policy | Machine Learning | Artificial Intelligence",
    emojis: "",
    aboutBlurb: "Data scientist with 9+ years across AI, machine learning, data visualization and supply chain optimization — turning complex datasets into actionable insights. Experience at the ILO and multinational firms (Nissan/JATCO, Fortune Brands) bridging technology and public policy to drive data‑informed strategy and impact.",
    // Optional portrait images; use photoSmall as the thumbnail (第三张图),
    // and photoLarge as the zoomed image (第二张图). Fallback to photo.
    photoSmall: "assets/images/portrait/ren.jpg",
    photoLarge: "assets/images/portrait/ren.jpg",
    photo: "assets/images/portrait/ren.jpg",
    taglines: [
      "Data Science | Software Engineering | AI",
      "Policy Analysis | Public Sector Tech",
      "Coffee, travel, and building useful tools"
    ],
    basedIn: ["Geneva, Switzerland", "Chicago, USA", "Shanghai, China"],
    coffeePhoto: "assets/images/coffee/geneva.jpg",
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
      logoUrl: "assets/images/logos/ilo.png",
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
          { src: "assets/images/experience/ilo/il-event-interesting.jpg", title: "Interesting event during ILC (International Labor Conference)" },
          { src: "assets/images/experience/ilo/il-global-coalition.png", title: "The global coalition for social justice seminar" },
          { src: "assets/images/experience/ilo/il-green-transition.jpg", title: "Youth Employment and the Green Transition" },
          { src: "assets/images/experience/ilo/with-colleagues-at ILC.jpg", title: "With colleagues at ILC" },
          { src: "assets/images/experience/ilo/During AI for good.jpg", title: "During AI for good" },
          { src: "assets/images/experience/ilo/Met the founder of Alibaba Cloud.jpg", title: "Met the founder of Alibaba Cloud" },
          { src: "assets/images/experience/ilo/UN Geneva Palais des Nations.jpg", title: "UN Geneva Palais des Nations" }
        ]
      },
      teamMoments: {
        name: "Team Moments & Behind the Scenes",
        images: [
          { src: "assets/images/experience/ilo/il-team-branch-group.jpg", title: "Group photo of my branch" },
          { src: "assets/images/experience/ilo/il-intern-board-meeting.jpg", title: "Intern Board meeting" },
          { src: "assets/images/experience/ilo/il-team-fundraise.jpg", title: "Fund Raise for events" },
          { src: "assets/images/experience/ilo/4_Protest in ILO.jpg", title: "Protest in ILO" },
          { src: "assets/images/experience/ilo/il-colleagues-party.jpg", title: "Colleagues party" },
          { src: "assets/images/experience/ilo/6_Me with flags at the United Nations.jpg", title: "Me with flags at the United Nations" },
          { src: "assets/images/experience/ilo/7_Me with sheep at the United Nations.jpg", title: "Me with sheep at the United Nations" }
        ],
        videos: [
          { src: "assets/videos/ilo/il-video1.mov", title: "Video 1" },
          { src: "assets/videos/ilo/il-video2.mov", title: "Video 2" },
          { src: "assets/videos/ilo/il-video3.mov", title: "Video 3" }
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
      logoUrl: "assets/images/logos/chirp.png",
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
      logoUrl: "assets/images/logos/deltahealthalliance.png",
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
      logoUrl: "assets/images/logos/accessbridge.png",
      bullets: [
        "Led supplier consultations for investment site selection in Mexico's semiconductor and NEV sectors.",
        "Developed full-stack dashboard using Python (Plotly Dash), JavaScript, and geospatial tools for real-time visualization and predictive capabilities."
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
      logoUrl: "assets/images/logos/moen.png",
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
        "Won the High Five Award (The top 5 best practice teams with significant projects and achievements)"
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
      logoUrl: "assets/images/logos/nissan.png",
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
        "Received the President Award (for top departmental professional excellence)"
      ]
    },
    {
      sector: "private",
      organization: "Nidec (Guangzhou) Auto Drive System Co., Ltd",
      role: "Senior Purchasing Specialist",
      location: "Guangzhou, China",
      period: { start: "2013-04", end: "2017-05" },
      logoUrl: "assets/images/logos/nidec.png",
      bullets: [
        "Designed analysis models and led VAVE to manage cross-departmental cost goals, saved an annual of $6 million.",
        "Developed mold management models to oversee service life and investment planning"
      ]
    }
  ],
  research: [
    {
      title: "Time Series Modeling With Applications in Economics and Public Health (R Programming)",
      venue: "MIT (Massachusetts Institute of Technology)",
      year: "2023",
      period: { start: "2022-09", end: "2022-12" },
      authors: "Zhen Wang",
      link: "#",
      supervisor: "Dr. Peter Kempthorne, MIT (Massachusetts Institute of Technology)",
      description: "Team lead, led a time series forecasting project on the Metaverse's prospects (autocorrelation, residual, ARIMA model)"
    }
  ],
  // Optional separate publications list; displayed alongside Research on the Research page
  publications: [
    {
      title: "Zhen Wang, Analysis of the Future Possibility of Metaverse - A Case Study of Tencent",
      authors: "",
      venue: "Accepted by the \"2023 2nd International Conference on Finance, Investment and Business Analysis (FIBA 2023)\"",
      year: "FIBA 2023",
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
      image: "assets/images/projects/yeap.jpg",
      tags: ["Streamlit", "Data Visualization", "Policy Analytics"],
      period: { start: "2024", end: "2027" },
      bullets: [
        "The YEAP Data Analysis Dashboard is a web-based data visualization platform developed by the International Labour Organization (ILO) to support its global Youth Employment Action Plan (YEAP) from 2024 to 2027.",
        "Built with the Streamlit framework, the dashboard enables interactive analysis of survey data submitted by ILO regional offices and partners. It provides thematic insights across implementation clusters, capacity development, technical assistance, knowledge dissemination, and advocacy. With a modular architecture, auto-generated charts, and unified visual styling, the tool enhances cross-country data interpretation and supports evidence-based policymaking. The dashboard is publicly deployed on Streamlit Cloud."
      ],
      link: "https://github.com/emplabyouth/emplabyeap"
    },
    {
      title: "AccessBridge Regional Investment Support System",
      image: "assets/images/projects/accessbridge.jpg",
      tags: ["Plotly Dash", "Geospatial", "Full‑stack"],
      period: { start: "2024", end: "2024" },
      bullets: [
        "The AccessBridge Regional Investment Support System is an interactive web-based analytics tool developed to support industrial site selection and investment decision-making in Mexico's emerging sectors, including semiconductors and new energy vehicles. The dashboard integrates economic, geographic, workforce, and real estate data to help policymakers and investors identify optimal locations based on multi-dimensional criteria.",
        "Built with Python's Dash framework, the platform combines Plotly for dynamic visualizations and Folium for geospatial analysis, featuring modules for economic complexity mapping, workforce distribution, salary analysis, sectoral performance, and supply chain integration. Custom callback functions allow real-time interactivity—users can filter datasets, visualize trends, and calculate distances between industrial zones.",
        "The architecture is modular and scalable, enabling deployment both locally and on cloud environments. This system demonstrates how data engineering and visualization can drive evidence-based policy and strategic investment planning for cross-border industrial development."
      ],
      link: "https://github.com/ZhenWwvv/AccessBridge_Regional_Investment_Support_System"
    },
    {
      title: "CHIRP Radio Library Application",
      image: "assets/images/projects/chirp-app.png",
      tags: ["Flask", "Google Cloud Datastore", "Automation"],
      period: { start: "2024", end: "2025" },
      bullets: [
        "CHIRP Radio is a community radio station in Chicago that maintains a large independent music library. This project focuses on enhancing their digital music ingestion pipeline and web-based admin interface. The system allows music department staff to import, manage, and sync local audio metadata to Google Cloud Datastore, enabling DJs to browse and curate tracks via the station's live broadcast platform, NextUp.",
        "The revamp aimed to modernize infrastructure, replace legacy components like Samba, and support non-technical users through a web interface."
      ],
      link: "https://github.com/ZhenWwvv/CHIRP-Radio-Application/tree/python3"
    },
    {
      title: "Film Insight – Cross Cultural Movie Review Analysis",
      tags: ["NLP", "LDA", "Sentiment Analysis"],
      period: { start: "2023", end: "2023" },
      bullets: [
        "Python-based dashboard to analyze and compare Chinese (Douban) and American (Rotten Tomatoes) user reviews of war movies. Used web scraping, NLP (sentiment analysis, word clouds), LDA topic modeling, and timeline-based rating analysis to uncover cultural differences in film perception.",
        "Tech stack: Python, BeautifulSoup, pandas, spaCy, matplotlib, LDA, CLI dashboard (Poetry)."
      ],
      link: "https://github.com/ZhenWwvv/30122-Film-Insight"
    }
  ]
};


