function changeImage() {

    if (document.getElementById("imgClickAndChange").src === "./images/beachPhoto.jpg") 
    {
        document.getElementById("imgClickAndChange").src = "./images/shpeRocket.jpg";
    }
    /*else if (document.getElementById("imgClickAndChange").src === "./images/shpeRocket.jpg")
    {
        document.getElementById("imgClickAndChange").src = "./images/mountainPhoto.jpg";
    }
    else if (document.getElementById("imgClickAndChange").src === "./images/mountainPhoto.jpg")
    {
        document.getElementById("imgClickAndChange").src = "./images/beachPhoto.jpg"
    }*/
}
changeImage();
