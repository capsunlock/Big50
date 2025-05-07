function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}
// switching of home background
const images = [
  'url("images/top-img.png")',
  'url("images/top-img2.png")'
];

let current = 0;
const section = document.getElementById('home');

function switchBackground() {
  section.style.backgroundImage = images[current];
  current = (current + 1) % images.length
}

//initial background
switchBackground();

// change every 5 seconds
setInterval(switchBackground, 15000);

// Smooth scrolling for menu links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    // Close menu on mobile view
    document.getElementById('navLinks').classList.remove('active');
  });
});

// Popup with call link
function showPopup() {
  document.getElementById("popup").style.display = "flex";
}

function handleOutsideClick(event) {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
}