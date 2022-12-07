/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  const createTweetElement = (tweetData) => {
    const userTweetText = (`<article class="tweet">${tweetData.content.text}</article>`);
    const userAvatar = (`<div class ="article-tweet-header-profile">${tweetData.avatars}>`);
    const userName = (`<p>${tweetData.user.name}</p>`);
    const userHandle = (`<div class="tweet-handle">${tweetData.user.handle}</div>`);
    const tweetDate = (`<div class="tweet-post-date"></div>`);
    
    const userTweets = `<article class="article">
  <header class="article-tweet-header">
    <div class="article-tweet-header-profile">
      <div class="tweet-header-icon">
        <img src= ${tweetData.avatars}">
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
 console.log($tweet);
 $('#tweets-container').append($tweet); 
});
