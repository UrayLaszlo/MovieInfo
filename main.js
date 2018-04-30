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
    })
    .catch((err) => {
      console.log(err);
    });

}
