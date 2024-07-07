var indexValue = 1;
showSlide(indexValue);

function plusValue(n){
    indexValue += n;
    showSlide(indexValue);
}

function slideValue(n){
    indexValue = n;
    showSlide(indexValue);
}

function showSlide(n){
    let slides = document.getElementsByClassName("child");
    let dot = document.getElementsByClassName("section");
    let background = document.getElementsByClassName("container")[0];

    if (n > slides.length){indexValue = 1}

    if (n < 1){indexValue = slides.length}

    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
        dot[i].style.backgroundColor = "#fff";
        background.style.backgroundImage = "none";
    }

    slides[indexValue-1].style = "display: flex";
    dot[indexValue - 1].style = "background-color: darkorange";
    background.style.backgroundImage = `var(--image${indexValue})`;
}