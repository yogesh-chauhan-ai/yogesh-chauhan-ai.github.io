// All other page content (About, AI Systems, Resume, Open Source, Contact) is written
// directly as static HTML in index.html so it is visible in the raw page source
// (crawlable by ATS/search bots without executing JS). This file only holds the
// Portfolio project data needed to populate the project detail modal on click.

export const projects = [
  {
    id: 1, name: "NIVA [Agentic AI Chatbot Platform]", shortDesc: "Aviation & logistics conversational AI platform with 100+ paying users.",
    image: "assets/images/projects/niva.svg", category: "AI / LLM", role: "Technical Lead / Architect", team: "PySquad", duration: "07/2021 – Present", liveUrl: "https://getniva.ai",
    description: "Aviation and logistics conversational AI platform with more than 100 paying users. I led the architecture and delivery, including a 102-entry use-case library, a four-tier pricing model, and white-label bot personas, and designed the internal ISPIA architecture framework behind it.",
    responsibilities: ["Led end-to-end architecture and delivery of the NIVA conversational AI platform", "Designed the internal ISPIA architecture framework powering the platform", "Built a 102-entry use-case library covering aviation and logistics workflows", "Designed a four-tier pricing model and white-label bot persona system", "Directed the engineering team from initial architecture through production launch"],
    technologies: ["Python", "LLMs", "RAG Pipelines", "FastAPI", "Multi-Agent Orchestration", "White-label Theming"],
  },
  {
    id: 2, name: "AscentPassport [AI Employment Verification]", shortDesc: "AI verification platform, 10,000+ verifications processed at ~80% accuracy.",
    image: "assets/images/projects/ascentpassport.svg", category: "AI / LLM", role: "Technical Lead / AI Architect", team: "PySquad", duration: "07/2021 – Present", liveUrl: "https://ascentpassport.com",
    description: "AI employment verification platform that has processed 10,000+ verifications at around 80 percent verification accuracy. I designed the AP Score trust engine and a multi-agent pipeline covering risk scoring, HR outreach, and tool-calling agents that integrate GitHub, MCA, GST, EPFO, and DNS sources, with OTP-verified onboarding.",
    responsibilities: ["Designed the AP Score six-dimensional trust engine", "Architected the multi-agent pipeline covering risk scoring, HR outreach, and tool-calling", "Integrated tool-calling agents with GitHub, MCA, GST, EPFO, and DNS data sources", "Built OTP-verified onboarding flow for candidates and employers", "Directed engineering delivery to 10,000+ processed verifications"],
    technologies: ["Python", "Django", "AI Agents", "FastAPI", "PostgreSQL", "Tool Calling"],
  },
  {
    id: 3, name: "ZingTMS [White-label Transportation Management System]", shortDesc: "White-label, multi-tenant TMS on a shared-schema Django base.",
    image: "assets/images/projects/zingtms.svg", category: "Web App", role: "Architect", team: "PySquad", duration: "07/2021 – Present", liveUrl: "https://zingtms.com",
    description: "White-label, multi-tenant Transportation Management System with plug-and-play logistics modules on a shared-schema Django base, a unified event stream, and Celery and Redis async processing. I owned the core architecture and the multi-tenancy model.",
    responsibilities: ["Owned the core architecture and multi-tenancy model for the platform", "Designed the shared-schema Django base supporting plug-and-play logistics modules", "Built a unified event stream across tenant modules", "Implemented Celery + Redis async processing for logistics workflows"],
    technologies: ["Python", "Django", "Celery", "Redis", "Shared-schema Multi-tenancy", "Event-driven Design"],
  },
  {
    id: 4, name: "Airtel [FTTH Subscriber Systems]", shortDesc: "Python-side development for Airtel's Fiber to the Home subscriber systems.",
    image: "assets/images/projects/airtel.svg", category: "Web App", role: "Python Engineer", team: "Airtel delivery team", duration: "—", liveUrl: "https://www.airtel.in",
    description: "Worked on Airtel's FTTH (Fiber to the Home) system, handling the Python-side development and delivery ownership across a large-scale Indian subscriber database. Managed server operations alongside the team and was responsible for the Python workstreams and on-time delivery of the components owned.",
    responsibilities: ["Owned Python-side development for Airtel's FTTH subscriber systems", "Managed server operations alongside the delivery team", "Delivered Python workstreams on schedule across a large-scale Indian subscriber database"],
    technologies: ["Python", "Large-scale Databases", "Server Operations"],
  },
  {
    id: 5, name: "RynoWallet [Coalition Loyalty Platform]", shortDesc: "India's first coalition loyalty network connecting local shops via shared RynoCoins.",
    image: "assets/images/projects/texture.svg", category: "Web App", role: "Product Owner & Architect", team: "PySquad", duration: "Ongoing", liveUrl: "https://rynowallet.com/",
    description: "Coalition loyalty wallet platform for independent local shops. I own the product, architecture, and roadmap. Merchants issue RynoCoins (1 coin = 1 INR discount), customers earn across any shop in the network and redeem anywhere. Supports closed-loop (branded) and open coalition models, works from any browser or via REST API, with integrations for Tally, Vyapar, Shopify, and WooCommerce.",
    responsibilities: ["Own product, architecture, and roadmap for RynoWallet", "Built merchant and customer portal with Django and REST APIs", "Designed RynoCoin issuance and redemption engine with real-time balance tracking", "Implemented closed-loop and open coalition loyalty models", "Developed REST API layer for POS and billing software integrations"],
    technologies: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Redis", "React.js", "REST API"],
  },
  {
    id: 6, name: "ChargeSavvy [POS System]", shortDesc: "Backend for a UK/USA POS system active across 700+ locations.",
    image: "assets/images/projects/chargesavvy.svg", category: "Web App", role: "Python Engineer", team: "12 engineers", duration: "10 months", liveUrl: "",
    description: "Earlier Python engineering work on ChargeSavvy, a multi-location POS system covering 700+ motels and restaurants across the UK and USA, with web and iOS clients.",
    responsibilities: ["Developed Django REST APIs for menu, orders, and transaction processing", "Implemented payment integrations with webhook handling", "Built inventory sync APIs for web and iOS clients", "Contributed to test coverage and on-call production support"],
    technologies: ["Python", "Django", "React", "Swift", "REST API", "PostgreSQL", "Redis"],
  },
  {
    id: 7, name: "Zast [Logistics Management Platform]", shortDesc: "Full-stack Django logistics platform with wallet, tracking, and reporting.",
    image: "assets/images/projects/zast.svg", category: "Web App", role: "Senior Backend Developer", team: "11 engineers", duration: "12 months", liveUrl: "",
    description: "Earlier Python engineering work on Zast Solutions, a comprehensive Django logistics web app with wallet facility, real-time parcel tracking, multi-type booking workflows, role-based dashboards, and reporting.",
    responsibilities: ["Architected Django models and DRF API for bookings, wallets, and tracking", "Implemented real-time tracking with Django Channels WebSockets", "Designed reporting engine generating PDF/Excel via Celery", "Led code reviews and maintained API documentation"],
    technologies: ["Python", "Django", "Django REST Framework", "React.js", "PostgreSQL", "Celery", "Redis", "WebSockets"],
  },
  {
    id: 8, name: "TDS Reconciliation [Financial Intelligence]", shortDesc: "PySpark reconciliation engine for multinational purchase/sell orders.",
    image: "assets/images/projects/tds.svg", category: "Data / ML", role: "Senior Backend Developer", team: "5 engineers", duration: "8 months", liveUrl: "",
    description: "Earlier Python engineering work on TDS Reconciliation, a large-scale financial reconciliation platform built with PySpark, Flask, and Power BI. PySpark processes every purchase and sell order, detecting discrepancies, generating audit trails, and surfacing Power BI intelligence.",
    responsibilities: ["Built core PySpark reconciliation jobs processing daily transaction volumes", "Designed PostgreSQL schema for transaction staging and audit logging", "Integrated Power BI Embedded API for in-app dashboards", "Implemented automated discrepancy alerting"],
    technologies: ["Python", "PySpark", "Flask", "PostgreSQL", "Pandas", "Power BI", "SQLAlchemy", "Celery"],
  },
  {
    id: 9, name: "Predictores.ai [Predictive Campaign Generation Module]", shortDesc: "Predictive campaign module for a human-supervised decision-intelligence platform.",
    image: "assets/images/projects/predictores.svg", category: "AI / LLM", role: "AI Engineer (Module Contributor)", team: "—", duration: "—", liveUrl: "https://predictores.ai",
    description: "Built the Predictive Campaign Generation module for a human-supervised decision-intelligence platform that turns business and audience signals into explainable next-best-actions.",
    responsibilities: ["Built the Predictive Campaign Generation module end-to-end", "Translated business and audience signals into explainable next-best-action recommendations", "Integrated the module into the wider decision-intelligence platform"],
    technologies: ["Python", "LLMs", "Predictive Modeling"],
  },
  {
    id: 10, name: "CareNav [AI Document Automation]", shortDesc: "AI document automation for a hospital insurance-claims platform (ABDM, FHIR R4).",
    image: "assets/images/projects/carenav.svg", category: "AI / LLM", role: "AI Engineer (Module Contributor)", team: "—", duration: "—", liveUrl: "https://carenavindia.ai",
    description: "Built AI-based document handling and process-automation workflows for a hospital insurance-claims platform (ABDM-compliant, FHIR R4), which brought a three-hour manual process down to roughly twenty minutes.",
    responsibilities: ["Built AI-based document handling workflows for hospital insurance claims", "Automated process steps for an ABDM-compliant, FHIR R4 platform", "Reduced a three-hour manual process to roughly twenty minutes"],
    technologies: ["Python", "Document AI", "Process Automation", "FHIR R4"],
  },
  {
    id: 11, name: "MarinaPy [Marina Management & Slip Booking SaaS]", shortDesc: "Cloud SaaS for marina management & slip booking, used by marinas internationally.",
    image: "assets/images/projects/marinapy.svg", category: "Web App", role: "Technical Architect / Product Owner / Delivery Head", team: "8 engineers", duration: "Ongoing", liveUrl: "https://marinapy.com",
    description: "Cloud-based SaaS platform for marina management and slip booking covering the full operational stack — interactive marina maps with real-time occupancy, booking and berth allocation, CRM, quoting and invoicing, online payments, yard operations, and a self-service boater app. I own the architecture and technical direction for a product now used by marinas internationally.",
    responsibilities: ["Led architecture and technical direction as technical architect, product owner, and delivery head", "Led a team of 8 building the full operational stack", "Designed interactive marina maps with real-time berth occupancy", "Built booking, berth allocation, CRM, quoting, and invoicing modules", "Delivered online payments, yard operations, and a self-service boater app"],
    technologies: ["Python", "Django", "PostgreSQL", "PostGIS", "Real-time Maps", "Payments"],
  },
];
