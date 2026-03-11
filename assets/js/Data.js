export const UserData = {
  name: "Yogesh Chauhan",
  title: "Python & AI Engineer",
  designation: "Senior Python Developer · AI/ML Engineer",
  phone: "+91 8905508909",
  email: "info.yogesh2848@gmail.com",
  location: "Ahmedabad, Gujarat, India",
  website: "https://yogesh-chauhan-ai.github.io",
  linkedin: "https://www.linkedin.com/in/yogesh-python-ai",
  github: "https://github.com/yogesh-chauhan-ai",
  cvFile: "assets/Yogesh_Python_CV.pdf",
};

export const profile = {
  summary: `AI Development Lead focused on transforming cutting-edge Generative AI into scalable, production-grade platforms that drive measurable business impact.<br><br>
I lead high-performing engineering teams building intelligent AI systems using <strong>Python</strong> as my core stack, bridging the gap between experimental AI innovation and reliable, enterprise-ready deployments.<br><br>
My expertise spans <strong>GenAI architecture, LLM integrations, RAG pipelines, and agentic AI systems</strong>, enabling autonomous workflows and intelligent decision-making across products and services.<br><br>
Over the years, I have delivered <strong>13+ backend platforms</strong> and led <strong>5 AI integration initiatives</strong>, helping organizations streamline operations and unlock data value, most notably driving a <strong>65% increase in data efficiency</strong> through the DB Insight platform.<br><br>
<strong>Key areas of expertise:</strong><br>
- <strong>AI Platform Architecture</strong> : LLM systems, RAG pipelines, agentic workflows<br>
- <strong>Backend &amp; API Engineering</strong> : FastAPI, Flask, Django, Dash<br>
- <strong>AI Infrastructure &amp; Deployment</strong> : Docker, Redis, scalable service architecture<br>
- <strong>Data Systems</strong> : PostgreSQL, SQL, structured data pipelines<br>
- <strong>AI Product Engineering</strong> : API integrations, payment systems, intelligent services<br><br>
Currently open to <strong>Senior AI / GenAI leadership roles in Mumbai or remote</strong>.`,
};

export const services = [
  { icon: "code-slash-outline", title: "Backend Development", description: "Scalable Python backends with Django, FastAPI & Flask, REST APIs, microservices, async workflows, and payment integrations." },
  { icon: "hardware-chip-outline", title: "AI & LLM Engineering", description: "Production-grade AI systems using RAG pipelines, vector databases, prompt engineering, and fine-tuned LLM integrations." },
  { icon: "cloud-outline", title: "Cloud & DevOps", description: "Containerised deployments on AWS, Docker/Kubernetes orchestration, CI/CD pipelines with Terraform & GitHub Actions." },
  { icon: "bar-chart-outline", title: "Data Engineering", description: "Data pipelines with PySpark, Pandas, PostgreSQL, Redis & ElasticSearch, from ingestion to visualization with Plotly & Dash." },
];

export const techStack = [
  "Python","Django","FastAPI","Flask","LangChain","RAG Pipelines","LLMs","Prompt Engineering",
  "Vector Databases","PostgreSQL","MySQL","Redis","ElasticSearch","MongoDB","Docker","Kubernetes",
  "AWS","Terraform","PySpark","Pandas","Plotly / Dash","REST API","Git","React.js",
];

export const education = [
  { degree: "Bachelor of Engineering — Information Technology", institute: "Gujarat Technological University (GTU)", year: "Graduated 2020" },
];

export const experience = [
  {
    designation: "Development Team Lead", company: "PySquad Informatics LLP",
    year: "Mar 2023 – Present · 3 yrs 1 mo", location: "Ahmedabad, Gujarat, India · On-site",
    points: [
      "Driving innovative AI solutions with expertise in Python, data analysis, and AI frameworks.",
      "Leading high-performing teams, delivering scalable projects, and transforming ideas into impactful applications.",
      "Experienced in cutting-edge technologies like RAG systems, NLP, and computer vision.",
    ],
    skills: "Team Leadership, Leadership Management and +30 skills",
  },
  {
    designation: "Senior Software Engineer", company: "PySquad Informatics LLP",
    year: "Jul 2021 – Feb 2023 · 1 yr 8 mos", location: "India · On-site",
    points: [
      "Worked on patterns: Factory, Decorator, Singleton, Factory Method, Command, State, Prototype, Adapter.",
      "Contributed to building innovative AI-driven solutions, focusing on data analysis, transformation, and integrations.",
      "Designed scalable systems and implemented advanced algorithms delivering results for diverse industries.",
    ],
    skills: "Shell Scripting, API Development and +24 skills",
  },
  {
    designation: "Python Developer", company: "Treesha Infotech",
    year: "Jun 2020 – Jun 2021 · 1 yr", location: "Ahmedabad, Gujarat, India",
    points: [
      "Developed and maintained Django web applications for enterprise clients.",
      "Implemented REST APIs and third-party integrations.",
    ],
    skills: "",
  },
];

export const skills = [
  { name: "LLM Integration (GPT-4, Claude, Gemini)", progress: 92 },
  { name: "Prompt Engineering & Chain-of-Thought", progress: 90 },
  { name: "RAG Pipelines (Hybrid Search, Re-ranking)", progress: 88 },
  { name: "Agentic AI & Multi-Agent Systems", progress: 85 },
  { name: "LangChain / LangGraph", progress: 87 },
  { name: "Vector Databases (Pinecone, Qdrant, Weaviate)", progress: 85 },
  { name: "Fine-tuning & RLHF", progress: 75 },
  { name: "DSPy / Structured Prompting", progress: 70 },
  { name: "Python", progress: 95 },
  { name: "FastAPI", progress: 90 },
  { name: "Django / DRF", progress: 90 },
  { name: "Flask / Dash", progress: 85 },
  { name: "REST API & GraphQL Design", progress: 88 },
  { name: "PySpark / Pandas / NumPy", progress: 82 },
  { name: "PostgreSQL / MySQL", progress: 84 },
  { name: "Redis / ElasticSearch", progress: 78 },
  { name: "Docker / Kubernetes", progress: 82 },
  { name: "AWS (EC2, S3, Lambda, Bedrock)", progress: 78 },
  { name: "CI/CD (Terraform, GitHub Actions)", progress: 76 },
  { name: "Celery / RabbitMQ", progress: 78 },
];

export const aiSystems = [
  {
    id: "campaign-agent",
    name: "AI Campaign Recommendation Agent",
    problem: "Marketing teams wasted hours manually crafting personalised campaign strategies across segments.",
    description: "Agentic LLM system that ingests audience data, performs semantic segmentation via vector search, and auto-generates multi-channel campaign strategies with ROI projections.",
    techStack: ["Python", "LangGraph", "OpenAI GPT-4", "Pinecone", "FastAPI", "Redis"],
    demoUrl: "#demos",
    githubUrl: "https://github.com/yogesh-chauhan-ai",
    badge: "Agentic AI",
    metric: "3× faster strategy generation",
  },
  {
    id: "competitor-intel",
    name: "Competitor Intelligence AI Agent",
    problem: "Businesses lacked real-time visibility into competitor positioning, pricing, and product updates.",
    description: "Autonomous agent that crawls competitor sources, extracts structured intelligence using LLM parsing, and surfaces daily digests via Slack integration.",
    techStack: ["Python", "LangChain", "GPT-4", "Qdrant", "FastAPI", "Celery"],
    demoUrl: "#demos",
    githubUrl: "https://github.com/yogesh-chauhan-ai",
    badge: "LLM + Agents",
    metric: "Automated daily briefings",
  },
  {
    id: "rag-assistant",
    name: "RAG Knowledge Assistant",
    problem: "Enterprise teams couldn't query internal documentation at scale with accurate, cited answers.",
    description: "Production RAG system with hybrid BM25 + dense retrieval, cross-encoder re-ranking, and multi-hop reasoning. Achieves 87% accuracy on domain Q&A with source citations.",
    techStack: ["Python", "LangChain", "Pinecone", "OpenAI", "FastAPI", "PostgreSQL"],
    demoUrl: "#demos",
    githubUrl: "https://github.com/yogesh-chauhan-ai",
    badge: "RAG Pipeline",
    metric: "87% Q&A accuracy",
  },
  {
    id: "autoagent",
    name: "AutoAgent [LLM Orchestration]",
    problem: "Teams needed a flexible, model-agnostic multi-agent framework for complex task automation.",
    description: "Production multi-agent orchestration built on LangGraph. Supports tool-calling, persistent memory, parallel sub-agents, and human-in-the-loop approval gates.",
    techStack: ["Python", "LangGraph", "OpenAI", "Anthropic Claude", "Celery", "FastAPI"],
    demoUrl: "#demos",
    githubUrl: "https://github.com/yogesh-chauhan-ai",
    badge: "Multi-Agent",
    metric: "Model-agnostic orchestration",
  },
  {
    id: "vector-search",
    name: "VectorStore Search Engine",
    problem: "Catalogues with 2M+ items needed sub-100ms semantic search with metadata filtering.",
    description: "High-performance semantic search API on hybrid Qdrant + ElasticSearch. ONNX runtime for 3× speed, Kubernetes HPA for zero-downtime scaling.",
    techStack: ["Python", "FastAPI", "Qdrant", "ElasticSearch", "SentenceTransformers", "K8s"],
    demoUrl: "#demos",
    githubUrl: "https://github.com/yogesh-chauhan-ai",
    badge: "Vector Search",
    metric: "Sub-100ms P99 latency",
  },
  {
    id: "db-insight",
    name: "DB Insight [Data Intelligence]",
    problem: "Organisations struggled to extract actionable intelligence from fragmented database systems.",
    description: "Internal AI platform connecting to PostgreSQL/MySQL sources, auto-generating NL summaries, anomaly alerts, and visualisations, driving 65% data efficiency improvement.",
    techStack: ["Python", "Django", "FastAPI", "PySpark", "Pandas", "Plotly / Dash"],
    demoUrl: "#demos",
    githubUrl: "https://github.com/yogesh-chauhan-ai",
    badge: "Data AI",
    metric: "65% data efficiency gain",
  },
];

export const liveDemos = [
  {
    name: "Campaign Strategy Generator",
    description: "Input your audience segment and product details, get a full AI-generated multi-channel campaign strategy in seconds.",
    platform: "Streamlit",
    demoUrl: "#",
    comingSoon: true,
    techStack: ["GPT-4", "LangChain", "Streamlit"],
    accentColor: "#ff4b4b",
  },
  {
    name: "Competitor Intelligence Finder",
    description: "Enter a brand or product URL and receive a structured competitive analysis powered by an autonomous AI agent.",
    platform: "Gradio",
    demoUrl: "#",
    comingSoon: true,
    techStack: ["GPT-4", "Qdrant", "Gradio"],
    accentColor: "#ff7c00",
  },
  {
    name: "Document RAG Assistant",
    description: "Upload any PDF and query it with natural language. Answers include source citations and confidence scores.",
    platform: "HuggingFace Spaces",
    demoUrl: "#",
    comingSoon: true,
    techStack: ["OpenAI", "Pinecone", "FastAPI"],
    accentColor: "#7c3aed",
  },
];

export const caseStudies = [
  {
    id: "rag-case",
    title: "Building a 50K-Doc RAG System with 87% Accuracy",
    problem: "An enterprise client had 50,000+ internal documents that support teams couldn't query efficiently, slow resolution times and repeated escalations.",
    architecture: "Hybrid retrieval combining dense vector embeddings (OpenAI text-embedding-3-large) with sparse BM25, followed by a cross-encoder re-ranking stage. Multi-hop reasoning chains decompose complex queries before synthesis.",
    decisions: [
      "Chose Pinecone over self-hosted Qdrant for managed scaling, saved 2 weeks of infra setup.",
      "Implemented cross-encoder re-ranking after noticing dense-only retrieval missed exact-match queries.",
      "Redis caching for repeated query patterns, cut latency by 70% in production.",
      "Streaming FastAPI responses improved perceived UX vs waiting for full answers.",
    ],
    challenges: "Chunking strategy was the hardest problem. Naive 512-token chunks broke semantic coherence. Solved with recursive character splitting + sentence boundary detection.",
    outcome: "87% accuracy on domain Q&A benchmark. 70% latency reduction. Deployed to 3 enterprise clients.",
    tags: ["RAG", "LangChain", "Pinecone", "FastAPI", "Redis"],
    readTime: "8 min read",
  },
  {
    id: "agent-case",
    title: "Scaling Multi-Agent Orchestration to Production",
    problem: "A marketing tech company needed autonomous agents for multi-step task automation with session memory and human approval gates.",
    architecture: "LangGraph stateful DAG with a supervisor agent routing to specialised sub-agents (research, writing, analysis). Persistent memory via PostgreSQL + pgvector. Celery for parallel execution.",
    decisions: [
      "LangGraph over vanilla LangChain for explicit state management and conditional branching.",
      "Human-in-the-loop gates as LangGraph interrupt nodes, cleaner than custom middleware.",
      "Model-agnostic config flag (OpenAI / Claude / Ollama) enabled cost-optimised routing.",
      "React monitoring dashboard for agent traces was critical for debugging production issues.",
    ],
    challenges: "Agent loops were a real problem early on. Solved with max-step guards, loop-detection heuristics, and structured output schemas that force deterministic routing.",
    outcome: "3× faster campaign strategy generation. Deployed across 4 product teams. Zero critical failures in first 90 days.",
    tags: ["LangGraph", "Multi-Agent", "Celery", "PostgreSQL", "FastAPI"],
    readTime: "10 min read",
  },
];

export const githubRepos = [
  { name: "ai-campaign-engine", displayName: "AI Campaign Engine", description: "Agentic LLM system for generating multi-channel marketing campaign strategies. Built with LangGraph, GPT-4, and Pinecone.", stars: 47, language: "Python", topics: ["langchain", "gpt-4", "fastapi", "agents"], url: "https://github.com/yogesh-chauhan-ai" },
  { name: "competitor-intelligence-agent", displayName: "Competitor Intelligence Agent", description: "Autonomous agent that monitors competitor activity, extracts structured insights via LLM parsing, and delivers daily Slack briefings.", stars: 34, language: "Python", topics: ["qdrant", "celery", "langchain", "scraping"], url: "https://github.com/yogesh-chauhan-ai" },
  { name: "hybrid-rag-pipeline", displayName: "Hybrid RAG Pipeline", description: "Production RAG with BM25 + dense hybrid search, cross-encoder re-ranking, multi-hop reasoning, and Redis caching. 87% domain Q&A accuracy.", stars: 82, language: "Python", topics: ["rag", "pinecone", "openai", "fastapi"], url: "https://github.com/yogesh-chauhan-ai" },
  { name: "fastapi-ai-toolkit", displayName: "FastAPI AI Toolkit", description: "Reusable toolkit for building production AI APIs, streaming LLM responses, vector search endpoints, auth, rate limiting, and observability.", stars: 61, language: "Python", topics: ["fastapi", "python", "ai", "toolkit"], url: "https://github.com/yogesh-chauhan-ai" },
  { name: "langgraph-multi-agent", displayName: "LangGraph Multi-Agent Framework", description: "Model-agnostic multi-agent orchestration with tool-calling, persistent memory, parallel execution, and human-in-the-loop approval gates.", stars: 55, language: "Python", topics: ["langgraph", "multi-agent", "llm", "orchestration"], url: "https://github.com/yogesh-chauhan-ai" },
  { name: "vector-search-api", displayName: "Vector Search API", description: "High-performance semantic search API on Qdrant + ElasticSearch with ONNX acceleration. Sub-100ms P99 latency at 2M+ item scale.", stars: 38, language: "Python", topics: ["qdrant", "elasticsearch", "onnx", "kubernetes"], url: "https://github.com/yogesh-chauhan-ai" },
];

export const blogPosts = [
  {
    title: "Chain-of-Draft (CoD): The Prompting Technique",
    excerpt: "Prompt engineering has evolved significantly, from simple one-shot prompts to complex multi-step reasoning methods. CoD forces models to produce explicit minimal reasoning drafts before final output, dramatically improving accuracy on complex tasks while reducing token usage.",
    readTime: "5 min read",
    date: "Mar 27, 2025",
    tags: ["Prompt Engineering", "CoD", "LLM"],
    url: "https://www.linkedin.com/pulse/chain-of-draft-cod-prompting-technique-yogesh-chauhan-480pf",
    platform: "LinkedIn Newsletter",
  },
  {
    title: "MCP (Model Context Protocol) - Going to Replace APIs?",
    excerpt: "In the fast-evolving landscape of AI and LLMs, the strategies we use to enhance model outputs are changing fast. A deep dive into how MCP enables richer, stateful tool-use for AI agents compared to traditional REST API integrations, and what it means for the future of software.",
    readTime: "6 min read",
    date: "Mar 2025",
    tags: ["MCP", "AI Agents", "APIs"],
    url: "https://www.linkedin.com/pulse/mcp-model-context-protocol-going-replace-apis-yogesh-chauhan-7qnqf",
    platform: "LinkedIn Newsletter",
  },
  {
    title: "Neurosymbolic AI: Bridging Logic & Deep Learning",
    excerpt: "Neurosymbolic AI is rapidly gaining attention as the missing link between symbolic reasoning and deep learning. This article explores how combining structured logical rules with neural networks opens new frontiers for reliable, explainable AI systems.",
    readTime: "7 min read",
    date: "Mar 2025",
    tags: ["Neurosymbolic AI", "Deep Learning", "Reasoning"],
    url: "https://www.linkedin.com/pulse/neurosymbolic-ai-bridging-logic-deep-learning-yogesh-chauhan-bbq3f",
    platform: "LinkedIn Newsletter",
  },
  {
    title: "Deep Reinforcement Learning with Stable-Baselines3",
    excerpt: "Deep Reinforcement Learning has revolutionised how AI systems learn complex behaviours, from mastering Atari games to robotic control. A practical walkthrough of building and training DRL agents using Stable-Baselines3 with Python.",
    readTime: "8 min read",
    date: "Mar 12, 2025",
    tags: ["Reinforcement Learning", "DRL", "Python"],
    url: "https://www.linkedin.com/pulse/deep-reinforcement-learning-stable-baselines3-yogesh-chauhan-vef3f",
    platform: "LinkedIn Newsletter",
  },
];

export const skillCategories = [
  {
    category: "AI Engineering", icon: "hardware-chip-outline", color: "#7c3aed",
    items: ["LLM Engineering","RAG Systems","Agentic AI","Prompt Engineering","Fine-tuning & RLHF","LangChain / LangGraph","DSPy","Multi-Agent Systems"],
  },
  {
    category: "Backend & APIs", icon: "code-slash-outline", color: "#1a56db",
    items: ["Python","FastAPI","Django / DRF","Flask","REST API","GraphQL","WebSockets","Celery / RabbitMQ"],
  },
  {
    category: "AI Tools & Infrastructure", icon: "cloud-outline", color: "#059669",
    items: ["OpenAI APIs","Anthropic Claude","Pinecone","Qdrant","Weaviate","Docker / K8s","AWS Bedrock","MLflow"],
  },
  {
    category: "Data & Databases", icon: "server-outline", color: "#d97706",
    items: ["PostgreSQL","MongoDB","Redis","ElasticSearch","PySpark","Pandas","Plotly / Dash","Power BI"],
  },
];

export const projects = [
  {
    id: 1, name: "DocuMind [RAG Document Intelligence]", shortDesc: "Enterprise RAG pipeline for intelligent document Q&A at scale.",
    image: "assets/images/projects/documind.svg", category: "AI / LLM", role: "Lead AI Engineer", team: "Solo / 2 engineers", duration: "4 months", liveUrl: "",
    description: "An enterprise-grade RAG system capable of ingesting and reasoning over 50,000+ documents. Hybrid search combining dense vector embeddings with BM25, cross-encoder re-ranking, and multi-hop reasoning chains. Achieved 87% accuracy on domain Q&A.",
    responsibilities: ["Designed end-to-end RAG architecture including chunking strategy, embedding pipeline, and retrieval logic","Implemented hybrid dense + sparse search with Pinecone and BM25","Built cross-encoder re-ranking layer boosting precision by 23%","Developed FastAPI service layer with async streaming responses","Set up Redis caching layer reducing latency by 70%"],
    technologies: ["Python","LangChain","Pinecone","OpenAI GPT-4","FastAPI","Redis","Docker","PostgreSQL"],
  },
  {
    id: 2, name: "AutoAgent [LLM Orchestration Framework]", shortDesc: "Multi-agent orchestration with tool-use, memory, and human-in-the-loop.",
    image: "assets/images/projects/autoagent.svg", category: "AI / LLM", role: "Senior Backend Engineer", team: "3 engineers", duration: "5 months", liveUrl: "",
    description: "Production multi-agent orchestration on LangGraph. Agents plan tasks, invoke tools, maintain persistent memory, and run parallel sub-agents with human-in-the-loop approval gates.",
    responsibilities: ["Designed agent graph topology using LangGraph's stateful DAG model","Implemented tool-calling abstractions for web search, Python REPL, and external APIs","Built long-term memory persistence with PostgreSQL + pgvector","Developed parallel agent execution with Celery task queues","Created React monitoring dashboard for agent execution traces"],
    technologies: ["Python","LangGraph","OpenAI","Anthropic Claude","Celery","PostgreSQL","FastAPI","React"],
  },
  {
    id: 3, name: "VectorStore Search Engine", shortDesc: "Semantic search API with sub-100ms latency at scale.",
    image: "assets/images/projects/vectorsearch.svg", category: "AI / LLM", role: "Backend Engineer", team: "2 engineers", duration: "3 months", liveUrl: "",
    description: "High-performance semantic search API on hybrid Qdrant + ElasticSearch. Sub-100ms P99 latency over 2M+ item catalogue. Kubernetes HPA for zero-downtime scaling.",
    responsibilities: ["Architected hybrid retrieval pipeline combining vector and keyword search","Implemented SentenceTransformers with ONNX runtime for 3× speed","Designed Kubernetes deployment with HPA and PDB","Built metadata filtering DSL over Qdrant payload filters","Achieved sub-100ms P99 latency at 2M+ item scale"],
    technologies: ["Python","FastAPI","Qdrant","ElasticSearch","SentenceTransformers","Docker","Kubernetes","ONNX"],
  },
  {
    id: 4, name: "Texture-Pulse [NLP Analytics]", shortDesc: "NLP-driven data intelligence dashboard with Plotly visualisations.",
    image: "assets/images/projects/texture.svg", category: "Data / ML", role: "Senior Backend Developer", team: "2 engineers", duration: "6 months", liveUrl: "",
    description: "Data intelligence platform using NLP and engineering pipelines to process text corpora and surface insights. Dashboard load time reduced from 12s to 1.8s.",
    responsibilities: ["Built NLP pipeline for tokenisation, sentiment analysis, and topic modelling","Designed Pandas ETL handling millions of rows","Created 10+ interactive Plotly chart types","Developed Dash application layout and callback architecture","Optimised queries reducing load time from 12s to 1.8s"],
    technologies: ["Python","Dash","Plotly","Pandas","Flask","NLP","spaCy","PostgreSQL"],
  },
  {
    id: 5, name: "TDSReconciliation [Financial Intelligence]", shortDesc: "PySpark reconciliation engine for multinational purchase/sell orders.",
    image: "assets/images/projects/tds.svg", category: "Data / ML", role: "Senior Backend Developer", team: "5 engineers", duration: "8 months", liveUrl: "",
    description: "Large-scale financial reconciliation platform. PySpark processes every purchase and sell order, detecting discrepancies, generating audit trails, and surfacing Power BI intelligence.",
    responsibilities: ["Built core PySpark reconciliation jobs processing millions of daily transactions","Designed PostgreSQL schema for transaction staging and audit logging","Integrated Power BI Embedded API for in-app dashboards","Implemented automated discrepancy alerting with email/Slack","Contributed to Flask web platform API layer"],
    technologies: ["Python","PySpark","Flask","PostgreSQL","Pandas","Power BI","SQLAlchemy","Celery"],
  },
  {
    id: 6, name: "Zast [Logistics Management Platform]", shortDesc: "Full-stack Django logistics platform with wallet, tracking, and reporting.",
    image: "assets/images/projects/zast.svg", category: "Web App", role: "Senior Backend Developer", team: "11 engineers", duration: "12 months", liveUrl: "",
    description: "Comprehensive Django logistics web app with wallet facility, real-time parcel tracking, multi-type booking workflows, role-based dashboards, and reporting.",
    responsibilities: ["Architected Django models and DRF API for bookings, wallets, and tracking","Implemented real-time tracking with Django Channels WebSockets","Designed reporting engine generating PDF/Excel via Celery","Led code reviews and maintained Swagger API docs","Collaborated with React team on API contracts"],
    technologies: ["Python","Django","Django REST Framework","React.js","PostgreSQL","Celery","Redis","WebSockets"],
  },
  {
    id: 7, name: "ChargeSavvy [POS System]", shortDesc: "Backend for a UK/USA POS system active across 700+ locations.",
    image: "assets/images/projects/chargesavvy.svg", category: "Web App", role: "Backend Developer", team: "12 engineers", duration: "10 months", liveUrl: "",
    description: "Backend for ChargeSavvy POS covering 700+ motels and restaurants across UK and USA. High-throughput transaction processing with 99.9% uptime.",
    responsibilities: ["Developed Django REST APIs for menu, orders, and transaction processing","Implemented Stripe/Square payment integrations with webhook handling","Built inventory sync APIs for web and iOS clients","Wrote test suites achieving 85%+ code coverage","Participated in on-call rotation for production uptime SLAs"],
    technologies: ["Python","Django","React","Swift","REST API","PostgreSQL","Stripe API","Redis"],
  },
  {
    id: 8, name: "Assessment Platform", shortDesc: "Online assessment with MS Teams & WebEx scheduling integration.",
    image: "assets/images/projects/assessment.svg", category: "Web App", role: "Senior Backend Developer", team: "Solo", duration: "3 months", liveUrl: "",
    description: "Django-based online assessment system with MS Teams and WebEx integration for scheduling, auto-scoring, and PDF report generation.",
    responsibilities: ["Designed complete Django models and DRF API, solo end-to-end delivery","Integrated MS Teams Graph API and WebEx REST API","Built automated scoring engine with configurable thresholds","Implemented student/teacher role separation via Django permissions","Developed PDF report generation using WeasyPrint"],
    technologies: ["Python","Django","Django REST API","MS Teams Graph API","WebEx API","PostgreSQL","WeasyPrint"],
  },
  {
    id: 9, name: "MediaCom [Linguistics Analytics API]", shortDesc: "Neural linguistics data analysis API for media intelligence clients.",
    image: "assets/images/projects/mediacom.svg", category: "Data / ML", role: "Backend Developer", team: "3 engineers", duration: "5 months", liveUrl: "",
    description: "Linguistics data analysis app holding neural data across news models for media clients. Query response times reduced 60%, slow queries cut 80%.",
    responsibilities: ["Owned API layer, designed and optimised all DRF serialisers","Implemented queryset optimisations reducing response times 60%","Built data normalisation pipeline for multiple NLP model outputs","Wrote API docs and maintained Postman collection","Introduced indexing strategy cutting slow queries by 80%"],
    technologies: ["Python","Django","Django REST API","PostgreSQL","Pandas","NLP","Redis"],
  },
];