import  {getNasaApiData} from  './nasaApi.js';
import  {createMarker} from  './map.js';

let point = document.getElementById('point');
const btn_search =  document.getElementById('button');

btn_search.addEventListener('click', () => {
  const [lat, long] = getCoordinatesArr(point.value);  
  const imageBlob = getNasaApiData(lat, long); 
  const imgEl = document.createElement('img');
  imgEl.src = imageBlob;
  document.getElementById('body').appendChild(imgEl);
  createMarker(lat, long,'hola')
  

   
})

const getCoordinatesArr = (point) => {
  const coordinates =  point.split(',');
  return [coordinates[0].trim(), coordinates[1].trim()]; 
}


