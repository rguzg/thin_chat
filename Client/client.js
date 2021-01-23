const dotenv = require("dotenv");
const net = require("net");
const readline = require("readline-sync")

const Chat = () => {
    let message = readline.question("Type a message or type q to quit \n");
        
    if(message != 'q'){
        client_socket.write(message, () => {
            console.log("Sent message");
        });
    } else {
        client_socket.end();
        menu = false;
    }
}

dotenv.config();

console.log("Thin Chat Client v 0.5");
console.log(`Connecting to ${process.env.HOST}:${process.env.PORT}...`);

let client_socket = new net.Socket();

client_socket.on('data', (buffer) => {
    console.log(`Message contents: ${buffer.toString()}`);
    Chat();
});

client_socket.on('connect', () => {
    console.log("Connected to server!");
    Chat();
});

client_socket.connect({
    host: process.env.HOST,
    port: process.env.PORT
});





