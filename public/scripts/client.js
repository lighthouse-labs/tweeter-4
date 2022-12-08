$(document).ready(function() {
  
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]


  const renderTweets = function (tweets) {
    for (let key in tweets) {
      const $tweet = createTweetElement(tweets[key]);
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
        <div class="tweet-post-date">${tweetData.created_at}</div>
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
    $.ajax ({
      type: "POST",
      url: "/tweets",
      data: parseData,
      success: function (data) {
        console.log(data);
      }
    })
  });


    const loadTweets = function  () {

      $.getJSON ({
        url: "/tweets",
        data: data,
        success: function (data) {
            renderTweets(data);
        }
      })
    }


  loadTweets();
 renderTweets(data);
 
});
