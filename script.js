// Scroll fade-in effect
const fadeInElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
    fadeInElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', fadeInOnScroll);
fadeInOnScroll();  // Trigger on page load to show elements in view

// Loader functionality
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden');

    // Hide loader after the transition
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500); // Match this duration with the CSS transition duration

    // Start typing effect for introduction text immediately after the page loads
    typingEffectIntro(); // Start typing effect for the intro text
});

// Modal functionality
function openModal(project) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    if (project === 'infinum') {
        modalContent.src = 'https://infinum.com/'; // Link to the project page
    } else if (project === 'putinity') {
        modalContent.src = 'https://putinity.netlify.app/'; // Link to the project page
    }

    modal.style.display = 'block'; // Show the modal
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Hide the modal
}

// Close modal on clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
};

// Typing effect for introduction text
const introText = "Hello! I am Duje, a passionate web developer with experience in HTML, CSS, JavaScript, PHP, and XML.";
const introElement = document.createElement('p');
introElement.classList.add('intro-text');

document.querySelector('#profile .container').appendChild(introElement);

let introIndex = 0;
const typingEffectIntro = () => {
    if (introIndex < introText.length) {
        introElement.textContent += introText.charAt(introIndex);
        introIndex++;
        setTimeout(typingEffectIntro, 100); // Adjust typing speed here
    }
};
