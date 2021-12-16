
const getNasaApiData = async(lat, long) => {
  try{
    const API_NASA = 'IZLFYzNHo0wNWbflY6H8XSbbmUEdu8GMJkVXYfLd';
    const url = `https://api.nasa.gov/planetary/earth/assets?lon=${long}&lat=${lat}&date=2014-02-01&dim=0.15&api_key=${API_NASA}`
    loaderOnOff('flex');
    const response = await fetch(url);
    const dataImg = await response.json();
    const img = document.createElement('img');
    img.classList.add('img');
    img.src = dataImg.url;    
    document.getElementById('img1').src = dataImg.url;
    loaderOnOff('none');
  } catch (e){
    alert('Something went wrong, try again');
  }
}
//show/hide a loader while data is transfered from API
const loaderOnOff = (display) => {
  const box = document.getElementById('box');
  if(display == 'flex'){
    box.style.display = 'flex';
  } else {
    box.style.display = 'none';
  }
}

export {  getNasaApiData };

