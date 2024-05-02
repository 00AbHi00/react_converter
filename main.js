function copyText() {
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }

function change(){
    let x=document.querySelector("#code").value
    // console.log(x)
    var outputHtml = x.replace(/class=/g, 'className=')
    outputHtml = outputHtml.replace(/<img([^>]*)>/g, '<img$1 />');
    outputHtml = outputHtml.replace(/<hr([^>]*)>/g, '<hr$1 />');
    outputHtml = outputHtml.replace(/<br([^>]*)>/g, '<br$1 />');
    outputHtml = outputHtml.replace(/<input([^>]*)>/g, '<input$1 />');
    outputHtml = outputHtml.replace(/for=/g, 'htmlFor=')
    y=document.getElementById('outputHtml')
    y.innerHTML=outputHtml;
}
function setCursorPosition(textarea) {
    textarea.focus(); // Set focus to the textarea
    textarea.selectionStart = 0; // Set selection start to the beginning
    textarea.selectionEnd = 0; // Set selection end to the beginning
}
function Copy() {
    // Get the textarea element
    var textarea = document.getElementById("outputHtml");
    
    // Get the text content of the textarea
    var textToCopy = textarea.value;

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            console.log('Text copied to clipboard');
        })
        .catch(err => {
            console.error('Unable to copy text to clipboard: ', err);
        });
}
