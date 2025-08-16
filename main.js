// Renderizado básico y PWA

document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  renderFeatures();
  renderClubs();
  renderEvents();
  registerSW();
});

function renderStats() {
  const container = document.getElementById('stats');
  if (!container) return;
  const entries = [
    ['Usuarios activos', stats.usuarios],
    ['Eventos hoy', stats.eventosHoy],
    ['Coins hoy', stats.coinsHoy],
    ['Ciudades activas', stats.ciudades],
    ['Emergencias prevenidas', stats.emergencias]
  ];
  entries.forEach(([label, value]) => {
    const div = document.createElement('div');
    div.innerHTML = `<strong>${value}</strong><br>${label}`;
    container.appendChild(div);
  });
}

function renderFeatures() {
  const list = document.getElementById('features-list');
  if (!list) return;
  features.forEach(f => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${f.titulo}</h3><p>${f.texto}</p>`;
    list.appendChild(card);
  });
}

function renderClubs() {
  const cards = document.getElementById('club-cards');
  if (!cards) return;
  clubs.forEach(c => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<img src="${c.img}" alt="${c.nombre}" style="width:100%;height:150px;object-fit:cover;"/>`+
      `<h3>${c.nombre}</h3><p>${c.ciudad} – ${c.musica}</p><p>${c.precio}</p>`;
    cards.appendChild(card);
  });
}

function renderEvents() {
  const list = document.getElementById('event-list');
  if (!list) return;
  events.forEach(e => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${e.nombre}</h3><p>${e.club}</p><p>${e.fecha}</p><p>${e.precio}</p>`;
    list.appendChild(card);
  });
}

function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
  }
}

// Simulación voice UI
function heyBeParty(command) {
  if (command.toLowerCase().includes('coin')) {
    alert('Has ganado 10 Coins!');
  }
}
