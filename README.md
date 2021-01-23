# thin_chat
Thin Chat client made in JS to test socket functionality

# Message structure
JSON is used for server-client communication. Messages have the following basic structure:

```JSON
{
    code: XXX,
    data: {}
}
```

## Request codes
This codes are used to request something from the server

### LOGIN
Sending this code to the server logs a user in. If the username or password is incorrect an ERROR code is sent

```JSON
{
    code: "LOGIN",
    data: {
        username: "user",
        password: "passwsord"
    }
}
```

### LOGOUT
Sending this code to the server logs a user out

```JSON
{
    code: "LOGOUT",
    data: {
        username: "user",
    }
}
```

### CREATE
Sending this code to the server creates a new user. If the user already exists an ERROR code is sent.

```JSON
{
    code: "CREATE",
    data: {
        username: "user",
        password: "password"
    }
}
```

### MESSAGE
Sending this code forwards the included message to all connected users

```JSON
{
    code: "MESSAGE",
    data: {
        message: "Hello World!"
    }
}
```

## Response codes
This codes are sent back to the client in response to a request

### OK
This code means that the requested action was completed successfully. Extra information might be present in the data property

```JSON
{
    code: "OK",
    data: {

    }
}
```

### ERROR
This code means that the requested action was not completed successfully. Extra information might be present in the data property

```JSON
{
    code: "ERROR",
    data: {

    }
}
```