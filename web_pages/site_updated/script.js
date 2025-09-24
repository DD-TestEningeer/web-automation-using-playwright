/* combined.js — production ready */

/* Utility: safe query */
const $ = (id) => document.getElementById(id);

/* ===== Menu Toggle (accessible) ===== */
const menuToggle = $("menuToggle");
const sideMenu = $("sideMenu");
const mainContent = $("mainContent");

function setMenuVisible(visible) {
  if (visible) {
    sideMenu.classList.remove("hidden");
    sideMenu.classList.add("visible");
    menuToggle.setAttribute("aria-expanded", "true");
  } else {
    sideMenu.classList.remove("visible");
    sideMenu.classList.add("hidden");
    menuToggle.setAttribute("aria-expanded", "false");
  }
}
menuToggle.addEventListener("click", () => setMenuVisible(!sideMenu.classList.contains("visible")));
menuToggle.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    setMenuVisible(!sideMenu.classList.contains("visible"));
  }
});

/* Close on link click (mobile) */
sideMenu.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    if (window.innerWidth <= 920) setMenuVisible(false);
  });
});

/* ================= BEGINNER ELEMENTS ================= */

/* helper for updating messages */
function setMsg(id, text) {
  const el = $(id);
  if (!el) return;
  el.textContent = text;
}

/* 1. Text Input */
const textInputField = $("textInputField");
if (textInputField) {
  textInputField.addEventListener("input", () => setMsg("textInputMsg", `Typed: ${textInputField.value}`));
}

/* 2. Password Input */
const passwordField = $("passwordField");
if (passwordField) {
  passwordField.addEventListener("input", () => setMsg("passwordMsg", "Password entered."));
}

/* 3. Email Input */
const emailField = $("emailField");
if (emailField) {
  emailField.addEventListener("input", () => setMsg("emailMsg", `Email entered: ${emailField.value}`));
}

/* 4. Number Input */
const numberField = $("numberField");
if (numberField) {
  numberField.addEventListener("input", () => setMsg("numberMsg", `Number: ${numberField.value}`));
}

/* 5. Radio Buttons */
const maleRadio = $("maleRadio");
const femaleRadio = $("femaleRadio");
const radioMsg = $("radioMsg");
[maleRadio, femaleRadio].forEach(radio => {
  if (!radio) return;
  radio.addEventListener("change", () => {
    const selected = document.querySelector('input[name="gender"]:checked');
    setMsg("radioMsg", `Selected Gender: ${selected ? selected.value : 'None'}`);
  });
});

/* 6. Checkboxes */
const subscribeChk = $("subscribeChk");
const agreeChk = $("agreeChk");
[subscribeChk, agreeChk].forEach(chk => {
  if (!chk) return;
  chk.addEventListener("change", () => {
    const selected = [];
    if (subscribeChk && subscribeChk.checked) selected.push(subscribeChk.value || "Subscribe");
    if (agreeChk && agreeChk.checked) selected.push(agreeChk.value || "Agree");
    setMsg("checkboxMsg", `Checked: ${selected.join(", ") || "None"}`);
  });
});

/* 7. Dropdown */
const dropdownField = $("dropdownField");
if (dropdownField) {
  dropdownField.addEventListener("change", () => setMsg("dropdownMsg", `Selected Car: ${dropdownField.value || 'None'}`));
}

/* 8. Multi-Select */
const multiSelectField = $("multiSelectField");
if (multiSelectField) {
  multiSelectField.addEventListener("change", () => {
    const selected = Array.from(multiSelectField.selectedOptions).map(o => o.value);
    setMsg("multiSelectMsg", `Selected Fruits: ${selected.join(", ") || "None"}`);
  });
}

/* 9. File Upload */
const fileUploadField = $("fileUploadField");
if (fileUploadField) {
  fileUploadField.addEventListener("change", () => {
    const file = fileUploadField.files && fileUploadField.files[0];
    setMsg("fileUploadMsg", `File Selected: ${file ? file.name : "None"}`);
  });
}

/* 10. Date/Time Inputs */
const dateField = $("dateField"), timeField = $("timeField"), datetimeField = $("datetimeField"), monthField = $("monthField"), weekField = $("weekField");
if (dateField && timeField && datetimeField && monthField && weekField) {
  [dateField, timeField, datetimeField, monthField, weekField].forEach(input => {
    input.addEventListener("input", () => {
      setMsg("dateTimeMsg", `Selected - Date: ${dateField.value || '-'}, Time: ${timeField.value || '-'}, DateTime: ${datetimeField.value || '-'}, Month: ${monthField.value || '-'}, Week: ${weekField.value || '-'}`);
    });
  });
}

/* 11. Color & Range */
const colorField = $("colorField"), rangeField = $("rangeField");
if (colorField && rangeField) {
  [colorField, rangeField].forEach(i => i.addEventListener("input", () => setMsg("colorRangeMsg", `Color: ${colorField.value}, Range: ${rangeField.value}`)));
}

/* 12. Buttons (click/alert/toggle) */
const clickBtn = $("clickBtn"), alertBtn = $("alertBtn"), toggleBtn = $("toggleBtn"), toggleDiv = $("toggleDiv");
if (clickBtn) clickBtn.addEventListener("click", () => setMsg("buttonMsg", "Click Me button clicked"));
if (alertBtn) alertBtn.addEventListener("click", () => { alert("Alert button clicked!"); setMsg("buttonMsg", "Alert displayed"); });
if (toggleBtn && toggleDiv) {
  toggleBtn.addEventListener("click", () => {
    const hidden = toggleDiv.classList.toggle("hidden");
    toggleBtn.setAttribute("aria-pressed", String(hidden === false));
    setMsg("buttonMsg", `Toggle Visibility: ${hidden ? "hidden" : "visible"}`);
  });
}

/* 13. Links */
const internalLink = $("internalLink"), externalLink = $("externalLink");
if (internalLink) internalLink.addEventListener("click", () => setMsg("linkMsg", "Navigated to Text Input section"));
if (externalLink) externalLink.addEventListener("click", (e) => {
  // Let link open in new tab but update message
  setMsg("linkMsg", "Opened external link");
});

/* 14. Media */
const imgSample = $("imgSample"), videoSample = $("videoSample"), audioSample = $("audioSample"), canvasSample = $("canvasSample");
if (canvasSample) {
  // draw simple content so canvas is non-empty for automation checks
  const ctx = canvasSample.getContext && canvasSample.getContext("2d");
  if (ctx) {
    ctx.fillStyle = "#007bff";
    ctx.fillRect(0, 0, canvasSample.width, canvasSample.height);
    ctx.fillStyle = "#fff";
    ctx.font = "14px sans-serif";
    ctx.fillText("Canvas", 10, 50);
  }
}
[imgSample, videoSample, audioSample, canvasSample].forEach(el => {
  if (!el) return;
  el.addEventListener("click", () => setMsg("mediaMsg", `${el.tagName} clicked/interacted`));
});

/* 15. Tables & Lists */
setMsg("tableListMsg", "Tables & Lists ready for automation assertions");

/* ===== 16. Modal (with ESC close focus management) ===== */
const openModalBtn = $("openModalBtn"), sampleModal = $("sampleModal");
const closeModalBtn = sampleModal && sampleModal.querySelector(".closeModal");
if (openModalBtn && sampleModal && closeModalBtn) {
  function openModal(modal, focusTarget) {
    modal.setAttribute("aria-hidden", "false");
    modal.style.display = "flex";
    // focus the close button for keyboard users
    focusTarget.focus();
    // trap focus could be added here (simple for demo)
  }
  function closeModal(modal) {
    modal.setAttribute("aria-hidden", "true");
    modal.style.display = "none";
    openModalBtn.focus();
  }

  openModalBtn.addEventListener("click", () => openModal(sampleModal, closeModalBtn));
  closeModalBtn.addEventListener("click", () => closeModal(sampleModal));
  window.addEventListener("click", e => {
    if (e.target === sampleModal) closeModal(sampleModal);
  });
  window.addEventListener("keydown", e => { if (e.key === "Escape" && sampleModal.style.display === "flex") closeModal(sampleModal); });
}

/* 17. Shadow DOM (basic) */
const shadowHost = $("shadowHost");
if (shadowHost && shadowHost.attachShadow) {
  const shadowRoot = shadowHost.attachShadow({ mode: "open" });
  const shadowBtn = document.createElement("button");
  shadowBtn.textContent = "Shadow Button";
  shadowBtn.id = "shadowBtn";
  shadowBtn.type = "button";
  shadowRoot.appendChild(shadowBtn);
  const shadowMsg = $("shadowMsg");
  shadowBtn.addEventListener("click", () => {
    if (shadowMsg) setMsg("shadowMsg", "Shadow DOM button clicked");
  });
}

/* 18. Tooltip (hover & focus) */
const tooltipBtn = $("tooltipBtn"), tooltipText = $("tooltipText");
if (tooltipBtn && tooltipText) {
  tooltipBtn.addEventListener("mouseover", () => { tooltipText.setAttribute("aria-hidden", "false"); setMsg("tooltipMsg", "Tooltip displayed"); });
  tooltipBtn.addEventListener("mouseout", () => { tooltipText.setAttribute("aria-hidden", "true"); setMsg("tooltipMsg", "Tooltip hidden"); });
  tooltipBtn.addEventListener("focus", () => { tooltipText.setAttribute("aria-hidden", "false"); setMsg("tooltipMsg", "Tooltip displayed"); });
  tooltipBtn.addEventListener("blur", () => { tooltipText.setAttribute("aria-hidden", "true"); setMsg("tooltipMsg", "Tooltip hidden"); });
}

/* 19. Authentication (simulated) */
const loginBtn = $("loginBtn");
if (loginBtn) loginBtn.addEventListener("click", () => setMsg("authMsg", "Simulated login successful"));

/* ================= ADVANCED ELEMENTS ================= */

/* 20. Auto-suggest / Autocomplete (debounced + keyboard support) */
const autoSuggestInput = $("autoSuggestInput"), suggestionsList = $("suggestionsList");
const autoSuggestMsg = $("autoSuggestMsg");
const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Melon"];
let suggestDebounce = null;
if (autoSuggestInput && suggestionsList) {
  autoSuggestInput.addEventListener("input", () => {
    clearTimeout(suggestDebounce);
    suggestDebounce = setTimeout(() => {
      const query = autoSuggestInput.value.trim().toLowerCase();
      suggestionsList.innerHTML = "";
      if (!query) {
        suggestionsList.setAttribute("aria-expanded", "false");
        return;
      }
      const matches = fruits.filter(f => f.toLowerCase().includes(query));
      matches.forEach((fruit, idx) => {
        const li = document.createElement("li");
        li.textContent = fruit;
        li.tabIndex = 0;
        li.setAttribute("role", "option");
        li.addEventListener("click", () => {
          autoSuggestInput.value = fruit;
          suggestionsList.innerHTML = "";
          suggestionsList.setAttribute("aria-expanded", "false");
          setMsg("autoSuggestMsg", `Selected: ${fruit}`);
        });
        li.addEventListener("keydown", (e) => {
          if (e.key === "Enter") li.click();
        });
        suggestionsList.appendChild(li);
      });
      suggestionsList.setAttribute("aria-expanded", matches.length > 0 ? "true" : "false");
    }, 180);
  });

  // Close suggestions on blur (allow click by using a small timeout)
  autoSuggestInput.addEventListener("blur", () => setTimeout(() => suggestionsList.setAttribute("aria-expanded", "false"), 120));
}

/* 21. Dependent Dropdown */
const countrySelect = $("countrySelect"), citySelect = $("citySelect");
const dependentMsg = $("dependentMsg");
const countryCityMap = { India: ["Mumbai", "Delhi", "Bangalore"], USA: ["New York", "Los Angeles", "Chicago"], UK: ["London", "Manchester", "Birmingham"] };
if (countrySelect && citySelect) {
  countrySelect.addEventListener("change", () => {
    const country = countrySelect.value;
    citySelect.innerHTML = "";
    (countryCityMap[country] || []).forEach(city => {
      const opt = document.createElement("option");
      opt.value = city; opt.textContent = city;
      citySelect.appendChild(opt);
    });
    setMsg("dependentMsg", `Selected Country: ${country || 'None'}`);
  });
  citySelect.addEventListener("change", () => {
    setMsg("dependentMsg", `Selected Country: ${countrySelect.value || 'None'}, Selected City: ${citySelect.value || 'None'}`);
  });
}

/* 22. Masked Input (simple masking example) */
const maskedInput = $("maskedInput");
if (maskedInput) {
  maskedInput.addEventListener("input", () => {
    // not altering value (keeps it test-friendly); only show masked representation
    setMsg("maskedMsg", `Entered (masked): ${maskedInput.value.replace(/\d/g, "*")}`);
  });
}

/* 23. Double Click */
const doubleClickBtn = $("doubleClickBtn");
if (doubleClickBtn) doubleClickBtn.addEventListener("dblclick", () => setMsg("doubleClickMsg", "Button double-clicked"));

/* 24. Drag & Drop (dataTransfer key consistent and keyboard friendly) */
const dragItem = $("dragItem"), dropZone = $("dropZone");
if (dragItem && dropZone) {
  dragItem.setAttribute("draggable", "true");
  dragItem.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", e.target.id);
    e.dataTransfer.effectAllowed = "move";
    dragItem.setAttribute("aria-grabbed", "true");
  });
  dragItem.addEventListener("dragend", () => dragItem.setAttribute("aria-grabbed", "false"));
  dropZone.addEventListener("dragover", e => e.preventDefault());
  dropZone.addEventListener("drop", e => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const draggedEl = document.getElementById(id);
    if (draggedEl) {
      dropZone.appendChild(draggedEl);
      setMsg("dragMsg", `Dropped: ${draggedEl.textContent}`);
    }
  });

  // Basic keyboard support: press Enter on dragItem appends it
  dragItem.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      dropZone.appendChild(dragItem);
      setMsg("dragMsg", `Dropped (keyboard): ${dragItem.textContent}`);
    }
  });
}

/* 25. Sortable Table (text and numeric) */
const tableHeaders = document.querySelectorAll("#sortableTable th");
if (tableHeaders.length) {
  tableHeaders.forEach((th, index) => {
    th.style.cursor = "pointer";
    th.addEventListener("click", () => {
      const table = th.closest("table");
      const tbody = table.querySelector("tbody");
      const rows = Array.from(tbody.querySelectorAll("tr"));
      const type = th.dataset.sortType || "text";
      const asc = !th.asc;
      rows.sort((a,b) => {
        let aText = a.children[index].textContent.trim();
        let bText = b.children[index].textContent.trim();
        if (type === "number") {
          return asc ? (Number(aText) - Number(bText)) : (Number(bText) - Number(aText));
        }
        return asc ? aText.localeCompare(bText) : bText.localeCompare(aText);
      });
      rows.forEach(r => tbody.appendChild(r));
      th.asc = asc;
      setMsg("sortableMsg", `Table sorted by ${th.textContent}, ${asc ? "asc" : "desc"}`);
    });
  });
}

/* 26. Advanced modal logic (re-usable) */
const advModalBtn = $("advModalBtn"), advModal = $("advModal"), advCloseModal = $("advCloseModal");
if (advModalBtn && advModal && advCloseModal) {
  const openAdv = () => { advModal.setAttribute("aria-hidden","false"); advModal.style.display = "flex"; advCloseModal.focus(); setMsg("advModalMsg","Advanced modal opened"); };
  const closeAdv = () => { advModal.setAttribute("aria-hidden","true"); advModal.style.display = "none"; advModalBtn.focus(); setMsg("advModalMsg","Advanced modal closed"); };
  advModalBtn.addEventListener("click", openAdv);
  advCloseModal.addEventListener("click", closeAdv);
  window.addEventListener("click", e => { if (e.target === advModal) closeAdv(); });
  window.addEventListener("keydown", e => { if (e.key === "Escape" && advModal.style.display === "flex") closeAdv(); });
}

/* 27. iFrame Interaction (safe access) */
const iframeBtn = $("iframeBtn"), iframeMsg = $("iframeMsg"), sampleIframe = $("sampleIframe");
if (iframeBtn && sampleIframe) {
  iframeBtn.addEventListener("click", () => {
    try {
      const iframeWin = sampleIframe.contentWindow;
      const iframeDoc = sampleIframe.contentDocument || (iframeWin && iframeWin.document);
      if (iframeDoc && iframeDoc.body) {
        iframeDoc.body.style.backgroundColor = "lightyellow";
        setMsg("iframeMsg", "iFrame background changed");
      } else {
        setMsg("iframeMsg", "iFrame access not allowed");
      }
    } catch (err) {
      setMsg("iframeMsg", "iFrame access blocked by browser");
    }
  });
}

/* 28. Shadow DOM Advanced */
const shadowAdvHost = $("shadowAdvHost");
if (shadowAdvHost && shadowAdvHost.attachShadow) {
  const shadowAdvRoot = shadowAdvHost.attachShadow({mode:"open"});
  const shadowAdvBtn = document.createElement("button");
  shadowAdvBtn.textContent = "Shadow Adv Button";
  shadowAdvBtn.type = "button";
  shadowAdvRoot.appendChild(shadowAdvBtn);
  const shadowAdvMsg = $("shadowAdvMsg");
  shadowAdvBtn.addEventListener("click", () => { if (shadowAdvMsg) setMsg("shadowAdvMsg", "Advanced Shadow DOM button clicked"); });
}

/* 29. Multi-tab Navigation */
const newTabBtn = $("newTabBtn");
if (newTabBtn) newTabBtn.addEventListener("click", () => { window.open("https://example.com", "_blank", "noopener"); setMsg("multiTabMsg", "New tab opened"); });

/* Misc: close responsive menu on ESC */
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // close side menu on mobile
    if (window.innerWidth <= 920 && sideMenu.classList.contains("visible")) setMenuVisible(false);
  }
});
