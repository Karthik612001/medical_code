// Medicine Live Search Filter
function searchMedicine() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const cards = document.querySelectorAll('.medicine-card');

    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        if (title.includes(input)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// Contact Form Handler
function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('userName').value;
    alert(`Nandri, ${name}! Unga message vetrigaramaaga submit aagiruchu.`);
    event.target.reset();
}