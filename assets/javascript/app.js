var apiKey = "8e63e8b39d0745e39ce4503d649aaa7b"
var text
var numRecords
var startYear
var endYear



// 'q': "lincoln",
// 'begin_date': "18600101",
// 'end_date': "18650410"
// });

$("#submitButton").on("click", function(){
    var ourUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=8e63e8b39d0745e39ce4503d649aaa7b";
    text = $("#Search").val().trim();
    numRecords = $("#numRecords").val().trim();
    startYear = $("#startYear").val().trim() + "0101";
    endYear = $("#endYear").val().trim() + "1230";
    // var text = "1";
    // numRecords = "2";
    // startYear = "3";
    // endYear = "4";
    // ourURL = ourUrl + "&q=" + text + "&fq=" + numRecords + "&begin_date=" + startYear + "&end_date=" + endYear;
    // ourUrl += `&q=${text}&fq=${numRecords}&begin_date=${startYear}&end_date=${endYear}`
    ourUrl += `&q=${text}&begin_date=${startYear}&end_date=${endYear}`;
    console.log(ourUrl);

    $.ajax({
        url: ourUrl,
        method: "Get",
    }).then(function(response){
        console.log(response);
        for (var i=0; i<numRecords; i++){
            $("#articles").append(`
                <h2><a href="${response.response.docs[i].web_url}" target="_blank">${response.response.docs[i].headline.main}</a></h2>
                <p>${response.response.docs[i].abstract}</p>
            `)
        }
    })

})
$("#resetButton").on("click", function () {
    location.reload();
});     

// url: ourUrl + "&q=" + text + "&fq=" + numRecords + "&begin_date=" + startYear + "&end_date=" + endYear