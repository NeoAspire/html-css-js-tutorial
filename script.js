// Pages mapping
const pages = {
  "html": "html.html",
  "css": "css.html",
  "javascript": "javascript.html"
};

// Search Function
function searchTutorial() {
  let query = document.getElementById("searchInput").value.toLowerCase().trim();
  if (pages[query]) {
    window.location.href = pages[query];
  } else {
    alert("No tutorial found for: " + query);
  }
}

// Suggestions
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchInput");
  const suggestionBox = document.getElementById("suggestions");

  if (input) {
    input.addEventListener("input", function () {
      let val = this.value.toLowerCase();
      suggestionBox.innerHTML = "";
      if (val) {
        let matches = Object.keys(pages).filter(key => key.startsWith(val));
        matches.forEach(m => {
          let div = document.createElement("div");
          div.innerText = m;
          div.onclick = () => { window.location.href = pages[m]; };
          suggestionBox.appendChild(div);
        });
        suggestionBox.style.display = matches.length ? "block" : "none";
      } else {
        suggestionBox.style.display = "none";
      }
    });
  }
});

// Collapsible Sections
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".collapsible").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      let content = btn.nextElementSibling;
      content.style.display = (content.style.display === "block") ? "none" : "block";
    });
  });
});

// Dark Mode
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  }
});

// Run Code
function runCode(id, outId) {
  let code = document.getElementById(id).innerText;
  let iframe = document.getElementById(outId);
  iframe.contentDocument.open();
  iframe.contentDocument.write(code);
  iframe.contentDocument.close();
}

