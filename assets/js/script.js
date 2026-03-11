"use strict";

import { skills, projects, UserData, profile, education, experience, services } from "./Data.js";

window.addEventListener("DOMContentLoaded", function () {

  // --- Render User Data ---
  document.querySelector(".name").textContent = UserData[1].name;
  document.querySelector(".profile_img").src = UserData[0].image;
  document.querySelector(".title_text").textContent = profile[0].title;
  document.querySelector(".profile-summary").innerHTML = profile[0].summary;

  // --- Render Services ---
  const serviceList = document.querySelector(".service-list");
  services.forEach((service) => {
    const li = document.createElement("li");
    li.classList.add("service-item");
    li.innerHTML = `
      <div class="service-icon-box">
        <img src="${service.image}" alt="${service.title}" width="40" />
      </div>
      <div class="service-content-box">
        <h4 class="h4 service-item-title">${service.title}</h4>
        <p class="service-item-text">${service.description}</p>
      </div>`;
    serviceList.appendChild(li);
  });

  // --- Render Education ---
  const educationList = document.querySelector(".education-list");
  education.forEach((deg) => {
    const li = document.createElement("li");
    li.classList.add("timeline-item");
    li.innerHTML = `
      <h4 class="h4 timeline-item-title">${deg.degree}</h4>
      <span>${deg.institute}</span>
      <p class="timeline-text">${deg.year}</p>`;
    educationList.appendChild(li);
  });

  // --- Render Experience ---
  const experienceList = document.querySelector(".experience-list");
  experience.forEach((exp) => {
    const li = document.createElement("li");
    li.classList.add("timeline-item");
    li.innerHTML = `
      <h4 class="h4 timeline-item-title">${exp.designation}</h4>
      <span>${exp.company}</span>
      <p class="timeline-text">${exp.year}</p>`;
    experienceList.appendChild(li);
  });

  // --- Render Skills ---
  const skillsList = document.querySelector(".skills-list");
  skills.forEach((skill) => {
    const li = document.createElement("li");
    li.classList.add("skills-item");
    li.innerHTML = `
      <div class="title-wrapper">
        <h5 class="h5">${skill.name}</h5>
        <data value="${skill.progress}">${skill.progress}%</data>
      </div>
      <div class="skill-progress-bg">
        <div class="skill-progress-fill" style="width: 0%" data-width="${skill.progress}%"></div>
      </div>`;
    skillsList.appendChild(li);
  });

  // Animate skill bars when resume tab is shown
  function animateSkills() {
    document.querySelectorAll(".skill-progress-fill").forEach((bar) => {
      bar.style.width = bar.dataset.width;
    });
  }

  // --- Render Projects ---
  const projectList = document.querySelector(".project-list");
  projects.forEach((project, index) => {
    const li = document.createElement("li");
    li.classList.add("project-item", "active");
    li.setAttribute("data-category", project.category);
    li.setAttribute("data-index", index);
    li.innerHTML = `
      <figure class="project-img">
        <div class="project-item-icon-box" data-index="${index}">
          <ion-icon name="eye-outline"></ion-icon>
        </div>
        <img src="${project.image}" alt="${project.alt}" loading="lazy" />
      </figure>
      <h3 class="project-title">${project.name}</h3>
      <p class="project-category">${project.category}</p>`;
    projectList.appendChild(li);
  });

  // --- Filter Tabs ---
  const filterTabs = document.querySelectorAll(".filter-tab");
  const filterItems = document.querySelectorAll("[data-category]");

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      filterTabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");
      const selected = this.dataset.filter;
      filterItems.forEach((item) => {
        const cat = item.getAttribute("data-category");
        if (selected === "all" || cat === selected) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    });
  });

  // --- Modal ---
  const modal = document.getElementById("modal");
  const modalClose = document.getElementById("modal-close");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-img");
  const modalDetails = document.getElementById("modal-details");
  const modalTech = document.querySelector(".modal-tech");

  document.querySelector(".project-list").addEventListener("click", function (e) {
    const iconBox = e.target.closest(".project-item-icon-box");
    if (!iconBox) return;
    const index = iconBox.dataset.index;
    const project = projects[index];

    modalImage.src = project.page;
    modalTitle.textContent = project.name;
    modalDetails.textContent = project.description || "";
    modalTech.textContent = project.technologies || "";
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  });

  modalClose.addEventListener("click", closeModal);
  window.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

  function closeModal() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  // --- Page Navigation ---
  const navLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  navLinks.forEach((link, i) => {
    link.addEventListener("click", function () {
      const target = this.textContent.trim().toLowerCase();
      navLinks.forEach((l) => l.classList.remove("active"));
      pages.forEach((p) => p.classList.remove("active"));
      this.classList.add("active");
      pages.forEach((p) => {
        if (p.dataset.page === target) {
          p.classList.add("active");
          if (target === "resume") setTimeout(animateSkills, 100);
        }
      });
      window.scrollTo(0, 0);
    });
  });

  // --- Sidebar Toggle ---
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");
  sidebarBtn.addEventListener("click", () => sidebar.classList.toggle("active"));

  // --- Contact Form Validation ---
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  if (form && formBtn) {
    formInputs.forEach((input) => {
      input.addEventListener("input", () => {
        formBtn.disabled = !form.checkValidity();
      });
    });
  }
});
