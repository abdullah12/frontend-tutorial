  const ul = document.getElementById('authors'); // Get the list where we will place our authors
  const url = 'https://randomuser.me/api/?results=10'; // Get 10 random users
  
  fetch(url)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
        // Create and append the li's to the ul
        let authors = data.results ;
    })
 