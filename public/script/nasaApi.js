
const getNasaApiData = async(lat, long) => {
  const API_NASA = 'IZLFYzNHo0wNWbflY6H8XSbbmUEdu8GMJkVXYfLd';
  const url = `https://api.nasa.gov/planetary/earth/imagery?lon=${long}&lat=${lat}&date=2021-01-01&dim=0.25&api_key=${API_NASA}`;
  
  fetch(url, {
   headers: {
       Authorization: 'Bearer EqFyi1Yq1tD9mxY8F38sxDfp73pFd7FP'
   } 
})
.then((response) => response.blob())
.then((blob) => {
    const imageUrl = URL.createObjectURL(blob);
    console.log(imageUrl)
    const img = document.querySelector('img');
    img.addEventListener('load', () => URL.revokeObjectURL(imageUrl));
    document.querySelector('img').src = imageUrl;
    console.log(imageUrl)
    //return imageUrl;
});
  
  //return base64data;
}

export {  getNasaApiData };

