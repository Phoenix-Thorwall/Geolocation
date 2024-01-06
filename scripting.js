const successCallback = (position) => {
    console.log(position);
}

const errorCallback = (error) => {
    console.error(error);
}


navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

if("geolocation" in navigator){
    console.log('geolocation available');
    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    });
} else {
    console.log('geolocation not available');
}