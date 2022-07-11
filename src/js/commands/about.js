// about command
function runAbout(command) {

    // input validation
    if (command.length > 1) {
        callError(102)

    // command
    } else {
        toConsole("Terminal version " + version)
        toConsole("Source code hosted on <a href='https://codeberg.org/iv-websites/terminal'>Codeberg</a>")
    }
}