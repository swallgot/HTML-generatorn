//Funktion som ändrar text beroende på vilket element som är kickad
function changeText() {
  const textOutput = document.getElementById('textOutput');
  const optionElements = document.getElementsByName("whichElement");

  for (let i = 0; i < optionElements.length; i++) {
  if (optionElements[i].checked) {
      textOutput.innerHTML = "Välj element (" + optionElements[i].value + ")";
      break;
    }
  }
}
