// Function to display countdown using callback hell
function startCountdown() {
    const countdownElement = document.getElementById('countdown');

    let count = 10;

    setTimeout(function() {
      countdownElement.textContent = count;
      
      setTimeout(function() {
        count--;

        setTimeout(function() {
          countdownElement.textContent = count;

          setTimeout(function() {
            count--;

            setTimeout(function() {
              countdownElement.textContent = count;

              setTimeout(function() {
                count--;

                setTimeout(function() {
                  countdownElement.textContent = count;

                  setTimeout(function() {
                    count--;

                    setTimeout(function() {
                      countdownElement.textContent = count;

                      setTimeout(function() {
                        count--;

                        setTimeout(function() {
                          countdownElement.textContent = count;

                          // Display "Happy Independence Day" after the countdown
                          setTimeout(function() {
                            countdownElement.textContent = "Happy Independence Day!";
                          }, 1000);
                        }, 1000);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }

  // Call the function to start the countdown when the page loads
  window.onload = startCountdown;