// longitud fija, no puedo variar de la tupla
const tupla: [string, number, boolean] = ['Juan Antonio', 42, true]
const configBD: [string, number, string, string] = ['https://127.0.0.1', 3306, 'root', '1234']
console.log(configBD[1])

/* interface IConfig {
    host: string;
    port: number;
    user: string;
    pass: string;
}*/


// tipo rapidos
type data = {
    host: string;
    port: number;
    user: string;
    pass: string;
}

const config: data = {
    host: 'https://127.0.0.1',
    port: 3306,
    user: 'root',
    pass: '12345',
}

console.log(config.port)