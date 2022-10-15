let input = document.getElementById("input");
let clear = document.getElementById("clear");

input.oninput = () => {
  if (input.value !== "") {
    clear.style.visibility = "visible";
  } else {
    clear.style.visibility = "hidden";
  }
};

clear.onclick = () => {
  input.value = "";
  input.focus();
  clear.style.visibility = "hidden";
};

function search() {
  window.location = `https://ya.ru/?q=${input.value.replace(" ", "+")}`;
}

input.onkeydown = (ev) => {
  if (ev.key == "Enter") search();
};
