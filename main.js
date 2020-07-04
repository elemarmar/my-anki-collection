// Array all nav links
const navLinks = document.querySelectorAll('.nav-link');

// Array with all cards
const allCards = document.querySelectorAll('.card-item');

// Array with all related cards
const languages = document.querySelectorAll('.languages');
const german = document.querySelectorAll('.german');
const polish = document.querySelectorAll('.polish');
const other =  document.querySelectorAll('.other');

// Add event listeners to nav links
for (const navlink of navLinks) {
    navlink.addEventListener('click', function(event) {

        // Filter results
        if (event.target === navLinks[0]) {
            // Show all
            for (const card of allCards) {
                card.classList.remove('hidden');
            }

        } else if (event.target === navLinks[1]) {
            // Show languages
            for (const card of allCards) {
                card.classList.add('hidden');
            }
            for (const card of languages) {
                card.classList.remove('hidden');
            }
        } else if (event.target === navLinks[2]) {
            // Show german
            for (const card of allCards) {
                card.classList.add('hidden');
            }
            for (const card of german) {
                card.classList.remove('hidden');
            }

        } else if (event.target === navLinks[3]) {
            // Show Polish
            for (const card of allCards) {
                card.classList.add('hidden');
            }
            for (const card of polish) {
                card.classList.remove('hidden');
            }

        } else if (event.target === navLinks[4]) {
            // Ahoq orhwe
            for (const card of allCards) {
                card.classList.add('hidden');
            }
            for (const card of other) {
                card.classList.remove('hidden');
            }
        }


    })
}