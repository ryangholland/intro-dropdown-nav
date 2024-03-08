const featuresButton = document.querySelector("[data-features-button]");
const featuresDropdown = document.querySelector("[data-features-dropdown");
const featuresArrow = document.querySelector("[data-features-arrow");

const companyButton = document.querySelector("[data-company-button]");
const companyDropdown = document.querySelector("[data-company-dropdown");
const companyArrow = document.querySelector("[data-company-arrow");

document.addEventListener("click", (e) => {
  const isFeaturesButton = e.target === featuresButton;
  const isCompanyButton = e.target === companyButton;
  const isDropdown =
    e.target === featuresDropdown || e.target === companyDropdown;

  if (isFeaturesButton) {
    if (featuresDropdown.hidden) {
      featuresDropdown.hidden = false;
      featuresArrow.src = "./images/icon-arrow-up.svg";
      companyDropdown.hidden = true;
      companyArrow.src = "./images/icon-arrow-down.svg";
      return;
    }
  }

  if (isCompanyButton) {
    if (companyDropdown.hidden) {
      companyDropdown.hidden = false;
      companyArrow.src = "./images/icon-arrow-up.svg";
      featuresDropdown.hidden = true;
      featuresArrow.src = "./images/icon-arrow-down.svg";
      return;
    }
  }

  if (!isDropdown) {
    featuresDropdown.hidden = true;
    featuresArrow.src = "./images/icon-arrow-down.svg";
    companyDropdown.hidden = true;
    companyArrow.src = "./images/icon-arrow-down.svg";
  }
});
