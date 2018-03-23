
/////////////////////////////////////////////////////////
//
// this js will receive a call from the app js
// with the correct answer will fill in  a gif for 
// a second
//
//
////////////////////////////////////////////////////////


function displayGiphy(UserSelectedVals) {

     // empty div$('#resultGiphy')
     $('#resultGiphy').empty();


    var ans = UserSelectedVals.correctAnswer;

    //replace spaces with '+'
    var ans2 = ans.replace(/ /g,'+');
    console.log( ans2 );


    // Example queryURL for Giphy API
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=1&q=" + ans2;
    console.log("in Giphy queryUrl:", queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        loadImage(response);
    });


    addmessage(UserSelectedVals);

}

function loadImage(res) {

    //show "resultGiphy" , hide  class="grid"

    $('#resultGiphy').show();
    $('.grid').hide();

    var image = $('<img>');
    image.addClass('#myGif');

    var gifURL = res.data[0].images.original.url;
    image.attr('src', gifURL); //url);

    //<div id="resultGiphy" ></div>
    $('#resultGiphy').show();
    $('#resultGiphy').append(image);
    console.log(" end load image  usrl:", gifURL);
}

function addmessage(UserSelectedVals){
   
    var  msg;
    if ( UserSelectedVals.isRight){
        msg = " CORRECT !! ";
    } else { msg = " Sorry .... so cloooose"};

    var h2 = $('<h2>');
    h2.text(msg);
    $('#resultGiphy').append(h2);
    
}

