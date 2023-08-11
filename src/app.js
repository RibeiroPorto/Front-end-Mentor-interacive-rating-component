document.addEventListener("DOMContentLoaded", () => {
    const votes = document.querySelectorAll('.vote')
    const buttonSbumit = document.querySelector('#submit')
    const mainDivs = document.querySelectorAll('.main')
    const displayVote = document.querySelector("#voted")
    selected = undefined
    votes.forEach(vote => vote.addEventListener("click", (e) => {
        selected = e.target.getAttribute('id')
        hilightSelected(selected)
    }))

    let hilightSelected = (selectedId) => {
        votes.forEach(vote => {

            if (vote.getAttribute('id') === selectedId) {
                vote.classList.add('selected')

            } else {
                vote.classList.remove('selected')
            }

        })
    }
    buttonSbumit.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(selected)
        if (selected === undefined) {
            alert('Please select an option.')
        } else {
            mainDivs[0].classList.add('hiden')
            displayVote.textContent = selected
            mainDivs[1].classList.remove('hiden')
        }
    })


})