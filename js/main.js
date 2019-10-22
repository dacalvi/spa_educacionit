function cargarEnElContenedor(nombreArchivo){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `paginas/${nombreArchivo}.html`);
    xhr.send();
    
    xhr.onreadystatechange = function(){
        if(this.readyState == XMLHttpRequest.DONE && this.status == 200){
            var contenedor = document.getElementById('contenedor');
            contenedor.innerHTML = this.responseText;
        }
    }
}

cargarEnElContenedor('inicio');

//var links = document.getElementsByClassName('nav-item');
var links = document.querySelectorAll('.nav-link');

links.forEach(element => {
    element.addEventListener('click', function(e){
        var pagina = e.target.rel; 
        location.hash = pagina;
        
    });
});

window.addEventListener("hashchange", function(){
    cargarEnElContenedor(location.hash.split("#")[1]);
});





