
function getMessages() {

    axios.get('https://weng-message-board.herokuapp.com/api/messages')
        .then( (response) => {

            var output = "<table style='width:100%'><tr><th>Timestamp</th><th>Message</th><th>Sender</th></tr>";
            for (var item of response.data) {
                output += "<tr>" +  "<td>" + item.timestamp + "</td>" + "<td>" + item.message + "</td>" + "<td>" + item.sender + "</td>"+"</tr>";
            }
            output += "</table>";
            document.getElementById("message-list").innerHTML = output;

        })
        .catch( (error) => {console.log(error) })

}

// get all messages automatically when the page is loaded
getMessages();

function sendMessage() {
    // TODO:
    var output = document.getElementById("message").value;
    console.log(output);
    document.getElementById("message").value = output;
    console.log(output);
    var data = { message: output, sender: "Name"};
    axios.post('https://weng-message-board.herokuapp.com/api/messages/', data)
        .then( (response) => {
            alert("Successfully created new message" + response.data.id)
            getMessages();
        })
        .catch( (error) => {
            console.log(error);
        });

}
