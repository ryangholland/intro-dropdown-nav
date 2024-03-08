const featuresButton = document.querySelector("[data-features-button]");
const featuresDropdown = document.querySelector("[data-features-dropdown]");
const featuresArrow = document.querySelector("[data-features-arrow]");

const companyButton = document.querySelector("[data-company-button]");
const companyDropdown = document.querySelector("[data-company-dropdown]");
const companyArrow = document.querySelector("[data-company-arrow]");

const toggleDropdown = (button, dropdown, arrow, arrowUp, arrowDown) => {
  if (dropdown.hidden) {
    dropdown.hidden = false;
    arrow.src = arrowUp;
  } else {
    dropdown.hidden = true;
    arrow.src = arrowDown;
  }
};

document.addEventListener("click", (e) => {
  if (e.target === featuresButton) {
    toggleDropdown(featuresButton, featuresDropdown, featuresArrow, "./images/icon-arrow-up.svg", "./images/icon-arrow-down.svg");
    companyDropdown.hidden = true;
    companyArrow.src = "./images/icon-arrow-down.svg";
  } else if (e.target === companyButton) {
    toggleDropdown(companyButton, companyDropdown, companyArrow, "./images/icon-arrow-up.svg", "./images/icon-arrow-down.svg");
    featuresDropdown.hidden = true;
    featuresArrow.src = "./images/icon-arrow-down.svg";
  } else if (e.target !== featuresDropdown && e.target !== companyDropdown) {
    featuresDropdown.hidden = true;
    featuresArrow.src = "./images/icon-arrow-down.svg";
    companyDropdown.hidden = true;
    companyArrow.src = "./images/icon-arrow-down.svg";
  }
});