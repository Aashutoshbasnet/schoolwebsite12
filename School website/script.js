window.onload = function() {
    // Create a new interval to change the text every 3 seconds.
    var interval = setInterval(function() {
      // Get the current text.
      var text = document.getElementById("moving-text").innerHTML;
  
      // Append the next letter to the text.
      text += text[text.length - 1];
  
      // Set the new text.
      document.getElementById("moving-text").innerHTML = text;
    }, 3000);
  
    // Add animation to the text.
    var text = document.getElementById("moving-text");
    text.style.animationName = "text-animation";
    text.style.animationDuration = "3s";
    text.style.animationIterationCount = "infinite";
  };
  
  