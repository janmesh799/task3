let dealsReadMoreButton = document.getElementById("deals-read-more-button");

for (let i = 0; i < 2; i++) {
  dealsReadMoreButton.children[i].addEventListener("click", () => {
    dealsReadMoreButton.children[1 - i].style.display = "block";
    dealsReadMoreButton.children[i].style.display = "none";
    let moreSection = document.querySelectorAll(".deals-more");

    if (i == 0) {
      moreSection.forEach((section) => {
        section.style.display = "block";
      });
    } else if (i == 1) {
      moreSection.forEach((section) => {
        section.style.display = "none";
      });
    }
  });
}
