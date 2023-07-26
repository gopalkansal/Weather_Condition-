const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');
const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');
const timeImage = document.querySelector('.card-top img');
const hideshowcard = document.querySelector('.back-card');



const convertToCel = (kelvin) =>{

    celcius = Math.round(kelvin-273.15) ;

    return celcius;
}

const isDay = (icon) =>{
    if(icon.includes('d'))
    {
        return true;
    }
    else
    {
        return false;
    }
}


updateWatherApp = (city) =>{


    const imgName = city.weather[0].icon;
    const iconSrc = `http://openweathermap.org/img/wn/${imgName}@2x.png`;
    cityName.textContent = city.name;
    cardBody.innerHTML =
    `
    <div class="card-mid row">
            <div class="col-8 text-center mx-auto my-auto temp">
              <span>${convertToCel(city.main.temp)}&deg;C</span>
            </div>

            <div class="col-4 condition-temp">
              <p class="condition">${city.weather[0].description}</p>
              <p class="high">${convertToCel(city.main.temp_max)}&deg;C</p>
              <p class="low">${convertToCel(city.main.temp_min)}&deg;C</p>
            </div>
          </div>

          <div class="icon-container card shadow mx-auto">
            <img class="mx-auto"  src="${iconSrc}" alt="" />
          </div>

          <div class="card-bottom px-5 py-4 row">
            <div class="col text-center">
              <p>${convertToCel(city.main.feels_like)}&deg;C</p>
              <span>Feels like</span>
            </div>
            <div class="col text-center">
              <p>${city.main.humidity}%</p>
              <span>Humidity</span>
            </div>
          </div>`

          if(isDay(imgName))
          {
            //   console.log('day time');
            timeImage.setAttribute('src','img/day_image.svg');
            document.querySelector('.city-name p').style.color = "black";
            document.querySelector('.city-name span').style.color = "black";
          }
          else
          {
            //   console.log("night time");
              timeImage.setAttribute('src','img/night_image.svg');
              document.querySelector('.city-name p').style.color = "lightgray";
              document.querySelector('.city-name span').style.color = "lightgray";
          }

          hideshowcard.classList.remove('d-none');

}


//form event
searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const citySearch = cityValue.value.trim();

    console.log(citySearch);
    searchForm.reset();

    requestCity(citySearch)
    .then((data)=>{

        // console.log(data);

        updateWatherApp(data);
    })
    .catch((error) => {

        console.log(error);
    })
})