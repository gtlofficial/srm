export const openPortfolioModal = () => {
  document
    .getElementById("uc-portfolio-modal")
    .classList.add("uc-offcanvas-overlay");
  document.getElementById("uc-portfolio-modal").classList.add("uc-open");
};
export const closePortfolioModal = () => {
  document
    .getElementById("uc-portfolio-modal")
    .classList.remove("uc-offcanvas-overlay");
  document.getElementById("uc-portfolio-modal").classList.remove("uc-open");
};
