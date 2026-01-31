let preguntas=[];
let index=0;
let puntos=0;

const banco = {
    1: [
        {q:"¿Qué es un algoritmo?", o:["Error de sistema","Pasos lógicos y finitos","Un cable"], c:1},
        {q:"¿Qué es una variable?", o:["Un valor fijo","Espacio para guardar datos","Un monitor"], c:1},
        {q:"Dato para números enteros:", o:["Entero (Int)","Float","String"], c:0},
        {q:"¿Qué es un booleano?", o:["Texto largo","Verdadero o Falso","Un color"], c:1},
        {q:"¿Para qué sirve el IF?", o:["Repetir","Tomar decisiones","Sumar"], c:1},
        {q:"¿Qué es el pseudocódigo?", o:["Código binario","Lógica en lenguaje humano","Un virus"], c:1},
        {q:"¿Qué es la entrada de datos?", o:["Lo que el programa recibe","Lo que el programa borra","La pantalla"], c:0},
        {q:"Tipo de dato para 'Hola':", o:["Boolean","Cadena de texto","Decimal"], c:1},
        {q:"Símbolo de multiplicación:", o:["x","*","+"], c:1},
        {q:"¿Qué es el Else?", o:["Si no se cumple el IF","Un tipo de bucle","Una variable"], c:0},
        {q:"¿Dónde inician los arreglos?", o:["En 1","En 0","En -1"], c:1},
        {q:"¿Qué es un decimal?", o:["Número con punto","Número sin punto","Letras"], c:0},
        {q:"Un rombo en diagrama significa:", o:["Inicio","Decisión","Proceso"], c:1},
        {q:"¿Qué es una salida?", o:["Recibir datos","Mostrar información","Apagar"], c:1},
        {q:"Operador lógico 'Y' en inglés:", o:["AND","OR","NOT"], c:0}
    ],
    2: [
        {q:"¿Qué es un bucle?", o:["Acción repetida","Error de sintaxis","Un archivo"], c:0},
        {q:"¿Qué bucle se usa si sé el número de vueltas?", o:["While","For","If"], c:1},
        {q:"¿Qué hace un contador?", o:["Suma de 1 en 1","Multiplica","Resta"], c:0},
        {q:"¿Qué es una función?", o:["Variable","Bloque de código reutilizable","Un cable"], c:1},
        {q:"¿Qué es el retorno?", o:["Reiniciar","Devolver un valor","Cerrar"], c:1},
        {q:"¿Qué hace el While?", o:["Repite mientras sea cierto","Repite solo una vez","No repite"], c:0},
        {q:"¿Qué es un parámetro?", o:["Nombre de función","Dato de entrada de función","Error"], c:1},
        {q:"¿Qué es depuración?", o:["Borrar todo","Buscar y arreglar errores","Instalar"], c:1},
        {q:"¿Qué es un acumulador?", o:["Suma valores variables","Cuenta de 1 en 1","Un botón"], c:0},
        {q:"¿Qué es Do While?", o:["Igual al for","Ejecuta y luego pregunta","No existe"], c:1},
        {q:"Buenas prácticas implican:", o:["Código sucio","Código limpio y claro","Sin comentarios"], c:1},
        {q:"¿Qué es un error de sintaxis?", o:["Escribir mal el código","Falla de internet","Un bug lógico"], c:0},
        {q:"¿Para qué sirve una función?", o:["No repetir código","Gastar memoria","Adornar"], c:0},
        {q:"¿Qué hace un break?", o:["Rompe el bucle","Lo acelera","Lo pausa"], c:0},
        {q:"¿Cómo llamamos a un error?", o:["Bug","Fix","Script"], c:0}
    ],
    3: [
        {q:"¿Qué es un Arreglo?", o:["Lista de datos","Una sola variable","Un cable"], c:0},
        {q:"Índice de la primera posición:", o:["1","0","-1"], c:1},
        {q:"¿Qué es el DOM?", o:["Estructura para manipular HTML","Un disco duro","Un juego"], c:0},
        {q:"¿Qué es una Clase?", o:["Un objeto","Un molde o plano","Una variable"], c:1},
        {q:"¿Qué es un Evento?", o:["Una fiesta","Acción como click","Un bit"], c:1},
        {q:"¿Qué es una Matriz?", o:["Tabla de filas y columnas","Un número","Un texto"], c:0},
        {q:"¿Qué es un Método?", o:["Acción de un objeto","Una variable","Un monitor"], c:0},
        {q:"¿Qué es una validación?", o:["Verificar datos correctos","Pintar","Borrar"], c:0},
        {q:"¿Qué es un Objeto?", o:["Instancia de clase","Error","Archivo"], c:0},
        {q:"¿Para qué sirve el DOM?", o:["Cambiar la web en vivo","Hackear","Apagar"], c:0},
        {q:"Los arreglos guardan:", o:["Cualquier tipo de dato","Solo texto","Solo números"], c:0},
        {q:"¿Qué es un constructor?", o:["El que crea el objeto","El que lo borra","Un bucle"], c:0},
        {q:"Seleccionar ID en JS:", o:["getElementById","find","select"], c:0},
        {q:"Lógica compleja implica:", o:["Combinar herramientas","Sumar 1+1","Escribir"], c:0},
        {q:"Un proyecto final busca:", o:["Aplicar lo aprendido","Copiar código","Pasar el tiempo"], c:0}
    ]
};

function showSection(id){
    document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
    document.getElementById("simulador").style.display="none";
    document.getElementById("score-box").style.display="none";
}

function startSim(t){
    document.getElementById("correctSound").play().then(() => {
        document.getElementById("correctSound").pause();
        document.getElementById("correctSound").currentTime = 0;
    });
    document.getElementById("wrongSound").play().then(() => {
        document.getElementById("wrongSound").pause();
        document.getElementById("wrongSound").currentTime = 0;
    });

    preguntas=[...banco[t]].sort(()=>Math.random()-0.5);
    index=0;
    puntos=0;
    updateScore();
    document.getElementById("simulador").style.display="block";
    document.getElementById("score-box").style.display="block";
    document.querySelectorAll("section").forEach(s=>s.classList.remove("active"));
    loadQ();
}

function loadQ(){
    if(index>=preguntas.length){
        document.getElementById("victorySound").play();
        document.getElementById("simulador").innerHTML=`
            <div class="card" style="text-align:center;">
                <h2>🏆 RETO COMPLETADO</h2>
                <p>Tu puntaje final:</p>
                <div style="font-size:3rem; color:var(--oro);">${puntos} / 150</div>
                <button class="sim-btn" onclick="location.reload()">Regresar al Inicio</button>
            </div>`;
        return;
    }

    let p=preguntas[index];
    document.getElementById("question").textContent=`Pregunta ${index+1}/15: ${p.q}`;
    document.getElementById("options").innerHTML="";
    document.getElementById("progress").style.width=((index/preguntas.length)*100)+"%";

    p.o.forEach((op,i)=>{
        let b=document.createElement("button");
        b.textContent=op;
        b.onclick=()=>check(i, b);
        document.getElementById("options").appendChild(b);
    });
}

function check(i, b){
    const botones = document.querySelectorAll(".options button");
    botones.forEach(btn => btn.disabled = true);

    if(i===preguntas[index].c){
        puntos+=10;
        b.classList.add("correct-answer");
        let snd = document.getElementById("correctSound");
        snd.currentTime = 0;
        snd.play();
    }else{
        b.classList.add("wrong-answer");
        botones[preguntas[index].c].classList.add("correct-answer");
        let snd = document.getElementById("wrongSound");
        snd.currentTime = 0;
        snd.play();
    }
    updateScore();
    index++;
    setTimeout(loadQ, 1200);
}

function updateScore(){
    document.getElementById("score").textContent=puntos;
}