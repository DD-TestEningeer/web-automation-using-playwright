// ===== Menu Toggle =====
const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
menuToggle.addEventListener("click", () => {
  sideMenu.classList.toggle("open");
});

// ===== 1. Text Input =====
const textInputField = document.getElementById("textInputField");
const textInputMsg = document.getElementById("textInputMsg");
textInputField.addEventListener("input", () => {
  textInputMsg.textContent = `Typed: ${textInputField.value}`;
});

// ===== 2. Password Input =====
const passwordField = document.getElementById("passwordField");
const passwordMsg = document.getElementById("passwordMsg");
passwordField.addEventListener("input", () => {
  passwordMsg.textContent = "Password entered.";
});

// ===== 3. Email Input =====
const emailField = document.getElementById("emailField");
const emailMsg = document.getElementById("emailMsg");
emailField.addEventListener("input", () => {
  emailMsg.textContent = `Email entered: ${emailField.value}`;
});

// ===== 4. Number Input =====
const numberField = document.getElementById("numberField");
const numberMsg = document.getElementById("numberMsg");
numberField.addEventListener("input", () => {
  numberMsg.textContent = `Number: ${numberField.value}`;
});

// ===== 5. Radio Buttons =====
const maleRadio = document.getElementById("maleRadio");
const femaleRadio = document.getElementById("femaleRadio");
const radioMsg = document.getElementById("radioMsg");
[maleRadio, femaleRadio].forEach(radio => {
  radio.addEventListener("change", () => {
    radioMsg.textContent = `Selected Gender: ${radio.checked ? radio.nextSibling.textContent.trim() : ''}`;
  });
});

// ===== 6. Checkboxes =====
const subscribeChk = document.getElementById("subscribeChk");
const agreeChk = document.getElementById("agreeChk");
const checkboxMsg = document.getElementById("checkboxMsg");
[subscribeChk, agreeChk].forEach(chk => {
  chk.addEventListener("change", () => {
    let selected = [];
    if(subscribeChk.checked) selected.push("Subscribe");
    if(agreeChk.checked) selected.push("Agree");
    checkboxMsg.textContent = `Checked: ${selected.join(", ") || "None"}`;
  });
});

// ===== 7. Dropdown =====
const dropdownField = document.getElementById("dropdownField");
const dropdownMsg = document.getElementById("dropdownMsg");
dropdownField.addEventListener("change", () => {
  dropdownMsg.textContent = `Selected Car: ${dropdownField.value}`;
});

// ===== 8. Multi-Select =====
const multiSelectField = document.getElementById("multiSelectField");
const multiSelectMsg = document.getElementById("multiSelectMsg");
multiSelectField.addEventListener("change", () => {
  const selected = Array.from(multiSelectField.selectedOptions).map(opt => opt.value);
  multiSelectMsg.textContent = `Selected Fruits: ${selected.join(", ")}`;
});

// ===== 9. File Upload =====
const fileUploadField = document.getElementById("fileUploadField");
const fileUploadMsg = document.getElementById("fileUploadMsg");
fileUploadField.addEventListener("change", () => {
  fileUploadMsg.textContent = `File Selected: ${fileUploadField.files[0]?.name || "None"}`;
});

// ===== 10. Date/Time Inputs =====
const dateField = document.getElementById("dateField");
const timeField = document.getElementById("timeField");
const datetimeField = document.getElementById("datetimeField");
const monthField = document.getElementById("monthField");
const weekField = document.getElementById("weekField");
const dateTimeMsg = document.getElementById("dateTimeMsg");
[dateField, timeField, datetimeField, monthField, weekField].forEach(input => {
  input.addEventListener("input", () => {
    dateTimeMsg.textContent = `Selected Values - Date: ${dateField.value}, Time: ${timeField.value}, DateTime: ${datetimeField.value}, Month: ${monthField.value}, Week: ${weekField.value}`;
  });
});

// ===== 11. Color & Range =====
const colorField = document.getElementById("colorField");
const rangeField = document.getElementById("rangeField");
const colorRangeMsg = document.getElementById("colorRangeMsg");
[colorField, rangeField].forEach(input => {
  input.addEventListener("input", () => {
    colorRangeMsg.textContent = `Color: ${colorField.value}, Range: ${rangeField.value}`;
  });
});

// ===== 12. Buttons =====
const clickBtn = document.getElementById("clickBtn");
const alertBtn = document.getElementById("alertBtn");
const toggleBtn = document.getElementById("toggleBtn");
const toggleDiv = document.getElementById("toggleDiv");
const buttonMsg = document.getElementById("buttonMsg");

clickBtn.addEventListener("click", () => buttonMsg.textContent = "Click Me button clicked");
alertBtn.addEventListener("click", () => {
  alert("Alert button clicked!");
  buttonMsg.textContent = "Alert displayed";
});
toggleBtn.addEventListener("click", () => {
  toggleDiv.style.display = toggleDiv.style.display === "none" ? "block" : "none";
  buttonMsg.textContent = `Toggle Visibility: ${toggleDiv.style.display}`;
});

// ===== 13. Links =====
const internalLink = document.getElementById("internalLink");
const externalLink = document.getElementById("externalLink");
const linkMsg = document.getElementById("linkMsg");

internalLink.addEventListener("click", () => linkMsg.textContent = "Navigated to Text Input section");
externalLink.addEventListener("click", () => linkMsg.textContent = "Opened external link");

// ===== 14. Media =====
const imgSample = document.getElementById("imgSample");
const videoSample = document.getElementById("videoSample");
const audioSample = document.getElementById("audioSample");
const canvasSample = document.getElementById("canvasSample");
const mediaMsg = document.getElementById("mediaMsg");

[imgSample, videoSample, audioSample, canvasSample].forEach(el => {
  el.addEventListener("click", () => mediaMsg.textContent = `${el.tagName} clicked/interacted`);
});

// ===== 15. Tables & Lists =====
const tableListMsg = document.getElementById("tableListMsg");
tableListMsg.textContent = "Tables & Lists are ready for automation assertion";

// ===== 16. Modal =====
const openModalBtn = document.getElementById("openModalBtn");
const sampleModal = document.getElementById("sampleModal");
const closeModal = document.querySelector(".closeModal");
const modalMsg = document.getElementById("modalMsg");

openModalBtn.addEventListener("click", () => {
  sampleModal.style.display = "block";
  modalMsg.textContent = "Modal opened";
});
closeModal.addEventListener("click", () => {
  sampleModal.style.display = "none";
  modalMsg.textContent = "Modal closed";
});
window.addEventListener("click", (e) => {
  if(e.target === sampleModal){
    sampleModal.style.display = "none";
    modalMsg.textContent = "Modal closed";
  }
});

// ===== 17. Shadow DOM =====
const shadowHost = document.getElementById("shadowHost");
const shadowRoot = shadowHost.attachShadow({ mode: "open" });
const shadowBtn = document.createElement("button");
shadowBtn.textContent = "Shadow Button";
shadowRoot.appendChild(shadowBtn);
const shadowMsg = document.getElementById("shadowMsg");
shadowBtn.addEventListener("click", () => shadowMsg.textContent = "Shadow DOM button clicked");

// ===== 18. Tooltip =====
const tooltipBtn = document.getElementById("tooltipBtn");
const tooltipText = document.getElementById("tooltipText");
const tooltipMsg = document.getElementById("tooltipMsg");

tooltipBtn.addEventListener("mouseover", () => {
  tooltipText.style.display = "inline";
  tooltipMsg.textContent = "Tooltip displayed";
});
tooltipBtn.addEventListener("mouseout", () => {
  tooltipText.style.display = "none";
  tooltipMsg.textContent = "Tooltip hidden";
});

// ===== 19. Authentication =====
const loginBtn = document.getElementById("loginBtn");
const authMsg = document.getElementById("authMsg");
loginBtn.addEventListener("click", () => {
  authMsg.textContent = "Simulated login successful";
});
