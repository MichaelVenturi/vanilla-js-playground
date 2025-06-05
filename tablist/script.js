const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelector(".tab-content");

const dummyData = {
  tab1: "Tab 1 content",
  tab2: "Tab 2 content",
  tab3: "Tab 3 content",
};

let activeTab = tabs[0];
tabs[0].classList.add("active");
updateContent();

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    if (tab !== activeTab) {
      tab.classList.add("active");
      activeTab.classList.remove("active");
      activeTab = tab;
      updateContent();
    }
  });
});

function updateContent() {
  tabContent.innerHTML = dummyData[activeTab.id];
}
