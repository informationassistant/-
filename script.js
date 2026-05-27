// Пример базы данных
const data = [
    { class: 5, title: "Алгоритм", desc: "Пошаговая инструкция для решения задачи." },
    { class: 5, title: "Бит", desc: "Самая маленькая единица информации." },
    { class: 6, title: "Граф", desc: "Набор точек (вершин), соединенных линиями." },
    { class: 11, title: "Нейросеть", desc: "Математическая модель, работающая по принципу мозга." }
];

const grid = document.getElementById('terms-grid');
const themeToggle = document.getElementById('theme-toggle');

// Переключение темы
themeToggle.onclick = () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
};

// Функция отрисовки терминов
function filterByClass(grade) {
    const filtered = data
        .filter(item => item.class === grade)
        .sort((a, b) => a.title.localeCompare(b.title));

    grid.innerHTML = '';

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'term-card';
        card.innerHTML = `
            <span class="letter">${item.title[0]}</span>
            <h3>${item.title}</h3>
        `;
        card.onclick = () => showModal(item);
        grid.appendChild(card);
    });
}

// Модальное окно
function showModal(item) {
    const modal = document.getElementById('modal');
    document.getElementById('modal-title').innerText = item.title;
    document.getElementById('modal-description').innerText = item.desc;
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Показать термины 5 класса при загрузке
filterByClass(5);
