const postsContainer = document.getElementById("posts-container");
const loading = document.querySelector(".loader");
const filter = document.getElementById("filter");

let limit = 5;
let page = 1;

async function getPosts() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
  const data = await res.json();
  return data;
}

async function showPosts() {
  showLoading();
  try {
    const posts = await getPosts();

    posts.forEach((post) => {
      const postEl = document.createElement("div");
      postEl.classList.add("post");
      postEl.innerHTML = `
        <div class="number">${post.id}</div>
        <div class="post-info">
            <h2 class="post-title">${post.title}</h2>
            <p class="post-body">${post.body}</p>
        </div>
        `;
      postsContainer.appendChild(postEl);
    });
  } catch (err) {
    console.error(err);
  } finally {
    hideLoading();
  }
}

function showLoading() {
  loading.classList.add("show");
}
function hideLoading() {
  loading.classList.remove("show");
}

showPosts();

window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showPosts();
  }
});
