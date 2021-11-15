export default function addLoadMore() {
    if ($(".office__comments-item__text").length !== 0) {
        const _comment = $(".office__comments-item");
        const _loadMore = jQuery.ajax({
            url: "loadMore.html",
            dataType: "html",
            success: function (response) {
                $(".office__comments-item__text").each(function () {
                    if (this.scrollHeight > this.offsetHeight) {
                        $(response).insertAfter(this);
                    }
                });
                _comment.each(function () {
                    if ($(".show__more", this).length !== 0) {
                        const _commentItem = this;
                        const _button = $(".show__more", this)[0];
                        _button.addEventListener("click", function () {
                            $(".office__comments-item__text", _commentItem).toggleClass("active");
                        });
                    }
                }); 
            }
        });
            
    }
}