const countEl = document.getElementById("count")

updateVisitCount()

function updateVisitCount() {
    fetch("https://api.countapi.xyz/update/visitcounter/cantcode?amount=1")
        .then(response => response.json())
        .then(response => {
            countEl.innerHTML = response.value
        })
}