// ===== Menu Toggle =====
const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
menuToggle.addEventListener("click", () => {
  sideMenu.classList.toggle("open");
});

// ================= BEGINNER ELEMENTS =================

// 1. Text Input
const textInputField = document.getElementById("textInputField");
const textInputMsg = document.getElementById("textInputMsg");
textInputField.addEventListener("input", () => {
  textInputMsg.textContent = `Typed: ${textInputField.value}`;
});

// 2. Password Input
const passwordField = document.getElementById("passwordField");
const passwordMsg = document.getElementById("passwordMsg");
passwordField.addEventListener("input", () => {
  passwordMsg.textContent = "Password entered.";
});

// 3. Email Input
const emailField = document.getElementById("emailField");
const emailMsg = document.getElementById("emailMsg");
emailField.addEventListener("input", () => {
  emailMsg.textContent = `Email entered: ${emailField.value}`;
});

// 4. Number Input
const numberField = document.getElementById("numberField");
const numberMsg = document.getElementById("numberMsg");
numberField.addEventListener("input", () => {
  numberMsg.textContent = `Number: ${numberField.value}`;
});

// 5. Radio Buttons
const maleRadio = document.getElementById("maleRadio");
const femaleRadio = document.getElementById("femaleRadio");
const radioMsg = document.getElementById("radioMsg");
[maleRadio, femaleRadio].forEach(radio => {
  radio.addEventListener("change", () => {
    radioMsg.textContent = `Selected Gender: ${radio.checked ? radio.nextSibling.textContent.trim() : ''}`;
  });
});

// 6. Checkboxes
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

// 7. Dropdown
const dropdownField = document.getElementById("dropdownField");
const dropdownMsg = document.getElementById("dropdownMsg");
dropdownField.addEventListener("change", () => {
  dropdownMsg.textContent = `Selected Car: ${dropdownField.value}`;
});

// 8. Multi-Select
const multiSelectField = document.getElementById("multiSelectField");
const multiSelectMsg = document.getElementById("multiSelectMsg");
multiSelectField.addEventListener("change", () => {
  const selected = Array.from(multiSelectField.selectedOptions).map(opt => opt.value);
  multiSelectMsg.textContent = `Selected Fruits: ${selected.join(", ")}`;
});

// 9. File Upload
const fileUploadField = document.getElementById("fileUploadField");
const fileUploadMsg = document.getElementById("fileUploadMsg");
fileUploadField.addEventListener("change", () => {
  fileUploadMsg.textContent = `File Selected: ${fileUploadField.files[0]?.name || "None"}`;
});

// 10. Date/Time Inputs
const dateField = document.getElementById("dateField");
const timeField = document.getElementById("timeField");
const datetimeField = document.getElementById("datetimeField");
const monthField = document.getElementById("monthField");
const weekField = document.getElementById("weekField");
const dateTimeMsg = document.getElementById("dateTimeMsg");
[dateField, timeField, datetimeField, monthField, weekField].forEach(input => {
  input.addEventListener("input", () => {
    dateTimeMsg.textContent = `Selected - Date: ${dateField.value}, Time: ${timeField.value}, DateTime: ${datetimeField.value}, Month: ${monthField.value}, Week: ${weekField.value}`;
  });
});

// 11. Color & Range
const colorField = document.getElementById("colorField");
const rangeField = document.getElementById("rangeField");
const colorRangeMsg = document.getElementById("colorRangeMsg");
[colorField, rangeField].forEach(input => {
  input.addEventListener("input", () => {
    colorRangeMsg.textContent = `Color: ${colorField.value}, Range: ${rangeField.value}`;
  });
});

// 12. Buttons
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

// 13. Links
const internalLink = document.getElementById("internalLink");
const externalLink = document.getElementById("externalLink");
const linkMsg = document.getElementById("linkMsg");

internalLink.addEventListener("click", () => linkMsg.textContent = "Navigated to Text Input section");
externalLink.addEventListener("click", () => linkMsg.textContent = "Opened external link");

// 14. Media
const imgSample = document.getElementById("imgSample");
const videoSample = document.getElementById("videoSample");
const audioSample = document.getElementById("audioSample");
const canvasSample = document.getElementById("canvasSample");
const mediaMsg = document.getElementById("mediaMsg");

[imgSample, videoSample, audioSample, canvasSample].forEach(el => {
  el.addEventListener("click", () => mediaMsg.textContent = `${el.tagName} clicked/interacted`);
});

// 15. Tables & Lists
const tableListMsg = document.getElementById("tableListMsg");
tableListMsg.textContent = "Tables & Lists ready for automation assertions";

// 16. Modal
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

// 17. Shadow DOM
const shadowHost = document.getElementById("shadowHost");
const shadowRoot = shadowHost.attachShadow({ mode: "open" });
const shadowBtn = document.createElement("button");
shadowBtn.textContent = "Shadow Button";
shadowRoot.appendChild(shadowBtn);
const shadowMsg = document.getElementById("shadowMsg");
shadowBtn.addEventListener("click", () => shadowMsg.textContent = "Shadow DOM button clicked");

// 18. Tooltip
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

// 19. Authentication
const loginBtn = document.getElementById("loginBtn");
const authMsg = document.getElementById("authMsg");
loginBtn.addEventListener("click", () => {
  authMsg.textContent = "Simulated login successful";
});

// ================= ADVANCED ELEMENTS =================

// 20. Auto-suggest / Autocomplete
const autoSuggestInput = document.getElementById("autoSuggestInput");
const suggestionsList = document.getElementById("suggestionsList");
const autoSuggestMsg = document.getElementById("autoSuggestMsg");
const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
autoSuggestInput.addEventListener("input", () => {
  const query = autoSuggestInput.value.toLowerCase();
  suggestionsList.innerHTML = "";
  fruits.filter(f => f.toLowerCase().includes(query)).forEach(fruit => {
    const li = document.createElement("li");
    li.textContent = fruit;
    li.addEventListener("click", () => {
      autoSuggestInput.value = fruit;
      suggestionsList.innerHTML = "";
      autoSuggestMsg.textContent = `Selected: ${fruit}`;
    });
    suggestionsList.appendChild(li);
  });
});

// 21. Dependent Dropdown
const countrySelect = document.getElementById("countrySelect");
const citySelect = document.getElementById("citySelect");
const dependentMsg = document.getElementById("dependentMsg");
const countryCityMap = {
  India: ["Mumbai", "Delhi", "Bangalore"],
  USA: ["New York", "Los Angeles", "Chicago"],
  UK: ["London", "Manchester", "Birmingham"]
};
countrySelect.addEventListener("change", () => {
  const country = countrySelect.value;
  citySelect.innerHTML = "";
  (countryCityMap[country] || []).forEach(city => {
    const opt = document.createElement("option");
    opt.textContent = city;
    citySelect.appendChild(opt);
  });
  dependentMsg.textContent = `Selected Country: ${country}`;
});
citySelect.addEventListener("change", () => {
  dependentMsg.textContent += `, Selected City: ${citySelect.value}`;
});

// 22. Masked Input
const maskedInput = document.getElementById("maskedInput");
const maskedMsg = document.getElementById("maskedMsg");
maskedInput.addEventListener("input", () => {
  maskedMsg.textContent = `Entered (masked): ${maskedInput.value.replace(/\d/g, "*")}`;
});

// 23. Double Click
const doubleClickBtn = document.getElementById("doubleClickBtn");
const doubleClickMsg = document.getElementById("doubleClickMsg");
doubleClickBtn.addEventListener("dblclick", () => {
  doubleClickMsg.textContent = "Button double-clicked";
});

// 24. Drag & Drop
const dragItem = document.getElementById("dragItem");
const dropZone = document.getElementById("dropZone");
const dragMsg = document.getElementById("dragMsg");
dragItem.addEventListener("dragstart", e => e.dataTransfer.setData("text/plain", e.target.id));
dropZone.addEventListener("dragover", e => e.preventDefault());
dropZone.addEventListener("drop", e => {
  e.preventDefault();
  const id = e.dataTransfer.getData("text");
  const draggedEl = document.getElementById(id);
  dropZone.appendChild(draggedEl);
  dragMsg.textContent = `Dropped: ${draggedEl.textContent}`;
});

// 25. Sortable Table
const tableHeader = document.querySelectorAll("#sortableTable th");
const sortableMsg = document.getElementById("sortableMsg");
tableHeader.forEach((th, index) => {
  th.addEventListener("click", () => {
    const table = th.closest("table");
    const rows = Array.from(table.querySelectorAll("tr:nth-child(n+2)"));
    const asc = !th.asc;
    rows.sort((a,b) => {
      const aText = a.children[index].textContent;
      const bText = b.children[index].textContent;
      return asc ? aText.localeCompare(bText) : bText.localeCompare(aText);
    });
    rows.forEach(r => table.appendChild(r));
    th.asc = asc;
    sortableMsg.textContent = `Table sorted by ${th.textContent}, ${asc ? "asc" : "desc"}`;
  });
});

// 26. Modal / Toast / Alert
const advModalBtn = document.getElementById("advModalBtn");
const advModal = document.getElementById("advModal");
const advCloseModal = document.getElementById("advCloseModal");
const advModalMsg = document.getElementById("advModalMsg");

advModalBtn.addEventListener("click", () => {
  advModal.style.display = "block";
  advModalMsg.textContent = "Advanced modal opened";
});
advCloseModal.addEventListener("click", () => {
  advModal.style.display = "none";
  advModalMsg.textContent = "Advanced modal closed";
});
window.addEventListener("click", (e) => {
  if(e.target === advModal){
    advModal.style.display = "none";
    advModalMsg.textContent = "Advanced modal closed";
  }
});

// 27. iFrame Interaction
const iframeBtn = document.getElementById("iframeBtn");
const iframeMsg = document.getElementById("iframeMsg");
const sampleIframe = document.getElementById("sampleIframe");
iframeBtn.addEventListener("click", () => {
  const iframeDoc = sampleIframe.contentDocument || sampleIframe.contentWindow.document;
  iframeDoc.body.style.backgroundColor = "lightyellow";
  iframeMsg.textContent = "iFrame background changed";
});

// 28. Shadow DOM Advanced
const shadowAdvHost = document.getElementById("shadowAdvHost");
const shadowAdvRoot = shadowAdvHost.attachShadow({mode:"open"});
const shadowAdvBtn = document.createElement("button");
shadowAdvBtn.textContent = "Shadow Adv Button";
shadowAdvRoot.appendChild(shadowAdvBtn);
const shadowAdvMsg = document.getElementById("shadowAdvMsg");
shadowAdvBtn.addEventListener("click", () => shadowAdvMsg.textContent = "Advanced Shadow DOM button clicked");

// 29. Multi-tab Navigation
const newTabBtn = document.getElementById("newTabBtn");
const multiTabMsg = document.getElementById("multiTabMsg");
newTabBtn.addEventListener("click", () => {
  window.open("https://example.com", "_blank");
  multiTabMsg.textContent = "New tab opened";
});
