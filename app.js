var apiKey = "8e63e8b39d0745e39ce4503d649aaa7b"
var text
var numRecords
var startYear
var endYear
var ourUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=8e63e8b39d0745e39ce4503d649aaa7b"


// 'q': "lincoln",
// 'begin_date': "18600101",
// 'end_date': "18650410"
// });

$(".btn").on("click", function(){
    text = $("#Search").val().trim();
    numRecords = $("#numRecords").val().trim();
    startYear = $("#startYear").val().trim()
    endYear = $("#endYear").val().trim();
    // var text = "1";
    // numRecords = "2";
    // startYear = "3";
    // endYear = "4";
    // ourURL = ourUrl + "&q=" + text + "&fq=" + numRecords + "&begin_date=" + startYear + "&end_date=" + endYear;
    ourUrl += `&q=${text}&fq=${numRecords}&begin_date=${startYear}&end_date=${endYear}`
    console.log(ourUrl);

    $.ajax({
        url: ourUrl,
        method: "Get",
    }).then(function(response){
        console.log(response)
    })

})

// url: ourUrl + "&q=" + text + "&fq=" + numRecords + "&begin_date=" + startYear + "&end_date=" + endYear