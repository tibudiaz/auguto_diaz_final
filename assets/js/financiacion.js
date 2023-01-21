
// Comprobacion de Financiacion

function robot(){
let robot2 = false

while(!robot2){
        let adivinanza = document.getElementById("robot1").value
        if(adivinanza == 4){
            robot2 = true
            alert("Respuesta correcta puede continuar")
            // pregunta edad solo si pasa la comprobacion de robot
                let preguntaEdad = parseInt (prompt ("ingrese su edad"))
                console.log(preguntaEdad)
                if (preguntaEdad >=18){
                    alert("Eres mayor de Edad si puedes realizar Financiacion")
                    window.location.assign("../sub-pages/Financiacion.html")
                    console.log(`su edad es ${preguntaEdad} y puede entrar a nuestra pagina de financiacion`)
                }else{
                    alert("Eres menor de Edad no Puedes solicitar financiacion.")
                    console.log ("gracias por su visita vuelvas prontos")
                    window.location.assign("../index.html");

                }
        }else{

            document.getElementById("incorrecto").value = ("incorrecta")
            console.log("la respuesta no es correcta")
            break
        }
}


// CALCULADORA DE FINANCIACION

}
function calculate() {
    // Obtener los valores de los campos de entrada
    let monto = document.getElementById("monto").value
    const interes1 = 0.59
    let anios = document.getElementById("anios").value

    let monto1 = parseInt(monto)
    let anios1 = parseInt(anios) 
    // Calcular el interés
    const interes = monto1 * interes1 * anios1
    console.log(`Los intereses son ${interes}`)

    // Calcular el pago mensual
    let pagoMes = (monto1 + interes) / anios1 / 12
    let pagoMes1 = pagoMes.toFixed()
    // Mostrar el resultado al usuario
    document.getElementById("pagoMes").value = pagoMes1
    console.log(`el monto de las cuotas por mes es de: ${pagoMes1}`)

}