var checkout = {};

$(document).ready(function() {


  function callChatbotApi(message) {
    // params, body, additionalParams
    return sdk.searchPost({}, {
      messages: [{
        type: 'unstructured',
        unstructured: {
          text: message
        }
      }]
    }, {});
  }

  function insertMessage() {
    msg = $('#transcript').val();
    if ($.trim(msg) == '') {
      return false;
    }
    callChatbotApi(msg)
      .then((response) => {
        console.log(response);
        var data = response.data;

        if (data.messages && data.messages.length > 0) {
          console.log('received ' + data.messages.length + ' messages');

          var messages = data.messages;

          for (var message of messages) {
            if (message.type === 'unstructured') {
              console.log(message);
            } 
          }
        }
      })
  }

  $('#search-button').click(function() {
    insertMessage();
  });


});
