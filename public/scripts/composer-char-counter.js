
$(document).ready(function() {

    
    $('#tweet-text').on("input", function () {
        const max = 140;
        const charCount = $(this).val().length;
        const counting = max - charCount;
        const counter = $(this).parent().find(".counting");

        counter.text(counting)
    })
    
});



