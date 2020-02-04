var cities = ["Denver", "Chicago", "New York"]
var apikey = "UGdG4OgfnsYV1yqkgxQO8Q4jYUs9EKOK"

$("#show").on("click", function () {
    event.preventDefault()
    var city = parseInt($(".browser-default").val())
    var citytext = cities[city - 1]
    var keyword = $("#keyword").val()
    console.log("clicked", city, citytext, keyword)
    eventsByCity(citytext, keyword)
});


function eventsByCity(city, keyword) {

    var query = `https://app.ticketmaster.com/discovery/v2/events.json?city=${city}&keyword=${keyword}&sort=date%2Casc&size=50&apikey=${apikey}`

    console.log(query)
    $.ajax({
        type: "GET",
        url: query,
        async: true,
        dataType: "json",
        success: function (json) {
            console.log("data back:", json);
            showEventsByCity(json)
        },
        error: function (xhr, status, err) {
            console.log(err);
        }
    });
}

//momentjs

function showEventsByCity(data) {
    var events = data._embedded.events
    console.log(events)
    $("#eventsbycity").empty()
    var currentDay = moment().format("YYYY-MM-DD")
    var tomorrow = moment().add(1,"days").format("YYYY-MM-DD")
    console.log(currentDay,tomorrow)
    var result = events.filter(event =>
          //  event.dates.start.localDate === "2020-02-14"
         moment(event.dates.start.localDate, "YYYY-MM-DD").format("YYYY-MM-DD") === currentDay || moment(event.dates.start.localDate, "YYYY-MM-DD").format("YYYY-MM-DD") === tomorrow
    )
console.log("result:", result)

    result.map(event => {
        var card =
            `
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src=${event.images[0].url} height="250px">
          <span class="card-title">${event.name} </span>
        </div>
        <div class="card-content">
          <p>Venue: ${event._embedded.venues[0].name}</p>
          <p>Location: ${event._embedded.venues[0].city.name}</p>
          <p>Day / Time: ${event.dates.start.localDate} - ${event.dates.start.localTime}</p>
        </div>
        <div class="card-action">
          <a href=${event.url} target="_black">Buy Ticket</a>
        </div>
      </div>
    </div>
  `
        $("#eventsbycity").append(card)
    })
}