//head tag
const head = document.querySelector('head');

//style tag
const style = document.createElement('style');
head.appendChild(style);

//body tag
const bodyElement = document.querySelector("body");

//main tag
const mainElement = document.createElement("main");
mainElement.style.display = "flex";
mainElement.style.flexWrap = "wrap";
mainElement.style.justifyContent = "center";
mainElement.style.alignItems = "center";
mainElement.style.height = "97vh";
mainElement.style.width = "97vw";
bodyElement.appendChild(mainElement);

//container section tag
const sectionElement = document.createElement("section");
sectionElement.style.display = "flex";
sectionElement.style.flexDirection = "column";
sectionElement.style.justifyContent = "center";
sectionElement.style.alignItems = "center";
sectionElement.style.border = "1px solid black";
sectionElement.style.width = "70%";
sectionElement.style.padding = "2em 1em";
sectionElement.style.margin = "auto";
sectionElement.style.flexWrap = "wrap";

mainElement.appendChild(sectionElement);

//h1 tag | main text
const h1Element = document.createElement("h1");
h1Element.style.color = "blue";
h1Element.style.textAlign = "center";
h1Element.textContent = "Welcome";
sectionElement.appendChild(h1Element);

//container div of inputs
const inputsContainerDiv = document.createElement("div");
inputsContainerDiv.style.width = "90%";
inputsContainerDiv.style.display = "grid";
inputsContainerDiv.style.gridTemplateColumns = "2fr 1fr";
sectionElement.appendChild(inputsContainerDiv);

//message input 
const inputMessage = document.createElement("input");
inputMessage.id = "inpMsg";
inputMessage.style.gridRow = "1/3";
inputMessage.style.borderTop = "none";
inputMessage.style.borderRight = "none";
inputMessage.style.borderLeft = "none";
inputMessage.style.margin = "1.5em 0.5em";
inputMessage.style.height = "2.5em";
inputMessage.type = "text";
inputMessage.placeholder = "Enter Message";
inputsContainerDiv.appendChild(inputMessage);

//font size input 
const inputFontSize = document.createElement("input");
inputFontSize.id = "inpFontSize";
inputFontSize.className = "inpStyle";
inputFontSize.type = "number";
inputFontSize.placeholder = "Size";
inputsContainerDiv.appendChild(inputFontSize);

//color input 
const inputColor = document.createElement("input");
inputColor.id = "inpColor";
inputColor.className = "inpStyle";
inputColor.type = "color";
inputColor.style.width = "auto";
inputsContainerDiv.appendChild(inputColor);

//styling both of style inputs
for(let ele of document.querySelectorAll(".inpStyle")){
    ele.style.margin = "0.5em";
}

//btn tag | update
const btnUpdate = document.createElement("button");
btnUpdate.innerHTML = "update";
btnUpdate.id = "btn";
btnUpdate.style.height = "2.5em";
btnUpdate.style.padding = "0.6em";
btnUpdate.style.border = "1px solid";
btnUpdate.style.borderRadius = "5%";
sectionElement.appendChild(btnUpdate);

//btn style
const btnCssNode = document.createTextNode(`
    #btn{ 
        color: #28a745;
        background-color: transparent;
        border-color: #28a745;
    }
    
    #btn:Hover{ 
        color: #fff;
        background-color: #28a745;
        border-color: #28a745 !important;
    }
    #btn:Active{ 
        background-color: #b6f5c447;;
        color: #28a745;
        border-color: #28a745 !important;
    }
    #btn:not(:disabled):not(.disabled) {
        cursor: pointer;
    }
`);
style.appendChild(btnCssNode);

//add event listener to the button
btnUpdate.addEventListener("click", update);

//update action
function update (){
    h1Element.textContent = inputMessage.value;
    h1Element.style.color = inputColor.value;
    h1Element.style.fontSize = (inputFontSize.value?inputFontSize.value:0)+ "px";
}