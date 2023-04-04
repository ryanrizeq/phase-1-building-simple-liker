// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener('DOMContentLoaded', () => {
  likeButton = document.getElementsByClassName('like-glyph')
  
  for (let i = 0; i < likeButton.length; i++) {
    likeButton[i].addEventListener('click', function () {
      if (likeButton[i].textContent === FULL_HEART) {
        likeButton[i].textContent = EMPTY_HEART;
        likeButton[i].classList.remove('activated-heart');
      } else {
          mimicServerCall()
          .then((response) => {
            likeButton[i].textContent = FULL_HEART;
            likeButton[i].classList.add('activated-heart');
          })
          .catch((error) => {
            document.getElementById('modal-message').textContent = error;

            const errorModal = document.getElementsByClassName('hidden')[0];
            errorModal.classList.remove('hidden');

            setTimeout(function () {
              errorModal.classList.add('hidden')
            }, 3000)
          })
      }
    })
  }
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
