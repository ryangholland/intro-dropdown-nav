const featuresButton = document.querySelector("[data-features-button]");
const featuresDropdown = document.querySelector("[data-features-dropdown]");
const featuresArrow = document.querySelector("[data-features-arrow]");
const companyButton = document.querySelector("[data-company-button]");
const companyDropdown = document.querySelector("[data-company-dropdown]");
const companyArrow = document.querySelector("[data-company-arrow]");

const ARROWUP = "./images/icon-arrow-up.svg";
const ARROWDOWN = "./images/icon-arrow-down.svg";

const toggleDropdown = (dropdown, arrow) => {
  if (!dropdown.classList.contains("active")) {
    dropdown.classList.add("active");
    arrow.src = ARROWUP;
  } else {
    closeDropdown(dropdown, arrow);
  }
};

const closeDropdown = (dropdown, arrow) => {
  dropdown.classList.remove("active");
  arrow.src = ARROWDOWN;
};

document.addEventListener("click", (e) => {
  if (e.target === featuresButton) {
    toggleDropdown(featuresDropdown, featuresArrow);
    closeDropdown(companyDropdown, companyArrow);
  } else if (e.target === companyButton) {
    toggleDropdown(companyDropdown, companyArrow);
    closeDropdown(featuresDropdown, featuresArrow);
  } else if (e.target !== featuresDropdown && e.target !== companyDropdown) {
    closeDropdown(companyDropdown, companyArrow);
    closeDropdown(featuresDropdown, featuresArrow);
  }
});
