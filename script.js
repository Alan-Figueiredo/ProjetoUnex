const data = [];
let data_muscle = [];
let cont = 0;

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

    let teste;
    for (let i = 0; i < data_muscle.length;i++){
        if (teste == undefined){
            teste = `${data_muscle[i]} `
        } else {
            teste += data_muscle[i]
        }
        
    }

    data[cont] = {Nome: Name, "Tempo(min)": time, "Peso(kg)": weight, "Altura(cm)": height, "Musculo": teste};
    data_muscle = []
    teste = undefined
    cont++;
    console.table(data);
}
