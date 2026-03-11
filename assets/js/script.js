"use strict";

import {
  UserData, profile, services, techStack,
  education, experience, skills, projects,
  aiSystems, liveDemos, caseStudies, githubRepos, blogPosts, skillCategories
} from "./Data.js";

document.addEventListener("DOMContentLoaded", () => {

  // =========================================================
  // RENDER: About
  // =========================================================
  document.querySelector(".profile-summary").innerHTML = profile.summary;

  const readMoreBtn = document.getElementById("readMoreBtn");
  const profileSummary = document.getElementById("profileSummary");
  readMoreBtn.addEventListener("click", () => {
    const isExpanded = profileSummary.classList.toggle("expanded");
    readMoreBtn.classList.toggle("expanded");
    readMoreBtn.querySelector("span").textContent = isExpanded ? "Show less" : "Read more";
  });

  const servicesList = document.getElementById("servicesList");
  services.forEach(s => {
    const li = document.createElement("li");
    li.classList.add("service-card");
    li.innerHTML = `
      <div class="service-icon"><ion-icon name="${s.icon}"></ion-icon></div>
      <div><h4 class="service-card-title">${s.title}</h4><p class="service-card-text">${s.description}</p></div>`;
    servicesList.appendChild(li);
  });

  const techCloud = document.getElementById("techCloud");
  techStack.forEach(t => {
    const span = document.createElement("span");
    span.classList.add("tech-pill");
    span.textContent = t;
    techCloud.appendChild(span);
  });

  // =========================================================
  // RENDER: AI Systems (T2)
  // =========================================================
  const aiSystemsGrid = document.getElementById("aiSystemsGrid");
  if (aiSystemsGrid) {
    aiSystems.forEach(sys => {
      const li = document.createElement("li");
      li.classList.add("ai-system-card");
      li.innerHTML = `
        <div class="ai-sys-header">
          <span class="ai-sys-badge">${sys.badge}</span>
          <span class="ai-sys-metric"><ion-icon name="trending-up-outline"></ion-icon>${sys.metric}</span>
        </div>
        <h3 class="ai-sys-title">${sys.name}</h3>
        <p class="ai-sys-problem"><strong>Problem:</strong> ${sys.problem}</p>
        <p class="ai-sys-desc">${sys.description}</p>
        <div class="ai-sys-stack">
          ${sys.techStack.map(t => `<span class="ai-sys-pill">${t}</span>`).join("")}
        </div>
        <div class="ai-sys-actions">
          <button class="ai-sys-btn ai-sys-btn-primary" data-arch-id="${sys.id}">
            <ion-icon name="git-branch-outline"></ion-icon>
            Architecture
          </button>
        </div>`;
      aiSystemsGrid.appendChild(li);
    });

    // Architecture modal buttons
    aiSystemsGrid.querySelectorAll("[data-arch-id]").forEach(btn => {
      btn.addEventListener("click", () => openArchModal(btn.dataset.archId));
    });
  }

  // =========================================================
  // RENDER: Live Demos (T4)
  // =========================================================
  const demosGrid = document.getElementById("demosGrid");
  if (demosGrid) {
    liveDemos.forEach(demo => {
      const div = document.createElement("div");
      div.classList.add("demo-card");
      div.innerHTML = `
        <div class="demo-card-top" style="border-color:${demo.accentColor}20;background:${demo.accentColor}08">
          <div class="demo-platform-badge" style="background:${demo.accentColor}15;color:${demo.accentColor}">
            <ion-icon name="flash-outline"></ion-icon>
            ${demo.platform}
          </div>
          ${demo.comingSoon ? `<span class="demo-soon-badge">Coming Soon</span>` : ''}
        </div>
        <div class="demo-card-body">
          <h4 class="demo-title">${demo.name}</h4>
          <p class="demo-desc">${demo.description}</p>
          <div class="demo-stack">
            ${demo.techStack.map(t => `<span class="demo-pill">${t}</span>`).join("")}
          </div>
        </div>
        <div class="demo-card-footer">
          <a href="${demo.demoUrl}" class="demo-btn ${demo.comingSoon ? 'demo-btn-disabled' : ''}" ${demo.comingSoon ? '' : `target="_blank"`}>
            <ion-icon name="${demo.comingSoon ? 'time-outline' : 'open-outline'}"></ion-icon>
            ${demo.comingSoon ? 'Notify Me When Live' : 'Open Demo'}
          </a>
        </div>`;
      demosGrid.appendChild(div);
    });
  }

  // =========================================================
  // RENDER: Case Studies (T5)
  // =========================================================
  const caseStudiesGrid = document.getElementById("caseStudiesGrid");
  if (caseStudiesGrid) {
    caseStudies.forEach(cs => {
      const div = document.createElement("div");
      div.classList.add("case-study-card");
      div.innerHTML = `
        <div class="cs-header">
          <div class="cs-tags">${cs.tags.map(t => `<span class="cs-tag">${t}</span>`).join("")}</div>
          <span class="cs-read-time"><ion-icon name="time-outline"></ion-icon>${cs.readTime}</span>
        </div>
        <h3 class="cs-title">${cs.title}</h3>
        <div class="cs-body">
          <div class="cs-section">
            <h4 class="cs-section-label"><ion-icon name="alert-circle-outline"></ion-icon> Problem</h4>
            <p>${cs.problem}</p>
          </div>
          <div class="cs-section">
            <h4 class="cs-section-label"><ion-icon name="git-branch-outline"></ion-icon> Architecture</h4>
            <p>${cs.architecture}</p>
          </div>
          <div class="cs-section">
            <h4 class="cs-section-label"><ion-icon name="bulb-outline"></ion-icon> Key Engineering Decisions</h4>
            <ul class="cs-decisions">${cs.decisions.map(d => `<li>${d}</li>`).join("")}</ul>
          </div>
          <div class="cs-section">
            <h4 class="cs-section-label"><ion-icon name="warning-outline"></ion-icon> Biggest Challenge</h4>
            <p>${cs.challenges}</p>
          </div>
          <div class="cs-outcome">
            <ion-icon name="checkmark-circle-outline"></ion-icon>
            <span>${cs.outcome}</span>
          </div>
        </div>`;
      caseStudiesGrid.appendChild(div);
    });
  }

  // =========================================================
  // RENDER: GitHub Repos (T6)
  // =========================================================
  const githubGrid = document.getElementById("githubGrid");
  if (githubGrid) {
    githubRepos.forEach(repo => {
      const div = document.createElement("div");
      div.classList.add("github-card");
      div.innerHTML = `
        <div class="gh-card-header">
          <ion-icon name="logo-github" class="gh-icon"></ion-icon>
          <a href="${repo.url}" target="_blank" class="gh-name">${repo.displayName}</a>
          <span class="gh-stars"><ion-icon name="star-outline"></ion-icon>${repo.stars}</span>
        </div>
        <p class="gh-desc">${repo.description}</p>
        <div class="gh-footer">
          <div class="gh-topics">${repo.topics.map(t => `<span class="gh-topic">${t}</span>`).join("")}</div>
          <span class="gh-lang"><span class="gh-lang-dot" style="background:#3572A5"></span>${repo.language}</span>
        </div>`;
      githubGrid.appendChild(div);
    });
  }

  // =========================================================
  // RENDER: Blog Posts (T7)
  // =========================================================
  const blogGrid = document.getElementById("blogGrid");
  if (blogGrid) {
    blogPosts.forEach(post => {
      const div = document.createElement("div");
      div.classList.add("blog-card");
      div.innerHTML = `
        <div class="blog-card-header">
          <div class="blog-tags">${post.tags.map(t => `<span class="blog-tag">${t}</span>`).join("")}</div>
          <div class="blog-meta">
            <span><ion-icon name="time-outline"></ion-icon>${post.readTime}</span>
            <span>${post.date}</span>
          </div>
        </div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <div class="blog-card-footer">
          <span class="blog-platform-badge">
            <ion-icon name="logo-linkedin"></ion-icon>
            ${post.platform}
          </span>
          <a href="${post.url}" target="_blank" rel="noopener" class="blog-read-link">
            Read Article <ion-icon name="arrow-forward-outline"></ion-icon>
          </a>
        </div>`;
      blogGrid.appendChild(div);
    });
  }

  // =========================================================
  // RENDER: Skill Categories (T8)
  // =========================================================
  const skillCategoriesGrid = document.getElementById("skillCategoriesGrid");
  if (skillCategoriesGrid) {
    skillCategories.forEach(cat => {
      const div = document.createElement("div");
      div.classList.add("skill-cat-card");
      div.innerHTML = `
        <div class="skill-cat-header" style="border-color:${cat.color}30">
          <div class="skill-cat-icon" style="background:${cat.color}15;color:${cat.color}">
            <ion-icon name="${cat.icon}"></ion-icon>
          </div>
          <h4 class="skill-cat-title" style="color:${cat.color}">${cat.category}</h4>
        </div>
        <div class="skill-cat-items">
          ${cat.items.map(item => `<span class="skill-cat-item">${item}</span>`).join("")}
        </div>`;
      skillCategoriesGrid.appendChild(div);
    });
  }

  // =========================================================
  // RENDER: Resume
  // =========================================================
  const eduList = document.querySelector(".education-list");
  education.forEach(e => {
    const li = document.createElement("li");
    li.classList.add("timeline-item");
    li.innerHTML = `<p class="tl-title">${e.degree}</p><span class="tl-company">${e.institute}</span><span class="tl-year">${e.year}</span>`;
    eduList.appendChild(li);
  });

  const skillsList = document.getElementById("skillsList");
  skills.forEach(s => {
    const li = document.createElement("li");
    li.classList.add("skill-item");
    li.innerHTML = `
      <div class="skill-top"><span class="skill-name">${s.name}</span><span class="skill-pct">${s.progress}%</span></div>
      <div class="skill-bar-bg"><div class="skill-bar-fill" data-width="${s.progress}%"></div></div>`;
    skillsList.appendChild(li);
  });

  function animateSkills() {
    document.querySelectorAll(".skill-bar-fill").forEach(bar => { bar.style.width = bar.dataset.width; });
  }

  const expList = document.querySelector(".experience-list");
  experience.forEach(e => {
    const li = document.createElement("li");
    li.classList.add("timeline-item");
    const pts = e.points.map(p => `<li>${p}</li>`).join("");
    const skillsBadge = e.skills ? `<div class="tl-skills"><ion-icon name="diamond-outline"></ion-icon> ${e.skills}</div>` : "";
    li.innerHTML = `
      <p class="tl-title">${e.designation}</p>
      <span class="tl-company">${e.company}</span>
      <span class="tl-year">${e.year}</span>
      ${e.location ? `<span class="tl-location">${e.location}</span>` : ""}
      <ul class="tl-points">${pts}</ul>
      ${skillsBadge}`;
    expList.appendChild(li);
  });

  // =========================================================
  // RENDER: Projects
  // =========================================================
  const projectGrid = document.getElementById("projectGrid");
  projects.forEach((p, idx) => {
    const li = document.createElement("li");
    li.classList.add("project-card", "active");
    li.setAttribute("data-category", p.category);
    li.setAttribute("data-index", idx);
    li.innerHTML = `
      <div class="project-thumb">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <div class="project-overlay"><ion-icon name="eye-outline"></ion-icon> View Details</div>
        <span class="project-cat-badge">${p.category}</span>
      </div>
      <div class="project-body">
        <h3 class="project-name">${p.name}</h3>
        <p class="project-short">${p.shortDesc}</p>
        <span class="project-role-badge"><ion-icon name="person-outline"></ion-icon>${p.role}</span>
      </div>`;
    li.addEventListener("click", () => openProjectModal(idx));
    projectGrid.appendChild(li);
  });

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      document.querySelectorAll(".project-card").forEach(card => {
        card.classList.toggle("active", filter === "all" || card.dataset.category === filter);
      });
    });
  });

  // =========================================================
  // PROJECT DETAIL MODAL
  // =========================================================
  const projectModal = document.getElementById("projectModal");
  document.getElementById("modalClose").addEventListener("click", () => closeModal(projectModal));
  projectModal.addEventListener("click", e => { if (e.target === projectModal) closeModal(projectModal); });

  function openProjectModal(idx) {
    const p = projects[idx];
    document.getElementById("modalCategory").textContent = p.category;
    document.getElementById("modalTitle").textContent = p.name;
    document.getElementById("modalImage").src = p.image;
    document.getElementById("modalRole").textContent = p.role;
    document.getElementById("modalTeam").textContent = p.team;
    document.getElementById("modalDuration").textContent = p.duration;
    document.getElementById("modalDesc").textContent = p.description;
    const liveWrap = document.getElementById("modalLiveWrap");
    const liveLink = document.getElementById("modalLive");
    if (p.liveUrl) { liveWrap.style.display = "flex"; liveLink.href = p.liveUrl; liveLink.textContent = new URL(p.liveUrl).hostname; }
    else { liveWrap.style.display = "none"; }
    document.getElementById("modalResponsibilities").innerHTML = p.responsibilities.map(r => `<li>${r}</li>`).join("");
    document.getElementById("modalTech").innerHTML = p.technologies.map(t => `<span class="modal-tech-pill">${t}</span>`).join("");
    openModal(projectModal);
  }

  // =========================================================
  // ARCHITECTURE MODAL (T3)
  // =========================================================
  const archModal = document.getElementById("archModal");
  document.getElementById("archModalClose").addEventListener("click", () => closeModal(archModal));
  archModal.addEventListener("click", e => { if (e.target === archModal) closeModal(archModal); });

  function openArchModal(sysId) {
    const sys = aiSystems.find(s => s.id === sysId);
    if (!sys) return;
    document.getElementById("archModalBadge").textContent = sys.badge;
    document.getElementById("archModalTitle").textContent = sys.name + ", Architecture";
    document.getElementById("archModalBody").innerHTML = buildArchContent(sys);
    openModal(archModal);
  }

  function buildArchContent(sys) {
    const d = getArchData(sys.id);
    const metricsHtml = d.metrics
      ? `<div class="arch-metrics-row">${d.metrics.map(m => `
          <div class="arch-metric-card">
            <span class="arch-metric-num">${m.value}</span>
            <span class="arch-metric-label">${m.label}</span>
          </div>`).join("")}</div>` : "";

    const diagramRowsHtml = d.diagramRows.map(row => {
      if (row.label) return `<div class="arch-diagram-label">${row.label}</div>`;
      return `<div class="arch-flow-row">${row.nodes.map(n => {
        if (n === "→" || n === "↔") return `<div class="arch-flow-arrow">${n}</div>`;
        return `<div class="arch-flow-node ${n.ai ? "arch-flow-node-ai" : n.accent ? "arch-flow-node-accent" : ""}">${n.text}${n.sub ? `<small>${n.sub}</small>` : ""}</div>`;
      }).join("")}</div>`;
    }).join("");

    return `
      <div class="arch-section arch-section-hero">
        <p class="arch-text">${d.overview}</p>
        ${metricsHtml}
      </div>
      <div class="arch-section">
        <h4 class="arch-section-title"><ion-icon name="alert-circle-outline"></ion-icon> Problem Statement</h4>
        <p class="arch-text">${d.problemDetail}</p>
      </div>
      <div class="arch-section">
        <h4 class="arch-section-title"><ion-icon name="git-branch-outline"></ion-icon> System Architecture</h4>
        <div class="arch-diagram-wrap">${diagramRowsHtml}</div>
        <div class="arch-pills" style="margin-top:14px">${sys.techStack.map(t => `<span class="modal-tech-pill">${t}</span>`).join("")}</div>
      </div>
      <div class="arch-section">
        <h4 class="arch-section-title"><ion-icon name="git-merge-outline"></ion-icon> Step-by-Step Workflow</h4>
        <ol class="arch-steps">${d.workflow.map(step => `<li><strong>${step.title}:</strong> ${step.detail}</li>`).join("")}</ol>
      </div>
      <div class="arch-section">
        <h4 class="arch-section-title"><ion-icon name="warning-outline"></ion-icon> Engineering Challenges</h4>
        <div class="arch-challenges-grid">${d.challenges.map(c => `
          <div class="arch-challenge-card">
            <div class="arch-challenge-icon"><ion-icon name="construct-outline"></ion-icon></div>
            <div>
              <p class="arch-challenge-title">${c.title}</p>
              <p class="arch-challenge-body">${c.detail}</p>
            </div>
          </div>`).join("")}</div>
      </div>
      <div class="arch-section">
        <h4 class="arch-section-title"><ion-icon name="rocket-outline"></ion-icon> Scaling Considerations</h4>
        <ul class="arch-scaling">${d.scaling.map(s => `<li>${s}</li>`).join("")}</ul>
      </div>
      <div class="arch-section arch-outcome">
        <ion-icon name="checkmark-circle-outline"></ion-icon>
        <div>
          <h4 class="arch-outcome-title">Outcome</h4>
          <p class="arch-outcome-body">${d.outcome}</p>
        </div>
      </div>`;
  }

  function getArchData(sysId) {
    const all = {

      "campaign-agent": {
        overview: "An agentic LLM system that ingests audience data, performs semantic segmentation via vector search, and auto-generates multi-channel marketing campaign strategies with ROI projections, reducing strategy generation time by 3×.",
        metrics: [
          { value: "3×", label: "Faster generation" },
          { value: "<5 min", label: "End-to-end latency" },
          { value: "4 teams", label: "Deployed across" },
          { value: "0", label: "Critical failures (90 days)" },
        ],
        problemDetail: "Marketing teams were spending 4–6 hours manually researching audience segments, reviewing past campaign performance, and crafting multi-channel strategies. The process was bottlenecked by human availability and produced inconsistent quality across strategists. The client needed a system that could ingest structured audience data and output a deployment-ready campaign plan in under 5 minutes.",
        diagramRows: [
          { label: "Request Layer" },
          { nodes: [{ text: "User Input", sub: "Audience + Brief" }, "→", { text: "FastAPI Gateway", sub: "Auth + Rate limit", ai: true }, "→", { text: "LangGraph Supervisor", sub: "Agent orchestration", ai: true }] },
          { label: "Agent Layer" },
          { nodes: [{ text: "Audience Agent", sub: "Segmentation", accent: true }, "↔", { text: "Pinecone", sub: "Historical campaigns", accent: true }, "→", { text: "Strategy Agent", sub: "GPT-4 synthesis", ai: true }, "→", { text: "ROI Projector", sub: "Performance est.", ai: true }] },
          { label: "Output Layer" },
          { nodes: [{ text: "Redis Cache", sub: "Warm segments", accent: true }, "→", { text: "Structured Output", sub: "Campaign + Metrics" }] },
        ],
        workflow: [
          { title: "Input", detail: "Client sends audience segment definition and product brief via authenticated FastAPI endpoint" },
          { title: "Routing", detail: "LangGraph supervisor parses input, determines required sub-agents, and routes to the audience segmentation agent first" },
          { title: "Retrieval", detail: "Segmentation agent queries Pinecone for semantically similar historical campaigns using dense embeddings (OpenAI text-embedding-3-large)" },
          { title: "Ranking", detail: "Retrieved campaigns ranked by similarity score and filtered by recency and historical performance metrics" },
          { title: "Synthesis", detail: "Strategy agent receives enriched context (segments + similar campaigns) and calls GPT-4 with structured output schema for multi-channel plan" },
          { title: "Projection", detail: "ROI projector applies historical performance coefficients to estimate expected metrics per channel (email, social, paid, SEO)" },
          { title: "Delivery", detail: "Final structured campaign plan streamed back via FastAPI Server-Sent Events, client sees tokens appearing in real-time" },
        ],
        challenges: [
          { title: "Agent Loop Prevention", detail: "Early prototypes entered tool-calling loops. Solved with max-step guards (configurable per agent), explicit exit conditions in LangGraph state schema, and loop-detection heuristics comparing sequential state snapshots for circular patterns." },
          { title: "Context Window Management", detail: "Multi-hop agent calls accumulated large conversation histories, hitting context limits. Implemented sliding window summarisation, a dedicated summarisation agent compresses older context before each new hop, preserving key facts in a fraction of the tokens." },
          { title: "Structured Output Consistency", detail: "GPT-4 occasionally deviated from the expected JSON schema for campaign plans. Switched to OpenAI function-calling mode with strict schema enforcement and added a Pydantic validation layer with retry logic (max 3 attempts before error escalation)." },
          { title: "Cold Start Latency", detail: "First-call latency averaged 18 seconds due to sequential agent execution. Redis semantic cache for repeated or similar audience segments cut P95 latency to under 5 seconds for warm queries, covering ~60% of real-world traffic." },
        ],
        scaling: [
          "Kubernetes HPA on FastAPI pods scales horizontally based on request queue depth, handles burst demand during campaign planning sprints without manual intervention.",
          "Celery worker pool runs audience segmentation and historical retrieval concurrently, not sequentially, shaving ~40% off wall-clock time.",
          "Model-agnostic config flag enables cost-optimised routing: GPT-4o for strategy synthesis, GPT-4o-mini for simpler sub-tasks like ROI projection.",
          "Pinecone serverless index scales automatically, zero infrastructure management for the vector store.",
        ],
        outcome: "3× faster campaign strategy generation. Average turnaround reduced from 4–6 hours to under 5 minutes. Deployed across 4 product teams with zero critical failures in the first 90 days. Strategist satisfaction improved significantly, AI acts as a force multiplier rather than a replacement.",
      },

      "competitor-intel": {
        overview: "An autonomous agent that monitors competitor websites on a configurable schedule, extracts structured intelligence using LLM parsing, stores insights in a vector index for change detection, and delivers daily briefings via Slack.",
        metrics: [
          { value: "12", label: "Competitors monitored" },
          { value: "200+", label: "Pages per day" },
          { value: "<8 min", label: "Per crawl cycle" },
          { value: "0", label: "Missed updates (60 days)" },
        ],
        problemDetail: "Business and product teams were spending 3–5 hours weekly manually tracking competitor pricing, product updates, and announcements across dozens of sources. Data was always stale, often missed critical updates, and was never synthesised into a consistent format. The client needed an autonomous system that would monitor competitors continuously and surface structured, actionable intelligence daily.",
        diagramRows: [
          { label: "Scheduler Layer" },
          { nodes: [{ text: "Celery Beat", sub: "Scheduled triggers" }, "→", { text: "Crawler Workers", sub: "Playwright headless", ai: true }, "→", { text: "Raw HTML", sub: "Scraped content" }] },
          { label: "Extraction Layer" },
          { nodes: [{ text: "Content Cleaner", sub: "HTML → text" }, "→", { text: "LLM Parser", sub: "GPT-4 extraction", ai: true }, "→", { text: "Validated JSON", sub: "Structured intel" }] },
          { label: "Storage & Detection Layer" },
          { nodes: [{ text: "Embedder", sub: "OpenAI", ai: true }, "→", { text: "Qdrant Index", sub: "Vector storage", accent: true }, "↔", { text: "Change Detector", sub: "Similarity delta", ai: true }, "→", { text: "Digest Generator", sub: "GPT-4 summary", ai: true }, "→", { text: "Slack API", sub: "Daily briefing" }] },
        ],
        workflow: [
          { title: "Scheduling", detail: "Celery Beat triggers crawl jobs at configured intervals: hourly for pricing pages, daily for blog/news, weekly for full site audits" },
          { title: "Crawling", detail: "Playwright headless browser workers fetch competitor pages, handling JavaScript-rendered content with proper wait conditions for dynamic elements" },
          { title: "Cleaning", detail: "Raw HTML cleaned with BeautifulSoup, irrelevant content (nav, footer, ads) stripped, remaining text segmented into logical sections (pricing tables, feature lists, announcements)" },
          { title: "Extraction", detail: "GPT-4 parser with structured output schema extracts: pricing tiers, feature changes, team announcements, product updates, all as validated JSON" },
          { title: "Indexing", detail: "Extracted intelligence embedded and stored in Qdrant with rich metadata: source URL, competitor ID, content category, extraction timestamp, confidence score" },
          { title: "Change Detection", detail: "New embeddings compared against stored ones using cosine similarity, updates with delta below 0.78 threshold flagged as significant changes" },
          { title: "Digest Delivery", detail: "Daily digest synthesises the day's significant changes, ranked by importance score, then posted to Slack with source links and inline confidence indicators" },
        ],
        challenges: [
          { title: "Anti-Bot Detection", detail: "Several competitor sites implemented sophisticated bot detection. Solved with rotating residential proxies, randomised request timing (1–8s delay), user-agent rotation pool, and Playwright stealth plugins to bypass fingerprinting for most sites." },
          { title: "LLM Extraction Reliability", detail: "GPT-4 occasionally hallucinated pricing figures. Added a validation layer that cross-references extracted numbers against visible page text using regex patterns before accepting LLM output, hallucinated values don't appear in the source HTML." },
          { title: "Cross-Run Deduplication", detail: "The same announcement appeared in multiple consecutive crawls. Implemented near-duplicate detection using MinHash + LSH before embedding, rejecting content with >85% Jaccard similarity to entries from the past 7 days." },
          { title: "Change Sensitivity Tuning", detail: "Initial threshold generated too many false positives, minor CSS/layout changes flagged as content updates. A/B tested similarity thresholds over 2 weeks and settled on 0.78 cosine similarity delta as the optimal balance between coverage and noise." },
        ],
        scaling: [
          "Celery worker pool scales with the number of competitors, adding a new competitor requires only a config entry, zero code changes.",
          "Qdrant collections partitioned by competitor ID and content category for efficient filtered retrieval during change detection.",
          "Tiered model strategy: cheaper models for initial content filtering, GPT-4 only for final structured extraction of high-confidence content, keeps cost linear with scale.",
          "Redis pub/sub enables real-time alerting for high-priority events (e.g. pricing changes) outside the daily digest cycle, with configurable urgency thresholds.",
        ],
        outcome: "Fully automated daily competitive briefings covering 12 competitors across 3 industries. Zero missed significant updates in 60 days post-deployment. Business team competitive research time reduced from 4 hours/week to 15 minutes for review. System monitors 200+ pages daily with average end-to-end latency under 8 minutes per crawl cycle.",
      },

      "rag-assistant": {
        overview: "A production-grade RAG system designed to ingest, index, and intelligently query 50,000+ enterprise documents. Combines hybrid dense + sparse retrieval with cross-encoder re-ranking and multi-hop reasoning to achieve 87% accuracy on domain-specific Q&A benchmarks.",
        metrics: [
          { value: "87%", label: "Q&A accuracy" },
          { value: "70%", label: "Latency reduction" },
          { value: "50K+", label: "Docs indexed" },
          { value: "3", label: "Enterprise clients" },
        ],
        problemDetail: "An enterprise client had 50,000+ internal documents (PDFs, DOCX, Confluence pages) that support teams couldn't query efficiently, resulting in 10-minute average resolution times, frequent escalations, and repeated answers to identical questions. The client needed a system that could answer questions accurately with source citations, deployed within their security perimeter.",
        diagramRows: [
          { label: "Ingestion Pipeline" },
          { nodes: [{ text: "Documents", sub: "PDF/DOCX/TXT" }, "→", { text: "Chunker", sub: "Recursive split" }, "→", { text: "Embedder", sub: "text-embed-3-large", ai: true }, "→", { text: "Pinecone", sub: "Dense index", accent: true }, "→", { text: "BM25 Index", sub: "Sparse index", accent: true }] },
          { label: "Query Pipeline" },
          { nodes: [{ text: "User Query" }, "→", { text: "Query Embed", sub: "+ BM25 encode", ai: true }, "→", { text: "Hybrid Retrieve", sub: "RRF fusion" }, "→", { text: "Cross-Encoder", sub: "Re-ranking", ai: true }, "→", { text: "GPT-4", sub: "Answer + citations", ai: true }] },
          { label: "Caching Layer" },
          { nodes: [{ text: "Redis Semantic Cache", sub: "Warm queries ↓70% latency", accent: true }, "↔", { text: "Query Classifier", sub: "Multi-hop detection", ai: true }] },
        ],
        workflow: [
          { title: "Ingestion", detail: "Documents uploaded via admin API, queued to Celery workers for async processing at 10,000 chunks/hour throughput" },
          { title: "Chunking", detail: "Recursive character splitter with sentence boundary detection, prevents semantic splits mid-thought, produces coherent 300–400 token chunks with 10% overlap" },
          { title: "Dual Indexing", detail: "Each chunk embedded via OpenAI text-embedding-3-large (dense) AND indexed in BM25 (sparse), both stored with identical metadata for cross-referencing" },
          { title: "Hybrid Retrieval", detail: "Top-20 dense candidates + top-20 BM25 candidates retrieved in parallel, then merged via Reciprocal Rank Fusion (RRF), more robust to score scale differences than weighted sum" },
          { title: "Re-ranking", detail: "Cross-encoder (ms-marco-MiniLM-L-6-v2) scores all 40 merged candidates and selects final top-5 most relevant chunks for answer synthesis context" },
          { title: "Multi-hop Check", detail: "Query classifier detects compound questions (e.g. 'What is X and how does it compare to Y?') and decomposes them into sequential sub-queries before retrieval" },
          { title: "Answer Synthesis", detail: "GPT-4 generates answer with inline source citations [Doc: filename, p.N], streamed token-by-token via Server-Sent Events to the client" },
        ],
        challenges: [
          { title: "Chunking Strategy", detail: "The hardest problem. Naive 512-token fixed splits broke semantic coherence across paragraphs, retrieval quality dropped 22%. Solved with recursive character splitting that respects paragraph and sentence boundaries, producing semantically coherent chunks with 10% overlap between adjacent chunks." },
          { title: "Hybrid Search Fusion", detail: "Simple weighted sum of dense + sparse scores produced worse results than either alone due to incompatible score scales. Switched to Reciprocal Rank Fusion (RRF), which is agnostic to score magnitude and improved MRR@10 by 18% over weighted averaging." },
          { title: "Multi-Hop Query Decomposition", detail: "Compound questions like 'What is the refund policy and how does it differ from the cancellation policy?' required two retrieval passes with different queries. Built a lightweight query classifier that detects compound intent and decomposes before retrieval, improved accuracy on compound questions from 61% to 84%." },
          { title: "Latency at Scale", detail: "With 50K chunks, retrieval was fast but GPT-4 synthesis averaged 4.2s. Redis semantic cache stores query embeddings , new queries with cosine similarity >0.92 to cached queries are served directly from cache. This covers ~40% of production traffic, cutting overall P95 from 4.2s to 1.2s." },
        ],
        scaling: [
          "Pinecone serverless index scales automatically , no infrastructure management, pay-per-query model handles arbitrary document growth.",
          "Async FastAPI with streaming SSE , clients receive answer tokens in real-time, not waiting for full synthesis, which dramatically improves perceived responsiveness.",
          "Redis semantic cache with TTL-based expiry , popular query clusters cached automatically, reducing LLM API costs by ~40% in steady state.",
          "Multi-tenant isolation via Pinecone namespace partitioning , different clients' documents never cross-contaminate retrieval results.",
        ],
        outcome: "87% accuracy on domain-specific Q&A benchmark (vs 71% baseline with naive single-stage RAG). 70% reduction in P95 query latency via Redis caching. Deployed to 3 enterprise clients. Support resolution time reduced by 45% , agents resolved queries directly via the knowledge assistant rather than escalating to subject matter experts.",
      },

      "autoagent": {
        overview: "A production-ready, model-agnostic multi-agent orchestration framework built on LangGraph. Supports tool-calling, persistent memory across sessions, parallel sub-agent execution, and human-in-the-loop approval gates.",
        metrics: [
          { value: "3×", label: "Task automation speed" },
          { value: "4", label: "Teams deployed" },
          { value: "3", label: "LLM backends supported" },
          { value: "0", label: "Critical failures (90 days)" },
        ],
        problemDetail: "A marketing tech company needed autonomous agents that could plan and execute multi-step tasks (research → draft → review → publish), remember context across sessions, invoke real tools (web search, code execution, external APIs), and hand off to human approvers for sensitive actions. No existing framework provided all of this reliably in production.",
        diagramRows: [
          { label: "Orchestration Layer" },
          { nodes: [{ text: "Task Input", sub: "User or API" }, "→", { text: "LangGraph DAG", sub: "Stateful orchestration", ai: true }, "→", { text: "Supervisor Agent", sub: "Routing + planning", ai: true }] },
          { label: "Specialist Agents" },
          { nodes: [{ text: "Research Agent", sub: "Web search + RAG", ai: true }, "→", { text: "Writer Agent", sub: "Content generation", ai: true }, "→", { text: "Analyst Agent", sub: "Data + metrics", ai: true }] },
          { label: "Infrastructure" },
          { nodes: [{ text: "pgvector Memory", sub: "Persistent context", accent: true }, "↔", { text: "Tool Registry", sub: "REPL, APIs, Search", accent: true }, "↔", { text: "HITL Gate", sub: "Human approval", accent: true }, "↔", { text: "Celery Queue", sub: "Parallel execution", accent: true }] },
        ],
        workflow: [
          { title: "Task Intake", detail: "Task received via API or user message, parsed by the supervisor agent into a structured plan with ordered sub-tasks and required tools" },
          { title: "Graph Execution", detail: "LangGraph stateful DAG begins execution , each node represents an agent state, edges represent conditional transitions based on output type" },
          { title: "Tool Invocation", detail: "Sub-agents invoke registered tools: web search (Tavily), Python REPL (sandboxed execution), external APIs, and knowledge base queries via the RAG sub-agent" },
          { title: "Memory Access", detail: "Each agent reads from and writes to PostgreSQL + pgvector long-term memory , summaries of past sessions retrieved by semantic similarity for context injection" },
          { title: "Parallel Execution", detail: "Independent sub-tasks routed to Celery workers for parallel execution , research and data analysis can run concurrently while writer waits for both" },
          { title: "HITL Gate", detail: "Sensitive actions (publishing, sending emails, API calls with side effects) pause at a LangGraph interrupt node for human review before proceeding" },
          { title: "Output Assembly", detail: "Supervisor assembles sub-agent outputs, performs quality checks, and streams final result to the client with a full execution trace" },
        ],
        challenges: [
          { title: "Agent Loop Detection", detail: "Agents occasionally entered tool-calling loops, calling the same tool repeatedly with identical parameters. Solved with state-aware loop detection that compares the last 3 tool calls , if identical, the agent is interrupted and rerouted via the supervisor." },
          { title: "Cross-Session Memory", detail: "Naive full-history injection quickly exhausted context windows. Implemented a two-tier memory system: short-term (current session sliding window) + long-term (pgvector semantic retrieval of relevant past sessions) , injecting only the most relevant historical context." },
          { title: "HITL Timing", detail: "Determining when to pause for human approval without interrupting flow too frequently required careful gate placement. Settled on a risk-scoring approach: actions scored above a configurable threshold trigger HITL, others auto-proceed." },
          { title: "Model-Agnostic Routing", detail: "Supporting OpenAI, Anthropic Claude, and local Ollama models required abstracting away provider-specific tool-calling formats. Built a unified tool-call adapter layer that normalises responses from all three providers into a consistent internal schema." },
        ],
        scaling: [
          "Celery task queue enables parallel sub-agent execution , multi-step tasks that previously ran sequentially now complete in 40% less wall-clock time.",
          "LangGraph checkpointing persists agent state to PostgreSQL , agents can be paused, resumed, or restarted without losing progress, even across server restarts.",
          "Model router selects the cheapest model capable of handling each sub-task , GPT-4o for complex synthesis, GPT-4o-mini for simple tool calls, Ollama for privacy-sensitive tasks.",
          "Horizontal FastAPI scaling with shared PostgreSQL state store , any pod can resume any agent's execution without affinity requirements.",
        ],
        outcome: "3× faster task completion for marketing automation workflows. Deployed across 4 product teams processing 200+ agentic tasks per day. Zero critical failures in the first 90 days. Model-agnostic design enabled a 35% LLM cost reduction by routing simpler sub-tasks to cheaper models.",
      },

      "vector-search": {
        overview: "A high-performance semantic search API built on hybrid Qdrant + ElasticSearch indexing. Achieves sub-100ms P99 query latency over a 2M+ item catalogue with multi-modal embeddings and rich metadata filtering.",
        metrics: [
          { value: "<100ms", label: "P99 latency" },
          { value: "2M+", label: "Items indexed" },
          { value: "3×", label: "Speed via ONNX" },
          { value: "99.9%", label: "Uptime (K8s HPA)" },
        ],
        problemDetail: "A product catalogue with 2M+ items needed a search experience that understood semantic meaning, not just keywords. Users searching for 'comfortable running shoes for wide feet' should surface relevant results even without exact keyword matches. The challenge: achieve this at sub-100ms P99 latency under real production load, with support for 50+ metadata filter combinations.",
        diagramRows: [
          { label: "Embedding Service" },
          { nodes: [{ text: "Item Catalogue", sub: "2M+ records" }, "→", { text: "ONNX Embedder", sub: "SentenceTransformers", ai: true }, "→", { text: "Qdrant", sub: "Dense vectors", accent: true }, "→", { text: "ElasticSearch", sub: "Sparse + metadata", accent: true }] },
          { label: "Query Pipeline" },
          { nodes: [{ text: "Search Query", sub: "Text / Image" }, "→", { text: "Query Embedder", sub: "ONNX runtime", ai: true }, "→", { text: "Hybrid Search", sub: "Qdrant + ES merge" }, "→", { text: "Filter DSL", sub: "Metadata predicates" }, "→", { text: "Ranked Results", sub: "Top-K response" }] },
          { label: "Infrastructure" },
          { nodes: [{ text: "K8s HPA", sub: "Auto-scaling pods", accent: true }, "↔", { text: "Redis Cache", sub: "Hot queries", accent: true }, "↔", { text: "FastAPI", sub: "Async serving", ai: true }] },
        ],
        workflow: [
          { title: "Indexing", detail: "Catalogue items processed in batches , text fields embedded via SentenceTransformers (ONNX runtime), image URLs processed via CLIP model, both stored in Qdrant with full metadata payload" },
          { title: "ES Mirroring", detail: "All items also indexed in ElasticSearch with BM25 for keyword matching and as the primary metadata filter engine (handles complex boolean predicates more efficiently than Qdrant)" },
          { title: "Query Embedding", detail: "Incoming search query embedded via same ONNX model as indexing , ONNX runtime achieves 3× throughput vs PyTorch for inference, critical at P99 latency requirements" },
          { title: "Hybrid Retrieval", detail: "Top-50 from Qdrant dense search + top-50 from ElasticSearch BM25, merged via RRF. ES also handles metadata filtering predicates (price range, category, availability) before merge" },
          { title: "Metadata Filtering", detail: "Custom filter DSL exposes Qdrant's payload filter operators via clean REST API , clients pass JSON filter objects rather than learning Qdrant's native query syntax" },
          { title: "Result Serving", detail: "Final ranked results with scores and metadata returned as paginated JSON response, with optional explanation field showing why each result matched" },
        ],
        challenges: [
          { title: "ONNX Runtime Integration", detail: "Converting SentenceTransformers to ONNX required careful handling of dynamic input shapes and attention mask management. The payoff: 3× throughput improvement and 60% memory reduction vs the PyTorch model , essential for meeting P99 latency SLAs." },
          { title: "Hybrid Score Fusion", detail: "Dense and sparse scores have incompatible scales , direct combination degraded results vs either alone. RRF solved the scale problem, but required tuning the k parameter (settled on k=60) via offline A/B testing against a human-labelled relevance dataset." },
          { title: "Zero-Downtime Reindexing", detail: "Catalogue updates of 50K+ items needed to be applied without search downtime. Implemented blue-green Qdrant collection swap: new collection built in background, traffic atomically switched on completion, old collection deleted." },
          { title: "Cold Query Latency", detail: "First requests after pod scale-up were slow due to model loading. Implemented model preloading on pod startup with readiness probe that only passes after the first 10 warm-up inferences confirm sub-100ms performance." },
        ],
        scaling: [
          "Kubernetes HPA scales FastAPI pods based on CPU utilisation and request queue depth , handles 10× traffic spikes during flash sales without manual intervention.",
          "Qdrant sharding across 3 nodes distributes the 2M+ vector index , each node handles ~700K vectors, keeping per-node memory under 8GB.",
          "Redis caches hot query embeddings , popular search terms pre-embedded and cached, eliminating ONNX inference latency for the top 20% of queries.",
          "PodDisruptionBudget ensures minimum 2 replicas available during rolling updates , zero query downtime for catalogue refreshes.",
        ],
        outcome: "Sub-100ms P99 latency achieved and maintained at 2M+ item scale. 3× embedding throughput via ONNX runtime. 99.9% uptime over 6 months via Kubernetes HPA and PDB. Search relevance MRR@10 improved 34% vs the previous keyword-only system.",
      },

      "db-insight": {
        overview: "An internal AI platform that connects to PostgreSQL/MySQL data sources, auto-generates natural language summaries, anomaly alerts, and interactive Plotly visualisations , driving a 65% improvement in data efficiency across the organisation.",
        metrics: [
          { value: "65%", label: "Data efficiency gain" },
          { value: "12s→1.8s", label: "Dashboard load time" },
          { value: "10+", label: "Chart types" },
          { value: "5", label: "Data sources connected" },
        ],
        problemDetail: "Organisation-wide data was siloed across 5 different PostgreSQL and MySQL databases. Analysts needed to write manual SQL queries to surface insights, dashboards were static, and anomalies went undetected until they caused business impact. A platform was needed that could connect to live data, understand it semantically, and surface intelligence automatically.",
        diagramRows: [
          { label: "Data Layer" },
          { nodes: [{ text: "PostgreSQL", sub: "Source 1-3", accent: true }, "→", { text: "MySQL", sub: "Source 4-5", accent: true }, "→", { text: "Schema Analyser", sub: "Auto-discovery", ai: true }, "→", { text: "Pandas ETL", sub: "Transform + clean" }] },
          { label: "Intelligence Layer" },
          { nodes: [{ text: "NL Summariser", sub: "GPT-4", ai: true }, "→", { text: "Anomaly Detector", sub: "Statistical models", ai: true }, "→", { text: "Alert Engine", sub: "Threshold + ML" }] },
          { label: "Visualisation Layer" },
          { nodes: [{ text: "Plotly Charts", sub: "10+ types", accent: true }, "↔", { text: "Dash App", sub: "Interactive callbacks", accent: true }, "↔", { text: "FastAPI", sub: "Data endpoints", ai: true }] },
        ],
        workflow: [
          { title: "Connection", detail: "Platform connects to configured data sources via SQLAlchemy connection pool , auto-discovers schema, table relationships, and column semantics" },
          { title: "Schema Intelligence", detail: "GPT-4 analyses table and column names to infer semantic meaning, grouping related tables into logical domains (e.g. 'orders', 'customers', 'inventory')" },
          { title: "ETL Pipeline", detail: "Pandas-based ETL normalises data types, handles nulls, detects outliers, and produces clean DataFrames ready for analysis and visualisation" },
          { title: "NL Summarisation", detail: "GPT-4 generates plain-English summaries of key dataset metrics (e.g. 'Orders are up 12% this week, with electronics driving 45% of volume') on configurable schedules" },
          { title: "Anomaly Detection", detail: "Combination of statistical methods (Z-score, IQR) and ML models (Isolation Forest for multivariate anomalies) surface data quality issues and business anomalies" },
          { title: "Visualisation", detail: "Dash callbacks serve interactive Plotly charts (Bar, Pie, 3D Scatter, Violin, Line, Heatmap, Sankey) with drill-down capability and real-time data refresh" },
        ],
        challenges: [
          { title: "Query Performance at Scale", detail: "Naive full-table queries on million-row tables caused 12-second dashboard loads. Introduced materialized views for pre-aggregated metrics, query caching with intelligent invalidation, and database indexing strategy , reducing median load time to 1.8 seconds." },
          { title: "Schema Semantic Understanding", detail: "Column names like 'amt', 'qty', 'ts' are meaningless without context. GPT-4 analyses column names alongside sample data to infer semantics, then stores inferred types in a metadata registry that improves over time." },
          { title: "Anomaly Alert Tuning", detail: "Initial anomaly detection generated excessive false positives. Implemented a feedback loop where analysts can mark alerts as false positives , the system adjusts per-metric thresholds automatically based on historical false positive rates." },
          { title: "Multi-Source Join Complexity", detail: "Joining tables across different database engines required a virtual query layer. Built an abstraction that translates logical join intents into separate queries per source, then performs the join in Pandas , transparently to the user." },
        ],
        scaling: [
          "Connection pooling via SQLAlchemy manages concurrent queries to multiple databases without overwhelming source systems.",
          "Celery async tasks for ETL and NL summarisation jobs , dashboards render immediately with cached data while fresh summaries generate in the background.",
          "Redis caching layer stores computed aggregations with TTL aligned to data update frequency , daily aggregates cached for 24 hours, hourly for 1 hour.",
          "Dash server-side callbacks offload heavy computation from browser to server , clients receive only the minimal chart data needed for the current view.",
        ],
        outcome: "65% improvement in data efficiency , analysts spend time on insights rather than query writing. Dashboard load time reduced from 12 seconds to 1.8 seconds. Anomaly detection catches issues 4× faster than manual monitoring. Platform adopted by 5 internal teams across 3 departments.",
      },
    };

    return all[sysId] || all["rag-assistant"];
  }

  // =========================================================
  // CV DOWNLOAD MODAL
  // =========================================================
  const cvModal = document.getElementById("cvModal");
  document.getElementById("cvBtn").addEventListener("click", () => openModal(cvModal));
  document.getElementById("cvBtn2").addEventListener("click", () => openModal(cvModal));
  document.getElementById("cvModalClose").addEventListener("click", () => closeModal(cvModal));
  cvModal.addEventListener("click", e => { if (e.target === cvModal) closeModal(cvModal); });

  document.getElementById("cvForm").addEventListener("submit", e => {
    e.preventDefault();
    const a = document.createElement("a");
    a.href = "assets/Yogesh_Python_CV.pdf";
    a.target = "_blank";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    document.getElementById("cvForm").style.display = "none";
    document.getElementById("cvSuccess").style.display = "flex";
    setTimeout(() => {
      document.getElementById("cvForm").style.display = "flex";
      document.getElementById("cvSuccess").style.display = "none";
      document.getElementById("cvForm").reset();
      closeModal(cvModal);
    }, 3000);
  });

  // =========================================================
  // INQUIRY MODAL
  // =========================================================
  const inquiryModal = document.getElementById("inquiryModal");
  document.getElementById("inquiryNavBtn").addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));
    document.querySelector("[data-page='contact']").classList.add("active");
    navLinks.forEach(l => { if (l.textContent.trim().toLowerCase() === "contact") l.classList.add("active"); });
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.getElementById("inquiryModalClose").addEventListener("click", () => closeModal(inquiryModal));
  inquiryModal.addEventListener("click", e => { if (e.target === inquiryModal) closeModal(inquiryModal); });

  document.getElementById("inquiryModalForm").addEventListener("submit", async e => {
    e.preventDefault();
    const data = new FormData(e.target);
    const res = await fetch("https://formspree.io/f/mzdjrped", { method: "POST", body: data, headers: { Accept: "application/json" } });
    if (res.ok) {
      e.target.style.display = "none";
      document.getElementById("inquirySuccess").style.display = "flex";
      setTimeout(() => { e.target.style.display = "flex"; document.getElementById("inquirySuccess").style.display = "none"; e.target.reset(); closeModal(inquiryModal); }, 3000);
    } else { alert("Something went wrong. Please try again."); }
  });

  // Contact page form
  const contactPageForm = document.getElementById("inquiryForm");
  if (contactPageForm) {
    const formInputs = contactPageForm.querySelectorAll("[data-form-input]");
    const formBtn = contactPageForm.querySelector("[data-form-btn]");
    formInputs.forEach(inp => inp.addEventListener("input", () => { formBtn.disabled = !contactPageForm.checkValidity(); }));
    contactPageForm.addEventListener("submit", async e => {
      e.preventDefault();
      const data = new FormData(contactPageForm);
      const res = await fetch("https://formspree.io/f/mzdjrped", { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (res.ok) {
        formBtn.innerHTML = `<ion-icon name="checkmark-outline"></ion-icon> Sent!`;
        formBtn.style.background = "var(--success)";
        setTimeout(() => { formBtn.innerHTML = `<ion-icon name="paper-plane-outline"></ion-icon> Send Message`; formBtn.style.background = ""; contactPageForm.reset(); formBtn.disabled = true; }, 3000);
      } else { alert("Something went wrong. Please try again."); }
    });
  }

  // =========================================================
  // NAV & PAGE SWITCHING
  // =========================================================
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  function navigateTo(target) {
    navLinks.forEach(l => l.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));
    const targetPage = document.querySelector(`[data-page="${target}"]`);
    if (targetPage) {
      targetPage.classList.add("active");
      navLinks.forEach(l => { if (l.textContent.trim().toLowerCase() === target) l.classList.add("active"); });
      if (target === "resume") setTimeout(animateSkills, 120);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navigateTo(this.textContent.trim().toLowerCase());
    });
  });

  // Hero CTA nav buttons
  document.querySelectorAll("[data-nav-to]").forEach(btn => {
    btn.addEventListener("click", function() {
      navigateTo(this.dataset.navTo);
      if (this.dataset.scrollTo) {
        setTimeout(() => {
          const el = document.getElementById(this.dataset.scrollTo);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    });
  });

  // =========================================================
  // SIDEBAR CONTACTS TOGGLE
  // =========================================================
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");
  const contacts = document.querySelector("[data-contacts]");
  if (sidebarBtn && contacts) {
    sidebarBtn.addEventListener("click", () => {
      contacts.classList.toggle("open");
      sidebarBtn.classList.toggle("open");
    });
  }

  // =========================================================
  // KEYBOARD CLOSE
  // =========================================================
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeModal(projectModal); closeModal(cvModal); closeModal(inquiryModal); closeModal(archModal); }
  });

  // =========================================================
  // HELPERS
  // =========================================================
  function openModal(el) { el.classList.add("open"); document.body.style.overflow = "hidden"; }
  function closeModal(el) { el.classList.remove("open"); document.body.style.overflow = ""; }
});