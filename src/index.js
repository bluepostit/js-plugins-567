const API_KEY = "48727053"

const searchMovies = (keyword) => {
  const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${keyword}`
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      const list = document.querySelector("#results")
      // Clear contents of list!
      list.innerHTML = ""
      data.Search.forEach((result) => {
        const movieHTML = `
          <li class="list-inline-item">
            <img src="${result.Poster}" alt="poster">
            <p>${result.Title}</p>
          </li>
        `
        list.insertAdjacentHTML("beforeend", movieHTML)
      })
    })
}

// Setup the form to trigger a search!
const form = document.querySelector("#search-movies")
form.addEventListener("submit", (event) => {
  // Prevent regular behavior of a form submit
  event.preventDefault()
  const keyword = event.currentTarget.querySelector("input").value
  searchMovies(keyword)
})
