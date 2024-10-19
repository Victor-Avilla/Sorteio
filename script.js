function getRandomNum() {

    inputMin = Math.ceil(document.querySelector(".inputMin").value);
    inputMax = Math.floor(document.querySelector(".inputMax").value);
    const result = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin;
    //                               0.5    x (   10    -     5    +1)   +  5}

    if (inputMax <= inputMin) {
        alert("O valor minimo deve ser menor que o valor maximo!")
    }
    else {
        alert(result)
    }
}

