const dotenv = require("dotenv");
const net = require("net");

dotenv.config();

// Create new TCP server and start listening
const chat_server = net.createServer((client_socket) => {
    console.log(`Recieved message from ${client_socket.remoteAddress}`);
    client_socket.on('data', (buffer) => {
        console.log(`Message contents: ${buffer.toString()}`);
        // The response depends on the message in the socket
        console.log("processing message... (kappa)");

        client_socket.end("{status: 200}");
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