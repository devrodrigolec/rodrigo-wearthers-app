export const renderLoading = () => {
  const loadingHTML = document.querySelector(".loading");
  loadingHTML.classList.remove("hide");
};
export const removeLoading = () => {
  const loadingHTML = document.querySelector(".loading");
  loadingHTML.classList.add("hide");
};
