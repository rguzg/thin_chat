/*
    The data the server recieves is in the JSON format and has the following basic structure:
    {
        code: XXX
        data: {}
    }

    For more information about the specific structure of the messages check the readme.md file
*/

const GenerateResponse = (client_socket) => {
    console.log(`Message contents: ${buffer.toString()}`);

    client_socket.end(`Message received: ${buffer.toString()}`);
};

module.exports = GenerateResponse;