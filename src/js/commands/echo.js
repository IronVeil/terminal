// echo command
function runEcho(command) {

    // input validation
    if (command.length < 2) {
        callError(101)

    // command
    } else {
        command.shift()
        toConsole(command.join(" "))
    }
}