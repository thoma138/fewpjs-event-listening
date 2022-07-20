function addingEventListener() {
  const input = document.getElementById("input");

  function clickAlert() {
    return alert("I was clicked");
  }

  input.addEventListener("click", clickAlert);
}

addingEventListener();
