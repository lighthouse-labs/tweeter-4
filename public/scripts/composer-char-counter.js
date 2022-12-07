
$(document).ready(function() {

    
    $('#tweet-text').on("input", function () {
        const max = 140;
        const charCount = $(this).val().length;
        let counting = max - charCount;
        const counter = $(this).parent().find(".counting");
        
        counter.text(counting)

        if (counting < 0 ) {
            counter.css('color', 'red');
          } else {
            counter.css('color', '#545454');
        }
    });
    
});



