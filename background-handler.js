//Funktion som lägger till bakgrundsbild
var file = document.getElementById('file');
file.addEventListener('change', function() {
    document.getElementById('backgroundImage').style.display = "block";
    const chosenFile = this.files[0];
    if (chosenFile) {
        const reader = new FileReader();
        reader.addEventListener('load', function() {
            product.style.background = `url(${reader.result})`;
            product.style.backgroundRepeat = "no-repeat";
            product.style.backgroundSize = "cover";
        });
        reader.readAsDataURL(chosenFile);
        document.querySelector('.reset').addEventListener('click', function() {
            product.style.background = 'url()'
        })
    }
})



//Funktion som ändrar bakgrundsfärgen på resultatet/produkten
function ChangeBackground() {
    const colorPickBackground = document.getElementById('backgroundPicker');
    document.getElementById('backgroundColorText').innerHTML = colorPickBackground.value;
    product.style.backgroundColor = colorPickBackground.value;
}