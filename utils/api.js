export const fetchLocationId = async city => {
    try {
        const response = await fetch(
            `https://www.metaweather.com/api/location/search/?query=${city}`,
        );
        const locations = await response.json();
        return locations[0].woeid;
    }catch (e) {
        console.log(e)
    }
};
export const fetWeatherLatLong = async (lat,lon) => {
    try {
        const response = await fetch(
            `https://openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b6907d289e10d714a6e88b30761fae22`,
        );
        const {name, weather, main} = await response.json();

        return {
            weather:weather[0].main,
            temp:main.temp,
            nameLocation: name
        };
    }catch (e) {
        console.log(e)
    }
};

export const fetchWeather = async woeid => {
    const response = await fetch(
        `https://www.metaweather.com/api/location/${woeid}/`,
    );
    const { title, consolidated_weather } = await response.json();
    const { weather_state_name, the_temp } = consolidated_weather[0];
    console.log(the_temp);
    return {
        location: title,
        weather: weather_state_name,
        temperature: the_temp,
    };
};
