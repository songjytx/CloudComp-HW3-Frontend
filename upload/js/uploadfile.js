const form = document.querySelector('form');

// add event listener
form.addEventListener('submit', e => {

    // disable default action
    e.preventDefault();

    // collect files
    const files = document.querySelector('[name=file]').files;
    const formData = new FormData();
    formData.append('avatar', files[0]);

    // define URL and for element
    var urlpre = "https://ba0i55arzi.execute-api.us-east-1.amazonaws.com/prod/photo-for-hw3/";
    var photoname = files[0].name.toString();
    var url=urlpre.concat(photoname);

    // post form data
    const xhr = new XMLHttpRequest();

    // log response
    xhr.onreadystatechange = function () {
             if(xhr.status === 200) {
                            alert("Success! The photo has been uploaded.");
                               }
     }
    

    // create and send the reqeust
    xhr.open("PUT", url);

    xhr.setRequestHeader("Content-Type", "image/jpeg");
    xhr.send(files[0]);
});