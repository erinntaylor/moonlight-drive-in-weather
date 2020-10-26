/* -------------------------------------------------------
   Function for getting weather information
   ------------------------------------------------------- */

function weatherBalloon() {
  var key = '4152d6a4bca200232c61533774dc3b15';
  var lat = '41.6525';
  var lon = '-70.2881';
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + key)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    drawWeather(data);
    console.log(data);
  })
  .catch(function() {
    // catch any errors
  });
}


/* -------------------------------------------------------
   Function for display weather information
   ------------------------------------------------------- */

function drawWeather( d ) {

  // current
  $('.now').html( convertTemp(d.current.temp) + '<span>&deg;</span');
  $('.description').html( d.current.weather[0].description );
  $('.feels-like').html( convertTemp(d.current.feels_like) + '<span>&deg;</span');
  $('.sunset').html( convertTime(d.current.sunset) );

  //hours

    $('.hours .icon').html( printGraphic(d.current.weather[0].description) );
    $('.hours .now').html( convertTemp(d.current.temp) );


    $('.hour1 .now').html( convertTemp(d.hourly[0].temp) + '<span>&deg;</span');
        $('.hour1 .icon').html(printGraphic(d.hourly[0].weather[0].description) );

    $('.hour2 .now').html( convertTemp(d.hourly[1].temp) + '<span>&deg;</span');
        $('.hour2 .icon').html(printGraphic(d.hourly[1].weather[0].description) );

    $('.hour3 .now').html( convertTemp(d.hourly[2].temp) + '<span>&deg;</span');
        $('.hour3 .icon').html(printGraphic(d.hourly[2].weather[0].description) );


    $('.hour4 .now').html( convertTemp(d.hourly[3].temp) + '<span>&deg;</span');
        $('.hour4 .icon').html(printGraphic(d.hourly[3].weather[0].description) );

    $('.hour5 .now').html( convertTemp(d.hourly[4].temp) + '<span>&deg;</span');
        $('.hour5 .icon').html(printGraphic(d.hourly[4].weather[0].description) );




  //day 1

    $('.day1 .day').html( displayDay (1) );
    $('.day1 .icon').html(printGraphic(d.daily[1].weather[0].description) );
    $('.day1 .high').html( convertTemp(d.daily[1].temp.max) + '<span>&deg;</span');
    $('.day1 .low').html( convertTemp(d.daily[1].temp.min) + '<span>&deg;</span');

  //day 2

    $('.day2 .day').html( displayDay (2) );
    $('.day2 .icon').html(printGraphic(d.daily[2].weather[0].description) );
    $('.day2 .high').html( convertTemp(d.daily[2].temp.max) + '<span>&deg;</span');
    $('.day2 .low').html( convertTemp(d.daily[2].temp.min) + '<span>&deg;</span');

  //day 3

    $('.day3 .day').html( displayDay (3) );
    $('.day3 .icon').html(printGraphic(d.daily[3].weather[0].description) );
    $('.day3 .high').html( convertTemp(d.daily[3].temp.max) + '<span>&deg;</span');
    $('.day3 .low').html( convertTemp(d.daily[3].temp.min) + '<span>&deg;</span');

  //day 4

    $('.day4 .day').html( displayDay (4) );
    $('.day4 .icon').html(printGraphic(d.daily[4].weather[0].description) );
    $('.day4 .high').html( convertTemp(d.daily[4].temp.max) + '<span>&deg;</span');
    $('.day4 .low').html( convertTemp(d.daily[4].temp.min) + '<span>&deg;</span');

      //day 5

    $('.day5 .day').html( displayDay (5) );
    $('.day5 .icon').html(printGraphic(d.daily[5].weather[0].description) );
    $('.day5 .high').html( convertTemp(d.daily[5].temp.max) + '<span>&deg;</span');
    $('.day5 .low').html( convertTemp(d.daily[5].temp.min) + '<span>&deg;</span');

      //day 6

    $('.day6 .day').html( displayDay (6) );
    $('.day6 .icon').html(printGraphic(d.daily[6].weather[0].description) );
    $('.day6 .high').html( convertTemp(d.daily[6].temp.max) + '<span>&deg;</span');
    $('.day6 .low').html( convertTemp(d.daily[6].temp.min) + '<span>&deg;</span');


}


/* -------------------------------------------------------
   Function for printing weather-specific class on body
   ------------------------------------------------------- */

function changeTheme(d){
  // if the description includes the word "rain"
  if( d.indexOf('rain') > 0 ) {
    $('body').addClass('rainy');
  // if the description includes the word "cloud"
  } else if( d.indexOf('cloud') > 0 ) {
    $('body').addClass('cloudy');
  // if the description includes the word "sunny"
  } else if( d.indexOf('sunny') > 0 ) {
    $('body').addClass('sunny');
  // if none of those cases are true, assume it's clear
  } else {
    $('body').addClass('clear');
  }
}


/* -----------------------------------------------
   Function for printing weather-specific graphic
   ----------------------------------------------- */

function printGraphic(d){
  // if the description includes the word "rain"
  if( d.indexOf('rain') > 0 ) {
    return '<img src="img/cloud-moon-rain-solid-01.svg" alt="Cloud icon">';
  // if the description includes the word "cloud"
  } else if( d.indexOf('cloud') > 0 ) {
    return '<img src="img/cloud-moon-solid-01.svg" alt="Cloud icon">';
  // if the description includes the word "sunny"
  } else if( d.indexOf('sunny') > 0 ) {
    return '<img src="img/moon-solid-01.svg" alt="Cloud icon">';
  // if none of those cases are true, assume it's clear
  } else {
    return '<img src="img/moon-solid-01.svg" alt="Cloud icon">';
  }
}


/* -----------------------------------------------
   Function for converting time to hours/minutes
   DO NOT EDIT
   ----------------------------------------------- */

function convertTime(t){

  var unixTimestamp = t;
  // since javascript works in milliseconds, you should convert 
  // the time into milliseconds by multiplying it by 1000.
  var date = new Date(unixTimestamp * 1000);
  // hours part from the timestamp (extra code needed to convert from military)
  var hours = (date.getHours() + 24) % 12 || 12;;
  // minutes part from the timestamp
  var minutes = "0" + date.getMinutes();
  // seconds part from the timestamp
  var seconds = "0" + date.getSeconds();
  // will display time in 11:10 format
  var formatTime = hours + ':' + minutes.substr(-2);
  // send formatted date back
  return formatTime;

}


/* -----------------------------------------------
   Function for converting temp to fahrenheit
   DO NOT EDIT
   ----------------------------------------------- */

function convertTemp(t){

  return Math.round(((parseFloat(t)-273.15)*1.8)+32);

}


/* -----------------------------------------------
   Function for creating day of the week
   EDIT FORMAT OF DAY NAMES ONLY ("Monday", etc)
   ----------------------------------------------- */

// based on a system where 0 = today, 1 = tomorrow, etc.
// note: the number system below does not immediately correlate
// for example, 0 for today does not line up with 0 for Sunday below
// how this works – in the return statement, d.getDay() gets today's date
// as a number (if today is Thursday, d.getDay() will be 4)
// adding "n" to this number gives you how many days from today.
// n is passed as an argument to the displayDay() function
// in the main body of the code above.
// if today is Thursday, the 4th day of the week,
// and the number 2 is passed as an argument, 
// the function will return the number 6. 6 maps to Saturday in the 
// weekday array below.

function displayDay(n){

  var d = new Date();
  var weekday = new Array();

  weekday[0] = "S";
  weekday[1] = "M";
  weekday[2] = "T";
  weekday[3] = "W";
  weekday[4] = "T";
  weekday[5] = "F";
  weekday[6] = "S";

  var dispDay = d.getDay() + n;

  // adjust number system for numbers over 6
  // subtract 7 from totals higher than 6
  // to keep the day numbers in the array range above
  if(dispDay > 6){
    dispDay = dispDay - 7;
  }

  return weekday[ dispDay ];

}

/* --------------------------------------------------
   Event to get weather information when page loads
   -------------------------------------------------- */

window.onload = function() {
  weatherBalloon();
}


$('button').click(function(){
  $('.cover').addClass('open');
});