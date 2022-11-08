const data = [];
let data_muscle = [];
let count = 0;

document.getElementById("select").addEventListener("click", function(e) {
    e.preventDefault();
    const muscle = document.getElementById("muscle").value;
    data_muscle.push(muscle)

})
    
function start() {
    const Name = document.getElementById("name").value; // nome
    const time = Number(document.getElementById("time").value); // tempo do exercicio
    const weight = Number(document.getElementById("weight").value); //peso
    const height = Number(document.getElementById("height").value); // altura

    data[count] = [Name, time, weight, height, data_muscle];
    
    for (let i = 0; i < 1; i++){
        answer.innerHTML += `<p>Nome: ${data[count][i]} <br>Tempo: ${data[count][i+1]} <br>Peso: ${data[count][i+2]} 
        <br>Altura: ${data[count][i+3]} <br>Musculo: ${data[count][i+4]}`
        
    };
    data_muscle = []
    teste = undefined
    count++;
    console.table(data);
}
