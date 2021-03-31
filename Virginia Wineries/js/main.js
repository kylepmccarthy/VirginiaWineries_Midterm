/* =====================
Leaflet Configuration
===================== */

var map = L.map('map', {
  center: [40.000, -75.1090],
  zoom: 11
});
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


let dataset = "https://raw.githubusercontent.com/kylepmccarthy/VirginiaWineries_Midterm/main/Winery"
let featureGroup; 


map.fitBounds([
  [39.59608688991276, -82.70846117273777],
  [36.482583722623936, -75.79936794749341]
]);

var remove = function(layer){ 
  map.removeLayer(layer) 
}
 
var slides = [0, 1, 2, 3, 4, 5]
currentPage = [0] 

var firstPage = function(){ 
  $('#intro').show();
  $('#introList').show();
  $('#content').show();
  $('#Wine').show();
  $('#results').hide();
  $('#legend').show();
}

var showResults = function() {

  $('#intro').hide();
  $('#introList').hide();
  $('#content').hide();
  $('#Wine').hide();
  $('#legend').hide();
  $('#results').show();
};

var wineFlight = function() {
  $('#WineFlight').show();
  $('#money').hide();
  $('#food').hide();
  $('#tour').hide();
  $('#wedding').hide();
  $('#picnic').hide();
  $('#overnight').hide();
  $('#private').hide();

};


var food = function() {
  $('#WineFlight').hide()
  $('#money').hide();
  $('#food').show();
  $('#tour').hide();
  $('#wedding').hide();
  $('#picnic').hide();
  $('#overnight').hide();
  $('#private').hide();
};

var tour = function() {
  $('#WineFlight').hide()
  $('#money').hide();
  $('#food').hide();
  $('#tour').show();
  $('#wedding').hide();
  $('#picnic').hide();
  $('#overnight').hide();
  $('#private').hide();
};

var wedding = function() {
  $('#WineFlight').hide()
  $('#money').hide();
  $('#food').hide();
  $('#tour').hide();
  $('#wedding').show();
  $('#picnic').hide();
  $('#overnight').hide();
  $('#private').hide();
};

var picnic = function() {
  $('#WineFlight').hide()
  $('#money').hide();
  $('#food').hide();
  $('#tour').hide();
  $('#wedding').hide();
  $('#picnic').show();
  $('#overnight').hide();
  $('#private').hide();
  
};
var overnight = function() {
  $('#WineFlight').hide()
  $('#money').hide();
  $('#food').hide();
  $('#tour').hide();
  $('#wedding').hide();
  $('#picnic').hide();
  $('#overnight').show();
  $('#private').hide();
};

var private = function() {
  $('#WineFlight').hide()
  $('#money').hide();
  $('#food').hide();
  $('#tour').hide();
  $('#wedding').hide();
  $('#picnic').hide();
  $('#overnight').hide();
  $('#private').show();
};

let FilterRegion = function(feature) {
  if (feature.properties.Region != " " ) {
    return true;
  } else {
    return false
  }
};

let FilterTastingRoom = function(feature) {
  if (feature.properties.TastingRoom != " " ) {
    return true;
  } else {
    return false
  }
};

let FilterTastingRoomFee = function(feature) {
  if (feature.properties.TastingFee != " " ) {
    return true;
  } else {
    return false
  }
};

let FilterFood = function(feature) {
  if (feature.properties.FoodAvailable != " " ) {
    return true;
  } else {
    return false
  }
};


let FilterGroupTour = function(feature) {
  if (feature.properties.GroupTour != " " ) {
    return true;
  } else {
    return false
  }
};

let FilterWeddings = function(feature) {
  if (feature.properties.Weddings != " " ) {
    return true;
  } else {
    return false
  }
};

let FilterPicnicArea = function(feature) {
  if (feature.properties.PicnicArea != " " ) {
    return true;
  } else {
    return false
  }
};

let FilterOvernight = function(feature) {
  if (feature.properties.Overnight != " " ) {
    return true;
  } else {
    return false
  }
};

let FilterPrivateParty = function(feature) {
  if (feature.properties.PrivateParty != " " ) {
    return true;
  } else {
    return false
  }
};

let PopUps = function(feature) { 
  return feature.properties.Address
}


var RegionStyle = function(feature) {
  switch (feature.properties.Region) {
    case 'Northern Virginia' : return {color: 'red'}; 
    case 'Southern Virginia' : return {color: 'brown'}; 
    case 'Central Virginia' : return {color: 'purple'}; 
    case 'Blue Ridge' : return {color: 'blue'}; 
    case 'Chesapeake Bay' : return {color: 'orange'}; 
    case 'Shenandoah Valley' : return {color: 'green'}; 
    case 'Hampton Roads' : return {color: 'black'}; 
    case 'Virginia Mountains' : return {color: 'green'}; 
    case 'Eastern Shore' : return {color: 'orange'}; 
    
  }
};

var TastingRoomStyle = function(feature) {
  switch (feature.properties.TastingRoom) {
    case 'Y' : return {color: '#FF0000'}; 
  }
};

var TastingFeeStyle = function(feature) {
  switch (feature.properties.TastingFee) {
    case 'Y' : return {color: '#2000FF'}; 
  }
};

var FoodStyle = function(feature) {
  switch (feature.properties.FoodAvailable) {
    case 'Y' : return {color: '#22B600'}; 
  }
};

var GroupTourStyle = function(feature) {
  switch (feature.properties.GroupTour) {
    case 'Y' : return {color: '#C35509'}; 
  }
};

var WeddingStyle = function(feature) {
  switch (feature.properties.Weddings) {
    case 'Y' : return {color: '#C400CC'}; 
  }
};

var PicnicStyle = function(feature) {
  switch (feature.properties.PicnicArea) {
    case 'Y' : return {color: '#D1BD00'}; 
  }
};

var OvernightStyle = function(feature) {
  switch (feature.properties.Overnight) {
    case 'Y' : return {color: '#00A38D'}; 
  }
};

var PrivatePartyStyle = function(feature) {
  switch (feature.properties.PrivateParty) {
    case 'Y' : return {color: '#E45400'}; 
  }
};




$('#next').click( function(){ 
  currentNum = currentPage.length 
  currentPage.push(currentNum)
  console.log(currentNum) 
}) 


$('#next').click( function(){ 
  remove(featureGroup); 
  if (currentNum === 0) { 
    ajaxfunc(FilterRegion, RegionStyle) ; 
    $('#prev').prop("disabled", true)
    } 
  if (currentNum === 1) { 
  ajaxfunc(FilterTastingRoom, TastingRoomStyle)
  $('#prev').prop("disabled", false)
  attr = "Tasting Room!"
  desc = "These are the Wineries with a Tasting Room! Come to these Wineries to experience a wide variety of Wine"
  $('span.attribute').text(attr)
  $('span.description').text(desc)
  showResults() 
  wineFlight() 
  } 
  if (currentNum === 2) { 
    ajaxfunc(FilterFood, FoodStyle) 
    attr = "Food!"
    desc = "These locations have food as well as wine! Interested in a wine and cheese board? Or Maybe some Chocalte with your wine? Well these places are for you!"
    $('span.attribute').text(attr)
    $('span.description').text(desc)
    showResults() 
    food() 
  }
  if (currentNum === 3) { 
    ajaxfunc(FilterGroupTour, GroupTourStyle) 
    attr = "Group Tours!"
    desc = "These locations have Group Tours! Come Drink Wine while learning about how they grow their delicious grapes!"
    $('span.attribute').text(attr)
    $('span.description').text(desc)
    showResults() 
    tour() 
  }
  if (currentNum === 4) { 
    ajaxfunc(FilterWeddings, WeddingStyle) 
    attr = "Weddings!"
    desc = "Looking to have a wedding sometime soon? A Virginia winery might just be the perfect place. Get married on a beautiful vinyeard and enjoy some fantastic wine!"
    $('span.attribute').text(attr)
    $('span.description').text(desc)
    showResults() 
    wedding() 
  }
  if (currentNum === 5) { 
    ajaxfunc(FilterPicnicArea, PicnicStyle) 
    attr = "Picnics!"
    desc = "Looking to have a a more casual day at the vinyard? You can have a picnic at the vinyard at these select locations. Drink home grown Virgnia 1ine and bring some cheese to eat in front of some beautiful scenary!"
    $('span.attribute').text(attr)
    $('span.description').text(desc)
    showResults() 
    picnic() 
  }
  if (currentNum === 6) { 
    ajaxfunc(FilterOvernight, OvernightStyle) 
    $('#next').prop("disabled", false)
    attr = "Overnight Stay!"
    desc = "Coming from out of town? Don't Drink and drive! Instead, consider an overnight stay at one of these select vinyeards. View their website for details by clicking on each location." 
    $('span.attribute').text(attr)
    $('span.description').text(desc)
    showResults() 
    overnight() 
  }
  if (currentNum === 7) { 
    ajaxfunc(FilterPrivateParty, PrivatePartyStyle); 
    $('#next').prop("disabled", true)
    attr = "Private Parties!"
    desc = "Having an event sometime soon? Have your birthday or next event big event at one of these wineries. Rent out a room for you and all your friends to enjoy!"
    $('span.attribute').text(attr)
    $('span.description').text(desc)
    showResults() 
    private() 
  }
}) 

$('#prev').click( function(){ 
  currentPage.pop() 
  currentNum = currentPage.length - 1 
  console.log(currentNum) 
}) 

let attr = " "
let desc = " " 

$('#prev').click( function(){ 
  remove(featureGroup); 
  if (currentNum === 0) { 
    ajaxfunc(FilterRegion, RegionStyle) ; 
    $('#prev').prop("disabled", true)
    firstPage() 
    } 

  if (currentNum === 1) { 
    ajaxfunc(FilterTastingRoom, TastingRoomStyle)
    $('#prev').prop("disabled", false); 
    attr = "Tasting Room!"
    desc = "These are the Wineries with a Tasting Room! Come to these Wineries to experience a wide variety of Wine"
    $('span.attribute').text(attr)
    $('span.description').text(desc)
    showResults() 
    wineFlight() 
  } 
  if (currentNum === 2) { 
    ajaxfunc(FilterFood, FoodStyle)  
    attr = "Food!"
    desc = "These locations have food as well as wine! Interested in a wine and cheese board? Or Maybe some Chocalte with your wine? Well these places are for you!"
    $('span.attribute').text(attr)
    $('span.description').text(desc)
    showResults() 
    food() 
  }
  if (currentNum === 3) { 
    ajaxfunc(FilterGroupTour, GroupTourStyle) 
    attr = "Group Tours!"
    desc = "These locations have Group Tours! Come Drink Wine while learning about how they grow their delicious grapes!"
    $('span.attribute').text(attr)
    $('span.description').text(desc)
    showResults() 
    tour() 
  }
  if (currentNum === 4) { 
    ajaxfunc(FilterWeddings, WeddingStyle) 
    attr = "Weddings!"
    desc = "Looking to have a wedding sometime soon? A Virginia winery might just be the perfect place. Get married on a beautiful vinyeard and enjoy some fantastic wine!"
    $('span.attribute').text(attr)
    $('span.description').text(desc)
    showResults() 
    wedding() 
  }
  if (currentNum === 5) { 
    ajaxfunc(FilterPicnicArea, PicnicStyle) 
    attr = "Picnics!"
    desc = "Looking to have a a more casual day at the vinyard? You can have a picnic at the vinyard at these select locations. Drink home grown Virgnia 1ine and bring some cheese to eat in front of some beautiful scenary!"
    $('span.attribute').text(attr)
    $('span.description').text(desc)
    showResults() 
    picnic() 
  }
  if (currentNum === 6) { 
    ajaxfunc(FilterOvernight, OvernightStyle) 
    $('#next').prop("disabled", false)
    attr = "Overnight Stay!"
    desc = "Coming from out of town? Don't Drink and drive! Instead, consider an overnight stay at one of these select vinyeards. View their website for details at each location." 
    $('span.attribute').text(attr)
    $('span.description').text(desc)
    showResults() 
    overnight() 
  }
  if (currentNum === 7) { 
    ajaxfunc(FilterPrivateParty, PrivatePartyStyle); 
    $('#next').prop("disabled", true)
    attr = "Private Parties!"
    desc = "Having an event sometime soon? Have your birthday or next event big event at one of these wineries. Rent out a room for you and all your friends to enjoy!"
    $('span.attribute').text(attr)
    $('span.description').text(desc)
    showResults() 
    private() 
    

  }
}) 


ajaxfunc = function(filt, baba){$.ajax(dataset).done(function(data) {
  var parsedData = JSON.parse(data);
  featureGroup = L.geoJson(parsedData, {
    filter : filt, 
    style : baba, 
    onEachFeature: yourOnEachFeatureFunction, 
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng)
    }
}).addTo(map) 
});
} 

function yourOnEachFeatureFunction(feature, layer){
  if (feature.properties.TastingRoom === ' '){ 
    feature.properties.TastingRoom = 'No'
  }
  else{ 
    feature.properties.TastingRoom = 'Yes'
  }
  if (feature.properties.FoodAvailable === ' '){ 
    feature.properties.FoodAvailable = 'No'
  }
  else{ 
    feature.properties.FoodAvailable = 'Yes'
  }
  if (feature.properties.GroupTour === ' '){ 
    feature.properties.GroupTour = 'No'
  }
  else{ 
    feature.properties.GroupTour = 'Yes'
  }
  if (feature.properties.Weddings === ' '){ 
    feature.properties.Weddings = 'No'
  }
  else{ 
    feature.properties.Weddings = 'Yes'
  }
  if (feature.properties.PicnicArea === ' '){ 
    feature.properties.PicnicArea = 'No'
  }
  else{ 
    feature.properties.PicnicArea = 'Yes'
  }
  if (feature.properties.Overnight=== ' '){ 
    feature.properties.Overnight = 'No'
  }
  else{ 
    feature.properties.Overnight = 'Yes'
  }
  if (feature.properties.PrivateParty === ' '){ 
    feature.properties.PrivateParty = 'No'
  }
  else{ 
    feature.properties.PrivateParty = 'Yes'
  }
  
  if (feature.properties.Address) {
      layer.bindPopup("Name: " + feature.properties.Name + "<br>"  + 
          "Address: " + feature.properties.Address + "<br>" + 
          "City: " + feature.properties.City + "<br>" + 
          "Zip Code: " + feature.properties.Zip + "<br>"  + 
          "Tasting Room? : " + feature.properties.TastingRoom + "<br>" +
          "Food Available? : " + feature.properties.FoodAvailable + "<br>" +
          "Group Tours? : " + feature.properties.GroupTour + "<br>" +
          "Weddings? : " + feature.properties.Weddings + "<br>" +
          "Picnic Area? : " + feature.properties.PicnicArea + "<br>" +
          "Overnight Stay? : " + feature.properties.Overnight + "<br>" +
          "Private Parties? :" + feature.properties.PrivateParty + "<br>" + "<br>" +
          "Website :" + feature.properties.Website + "<br>" + 
          "Phone : " + feature.properties.Phone 

          );
  }; 
}

ajaxfunc(FilterRegion, RegionStyle) 




