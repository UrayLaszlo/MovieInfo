$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = ($('#searchText').val());
    getMovies(searchText);
    e.preventDefault();
  })
});

function getMovies(searchText) {
  axios.get('https://api.themoviedb.org/3/search/movie?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=en-US&query='
    + searchText)
    .then((response) => {
      console.log(response);
      let movies = response.data.Search;
      let output = '';
      s.each(movies, (index. movie) =>{
      output += `
        <div class="col-md-3">
          <div class="well text-center">
            <img src="${movie.Poster}">
            <h5>${movies.Title}</h5>
            <a onclick="movieSelected(''${movie.imdvID}')" class='btn btn-primary' href="#">Movie Details</a>
          </div>
        </div>
      `;
    });

    
    .catch((err) => {
      console.log(err);
    });

}
