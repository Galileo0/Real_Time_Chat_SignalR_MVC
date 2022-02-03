

var connection = new signalR.HubConnectionBuilder().withUrl("/Rchat").build();

connection.on("RecivedMessage", function (fromuser, message) {
    var data = fromuser + ":" + message;
    var li = document.createElement("li");
    li.textContent = data;
    $("#messageslist").prepend(li);
});

connection.start();

$("#send").on("click", function () {

    var username = $("#sendername").val();
    var message = $("#sendermessage").val();
    connection.invoke("send_message", username, message);

});