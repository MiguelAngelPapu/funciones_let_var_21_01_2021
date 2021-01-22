//Crear 3 fuciones una que se llame saludar y capte el nombre
// La otro que finelize el programa 
// La ultima funcion que se despida del usuario


let dato = prompt("Ingrese el nombre");
saludar(dato);
finalizar();
despedida();
function saludar(p1){
    console.log(p1);
}
function finalizar(){
    console.log("Programa finalizado");
}
function despedida(){
    console.log("Adios Usuario no te olvides de mi <3");
}