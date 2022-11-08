const data = [];
let data_muscle = [];
let count = 0;

document.getElementById("select").addEventListener("click", function(e) {
    e.preventDefault();
    const muscle = document.getElementById("muscle").value;
    data_muscle.push(muscle);

})
    
function start() {
    const Name = document.getElementById("name").value; // nome
    const time = Number(document.getElementById("time").value); // tempo do exercicio
    const weight = Number(document.getElementById("weight").value); //peso
    const height = Number(document.getElementById("height").value); // altura
    const answer = document.getElementById("answer");
    const token = document.getElementById("token");

    data[count] = [Name, time, weight, height, data_muscle];
    
    for (let i = 0; i < 1; i++){
        answer.innerHTML += `<p>Nome: ${data[count][i]} <br>Tempo: ${data[count][i+1]} <br>Peso: ${data[count][i+2]} 
        <br>Altura: ${data[count][i+3]} <br>Musculo: ${data[count][i+4]}`
        
    };
    
    for( let i = 0; i < data_muscle.length;i++) {
        if("Peito" == data_muscle[i]) {
            const peitoral = [
                "Supino reto",
                "Supino inclinado",
                "Crucifixo com halteres",
                "Peck deck ou adução de peitoral"
            ]
            for (let i = 0; i<peitoral.length;i++) {
                token.innerHTML += `<br>${peitoral[i]}`
            }

        } else if ("Triceps" == data_muscle[i]) {
            const triceps = [
                "Mergulho no banco",
                "Extensão de halteres sob a cabeça",
                "Tríceps na polia alta com barra reta",
                "Tríceps na polia alta com corda"
            ]
            token.innerHTML += `<br>${triceps}`
        }

    };
   
    data_muscle = [];
    teste = undefined;
    count++;
    console.log(data);
}
