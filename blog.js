//part 3
document.addEventListener("DOMContentLoaded", function () {
  const blogList = document.getElementById("blog-list");

  fetch("data/posts.json")
    .then(response => response.json())
    .then(posts => {
      // sorts the newest to oldest blogs using the date property
      posts.sort((a, b) => new Date(b.date) - new Date(a.date));

      posts.forEach((post, index) => {
        const postElement = document.createElement("div");
        postElement.classList.add("card", "post-card");

        // adds badge to latest post
        if (index === 0) {
          const badge = document.createElement("span");
          badge.classList.add("badge-latest");
          badge.textContent = "Latest Post";
          postElement.appendChild(badge);
        }

        const titleEl = document.createElement("h3");
        titleEl.classList.add("card-title");
        titleEl.textContent = post.title;
        postElement.appendChild(titleEl);

        const metaEl = document.createElement("div");
        metaEl.classList.add("card-meta");

        const dateEl = document.createElement("span");
        // formats date
        const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
        dateEl.textContent = formattedDate;
        metaEl.appendChild(dateEl);

        const categoryEl = document.createElement("span");
        categoryEl.classList.add("tag");
        categoryEl.textContent = post.category;
        metaEl.appendChild(categoryEl);

        postElement.appendChild(metaEl);

        const summaryEl = document.createElement("p");
        summaryEl.textContent = post.summary;
        postElement.appendChild(summaryEl);

        // displays full content once read more is clicked
        const contentEl = document.createElement("p");
        contentEl.textContent = post.content;
        contentEl.classList.add("post-content");
        contentEl.style.display = "none";
        postElement.appendChild(contentEl);

        // toggle buttons
        const readMoreBtn = document.createElement("button");
        readMoreBtn.classList.add("btn", "btn-outline");
        readMoreBtn.textContent = "Read More";
        readMoreBtn.addEventListener("click", function () {
          const isHidden = contentEl.style.display === "none";
          contentEl.style.display = isHidden ? "block" : "none";
          readMoreBtn.textContent = isHidden ? "Show Less" : "Read More";
        });
        postElement.appendChild(readMoreBtn);

        blogList.appendChild(postElement);
      });
    })
    .catch(error => console.error("Error loading posts:", error));
});