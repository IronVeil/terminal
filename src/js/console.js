// output to console
function toConsole(value, user = "system") {

    // any prefix
    let prefix = ""

    // from user
    if (user == "user") {
        prefix = prompt + " "

    // error code
    } else if (user == "error") {
        prefix = "ERROR: "
    }

    // write to console
    $(".console").prepend("<p>" + prefix + value + "</p>")
}

// run command
function runCommand(command) {

    // split command
    command = command.split(" ")
    let query = command[0]

    // Debugging
    console.log("query: " + query)
    console.log("command: " + command)
    console.log("command length: " + command.length)

    // command selector
    switch (query) {
        
        // about
        case "about":
            runAbout(command)
            break

        // invalid selection
        default:
            callError(100)
    }
}

// error
function callError(code, value = "") {

    // errors
    switch (code) {

        // 100 - invalid command
        case 100:
            toConsole("invalid command", "error")
            break

        // 101 - not enough arguments
        case 100:
            toConsole("not enough arguments", "error")
            break

        // 102 - too many arguments
        case 102:
            toConsole("too many arguments", "error")
            break

        // 103 - invalid syntax
        case 103:
            toConsole("invalid syntax", "error")
            break
    }
}