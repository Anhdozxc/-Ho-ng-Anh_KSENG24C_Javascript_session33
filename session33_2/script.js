document.getElementById("countButton").addEventListener("click", function () {
  let text = document.getElementById("textInput").value;
  document.getElementById("countResult").innerText =
    text.length + " characters";
});
