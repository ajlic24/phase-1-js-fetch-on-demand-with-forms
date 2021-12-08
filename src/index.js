const init = () => {
  document.querySelector(`#button`).addEventListener(`click`, (e) => {
      e.preventDefault()
      const input = document.querySelector(`#searchByID`).value

      fetch(`http://localhost:3000/movies/${input}`)
      .then(resp => resp.json())
      .then(data => {
        const title = document.querySelector(`#movieDetails h4`)
        const summary = document.querySelector(`#movieDetails p`)
        title.textContent = data.title
        summary.textContent = data.summary
      })
  })
}

document.addEventListener('DOMContentLoaded', init);

init()