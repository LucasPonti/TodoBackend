// App color aleatorio
const getNumeros = () => Math.floor(Math.random()*256)

class Color {
    get(){
        let color = `rgb(${getNumeros()}, ${getNumeros()}, ${getNumeros()})`
        return color
    }
    
    getRandomColor() {
        return math.floor(math.random() * 256);
    }
}

const color = new Color();
console.log(color.get());
