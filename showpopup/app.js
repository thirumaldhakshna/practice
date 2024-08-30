const element = document.getElementsByTagName("body")[0];
const content = document.getElementsByClassName("container")[0];
const popup = document.getElementsByClassName("popup")[0];

function closeWindow(){
    element.style ="backdrop-filter: blur(0px);";
    content.style = "display: block;"
    popup.style = "display: none;";
}

function openWindow(){
    element.style ="backdrop-filter: blur(10px);";
    content.style = "display: none;"
    popup.style = "display: block;";
}