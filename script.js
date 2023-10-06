const followButton = document.querySelectorAll(".btn");
let isGood = false;

followButton.forEach((button) => {
  button.addEventListener("click", () => {
    if (isGood) {
      button.textContent = "Follow";
      button.style.backgroundColor = ""; // Set background color to grey
      button.style.color= "";
      button.style.outline="none";
    } else {
      button.textContent = "Following";
      button.style.backgroundColor = "whitesmoke"; // Set background color to green
      button.style.color= "black";
      button.style.outline="1px solid grey"

    }

    isGood = !isGood;
  });
});

