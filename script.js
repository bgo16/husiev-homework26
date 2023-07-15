const emojiContainer = document.getElementById('emoji-buttons-container');

emojiContainer.addEventListener('click', function (e) {
  let targetItem = e.target;
  if (targetItem.closest('.emoji-button')) {
    let emojiVote = targetItem.closest('.emoji-vote');
    let counter = emojiVote.querySelector('.emoji-counter');
    let currentCount = parseInt(counter.textContent) || 0;
    counter.textContent = currentCount + 1;
  }
});
