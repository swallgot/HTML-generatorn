//Globala variabler
const colorPick = document.getElementById('colorPicker');
const elementColorPicker = document.getElementById('elementBackgroundPicker');
const yes = document.getElementById('yes');
const tab = "&nbsp;&nbsp;";
const headline = document.getElementById('headline');
const paragraph = document.getElementById('paragraph');
const button = document.getElementById('button');
const textbox = document.getElementById('textbox');
const editPopup = document.querySelector('.editPopup');
const apply = document.getElementById('apply');
const removeElement = document.getElementById('remove');
const editItalic = document.getElementById('editItalic');
const editNormal = document.getElementById('editNormal');
const editBold = document.getElementById('editBold');
const editAlignLeft = document.getElementById('editAlignLeft');
const editAlignCenter = document.getElementById('editAlignCenter');
const editAlignRight = document.getElementById('editAlignRight');
const editBackgroundColor = document.getElementById('editBackgroundColor');
const editColor = document.getElementById('editColor');
const removeYes = document.getElementById('removeYes');
const removeNo = document.getElementById('removeNo');
const removeAlert = document.querySelector('.removeAlert');

var currentElement = null;

//Funktion för att lägga till element
function Add() {
    document.getElementById('alert').style.display = "none";

    //Skapar ny DIV för resultatet
    const product = document.getElementById("product");
    const newDiv = document.createElement("div");
    product.appendChild(newDiv);
    newDiv.setAttribute("id", "skapadDiv");

    //Skapar ny DIV för html koden
    const eDivText = document.getElementById("divText");
    const newDivText = document.createElement("div");
    eDivText.appendChild(newDivText);
    newDivText.setAttribute("id", "divText");

    //Hantera text
    const ref = document.getElementById('ownText');
    const text = ref.value;

    //Textstorlek
    const fontSizeValue = document.getElementById('fontSizeInput').value;

    //Textstil
    const styleItalic = document.getElementById("italic");
    const styleNormal = document.getElementById("normalStyle");
    const styleBold = document.getElementById("bold");

    //Textposition
    const alignLeft = document.getElementById("left");
    const alignCenter = document.getElementById("center");
    const alignRight = document.getElementById("right");

    //Hörnradie & Padding
    const borderRadius = document.getElementById('borderRadius');
    const paddingValue = document.getElementById('paddingValue');

    //Arrayer för elementen (style)
    const aryRubrik = [];
    const aryP = [];
    const aryBtn = [];
    const aryTextField = [];

    //Variabler som skapar elementen
    const rubrik = document.createElement('h1');
    const p = document.createElement('p');
    const knapp = document.createElement('button');
    const textField = document.createElement('input');


    //Kontrollera om text finns i textfältet
    if (text != "") {

        //Om "rubrik" är ifyllt
        if (headline.checked) {

            rubrik.innerHTML = text;
            document.getElementById("skapadDiv").appendChild(rubrik);

            const textHTML = document.createElement('p');

            if (styleItalic.checked) {aryRubrik.push("font-style: italic");} 
            else if (styleBold.checked) {aryRubrik.push("font-weight: bold");}

            if (alignCenter.checked) {aryRubrik.push('text-align: center');} 
            else if (alignRight.checked) {aryRubrik.push('text-align: right');}
            
            if (yes.checked) {
                aryRubrik.push('background-color: ' + elementColorPicker.value);
                rubrik.style.backgroundColor = elementColorPicker.value;
            }

            if (borderRadius.value != 0) {
                aryRubrik.push("border-radius: " + borderRadius.value  + "px");
                rubrik.style.borderRadius = `${borderRadius.value}px`;
            }

            if (paddingValue.value != 0) {
                aryRubrik.push("padding: " + paddingValue.value  + "px");
                rubrik.style.padding = `${paddingValue.value}px`;
            }

            aryRubrik.push("color:" + colorPick.value);

            //Bestäm färg från colorPicker
            rubrik.style.color = colorPick.value;

            //Bestäm textstorlek
            if (fontSizeValue != null) {
                rubrik.style.fontSize = `${fontSizeValue}px`;
                if(fontSizeValue != 0) {
                    aryRubrik.push("font-size: " + rubrik.style.fontSize);
                }
            }

            //Lägger till style-texten i HTML-texten
            textHTML.innerHTML = tab + `&lt;h1 style = "` + aryRubrik.join('; ') + `">`+ text + `&lt;/h1&gt;`;
            document.getElementById("divText").appendChild(textHTML);

            //Textstil
            if (styleItalic.checked) {rubrik.style.fontStyle = "italic";}
            else if (styleNormal.checked) {rubrik.style.fontStyle = "normal";}
            else if (styleBold.checked) {rubrik.style.fontWeight = "bolder";}

            //Textposition
            if (alignLeft.checked) {rubrik.style.textAlign = "left"}
            else if (alignCenter.checked) {rubrik.style.textAlign = "center"}
            else {rubrik.style.textAlign = "right"}

        
        }





        //Om "text" är ifyllt
        else if (paragraph.checked) {

            p.innerHTML = text;
            document.getElementById("skapadDiv").appendChild(p);

            const textHTML = document.createElement('p');

            if (styleItalic.checked) {aryP.push("font-style: italic");} 
            else if (styleBold.checked) {aryP.push("font-weight: bold");}

            if(alignCenter.checked) {aryP.push('text-align: center');}
            else if (alignRight.checked) {aryP.push('text-align: right');}

            if (yes.checked) {
                p.style.backgroundColor = elementColorPicker.value;
                aryP.push('background-color: ' + elementColorPicker.value)
            }
            if (borderRadius.value != 0) {
                aryP.push("border-radius: " + borderRadius.value  + "px");
                p.style.borderRadius = `${borderRadius.value}px`;
            }
            if (paddingValue.value != 0) {
                aryP.push("padding: " + paddingValue.value  + "px");
                p.style.padding = `${paddingValue.value}px`;
            }

            aryP.push("color:" + colorPick.value);

            //Bestäm färg från colorPicker
            p.style.color = colorPick.value;

            //Bestäm textstorlek
            if (fontSizeValue != null) {
                p.style.fontSize = `${fontSizeValue}px`;
                if(fontSizeValue != 0) {
                    aryP.push("font-size: " + p.style.fontSize);
                }
            }
            
            //Lägger till style-texten i HTML-texten
            textHTML.innerHTML = tab + `&lt;p style = "` + aryP.join('; ') + `">`+ text + `&lt;/p&gt;`;
            document.getElementById("divText").appendChild(textHTML);

            //Textstil
            if (styleItalic.checked) {p.style.fontStyle = "italic";}
            else if (styleNormal.checked) {p.style.fontStyle = "normal";}
            else if (styleBold.checked) {p.style.fontWeight = "bold";}
            
            //Textposition
            if (alignLeft.checked) {p.style.textAlign = "left";}
            else if (alignCenter.checked) {p.style.textAlign = "center";}
            else if (alignRight.checked) {p.style.textAlign = "right";}
        }

        



        //Om "knapp" är ifyllt
        else if (button.checked) {
            
            knapp.innerHTML = text;
            document.getElementById("skapadDiv").appendChild(knapp);

            const textHTML = document.createElement('p');

            if (styleItalic.checked) {aryBtn.push("font-style: italic");} 
            else if (styleBold.checked) {aryBtn.push("font-weight: bold");}

            if(alignCenter.checked) {aryBtn.push('text-align: center');}
            else if (alignRight.checked) {aryBtn.push('text-align: right');}

            if (yes.checked) {
                knapp.style.backgroundColor = elementColorPicker.value;
                aryBtn.push('background-color: ' + elementColorPicker.value)
            }

            if (borderRadius.value != 0) {
                aryBtn.push("border-radius: " + borderRadius.value  + "px");
                knapp.style.borderRadius = `${borderRadius.value}px`;
            }
            if (paddingValue.value != 0) {
                aryBtn.push("padding: " + paddingValue.value  + "px");
                knapp.style.padding = `${paddingValue.value}px`;
            }

            aryBtn.push("color:" + colorPick.value);

            
            //Stil på knappen
            knapp.style.color = colorPick.value;
            
            //Bestäm textstorlek
            if (fontSizeValue != null) {
                knapp.style.fontSize = `${fontSizeValue}px`;
                if(fontSizeValue != 0) {
                    aryBtn.push("font-size: " + knapp.style.fontSize);
                }
            }
            
            //Lägger till style-texten i HTML-texten
            textHTML.innerHTML = tab + `&lt;button style = "` + aryBtn.join('; ') + `">` + text + `&lt;/button&gt;`;
            document.getElementById("divText").appendChild(textHTML);

            //Textstil
            if (styleItalic.checked) {knapp.style.fontStyle = "italic";}
            else if (styleNormal.checked) {knapp.style.fontStyle = "normal";}
            else if (styleBold.checked) {knapp.style.fontStyle = "bold";}
        }
        




        //Om "textruta" är ifyllt
        else if (textbox.checked) {
            textField.innerHTML = text;
            document.getElementById("skapadDiv").appendChild(textField);

            const textHTML = document.createElement('p');

            if (styleItalic.checked) {aryTextField.push("font-style: italic");} 

            if (yes.checked) {
                textField.style.backgroundColor = elementColorPicker.value;
                aryTextField.push('background-color: "' + elementColorPicker.value + '"')
            }

            if (borderRadius.value != 0) {
                aryTextField.push("border-radius: " + borderRadius.value  + "px");
                textField.style.borderRadius = `${borderRadius.value}px`;
            }

            //Bestäm textstorlek
            if (fontSizeValue != null) {
                textField.style.fontSize = `${fontSizeValue}px`;
                if(fontSizeValue != 0) {
                    aryTextField.push("font-size: " + textField.style.fontSize);
                }
            }

            //Placeholder
            textField.placeholder = text;

            if (aryTextField.length != 0) {
                textHTML.innerHTML = tab + `&lt;input type="text" style = "` + aryTextField.join('; ') + `">` + text + `&lt;/input&gt;`;
            } else {
                textHTML.innerHTML = tab + `&lt;input type="text">` + text + `&lt;/input&gt;`;
            }
            //Lägger till style-texten i HTML-texten
            document.getElementById("divText").appendChild(textHTML);

            //Textstil
            if (styleItalic.checked) {textField.style.fontStyle = "italic";}
            else if (styleNormal.checked) {textField.style.fontStyle = "normal";}
        }


        //Öppnar redigeringsrutan
        rubrik.addEventListener('click', function() {  

            if (currentElement !== null) {
                currentElement.classList.remove("highlight");
            }  

            editPopup.style.display = "block";
            this.classList.add("highlight");
            currentElement = this;
        });
        p.addEventListener('click', function() {

            if (currentElement !== null) {
                currentElement.classList.remove("highlight");
            }  

            editPopup.style.display = "block";
            this.classList.add("highlight");
            currentElement = this;
        });
        knapp.addEventListener('click', function() {

            if (currentElement !== null) {
                currentElement.classList.remove("highlight");
            }  

            editPopup.style.display = "block";
            this.classList.add("highlight");
            currentElement = this;
        });
        textField.addEventListener('click', function() {

            if (currentElement !== null) {
                currentElement.classList.remove("highlight");
            }  

            editPopup.style.display = "block";
            this.classList.add("highlight");
            currentElement = this;
        });

        //Redigerar element baserat på värden från redigeringsrutan
        apply.addEventListener('click', function() {
            
            var highlightedElement = document.querySelector(".highlight");
            const editFontSize = document.getElementById('editFontSize');
            const editPadding = document.getElementById('editPadding');
            const editBorderradius = document.getElementById('editBorderradius');

            //Byt style på elementet här
            if (highlightedElement !== null) {
                highlightedElement.style.fontSize = editFontSize.value + "px";
                highlightedElement.style.padding = editPadding.value + "px";
                highlightedElement.style.borderRadius = editBorderradius.value + "px";
                if (editBackgroundColor.value !== "#000000") {
                    highlightedElement.style.backgroundColor = editBackgroundColor.value;
                }
                highlightedElement.style.color = editColor.value;

                if (editAlignLeft.checked) {highlightedElement.style.textAlign = "left"}
                else if (editAlignCenter.checked) {highlightedElement.style.textAlign = "center"}
                else if (editAlignRight.checked) {highlightedElement.style.textAlign = "right"};

                if (editItalic.checked) {highlightedElement.style.fontStyle = "italic"}
                else if (editNormal.checked) {highlightedElement.style.fontStyle = "inherit"}
                else if (editRight.checked) {highlightedElement.style.fontWeight = "bold"};
            }
       });

       removeElement.addEventListener('click', function() {
            removeAlert.style.display = "block";
            var highlightedElement = document.querySelector(".highlight");
            removeYes.addEventListener('click', function() {
                highlightedElement.remove();
                removeAlert.style.display = "none";
                editPopup.style.display = "none";
            });
            removeNo.addEventListener('click', function() {
                removeAlert.style.display = "none";
            });
       });

       //Stäng popup-fönstret
       const cross = document.querySelector('.cross');
       cross.addEventListener('click', function() {
           editPopup.style.display = "none";
           document.querySelector(".highlight").classList.remove("highlight")
       });
        
    } else {
        document.getElementById('alert').style.display = "block";
    }
}