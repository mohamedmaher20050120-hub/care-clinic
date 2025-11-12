// تفعيل الوضع الليلي
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeIcon = document.getElementById('darkModeIcon');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    } else {
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
    }
    // إضافة حدود عند الضغط على أي عنصر
document.addEventListener('click', (event) => {
    // إزالة الحدود من جميع العناصر
    document.querySelectorAll('.active-border').forEach((el) => {
        el.classList.remove('active-border');
    });

    // إضافة حدود للعنصر الذي تم الضغط عليه
    event.target.classList.add('active-border');
});

// إضافة CSS للحدود الديناميكية
const style = document.createElement('style');
style.innerHTML = `
    .active-border {
        outline: 2px solid #007bff !important; /* لون الحدود */
        outline-offset: 2px; /* مسافة الحدود عن العنصر */
        border-radius: 5px; /* زوايا دائرية للحدود */
    }
`;
document.head.appendChild(style);
});