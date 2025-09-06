const EVENT_ISO = '2025-09-18T15:00:00+05:30';
const eventDate = new Date(EVENT_ISO);
document.getElementById('eventDateText').textContent =
    eventDate.toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });
document.getElementById('year').textContent = new Date().getFullYear();

function updateCountdown() {
    const now = new Date();
    const diff = Math.max(0, eventDate - now);
    const sec = Math.floor(diff / 1000);
    const d = Math.floor(sec / 86400);
    const h = Math.floor((sec % 86400) / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;

    updateBox("d", d);
    updateBox("h", String(h).padStart(2, '0'));
    updateBox("m", String(m).padStart(2, '0'));
    updateBox("s", String(s).padStart(2, '0'));
}

function updateBox(id, value) {
    const el = document.getElementById(id);
    if (el.textContent !== String(value)) {
        el.textContent = value;
        el.classList.add("updated");
        setTimeout(() => el.classList.remove("updated"), 300);
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Fade-in on scroll
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));