// Funció per carregar el header
function loadHeader() {
    fetch('header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error carregant el header');
            }
            return response.text();
        })
        .then(data => {
            console.log('Header carregat correctament'); // Depuració
            document.body.insertAdjacentHTML('afterbegin', data);
            addSectionAnimations();
        })
        .catch(error => console.error('Error carregant el header:', error));
}

// Funció per carregar el footer
function loadFooter() {
    fetch('footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error carregant el footer');
            }
            return response.text();
        })
        .then(data => {
            console.log('Footer carregat correctament'); // Depuració
            document.body.insertAdjacentHTML('beforeend', data);
        })
        .catch(error => console.error('Error carregant el footer:', error));
}

// Funció per afegir animacions a les seccions
function addSectionAnimations() {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Carrega el header i el footer quan la pàgina s'hagi carregat
document.addEventListener("DOMContentLoaded", function() {
    loadHeader();
    loadFooter();
});
