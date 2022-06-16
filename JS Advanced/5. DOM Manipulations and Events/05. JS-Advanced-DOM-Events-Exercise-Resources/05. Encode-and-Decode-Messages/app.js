function encodeAndDecodeMessages() {
  let encodeButton = document.querySelectorAll("button")[0];
  let decodeButton = document.querySelectorAll("button")[1];
  let messageInput = document.querySelectorAll("textarea")[0];
  let messageOutput = document.querySelectorAll("textarea")[1];

  encodeButton.addEventListener("click", encodedMessage);
  decodeButton.addEventListener("click", decodedMessage);

  function encodedMessage() {
    let text = messageInput.value;
    let encodedMessage = "";
    for (let i = 0; i < text.length; i++) {
      encodedMessage += String.fromCharCode(ascii(`${text[i]}`) + 1);
    }
    messageInput.value = "";
    messageOutput.value = encodedMessage;
  }
  function decodedMessage() {
    let text = messageOutput.value;
    let decodedMessage = "";

    for (let i = 0; i < text.length; i++) {
      decodedMessage += String.fromCharCode(ascii(`${text[i]}`) - 1);
    }
    messageOutput.value = decodedMessage;
  }
  function ascii(a) {
    return a.charCodeAt(0);
  }
}
