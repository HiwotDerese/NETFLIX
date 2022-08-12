

const API_KEY = 'api_key=c1cd2833b1ed62c295469590abfceb40';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL =  BASE_URL + '/discover/movie?sort_by=popularity.desc&' 
+ API_KEY;


// const API_URL =  BASE_URL + '/genre/movie/list?' + API_KEY; 

const IMG_URL = 'https://image.tmdb.org/t/p/w500'; 

const main = document.getElementById('main');


getMovies(API_URL);

function getMovies(url){

    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMovies(data.results);
    })
}

function showMovies(data){
    main.innerHTML = '';

    data.forEach(movie => {
        //         const{poster_path} = posimg;
        const{poster_path} = movie;
        const movieEl = document.createElement('a');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src="${IMG_URL + poster_path}" alt="img">
        
        `
        movieEl.href = "./html/detail-page.html";
        main.appendChild(movieEl);
        
    });

}



















// const posters = document.getElementById('posters');

// getMovies(API_URL);

// function getMovies(url){
//     fetch(url).then(res => res.json()).then(data =>{
//         console.log(data.results);
//         // showMovies(data.results);
//     })
// }


// function showMovies(data){
//     posters.innerHTML = '';

//     data.forEach(posimg => {
//         const{poster_path} = posimg;
//         const posimgEl = document.createElement('div');
//         posimgEl.classList.add('posimg');
//         posimgEl.innerHTML = `<img src="${IMG_URL + poster_path}" alt="the i-land">`

//         posters.appendChild()
        
//     })
// }