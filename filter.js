const allLinks = document.querySelectorAll("li a");
const allContentBox = document.querySelectorAll(".content");
allLinks.forEach((li) => {
  let dataId = li.dataset.id;
  li.addEventListener("click", () => {
    allContentBox.forEach((singleContent) => {
      singleContent.classList.remove("active");
      if (singleContent.classList.contains(dataId)) {
        singleContent.classList.add("active");
      }
    });
  });
});
