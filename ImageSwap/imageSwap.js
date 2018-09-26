    var image = document.getElementById('Image');
    var images = ["Vader.jpg", "yoda.jpeg", "HanSolo.jpg"];

    images[0].addEventListener("click", changeImageToVader);
    images[1].addEventListener("click", changeImageToYoda);
    images[2].addEventListener("click", changeImageToHanSolo);


function changeImageToVader()
{
   document.getElementById('Image').src = images[0];
}
function changeImageToYoda()
{
   document.getElementById('Image').src = images[1];
}
function changeImageToHanSolo()
{
   document.getElementById('Image').src = images[2];
}
/* This would not work even with paragraph elements in the html file
function addImages()
{
    var i = 0;
    while(i < 3)
    {
        document.getElementsByTagName("p")[i].innerHTML = images[i];
        i++;
    }
}
window.addEventListener("load", addImages);*/