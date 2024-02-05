let detailTab = document.getElementById("detail-tab");
let detailContent = document.getElementById("detail-content");
let tabSelector = document.getElementById("tab-selector");
let detailsReadMoreButton = document.getElementById("detail-read-more-button");

function moveSelector(i) {
  if (i == 0) {
    tabSelector.style.marginRight = "67%";
  } else if (i == 1) {
    tabSelector.style.marginRight = "30%";
  } else if (i == 2) {
    tabSelector.style.marginRight = "0%";
  }
}
function showContent(index) {
  for (let i = 0; i < 3; i++) {
    if (index == i) {
      detailContent.children[i].style.display = "block";
    } else {
      detailContent.children[i].style.display = "none";
    }
  }
}

for (let i = 0; i < 3; i++) {
  detailTab.children[i].addEventListener("click", () => {
    moveSelector(i);
    showContent(i);
  });
}

for (let i = 0; i < 2; i++) {
  detailsReadMoreButton.children[i].addEventListener("click", () => {
    detailsReadMoreButton.children[1 - i].style.display = "block";
    detailsReadMoreButton.children[i].style.display = "none";
    let moreSection = document.querySelectorAll(".details-more");
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
