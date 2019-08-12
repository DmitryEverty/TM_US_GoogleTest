navigator.permissions.query({name: "clipboard-read"}).then(result => {
    // If permission to read the clipboard is granted or if the user will
    // be prompted to allow it, we proceed.

    if (result.state == "granted" || result.state == "prompt") {
        navigator.clipboard.read().then(data => {
        for (let i=0; i<data.items.length; i++) {
            if (data.items[i].type != "text/plain") {
            alert("Clipboard contains non-text data. Unable to access it.");
            } else {
            textElem.innerText = data.items[i].getAs("text/plain");
            }
        }
        });
    }
    });

var myNewButton = document.createElement("input");
myNewButton.setAttribute("type", "submit")
myNewButton.setAttribute("id", "myCustomBtn")
myNewButton.setAttribute("value", '💖')
// document.getElementsByClassName("FPdoLc")[0].getElementsByTagName("center")[0].appendChild(myNewButton)
document.getElementsByClassName("FPdoLc")[0].getElementsByTagName("center")[0].insertBefore(myNewButton, document.getElementsByClassName("gNO89b")[1])

document.getElementById("myCustomBtn").onclick = buttonText



function buttonText(){ 
    document.getElementsByClassName("gsfi")[1].value = ""   
    navigator.clipboard.readText().then(function(value) {
        document.getElementsByClassName("gsfi")[1].value = value
        window.open('stackoverflow.com', '_top')
        // window.location.replace("http://www.w3schools.com");
        // document.getElementsByClassName('gNO89b')[1].click()
    });
}

function copyText(){
    let btnValue = document.getElementsByClassName("gNO89b")[1].getAttribute("value")
    navigator.clipboard.writeText(btnValue).then(function(){
        console.log(btnValue + 'was added to clipboard')
    }, function(){
        console.log('there was an error')
    })
}