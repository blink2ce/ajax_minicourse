
function loadData() {
    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    var streetStr = $("#street").val();
    var cityStr = $("#city").val();
    var address = streetStr + ', ' + cityStr;
    $greeting.text('So, you want to live at ' + address + '?');

    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '';
    console.log(streetviewUrl);
    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');

    //var nytinfo = 'http://api.nytimes.com/svc/search/v2/articlesearch.response-format?[q=' + cityStr + '&]&api-key=bddd62855df25432fd75c35ad477dd6c:16:72822262'
    //console.log(nytinfo);

};

$('#form-container').submit(loadData);
