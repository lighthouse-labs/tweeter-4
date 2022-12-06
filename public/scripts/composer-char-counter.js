$(document).ready(function() {
    const elem = document.getElementById('tweet-text');
    
    function callback () {
        console.log(this.name.length)
    };
    
    elem.addEventListener("keydown", callback);
});



