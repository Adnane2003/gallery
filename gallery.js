function upDate(previewPic) {
  document.querySelector("#image").style.backgroundImage =
    "url('" + previewPic.src + "')";
  document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
  var a = document.getElementById("image");
  a.style.removeProperty("background-image");
  message = "My favourite players";
  document.querySelector("#image").innerHTML = message;
}
function Focus{

}
function  Blur {

}