const dotenv = require("dotenv");
const net = require("net");

dotenv.config();
let menu = true

console.log("Thin Chat Client v 0.5");
console.log(`Connecting to ${process.env.HOST}:${process.env.PORT}...`);

let client_socket = new net.Socket();

client_socket.connect({
    host: process.env.HOST,
    port: process.env.PORT
}, () => {
    console.log("Connected to server!");
        client_socket.write("Hello World!");
        console.log("Sent message");
});

client_socket.on('data', (buffer) => {
    console.log(`Message contents: ${buffer.toString()}`);
});





