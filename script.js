var button = document.getElementsByClassName("button");

// Add event listener to each button
for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function() {
    // Remove active class from all buttons
    for (var j = 0; j < button.length; j++) {
      button[j].classList.remove("active");
    }

    // Add active class to the clicked button
    this.classList.add("active");
  });
}