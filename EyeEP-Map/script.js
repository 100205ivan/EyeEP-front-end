const counties = document.querySelectorAll(".county");
const selectedCountyTitle = document.querySelector("#selectedCounty");
const instructionText = document.querySelector("#instructionText");
const templateActions = document.querySelector("#templateActions");
const templateButtons = document.querySelectorAll(".template-btn");
const resultBox = document.querySelector("#resultBox");
const resultText = document.querySelector("#resultText");

let selectedCounty = "";

// 更新目前選取的縣市，並顯示學制模板按鈕。
function selectCounty(countyElement) {
    selectedCounty = countyElement.dataset.county;

    counties.forEach((county) => {
        county.classList.toggle("is-active", county === countyElement);
        county.setAttribute("aria-pressed", county === countyElement ? "true" : "false");
    });

    selectedCountyTitle.textContent = selectedCounty;
    instructionText.textContent = "請選擇學制";
    templateActions.hidden = false;
    resultBox.hidden = true;
    resultText.textContent = "";
}

// 顯示使用者最後選擇的縣市與 IEP 模板。
function selectTemplate(templateName) {
    if (!selectedCounty) {
        return;
    }

    resultText.textContent = `你已選擇：${selectedCounty}｜${templateName}`;
    resultBox.hidden = false;
}

// 讓 SVG 縣市區塊可以用滑鼠點擊，也可以用鍵盤 Enter / Space 操作。
counties.forEach((county) => {
    county.setAttribute("aria-label", `選擇${county.dataset.county}`);
    county.setAttribute("aria-pressed", "false");

    county.addEventListener("click", () => {
        selectCounty(county);
    });

    county.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            selectCounty(county);
        }
    });
});

// 綁定三個模板按鈕，點擊後只顯示文字結果，不開啟檔案。
templateButtons.forEach((button) => {
    button.addEventListener("click", () => {
        selectTemplate(button.dataset.template);
    });
});
