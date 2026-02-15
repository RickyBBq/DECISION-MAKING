const decisions = [
    "EXECUTE NOW",
    "REBOOT LOGIC",
    "PROCEED WITH CAUTION",
    "SYSTEM SAYS YES",
    "SIGNAL UNCLEAR",
    "ABORT MISSION",
    "UPGRADE PLANNED",
    "THE STARS ALIGN"
];

const statusLines = [
    "SCANNING BIOMETRICS...",
    "CALCULATING PROBABILITY...",
    "ACCESSING NEURAL NET...",
    "DECRYPTING FATE..."
];

function askThePulse() {
    const orb = document.querySelector('.orb-wrapper');
    const statusText = document.getElementById('status-text');
    const decisionText = document.getElementById('decision-text');

    // Add burst animation
    orb.classList.remove('burst');
    void orb.offsetWidth; // Trigger reflow
    orb.classList.add('burst');

    // Change status
    statusText.innerText = statusLines[Math.floor(Math.random() * statusLines.length)];
    
    // Pick decision
    decisionText.style.opacity = "0";
    
    setTimeout(() => {
        decisionText.innerText = decisions[Math.floor(Math.random() * decisions.length)];
        decisionText.style.opacity = "1";
        decisionText.style.color = Math.random() > 0.5 ? "#00f2ff" : "#7000ff";
    }, 300);
}

// Interactive background parallax
document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    document.querySelector('.orb-wrapper').style.transform = 
        `translate(${(x - 0.5) * 30}px, ${(y - 0.5) * 30}px)`;
});
