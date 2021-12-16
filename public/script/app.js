import  {getNasaApiData} from  './nasaApi.js';


let point = document.getElementById('point');
const btn_search =  document.getElementById('button');

btn_search.addEventListener('click', (e) => {
  e.preventDefault();

  if(isEmpty(point)){
    const [lat, long] = getCoordinatesArr(point.value);
    if(isNumber(lat) && isNumber(long)){  
      getNasaApiData(lat, long); 
    }else {
      alert('Plase type numbers');
    }    
  }else {
    alert('error!. Type latitude and longitude');
  }  
})

//split the coordinates
const getCoordinatesArr = (point) => {
  const coordinates =  point.split(',');
  return [coordinates[0].trim(), coordinates[1].trim()]; 
}

//validate input as not empty
const isEmpty = (point) => {
  if(point.value == ''){
    return false;
  } else {
    return true;
  }
}
//validate lat and long as number
const isNumber = (latLong) => {  
  if(typeof +latLong === 'number'){
    return true;
  } else{
    return false;
  }
}
