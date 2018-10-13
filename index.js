
function getDataFromApi(searchTerm, callback){
  let endPoint= `https://dog.ceo/api/breed/${searchTerm}/images/random`;
  $.getJSON(endPoint, callback);
}


function displaySearchData(data) {
  let results = `
    <img src="${data.message}">
  `;
  $('.js-search-results').html(results).prop('hidden', false);
}

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    let queryTarget = $(event.currentTarget).find('.js-query');
    let query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    getDataFromApi(query, displaySearchData);
  });
}

$(watchSubmit);
