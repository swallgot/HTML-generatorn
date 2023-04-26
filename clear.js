//Funktion som tar bort alla element + HTML koden
function Clear() {
    product.style.backgroundColor = "white";
    document.getElementById('backgroundColorText').innerHTML = "white";
    document.getElementById('backgroundImage').style.display = "none";
    document.getElementById('backgroundPicker').value = "#FFFFFF"
    document.getElementById("skapadDiv").remove();
    document.getElementById('divText').innerHTML = "";
}