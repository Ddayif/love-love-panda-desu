var pictures = ["assets/img/a1.jpg","assets/img/a2.jpg", "assets/img/a3.jpg", "assets/img/a4.jpg"];

pictures.forEach(function(el, i){
  var contenedor = document.getElementById("contenedor-imagen");
  var divImagen = document.createElement("div");
  divImagen.setAttribute("class","pandas");
  var photo = document.createElement("img");
  photo.src = pictures[i];
  photo.id = 'a' + (i+1);

  divImagen.appendChild(photo);
  contenedor.appendChild(divImagen);
});
