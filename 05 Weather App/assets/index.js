     console.log('Hello jee babbar');


     const API_KEY="bb5940f8318972432f18266b890bca19";
     function  renderWeatherInfo(data){
          let newPara=document.createElement('p');
          newPara.textContent=`${data?.main?.temp.toFixed(2)} °C`;

         document.body.appendChild(newPara);
     }

     async function fetchWeatherDetails() {
 
        try{
              
       city="kushinagar";

       const response = await fetch(
           `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
         );
       const data = await response.json();
       console.log("Weather data:-> ", data );

    
    renderWeatherInfo(data);

    }
        catch(err){
            //handle the error

        }
       
     }

     async function getCustomWeatherDetails() {
        try {
          let latitude = 24.0667;
          let longitude = 75.0667;
      
          let result =
            await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}
            `);
      
          let data = await result.json();
          console.log("Weather -> ", data);
        
        } catch (err) {
          console.log(err);
        }
      }