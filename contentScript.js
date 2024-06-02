function addTextToTweets() {
  const tweets = document.querySelectorAll('article');
  tweets.forEach((tweet) => {
    if (!tweet.classList.contains('processed')) {
      const textElement = document.createElement('div');
      textElement.innerText = 'TEXT';
      textElement.style.position = 'absolute';
      textElement.style.top = '0';
      textElement.style.right = '0';
      tweet.appendChild(textElement);
      tweet.classList.add('processed');

      // Find the nested anchor tags
      const anchorTags = tweet.querySelectorAll('a');
      anchorTags.forEach((anchorTag) => {
        // Check if the href attribute matches the structure "/username/status/ID"
        const href = anchorTag.getAttribute('href');
        if (href && href.match(/^\/[^\/]+\/status\/\d+$/)) {
          console.log(href);
          tweet.remove()
        }
      });
    }
  });
}

// Run the function initially
addTextToTweets();

// Run the function every time new tweets are loaded
new MutationObserver(addTextToTweets).observe(document.body, { childList: true, subtree: true });