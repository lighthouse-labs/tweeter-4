
$(document).ready(function() {


  const renderTweets = function (tweets) {
    let reversedTweets = tweets.reverse();
    for (let key in reversedTweets) {
      const $tweet = createTweetElement(reversedTweets[key]);
      $('#tweets-container').append($tweet);     
    }
  
  }
  
  const createTweetElement = (tweetData) => {

    const userTweets = `<article class="article">
      <header class="article-tweet-header">
        <div class="article-tweet-header-profile">
          <div class="tweet-header-icon">
            <img src= ${tweetData.user.avatars}">
          </div>  
          <p>${tweetData.user.name}</p>
        </div>
        <div class="tweet-handle">${tweetData.user.handle}</div>
        </header>
        <p class="tweet-text">${tweetData.content.text}</p>
      <footer class="article-tweet-footer">
        <div class="tweet-post-date">${timeago.format(tweetData.created_at)}</div>
        <div class="tweet-footer-icons">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-sharp fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>`

    return userTweets;
  };


  $("#tweet-form").submit(function (event) {
    event.preventDefault();
    let parseData = ($(this).serialize());
    const tweetText = $('#tweet-text').val()

    if (tweetText.length > 140) {
      return $('.new-tweet-err-message').text("You've exceed the characer limit!").slideDown(1500);
    } else if (tweetText.length === 0 || tweetText.length === null) {
      return $('.new-tweet-err-message').text("Your Tweet box is empty!").slideDown(1500);
    } else {
      $.ajax ({
        type: "POST",
        url: "/tweets",
        data: parseData,
        success: function (data) {
          loadTweets();
        }
      })
    }
  });

  const loadTweets = function  () {

    $.getJSON ({
      url: "/tweets",
      success: function (data) {
        $('#tweets-container').empty();
        renderTweets(data);
      }
    })
  }


  loadTweets();


});
