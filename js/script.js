 async function fetchAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .catch(err => console.log(`An error occured ${err}`))
    return response.slip
}

document.addEventListener('DOMContentLoaded', async ()=> {
    const advice = await fetchAdvice()
    document.getElementById('advice__id').textContent = advice.id
    document.querySelector('.advice__message').textContent = advice.advice
})

document.querySelector('.advice__button').addEventListener('click', async () => {
    const advice = await fetchAdvice()
    document.getElementById('advice__id').textContent = advice.id
    document.querySelector('.advice__message').textContent = advice.advice
})