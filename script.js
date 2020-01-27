







//eventg information


$$.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events/G5diZfkn0B-bh.json?apikey={apikey}",
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);
                // Parse the response.
                // Do other things.
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });


//event images



$.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events/k7vGFKzleBdwS/images.json?apikey={apikey}",
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);
                // Parse the response.
                // Do other things.
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });




//location-zip code "postalcode"
//date- todays events/next day and the following day "startDateTime-endDateTime"
//
