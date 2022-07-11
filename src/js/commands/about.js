// about command
function runAbout(command) {

    // input validation
    if (command.length > 1) {
        callError(102)

    // command
    } else {
        toConsole("Terminal version " + version)
    }
}