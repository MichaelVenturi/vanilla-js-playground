const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelector(".tab-content");

const dummyData = {
  tab1: "Tab 1 content",
  tab2: "Tab 2 content",
  tab3: "Tab 3 content",
};

let activeTab = tabs[0];
tabs[0].classList.add("active");
updateContent(0);

tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    if (tab !== activeTab) {
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      activeTab.classList.remove("active");
      activeTab.setAttribute("aria-selected", "false");
      activeTab = tab;
      updateContent(i);
    }
  });
});

function updateContent(i) {
  tabContent.innerHTML = dummyData[activeTab.id];
  tabContent.setAttribute("aria-labelledby", `tab${i + 1}`);
}
