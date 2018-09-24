function changeParagraph()
{
    //border values
    var borderRed = document.getElementById("borderRed").value;
    var borderGreen = document.getElementById("borderGreen").value;
    var borderBlue = document.getElementById("borderBlue").value;
    var borderWidth = document.getElementById("borderWidth").value;
    document.getElementById("changeThis").style.borderColor = rgb(borderRed, borderGreen, borderBlue);
    document.getElementById("changeThis").style.borderWidth = width(borderWidth);

    //background values
    var backRed = document.getElementById("backRed").value;
    var backGreen = document.getElementById("backGreen").value;
    var backBlue = document.getElementById("backBlue").value;
    document.getElementById("changeThis").style.backgroundColor = rgb(backRed, backGreen, backBlue);


}

function rgb(r, g, b) 
{
    return "rgb(" + r + "," + g + "," + b + ")";
}

function width(w)
{
    return w + "px";
}