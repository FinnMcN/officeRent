export default function addLoadMore() {
    if ($(".office-comments__item-text").length !== 0) {
        const _comment = $(".office-comments__item");
        const _loadMore = jQuery.ajax({
            url: "loadMore.html",
            dataType: "html",
            success: function (response) {
                $(".office-comments__item-text").each(function () {
                    if (this.scrollHeight > this.offsetHeight) {
                        $(response).insertAfter(this);
                    }
                });
                _comment.each(function () {
                    if ($(".show__more", this).length !== 0) {
                        const _commentItem = this;
                        const _button = $(".show__more", this)[0];
                        _button.addEventListener("click", function () {
                            $(".office-comments__item-text", _commentItem).toggleClass("active");
                        });
                    }
                }); 
            }
        });
            
    }
}