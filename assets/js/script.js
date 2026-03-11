"use strict";

import {
  UserData, profile, services, techStack,
  education, experience, skills, projects
} from "./Data.js";

document.addEventListener("DOMContentLoaded", () => {

  // =========================================================
  // RENDER: About
  // =========================================================
  document.querySelector(".profile-summary").innerHTML = profile.summary;

  // Services
  const servicesList = document.getElementById("servicesList");
  services.forEach(s => {
    const li = document.createElement("li");
    li.classList.add("service-card");
    li.innerHTML = `
      <div class="service-icon"><ion-icon name="${s.icon}"></ion-icon></div>
      <div>
        <h4 class="service-card-title">${s.title}</h4>
        <p class="service-card-text">${s.description}</p>
      </div>`;
    servicesList.appendChild(li);
  });

  // Tech Cloud
  const techCloud = document.getElementById("techCloud");
  techStack.forEach(t => {
    const span = document.createElement("span");
    span.classList.add("tech-pill");
    span.textContent = t;
    techCloud.appendChild(span);
  });

  // =========================================================
  // RENDER: Resume
  // =========================================================
  const eduList = document.querySelector(".education-list");
  education.forEach(e => {
    const li = document.createElement("li");
    li.classList.add("timeline-item");
    li.innerHTML = `
      <p class="tl-title">${e.degree}</p>
      <span class="tl-company">${e.institute}</span>
      <span class="tl-year">${e.year}</span>`;
    eduList.appendChild(li);
  });

  const expList = document.querySelector(".experience-list");
  experience.forEach(e => {
    const li = document.createElement("li");
    li.classList.add("timeline-item");
    const pts = e.points.map(p => `<li>${p}</li>`).join("");
    li.innerHTML = `
      <p class="tl-title">${e.designation}</p>
      <span class="tl-company">${e.company}</span>
      <span class="tl-year">${e.year}</span>
      <ul class="tl-points">${pts}</ul>`;
    expList.appendChild(li);
  });

  const skillsList = document.getElementById("skillsList");
  skills.forEach(s => {
    const li = document.createElement("li");
    li.classList.add("skill-item");
    li.innerHTML = `
      <div class="skill-top">
        <span class="skill-name">${s.name}</span>
        <span class="skill-pct">${s.progress}%</span>
      </div>
      <div class="skill-bar-bg">
        <div class="skill-bar-fill" data-width="${s.progress}%"></div>
      </div>`;
    skillsList.appendChild(li);
  });

  function animateSkills() {
    document.querySelectorAll(".skill-bar-fill").forEach(bar => {
      bar.style.width = bar.dataset.width;
    });
  }

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
        <div class="project-overlay">
          <ion-icon name="eye-outline"></ion-icon>
          View Details
        </div>
        <span class="project-cat-badge">${p.category}</span>
      </div>
      <div class="project-body">
        <h3 class="project-name">${p.name}</h3>
        <p class="project-short">${p.shortDesc}</p>
        <span class="project-role-badge">
          <ion-icon name="person-outline"></ion-icon>
          ${p.role}
        </span>
      </div>`;

    li.addEventListener("click", () => openProjectModal(idx));
    projectGrid.appendChild(li);
  });

  // Filter
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      document.querySelectorAll(".project-card").forEach(card => {
        const match = filter === "all" || card.dataset.category === filter;
        card.classList.toggle("active", match);
      });
    });
  });

  // =========================================================
  // PROJECT DETAIL MODAL
  // =========================================================
  const projectModal = document.getElementById("projectModal");
  const modalClose = document.getElementById("modalClose");

  function openProjectModal(idx) {
    const p = projects[idx];
    document.getElementById("modalCategory").textContent = p.category;
    document.getElementById("modalTitle").textContent = p.name;
    document.getElementById("modalImage").src = p.image;
    document.getElementById("modalImage").alt = p.name;
    document.getElementById("modalRole").textContent = p.role;
    document.getElementById("modalTeam").textContent = p.team;
    document.getElementById("modalDuration").textContent = p.duration;
    document.getElementById("modalDesc").textContent = p.description;

    // Live URL (optional)
    const liveWrap = document.getElementById("modalLiveWrap");
    const liveLink = document.getElementById("modalLive");
    if (p.liveUrl) {
      liveWrap.style.display = "flex";
      liveLink.href = p.liveUrl;
      liveLink.textContent = new URL(p.liveUrl).hostname;
    } else {
      liveWrap.style.display = "none";
    }

    // Responsibilities
    const respList = document.getElementById("modalResponsibilities");
    respList.innerHTML = p.responsibilities.map(r => `<li>${r}</li>`).join("");

    // Tech pills
    const techContainer = document.getElementById("modalTech");
    techContainer.innerHTML = p.technologies.map(t => `<span class="modal-tech-pill">${t}</span>`).join("");

    openModal(projectModal);
  }

  modalClose.addEventListener("click", () => closeModal(projectModal));
  projectModal.addEventListener("click", e => { if (e.target === projectModal) closeModal(projectModal); });

  // =========================================================
  // CV DOWNLOAD MODAL
  // =========================================================
  const cvModal = document.getElementById("cvModal");
  const cvModalClose = document.getElementById("cvModalClose");
  const cvForm = document.getElementById("cvForm");
  const cvSuccess = document.getElementById("cvSuccess");

  function openCvModal() { openModal(cvModal); }

  document.getElementById("cvBtn").addEventListener("click", openCvModal);
  document.getElementById("cvBtn2").addEventListener("click", openCvModal);
  cvModalClose.addEventListener("click", () => closeModal(cvModal));
  cvModal.addEventListener("click", e => { if (e.target === cvModal) closeModal(cvModal); });

  cvForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("cvEmail").value;
    if (!email) return;
    // Simulate download — replace href with actual CV path
    const a = document.createElement("a");
    a.href = UserData.cvFile;
    a.download = "Yogesh_Chauhan_CV.pdf";
    a.click();
    cvForm.style.display = "none";
    cvSuccess.style.display = "flex";
    setTimeout(() => {
      cvForm.style.display = "flex";
      cvSuccess.style.display = "none";
      cvForm.reset();
      closeModal(cvModal);
    }, 3000);
  });

  // =========================================================
  // INQUIRY MODAL
  // =========================================================
  const inquiryModal = document.getElementById("inquiryModal");
  const inquiryModalClose = document.getElementById("inquiryModalClose");
  const inquiryModalForm = document.getElementById("inquiryModalForm");
  const inquirySuccess = document.getElementById("inquirySuccess");

  function openInquiryModal() { openModal(inquiryModal); }

  document.getElementById("inquiryNavBtn").addEventListener("click", openInquiryModal);
  inquiryModalClose.addEventListener("click", () => closeModal(inquiryModal));
  inquiryModal.addEventListener("click", e => { if (e.target === inquiryModal) closeModal(inquiryModal); });

  inquiryModalForm.addEventListener("submit", e => {
    e.preventDefault();
    inquiryModalForm.style.display = "none";
    inquirySuccess.style.display = "flex";
    setTimeout(() => {
      inquiryModalForm.style.display = "flex";
      inquirySuccess.style.display = "none";
      inquiryModalForm.reset();
      closeModal(inquiryModal);
    }, 3000);
  });

  // Contact page inquiry form
  const contactPageForm = document.getElementById("inquiryForm");
  if (contactPageForm) {
    const formInputs = contactPageForm.querySelectorAll("[data-form-input]");
    const formBtn = contactPageForm.querySelector("[data-form-btn]");
    formInputs.forEach(inp => {
      inp.addEventListener("input", () => {
        formBtn.disabled = !contactPageForm.checkValidity();
      });
    });
    contactPageForm.addEventListener("submit", e => {
      e.preventDefault();
      formBtn.textContent = "✓ Message Sent!";
      formBtn.style.background = "var(--success)";
      setTimeout(() => {
        formBtn.innerHTML = `<ion-icon name="paper-plane-outline"></ion-icon> Send Message`;
        formBtn.style.background = "";
        contactPageForm.reset();
        formBtn.disabled = true;
      }, 3000);
    });
  }

  // =========================================================
  // NAV & PAGE SWITCHING
  // =========================================================
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      const target = this.textContent.trim().toLowerCase();
      navLinks.forEach(l => l.classList.remove("active"));
      pages.forEach(p => p.classList.remove("active"));
      this.classList.add("active");
      pages.forEach(p => {
        if (p.dataset.page === target) {
          p.classList.add("active");
          if (target === "resume") setTimeout(animateSkills, 120);
        }
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  // =========================================================
  // SIDEBAR CONTACTS TOGGLE (mobile)
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
    if (e.key === "Escape") {
      closeModal(projectModal);
      closeModal(cvModal);
      closeModal(inquiryModal);
    }
  });

  // =========================================================
  // HELPERS
  // =========================================================
  function openModal(el) {
    el.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal(el) {
    el.classList.remove("open");
    document.body.style.overflow = "";
  }
});
