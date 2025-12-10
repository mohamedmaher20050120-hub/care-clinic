// ===== التحكم في التنقل بين الصفحات =====
const sidebarBtns = document.querySelectorAll('.sidebar button');
const pages = document.querySelectorAll('.page');

sidebarBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // إزالة تفعيل الكل
        sidebarBtns.forEach(b => b.classList.remove('active'));
        pages.forEach(p => p.classList.remove('active'));

        // تفعيل الزر والصفحة المختارة
        btn.classList.add('active');
        const pageId = btn.dataset.page;
        document.getElementById(pageId).classList.add('active');
    });
});

// تفعيل الصفحة الافتراضية عند التحميل
if(pages.length > 0){
    pages[0].classList.add('active');
    sidebarBtns[0].classList.add('active');
}

// ===== زر Dark Mode =====
const darkBtn = document.getElementById('darkToggle');
darkBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    darkBtn.innerHTML = document.body.classList.contains('dark')
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
    updateDarkModeCharts();
});

// ===== إعداد Chart.js للقياسات الحيوية =====
const ctx = document.getElementById('vitalChart').getContext('2d');
window.vitalChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['08:00','12:00','16:00','20:00','24:00'],
        datasets: [
            {
                label: 'نبض القلب (bpm)',
                data: [72, 75, 70, 73, 71],
                borderColor:'#ff3860',
                backgroundColor:'rgba(255,56,96,0.2)',
                tension:0.4,
                fill:true
            },
            {
                label: 'درجة الحرارة (°C)',
                data: [36.8,37,37.2,37,36.9],
                borderColor:'#0096c7',
                backgroundColor:'rgba(0,150,199,0.2)',
                tension:0.4,
                fill:true
            },
            {
                label: 'معدل الأكسجين (%)',
                data: [98,97,99,98,98],
                borderColor:'#00b4d8',
                backgroundColor:'rgba(0,180,216,0.2)',
                tension:0.4,
                fill:true
            }
        ]
    },
    options:{
        responsive:true,
        plugins:{
            legend:{
                labels:{
                    color: document.body.classList.contains('dark') ? 'white':'#003d5c'
                }
            }
        },
        scales:{
            y:{
                beginAtZero:false,
                ticks:{
                    color: document.body.classList.contains('dark') ? 'white':'#003d5c'
                }
            },
            x:{
                ticks:{
                    color: document.body.classList.contains('dark') ? 'white':'#003d5c'
                }
            }
        }
    }
});

// ===== تحديث ألوان الرسم البياني عند تفعيل Dark Mode =====
function updateDarkModeCharts(){
    if(window.vitalChart){
        vitalChart.options.plugins.legend.labels.color = document.body.classList.contains('dark') ? 'white':'#003d5c';
        vitalChart.options.scales.x.ticks.color = document.body.classList.contains('dark') ? 'white':'#003d5c';
        vitalChart.options.scales.y.ticks.color = document.body.classList.contains('dark') ? 'white':'#003d5c';
        vitalChart.update();
    }
}

// ===== مثال: تحديث البيانات ديناميكياً (اختياري) =====
// يمكنك استخدام هذا لتحديث القياسات الحيوية تلقائياً كل فترة زمنية
function updateVitalsData(heart, temp, spo2) {
    vitalChart.data.datasets[0].data.push(heart);
    vitalChart.data.datasets[1].data.push(temp);
    vitalChart.data.datasets[2].data.push(spo2);

    // إزالة أول قيمة للحفاظ على طول الرسم ثابت
    if(vitalChart.data.labels.length >= 10){
        vitalChart.data.labels.shift();
        vitalChart.data.datasets.forEach(d => d.data.shift());
    }

  
}
