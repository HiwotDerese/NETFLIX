

const API_KEY = 'api_key=c1cd2833b1ed62c295469590abfceb40';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL =  BASE_URL + '/discover/movie?sort_by=popularity.desc&' 
+ API_KEY;
// const API_URL =  BASE_URL + '/genre/movie/list?' + API_KEY; 

const IMG_URL = 'https://image.tmdb.org/t/p/w500'; 

const genres = [
        {
            "id":28,
            "name":"Action"
        },
        {
            "id":12,
            "name":"Adventure"
        },
        {
            "id":16,
            "name":"Animation"
        },
        {
            "id":35,
            "name":"Comedy"
        },
        {
            "id":80,
            "name":"Crime"
        },
        {
            "id":99,
            "name":"Documentary"
        },
        {
            "id":18,
            "name":"Drama"
        },
        {
            "id":10751,
            "name":"Family"
        },
        {
            "id":14,
            "name":"Fantasy"
        },
        {
            "id":36,
            "name":"History"
        },
        {
            "id":27,
            "name":"Horror"
        },
        {
            "id":10402,
            "name":"Music"
        },
        {
            "id":9648,
            "name":"Mystery"
        },
        {
            "id":10749,
            "name":"Romance"
        },
        {
            "id":878,
            "name":"Science Fiction"
        },
        {
            "id":10770,
            "name":"TV Movie"
        },
        {
            "id":53,
            "name":"Thriller"
        },
        {
            "id":10752,
            "name":"War"
        },
        {
            "id":37,
            "name":"Western"
        }
    ]
     


const main = document.getElementById('main');
const tagsEl = document.getElementById('tags')
// const main2 = document.getElementById('main2');
// const tags2El = document.getElementById('tags2');
// let popup = document.getElementById('popup');


function openPopup(){
    popup.classList.add('open-popup');
}

function closePopup(){
    popup.classList.remove('open-popup');
}






setGenre();
function setGenre(){
    genres.forEach(genre => {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c1cd2833b1ed62c295469590abfceb40&with_genres=12`).then(res => res.json()).then(data => {
            console.log(data.results)
            const box = document.createElement('div');
            box.classList.add('genre')
            const title = document.createElement('div');
            title.classList.add('genre_name')
            box.appendChild(title)
            title.innerHTML = genre.name;
            const images = document.createElement('div');
            box.appendChild(images); 
            const imgLink = document.createElement('a');
            images.appendChild(imgLink);
            // images.innerHTML = '';
            // images.appendChild(img)
            
            
            

            data.results.forEach((id_data)=>{
                if(id_data.genre_ids.includes(genre.id)){
                    console.log(id_data.poster_path,genre.id);
              
                    const image_url=`${IMG_URL + id_data.poster_path}`
                    console.log(image_url,"uuuuuuuuuuuuuuuuuuuuuuuuuu");
                    const img = document.createElement('img');
                    img.setAttribute('src', image_url);
                    imgLink.setAttribute('id', 'box')
                    imgLink.appendChild(img);
                    imgLink.setAttribute('href','./html/detail-page.html')
                    // img.setAttribute('href', './css/detail.css')
                    // box.setAttribute('id','box');
                    images.setAttribute('id','box');
                    images.appendChild(imgLink);
                    tagsEl.appendChild(box);
                    
                }
            }
            )  
        })
    })
}


