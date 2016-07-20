
window.onload = function(){

  console.log('window loaded');

  var url = 'https://restcountries.eu/rest/v1'
  var request = new XMLHttpRequest();
  request.open("GET", url );
  request.onload = function(){

    if(request.status === 200){
      JsonString = request.responseText;
      
      countries = JSON.parse( JsonString);
      var country = countries[0]
      
    }
    main()

  
  }
  request.send(null);
  console.log(request);
}

function main(){

  var form = document.getElementById('form')
  var dropDown = document.createElement('select')
  dropDown.setAttribute('id', 'selector')
  countries.forEach(function(country){
    var countryObject = document.createElement('option')
    countryObject.setAttribute('value', country.name)
    countryObject.innerHTML = country.name;
    dropDown.appendChild(countryObject);
    form.appendChild(dropDown);

  })

  var button = document.getElementById('country-info');

  button.onclick = function(){
    var selected = document.getElementById('selector').value;
    showCountryData(selected);
  }
}


function borderingCountries(country){
  console.log(country);  
  var arrBordering = [];

  //

  if(country.borders === country.apha3code){

  }
  return arrBordering;
}

function showCountryData(selected){
 var ul = document.getElementById('country-list')
 countries.forEach(function(country){
  if(selected === country.name){
    var bordering = borderingCountries(country);
    var li = document.createElement('li');
    li.innerHTML = " Name: " + country.name + " Capital: " + country.capital + " Population: " + country.population;
    ul.appendChild(li)
  }
})
}

