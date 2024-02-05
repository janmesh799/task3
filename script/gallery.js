let galleryViewAllButton = document.getElementById("gallery-view-all-btn");

let galleryItemList = document.getElementsByClassName("gallery-item-list");

let viewAllGallery = () => {
  galleryViewAllButton.children[2].style.display = "block";
  galleryViewAllButton.children[1].style.display = "none";
  console.log(galleryItemList);
  galleryItemList[0].style.flexDirection = "column";
  galleryItemList[0].style.alignItems = "center";
};
let collapseGallery = () => {
  galleryViewAllButton.children[2].style.display = "none";
  galleryViewAllButton.children[1].style.display = "block";
  galleryItemList[0].style.flexDirection = "row";
};

for (let i = 1; i <= 2; i++) {
  if (i === 1) {
    galleryViewAllButton.children[i].addEventListener("click", viewAllGallery);
  } else if (i === 2) {
    galleryViewAllButton.children[i].addEventListener("click", collapseGallery);
  }
}
