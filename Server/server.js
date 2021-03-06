const dotenv = require("dotenv");
const net = require("net");
const GenerateResponse = require("./server_logic");

dotenv.config();

// Create new TCP server and start listening
const chat_server = net.createServer((client_socket) => {
    console.log(`Connected to ${client_socket.remoteAddress}`);
    client_socket.on('data', (buffer) => {
        client_socket.pause();
        // The response depends on the message in the socket
        let response = GenerateResponse(buffer);

        client_socket.write(response);
        client_socket.resume();
    })
    
    client_socket.on("end", (hadError) => {
        if(hadError){
            console.error("An error ocurred");
            console.error(`Connection finished with ${client_socket.remoteAddress}`);
        } else {
            console.log(`Connection finished with ${client_socket.remoteAddress}`);
        }
    })
});

chat_server.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Server listening at ${process.env.HOST}:${process.env.PORT}`)
})