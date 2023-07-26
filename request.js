const key = '11628e08632e37f3a267bc3efa90dc4c';



  const requestCity = async(city)=>{
      const baseurl = "https://api.openweathermap.org/data/2.5/weather";
      const query = `?q=${city}&appid=${key}`;

      const response = await fetch(baseurl+query);
      const data = await response.json();
      return data;
      
  }

  
