// About command
function runAbout(command) {

    // Input validation
    if (command.length > 1) {
        console.log("test")
        callError(102)
    } else {
        toConsole("Terminal version " + version)
    }
}