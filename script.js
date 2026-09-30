// Personaliza estos datos antes de publicar el sitio.
const portfolioConfig = {
  email: "TU_CORREO@ejemplo.com",
  github: "https://github.com/TU-USUARIO",
  linkedin: "https://www.linkedin.com/in/TU-PERFIL",
  cv: "" // Ejemplo: "assets/CV-Caroline-Acevedo.pdf"
};

document.addEventListener("DOMContentLoaded", () => {
  const emailLink = document.getElementById("emailLink");
  const emailText = document.getElementById("emailText");
  const githubLink = document.getElementById("githubLink");
  const githubText = document.getElementById("githubText");
  const linkedinLink = document.getElementById("linkedinLink");
  const linkedinText = document.getElementById("linkedinText");
  const cvLink = document.getElementById("cvLink");
  const year = document.getElementById("year");

  emailLink.href = `mailto:${portfolioConfig.email}`;
  emailText.textContent = portfolioConfig.email;
  githubLink.href = portfolioConfig.github;
  githubText.textContent = portfolioConfig.github.replace(/^https?:\/\//, "");
  linkedinLink.href = portfolioConfig.linkedin;
  linkedinText.textContent = portfolioConfig.linkedin.replace(/^https?:\/\//, "");

  if (portfolioConfig.cv.trim()) {
    cvLink.href = portfolioConfig.cv;
    cvLink.setAttribute("download", "");
  } else {
    cvLink.href = "mailto:" + portfolioConfig.email + "?subject=Solicitud%20de%20CV";
    cvLink.removeAttribute("target");
    cvLink.querySelector("b").textContent = "Solicitar CV por correo";
  }
  year.textContent = new Date().getFullYear();

  const toggle = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });
  links.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Abrir menú");
    });
  });
});
