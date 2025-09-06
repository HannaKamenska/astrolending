 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/script.js b/script.js
index a4ace13e20dafd3820b72ab7173faef8d401ce2d..2ba3f7eb8262fc15397679369849e303bc9a0e0e 100644
--- a/script.js
+++ b/script.js
@@ -1,60 +1,66 @@
 /*
  * Главный скрипт для сайта Life in Astro.
  * Реализует смену языка, вывод карточек услуг, работу квиза и навигации.
  */
 
+// Google Analytics placeholder: replace 'G-XXXXXXXXXX' with your GA measurement ID
+// window.dataLayer = window.dataLayer || [];
+// function gtag(){dataLayer.push(arguments);}
+// gtag('js', new Date());
+// gtag('config', 'G-XXXXXXXXXX');
+
 document.addEventListener('DOMContentLoaded', () => {
   // Установка текущего года в футере
   const yearSpan = document.getElementById('year');
   if (yearSpan) {
     yearSpan.textContent = new Date().getFullYear();
   }
 
   // Инициализация навигации для мобильных устройств
   const menuToggle = document.querySelector('.menu-toggle');
   const navList = document.querySelector('.nav-list');
   if (menuToggle) {
     menuToggle.addEventListener('click', () => {
       const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
       menuToggle.setAttribute('aria-expanded', (!expanded).toString());
       navList.classList.toggle('show');
     });
   }
 
   // Переключение языков
   const langButtons = document.querySelectorAll('.lang-btn');
   langButtons.forEach(btn => {
     btn.addEventListener('click', () => {
       langButtons.forEach(b => b.classList.remove('active'));
       btn.classList.add('active');
       const lang = btn.getAttribute('lang');
       setLanguage(lang);
     });
   });
 
-  // Инициализация сервиса и квиза после установки языка
+  // Инициализация услуг и квиза после установки языка
   setLanguage('ru');
 
   // Квиз обработчик
   const quizForm = document.getElementById('astro-quiz');
   if (quizForm) {
     quizForm.addEventListener('submit', (e) => {
       e.preventDefault();
       const formData = new FormData(quizForm);
       const answers = { A: 0, B: 0, C: 0 };
       for (const [key, value] of formData.entries()) {
         answers[value]++;
       }
       // Определяем преобладающий ответ
       let topAnswer = 'A';
       let max = 0;
       for (const letter in answers) {
         if (answers[letter] > max) {
           max = answers[letter];
           topAnswer = letter;
         }
       }
       // Вывод результата
       const resultData = quizResults[currentLang][topAnswer];
       const resultContainer = document.getElementById('quiz-result');
       if (resultContainer && resultData) {
diff --git a/script.js b/script.js
index a4ace13e20dafd3820b72ab7173faef8d401ce2d..2ba3f7eb8262fc15397679369849e303bc9a0e0e 100644
--- a/script.js
+++ b/script.js
@@ -336,26 +342,31 @@ function renderServices() {
     // Цена
     const price = document.createElement('p');
     price.className = 'service-price';
     price.textContent = service.price[currentLang];
     card.appendChild(price);
     // Кнопки
     const actions = document.createElement('div');
     actions.className = 'service-actions';
     const detailsBtn = document.createElement('a');
     detailsBtn.href = '#';
     detailsBtn.className = 'details';
     detailsBtn.textContent = currentLang === 'ru' ? 'Подробнее' : 'More info';
     detailsBtn.setAttribute('aria-label', `${service.title[currentLang]} ${currentLang === 'ru' ? 'подробнее' : 'details'}`);
     const bookBtn = document.createElement('a');
     bookBtn.href = 'https://forms.gle/uXqtAvbuG2G3pk5z7';
     bookBtn.target = '_blank';
     bookBtn.rel = 'noopener';
     bookBtn.className = 'book';
     bookBtn.textContent = currentLang === 'ru' ? 'Записаться' : 'Book';
     bookBtn.setAttribute('aria-label', `${service.title[currentLang]} ${currentLang === 'ru' ? 'записаться' : 'book'}`);
     actions.appendChild(detailsBtn);
     actions.appendChild(bookBtn);
     card.appendChild(actions);
     container.appendChild(card);
   });
-}
+}
+
+// Экспорт для тестирования
+if (typeof module !== 'undefined') {
+  module.exports = { setLanguage, renderServices, translations, services };
+}
 
EOF
)
