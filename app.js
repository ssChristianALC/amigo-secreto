// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array para amacenar los nombres de los amigos
let amigos = [];

//obtener los elemenos del DOM
let amigoInput = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

//función para agregar amigos al array y a la lista
function agregarAmigo()
{
    const nombreAmigo = amigoInput.value;
        amigos.push(nombreAmigo);
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = nombreAmigo;

        listaAmigos.appendChild(nuevoAmigo);
        amigoInput.value ="";
    


}

//función para sortear un amigo al azar
function sortearAmigo()
{
    if (amigos.length > 0)
    {
        const aleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[aleatorio];
        
        //mostrar el resultado en el ul "resultado"
        resultado.innerHTML = `<li>${amigoSorteado}</li>`;
    }
    else{
        resultado.innerHTML = "<li>No hay amigos para sortear.</li>";
    }
}

function reiniciarJuego()
{
    amigos = [];
    amigoInput.innerHTML = "";
    resultado.innerHTML ="";
    listaAmigos.innerHTML="";
}