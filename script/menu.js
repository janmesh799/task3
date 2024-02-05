let menuViewAllButton = document.getElementById("menu-view-all-btn");

let menuItemList = document.getElementsByClassName("menu-item-list");

let viewAllMenu = () => {
  menuViewAllButton.children[2].style.display = "block";
  menuViewAllButton.children[1].style.display = "none";
  // console.log(menuItemList);
  menuItemList[0].style.flexDirection = "column";
  menuItemList[0].style.alignItems = "center";
};
let collapseMenu = () => {
  menuViewAllButton.children[2].style.display = "none";
  menuViewAllButton.children[1].style.display = "block";
  menuItemList[0].style.flexDirection = "row";
};

for (let i = 1; i <= 2; i++) {
  if (i === 1) {
    menuViewAllButton.children[i].addEventListener("click", viewAllMenu);
  } else if (i === 2) {
    menuViewAllButton.children[i].addEventListener("click", collapseMenu);
  }
}
