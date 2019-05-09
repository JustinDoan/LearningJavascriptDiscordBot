module.exports = function (message) {

    let messageToRepeat = message.split(" ")
    messageToRepeat.shift()
    let finalMessage = messageToRepeat.join(" ");
    return "You said \"" + finalMessage + "\" "
}