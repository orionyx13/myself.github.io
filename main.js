// 1. Inisialisasi AOS (Animate on Scroll)
AOS.init({ duration: 1000 });

// 2. Fungsi Panggil Navbar Otomatis
document.addEventListener("DOMContentLoaded", function() {
    const navPlaceholder = document.getElementById('navbar-placeholder');
    if (navPlaceholder) {
        fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                navPlaceholder.innerHTML = data;
            });
    }
});

// 3. Efek Mengetik (Typing Effect)
const typingText = "Penggosip • Random • Gak Jelas";
let charIndex = 0;
function typeEffect() {
    const element = document.getElementById("typing");
    if (element && charIndex < typingText.length) {
        element.innerHTML += typingText.charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 70);
    }
}
typeEffect();

// 4. Kontrol Musik (Gunakan di music.html)
function togglePlay(btn) {
    const card = btn.closest('.music-card');
    const audio = card.querySelector('audio');
    const icon = btn.querySelector('i');

    if (audio.paused) {
        // Matikan lagu lain yang sedang menyala
        document.querySelectorAll('audio').forEach(a => {
            a.pause();
            const otherBtnIcon = a.closest('.music-card').querySelector('.play-btn i');
            if (otherBtnIcon) otherBtnIcon.className = 'fas fa-play';
        });
        audio.play();
        icon.className = 'fas fa-pause';
    } else {
        audio.pause();
        icon.className = 'fas fa-play';
    }
}

function replay(btn) {
    const audio = btn.closest('.music-card').querySelector('audio');
    audio.currentTime = 0;
    audio.play();
    const playIcon = btn.closest('.music-card').querySelector('.play-btn i');
    if (playIcon) playIcon.className = 'fas fa-pause';
}

function skip10(btn) {
    const audio = btn.closest('.music-card').querySelector('audio');
    audio.currentTime += 10;
}

