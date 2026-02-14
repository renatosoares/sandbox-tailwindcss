import "./style.css";

(() => {
  const header = document.getElementById("main-header");
  const mobileBtn = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // Se o menu mobile estiver aberto, não esconder a barra (melhora a UX)
    if (!mobileMenu?.classList.contains("hidden")) return;

    if (currentScrollY > lastScrollY && currentScrollY > 80) {
      // Rolando para baixo -> Adiciona a classe que esconde
      header?.classList.add("header-hidden");
    } else {
      // Rolando para cima -> Remove a classe e exibe
      header?.classList.remove("header-hidden");
    }

    lastScrollY = currentScrollY;
  });

  mobileBtn?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("hidden");
  });
})();
