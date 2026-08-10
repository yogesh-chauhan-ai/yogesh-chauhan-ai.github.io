"use strict";

// Page content (About, AI Systems, Resume, Portfolio, Open Source, Contact) is written
// directly as static HTML in index.html so it's crawlable without JS. This script only
// wires up interactivity: nav switching, filters, modals, and forms. `projects` is still
// needed here to populate the Portfolio detail modal on click.

import { projects } from "./Data.js";

document.addEventListener("DOMContentLoaded", () => {

  // =========================================================
  // ABOUT: Read more / less toggle
  // =========================================================
  const readMoreBtn = document.getElementById("readMoreBtn");
  const profileSummary = document.getElementById("profileSummary");
  readMoreBtn.addEventListener("click", () => {
    const isExpanded = profileSummary.classList.toggle("expanded");
    readMoreBtn.classList.toggle("expanded");
    readMoreBtn.querySelector("span").textContent = isExpanded ? "Show less" : "Read more";
  });

  // =========================================================
  // PROJECTS: filter + detail modal
  // =========================================================
  const projectGrid = document.getElementById("projectGrid");
  if (projectGrid) {
    projectGrid.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("click", () => openProjectModal(card.dataset.id));
    });
  }

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

  const projectModal = document.getElementById("projectModal");
  document.getElementById("modalClose").addEventListener("click", () => closeModal(projectModal));
  projectModal.addEventListener("click", e => { if (e.target === projectModal) closeModal(projectModal); });

  function openProjectModal(id) {
    const p = projects.find(pr => String(pr.id) === String(id));
    if (!p) return;
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
  // OPEN SOURCE: copy install command to clipboard
  // =========================================================
  const ossGrid = document.getElementById("ossGrid");
  if (ossGrid) {
    ossGrid.addEventListener("click", e => {
      const btn = e.target.closest("[data-copy]");
      if (!btn) return;
      navigator.clipboard.writeText(btn.dataset.copy).then(() => {
        const icon = btn.querySelector("ion-icon");
        if (icon) { icon.setAttribute("name", "checkmark-outline"); setTimeout(() => icon.setAttribute("name", "copy-outline"), 1800); }
      });
    });
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
    const form = e.target;
    const submitBtn = form.querySelector("button[type=submit]");
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<ion-icon name="hourglass-outline"></ion-icon> Sending...`;
    const data = new FormData(form);
    data.append("_subject", "New Inquiry — Yogesh Portfolio");
    data.append("_captcha", "false");
    data.append("_template", "table");
    try {
      const res = await fetch("https://formsubmit.co/ajax/info.yogesh2848@gmail.com", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });
      const json = await res.json();
      if (json.success === "true" || json.success === true) {
        form.style.display = "none";
        document.getElementById("inquirySuccess").style.display = "flex";
        setTimeout(() => {
          form.style.display = "flex";
          document.getElementById("inquirySuccess").style.display = "none";
          form.reset();
          closeModal(inquiryModal);
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }, 3000);
      } else {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        alert("Something went wrong. Please try again.");
      }
    } catch {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      alert("Something went wrong. Please try again.");
    }
  });

  // Contact page form
  const contactPageForm = document.getElementById("inquiryForm");
  if (contactPageForm) {
    const formInputs = contactPageForm.querySelectorAll("[data-form-input]");
    const formBtn = contactPageForm.querySelector("[data-form-btn]");
    formInputs.forEach(inp => inp.addEventListener("input", () => { formBtn.disabled = !contactPageForm.checkValidity(); }));
    contactPageForm.addEventListener("submit", async e => {
      e.preventDefault();
      const originalText = formBtn.innerHTML;
      formBtn.disabled = true;
      formBtn.innerHTML = `<ion-icon name="hourglass-outline"></ion-icon> Sending...`;
      const data = new FormData(contactPageForm);
      data.append("_subject", "New Inquiry — Yogesh Portfolio");
      data.append("_captcha", "false");
      data.append("_template", "table");
      try {
        const res = await fetch("https://formsubmit.co/ajax/info.yogesh2848@gmail.com", {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" }
        });
        const json = await res.json();
        if (json.success === "true" || json.success === true) {
          formBtn.innerHTML = `<ion-icon name="checkmark-outline"></ion-icon> Sent!`;
          formBtn.style.background = "var(--success)";
          setTimeout(() => {
            formBtn.innerHTML = `<ion-icon name="paper-plane-outline"></ion-icon> Send Message`;
            formBtn.style.background = "";
            contactPageForm.reset();
            formBtn.disabled = true;
          }, 3000);
        } else {
          formBtn.disabled = false;
          formBtn.innerHTML = originalText;
          alert("Something went wrong. Please try again.");
        }
      } catch {
        formBtn.disabled = false;
        formBtn.innerHTML = originalText;
        alert("Something went wrong. Please try again.");
      }
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
    if (e.key === "Escape") { closeModal(projectModal); closeModal(cvModal); closeModal(inquiryModal); }
  });

  // =========================================================
  // HELPERS
  // =========================================================
  function openModal(el) { el.classList.add("open"); document.body.style.overflow = "hidden"; }
  function closeModal(el) { el.classList.remove("open"); document.body.style.overflow = ""; }
});
