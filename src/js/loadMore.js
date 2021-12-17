export default async function addLoadMore() {
    const commentsBlock = document.querySelector(".office-comments");

    if (!commentsBlock) {
        return;
    }
    
    try {
        const comments = commentsBlock.querySelectorAll(".office-comments__item");
        const showMoreBtn = await getInnerHtml("https://finnmcn.github.io/officeRent/loadMore.html");

        comments.forEach((comment) => {
            const commentText = comment.querySelector(".office-comments__item-text");
            
            if (commentText.scrollHeight > commentText.offsetHeight) {
                const btn = showMoreBtn.documentElement
                    .cloneNode(true)
                    .querySelector(".show-more-btn");
                

                btn.addEventListener("click", function () {
                    if (!this.classList.contains("show-more-btn_active")) {
                        commentText.classList.add("office-comments__item-text_active");
                        this.children[0].innerHTML = "Скрыть";
                        this.classList.add("show-more-btn_active");
                    } else {
                        commentText.classList.remove("office-comments__item-text_active");
                        this.children[0].innerHTML = "Показать еще";
                        this.classList.remove("show-more-btn_active");
                    }
                });
                commentText.after(btn);
            }
        });
    } catch (error) {
        console.error(error);
    }
}

async function getInnerHtml(path) {
    try {
        const response = await fetch(path);
        const responseString = await response.text();

        const parser = new DOMParser();
        const html = parser.parseFromString(responseString, "text/html"); 
      
        return html;
              
    } catch (error) {
        console.error(error);
    }
}