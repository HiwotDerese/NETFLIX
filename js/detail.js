
const API_KEY = 'api_key=c1cd2833b1ed62c295469590abfceb40';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL =  BASE_URL + '/discover/movie?sort_by=popularity.desc&' 
+ API_KEY;


// const API_URL =  BASE_URL + '/genre/movie/list?' + API_KEY; 

const IMG_URL = 'https://image.tmdb.org/t/p/w500'; 

const withImg = document.getElementById('withImg');


getMovies(API_URL);

function getMovies(url){

    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data.results);
    })
}

function showMovies(data){
    const{poster_path} = withImg;
    // data.poster_path({
    //     document.body.style.backgroundImage = `url('${IMG_URL + poster_path}')`;
    // })
    
    // withImg.append(backgroundImage);
    // main.innerHTML = '';

    withImg.body.style.backgroundImage = `url(${IMG_URL + poster_path})`;

    // data.forEach(withImg => {
        // withImg.body.style.backgroundImage = `url(${IMG_URL + poster_path})`;
        // background-image: url(../images/breaking-bad.jpg); 

        
    // });

}




