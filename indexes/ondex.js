const bearBtn = document.getElementById('bearBtn');
const envelopeOverlay = document.getElementById('envelopeOverlay');
const closeLetter = document.getElementById('closeLetter');
const bearContainer = document.getElementById('bear-container');

const openEnvelope = () => {
    envelopeOverlay.classList.add('is-open');
    bearBtn.setAttribute('aria-pressed', 'true');
};

const closeEnvelope = () => {
    envelopeOverlay.classList.remove('is-open');
    bearBtn.setAttribute('aria-pressed', 'false');
};

bearBtn.addEventListener('click', () => {
    const isOpen = envelopeOverlay.classList.contains('is-open');
    isOpen ? closeEnvelope() : openEnvelope();
});

closeLetter.addEventListener('click', closeEnvelope);

envelopeOverlay.addEventListener('click', (event) => {
    if (event.target === envelopeOverlay) closeEnvelope();
});
let bearsStarted = false;

function createFloatingBear() {
    const bear = document.createElement("div");

    bear.className = "floating-bear";
    bear.textContent = "🐻";

    // Random position
    bear.style.left = Math.random() * 100 + "vw";

    // Random size
    bear.style.fontSize = Math.random() * 18 + 24 + "px";

    // Random speed
    const duration = Math.random() * 3 + 4;
    bear.style.animationDuration = duration + "s";

    // Random sideways movement
    bear.style.setProperty(
        "--drift",
        Math.random() * 160 - 80 + "px"
    );

    // Random rotation
    bear.style.setProperty(
        "--rotation",
        Math.random() * 40 - 20 + "deg"
    );

    bearContainer.appendChild(bear);

    // Remove after animation
    setTimeout(() => {
        bear.remove();
    }, duration * 1000);
}

function startBearAnimation() {
    if (bearsStarted) return;

    bearsStarted = true;

    // Spawn a bunch when clicked
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            createFloatingBear();
        }, i * 120);
    }

    // Continue spawning
    setInterval(() => {
        createFloatingBear();
    }, 500);
}

// Your existing bear button
bearBtn.addEventListener("click", () => {
    startBearAnimation();
});