/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// $(document).ready(function() {

  const createTweetElement = (tweetData) => {
    tweetTemp1 = (`<article class="tweet">${tweetData.content.text}</article>\n`);
    tweetTemp2 = (`<div class ="article-tweet-header-profile">${tweetData.avatars}>\n`);
    tweetTemp3 = (`<p>${tweetData.user.name}</p>\n`);
    tweetTemp4 = (`<div class="tweet-handle">${tweetData.user.handle}</div>\n`);
    tweetTemp5 = (`<div class="tweet-post-date">${tweetData.created_at}</div>\n`);
    
    console.log(tweetTemp1, tweetTemp2, tweetTemp3, tweetTemp4, tweetTemp5)
    
  };
  
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
 }
 
 const $tweet = createTweetElement(tweetData);
//  console.log($tweet);
//  $('#tweets-container').append($tweet); 
// });

{/* <section id="tweets-container">
<article class="article">
  <header class="article-tweet-header">
    <div class="article-tweet-header-profile">
      <div class="tweet-header-icon">
        <img src= "https://i.imgur.com/73hZDYK.png">
      </div>  
      <p>Newton</p>
    </div>
    <div class ="tweet-handle">@SirIsaac</div>
  </header>
    <p class="tweet-text">"If I have seen further it is standing by on shoulders of giants"</p>
  <footer class="article-tweet-footer">
    <div class="tweet-post-date">10 days ago</div>
    <div class="tweet-footer-icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-sharp fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </div>
  </footer>
</article> */}