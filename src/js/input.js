// input
$(document).bind("keypress", function(e) {

    // enter key pressed
    if (e.which === 13) {

        // get current command
        let command = $("input:text").val()

        // input validation
        if (command != "") {

            // run command
            toConsole(command, "user")
            runCommand(command)

            // clear text box
            $("input:text").val("")
        }
    }
})