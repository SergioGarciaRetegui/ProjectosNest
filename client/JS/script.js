let btnSaludoIngles = document.getElementById("saludoIngles");
btnSaludoIngles.addEventListener("click",saludarIngles);

let btnSaludoEspa = document.getElementById("saludoEspaniol");
btnSaludoEspa.addEventListener("click",saludarEspaniol);


async function saludarIngles(){
    let promesa = fetch('/api/saludoIngles');
    let respuesta = await promesa;

    let html="";

    console.log(respuesta);
    html=await respuesta.json();
    console.log(html.saludo);
    document.querySelector("#saludo").innerHTML = html.saludo;
}

async function saludarEspaniol(){
    let promesa = fetch('/api/Espa');
    let respuesta = await promesa;

    let html="";

    console.log(respuesta);
    html=await respuesta.json();
    console.log(html.saludo);
    document.querySelector("#saludo").innerHTML = html.saludo;
}