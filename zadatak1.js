function showButton() {
    var textfield1 = document.createElement("input");
    textfield1.id = "textfield1";
    var button1 = document.createElement("button");
    var node = document.createTextNode("Send");
    button1.appendChild(node);
    var div1 = document.createElement("div");
    var body1 = document.getElementById("body1");
    body1.appendChild(div1);
    div1.appendChild(textfield1);
    div1.appendChild(button1);
    button1.addEventListener("click", sendInput());
    document.getElementById("baton").innerHTML = "Hide";
};

function hideButton() {
    var body1 = document.getElementById("body1");
    document.getElementById("baton").innerHTML = "Show";
}

function sendInput() {
    var ptag = document.createElement("p");
    var text1 = document.getElementById("textfield1").value;
    var node2 = document.createTextNode(text1);
    ptag.appendChild(node2);
    var body2 = document.getElementById("body1");
    body2.appendChild(ptag);
};

