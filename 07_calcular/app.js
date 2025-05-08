class calcular {
    constructor() {
        this.factor = 2;
    }

    multiplicar = (valor) => {
        return valor * this.factor;
    }

    dividir = (valor) => {
        return valor / this.factor;
    }

    mostrar = (valor) => {
        console.log(valor)
    }
}

const init = () => {
    const calc = new calcular();
    calc.mostrar( calc.dividir(100));
}


init();