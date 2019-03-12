import $ from 'jquery';

export function sanity() {
  const apiKey = `e9ddb24aed6d48c4342303aba5269e28`;
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
  const imgUrl = `http://image.tmdb.org/t/p/w300/`;

  function getMovieData(movietitle) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: ` ${apiUrl}${movietitle}`,
        method: 'get',
        success: moviedata => {
          resolve(moviedata.results);
        },
        error: errorMsg => {
          reject(errorMsg.responseJSON.status_message);
        }
      });
    });
  }

  document.getElementById('movie-form').addEventListener('submit', event => {
    event.preventDefault();
    // get value from the input box
    const movieTitle = Array.from(document.getElementsByClassName('movie-title'));
    const moviePromise= movieTitle.map((data) => {
              return getMovieData(data.value)
    }) ;
    // run AJAX call to retrive titles

    Promise.all(moviePromise).then((data) => {
        data.forEach((data) =>{
        document.getElementById('movies').innerHTML += `<img src='${imgUrl}${data[0].poster_path}'/>`
        })

    });

  });
}
