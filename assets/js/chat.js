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
        $('#images').html('');
        for (let i = 0; i < data.length; i++) {
          $('#images').prepend('<img src="' + 'https://photo-for-hw3.s3.amazonaws.com/' + data[i]['objectKey'] + '" />')
        }
      })
  }

  $('#search-button').click(function() {
    insertMessage();
  });


});
