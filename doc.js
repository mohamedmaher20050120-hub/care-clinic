// تنقل بين الأقسام
function show(id){
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// بيانات الأيام للسنة (مثال صغير يمكن توسعة لكل الأيام)
const data = {
  '2025-01-01': {حجزات:10, كشوفات:6, استشارات:4, مبلغ:'900 ج'},
  '2025-01-02': {حجزات:12, كشوفات:7, استشارات:5, مبلغ:'1,050 ج'},
  '2025-01-03': {حجزات:8, كشوفات:5, استشارات:3, مبلغ:'720 ج'}
};

// عرض تفاصيل اليوم عند اختيار التاريخ
document.getElementById('day-picker').addEventListener('change', function(){
  const selected = this.value; // yyyy-mm-dd
  const info = data[selected];
  const details = document.getElementById('day-details');
  if(info){
    document.getElementById('day-date').innerText = `التاريخ: ${selected}`;
    document.getElementById('day-info').innerText = 
      `عدد الحجزات: ${info.حجزات}\nعدد الكشوفات: ${info.كشوفات}\nعدد الاستشارات: ${info.استشارات}\nالمبلغ النهائي: ${info.مبلغ}`;
    details.style.display = 'block';
  } else {
    details.style.display = 'none';
  }
});
// زر Dark Mode
document.getElementById('dark-toggle').addEventListener('click', function(){
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')){
    this.innerText = '☀️ ';
  } else {
    this.innerText = '🌙 ';
  }
});
