var buttons = document.getElementsByClassName("button");

// Add event listener to each button
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    // Remove active class from all buttons
    for (var j = 0; j < buttons.length; j++) {
      buttons[j].classList.remove("active");
    }

    // Add active class to the clicked button
    this.classList.add("active");
  });
}