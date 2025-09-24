// ===== Menu Toggle =====
const menuToggle = document.getElementById("menuToggle");
const sideMenu = document.getElementById("sideMenu");
menuToggle.addEventListener("click", () => {
  sideMenu.classList.toggle("open");
});

// ===== 1. Auto-suggest / Autocomplete =====
const autoInput = document.getElementById("autoInput");
const suggestionsList = document.getElementById("suggestionsList");
const autoSuggestMsg = document.getElementById("autoSuggestMsg");

const suggestions = ["Apple", "Banana", "Orange", "Grapes", "Mango"];
autoInput.addEventListener("input", () => {
  const value = autoInput.value.toLowerCase();
  suggestionsList.innerHTML = "";
  if(value) {
    const filtered = suggestions.filter(item => item.toLowerCase().startsWith(value));
    filtered.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      li.addEventListener("click", () => {
        autoInput.value = item;
        autoSuggestMsg.textContent = `Selected: ${item}`;
        suggestionsList.style.display = "none";
      });
      suggestionsList.appendChild(li);
    });
    suggestionsList.style.display = filtered.length ? "block" : "none";
  } else { suggestionsList.style.display = "none"; }
});

// ===== 2. Dependent Dropdown =====
const countrySelect = document.getElementById("countrySelect");
const stateSelect = document.getElementById("stateSelect");
const dependentDropdownMsg = document.getElementById("dependentDropdownMsg");

const statesByCountry = {
  "India": ["Delhi", "Mumbai", "Bangalore"],
  "USA": ["California", "Texas", "Florida"]
};

countrySelect.addEventListener("change", () => {
  const country = countrySelect.value;
  stateSelect.innerHTML = "<option value=''>Select State</option>";
  if(statesByCountry[country]) {
    statesByCountry[country].forEach(state => {
      const option = document.createElement("option");
      option.value = state; option.textContent = state;
      stateSelect.appendChild(option);
    });
    dependentDropdownMsg.textContent = `Country selected: ${country}`;
  } else { dependentDropdownMsg.textContent = "No country selected"; }
});

stateSelect.addEventListener("change", () => {
  dependentDropdownMsg.textContent = `State selected: ${stateSelect.value}`;
});

// ===== 3. Masked Input =====
const phoneInput = document.getElementById("phoneInput");
const maskedInputMsg = document.getElementById("maskedInputMsg");

phoneInput.addEventListener("input", () => {
  maskedInputMsg.textContent = `Phone typed: ${phoneInput.value}`;
});

// ===== 4. Double Click =====
const dblClickBtn = document.getElementById("dblClickBtn");
const doubleClickMsg = document.getElementById("doubleClickMsg");

dblClickBtn.addEventListener("dblclick", () => {
  doubleClickMsg.textContent = "Button double clicked!";
});

// ===== 5. Drag & Drop =====
const dragItem = document.getElementById("dragItem");
const dropTarget = document.getElementById("dropTarget");
const dragDropMsg = document.getElementById("dragDropMsg");

dragItem.addEventListener("dragstart", e => {
  e.dataTransfer.setData("text/plain", dragItem.id);
});

dropTarget.addEventListener("dragover", e => e.preventDefault());

dropTarget.addEventListener("drop", e => {
  e.preventDefault();
  const data = e.dataTransfer.getData("text/plain");
  if(data === "dragItem") {
    dropTarget.textContent = "Dropped!";
    dragDropMsg.textContent = "Drag & Drop successful!";
  }
});

// ===== 6. Sortable Table =====
const sortableTable = document.getElementById("sortTable");
const sortableTableMsg = document.getElementById("sortableTableMsg");

[...sortableTable.querySelectorAll("th")].forEach((th, index) => {
  th.addEventListener("click", () => {
    const tbody = sortableTable.querySelector("tbody");
    const rows = Array.from(tbody.querySelectorAll("tr"));
    const asc = th.dataset.asc = !(th.dataset.asc === "true");
    rows.sort((a, b) => {
      const aText = a.children[index].textContent;
      const bText = b.children[index].textContent;
      return asc ? aText.localeCompare(bText) : bText.localeCompare(aText);
    });
    tbody.innerHTML = ""; rows.forEach(r => tbody.appendChild(r));
    sortableTableMsg.textContent = `Table sorted by ${th.textContent} (${asc ? "ASC" : "DESC"})`;
  });
});

// ===== 7. Modal / Toast / Alert =====
const modalBtn = document.getElementById("modalBtn");
const toastBtn = document.getElementById("toastBtn");
const sampleModal = document.getElementById("sampleModal");
const closeModal = sampleModal.querySelector(".closeModal");
const modalPopupMsg = document.getElementById("modalPopupMsg");

modalBtn.addEventListener("click", () => {
  sampleModal.style.display = "block";
  modalPopupMsg.textContent = "Modal opened";
});

closeModal.addEventListener("click", () => {
  sampleModal.style.display = "none";
  modalPopupMsg.textContent = "Modal closed";
});

window.addEventListener("click", e => {
  if(e.target === sampleModal) {
    sampleModal.style.display = "none";
    modalPopupMsg.textContent = "Modal closed";
  }
});

toastBtn.addEventListener("click", () => {
  alert("This is a toast!");
  modalPopupMsg.textContent = "Toast displayed";
});

// ===== 8. iFrame Interaction =====
const iFrame = document.getElementById("sampleIframe");
const iFrameMsg = document.getElementById("iFrameMsg");

iFrame.addEventListener("load", () => {
  const iframeDoc = iFrame.contentDocument || iFrame.contentWindow.document;
  const iframeInput = iframeDoc.getElementById("iframeInput");
  iframeInput.addEventListener("input", () => {
    iFrameMsg.textContent = `iFrame typed: ${iframeInput.value}`;
  });
});

// ===== 9. Shadow DOM =====
const shadowHost = document.getElementById("shadowHost");
const shadowRoot = shadowHost.attachShadow({ mode: "open" });
const shadowBtn = document.createElement("button");
shadowBtn.textContent = "Shadow Button";
shadowRoot.appendChild(shadowBtn);
const shadowDomMsg = document.getElementById("shadowDomMsg");

shadowBtn.addEventListener("click", () => {
  shadowDomMsg.textContent = "Shadow DOM button clicked!";
});

// ===== 10. Multi-tab Navigation =====
const openTabBtn = document.getElementById("openTabBtn");
const multiTabMsg = document.getElementById("multiTabMsg");

openTabBtn.addEventListener("click", () => {
  multiTabMsg.textContent = "Simulate opening new tab in automation.";
});
