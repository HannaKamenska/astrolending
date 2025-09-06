 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/script.js b/script.js
index 33e86c029f8c88768d0c26436e8971b633f87012..c19ac475907325378c4729ecaa069166a7690c2b 100644
--- a/script.js
+++ b/script.js
@@ -1,494 +1,372 @@
- (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
-diff --git a/script.js b/script.js
-index f4f5fa73fa7ce67ebb364d65971f3847cf1aa128..5714df3ef8ac662c597a48b97abfffb6f5e36fd8 100644
---- a/script.js
-+++ b/script.js
-@@ -1,113 +1,372 @@
-- (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
--diff --git a/script.js b/script.js
--index a4ace13e20dafd3820b72ab7173faef8d401ce2d..2ba3f7eb8262fc15397679369849e303bc9a0e0e 100644
----- a/script.js
--+++ b/script.js
--@@ -1,60 +1,66 @@
-- /*
--  * Главный скрипт для сайта Life in Astro.
--  * Реализует смену языка, вывод карточек услуг, работу квиза и навигации.
--  */
-- 
--+// Google Analytics placeholder: replace 'G-XXXXXXXXXX' with your GA measurement ID
--+// window.dataLayer = window.dataLayer || [];
--+// function gtag(){dataLayer.push(arguments);}
--+// gtag('js', new Date());
--+// gtag('config', 'G-XXXXXXXXXX');
--+
-- document.addEventListener('DOMContentLoaded', () => {
--   // Установка текущего года в футере
--   const yearSpan = document.getElementById('year');
--   if (yearSpan) {
--     yearSpan.textContent = new Date().getFullYear();
--   }
-- 
--   // Инициализация навигации для мобильных устройств
--   const menuToggle = document.querySelector('.menu-toggle');
--   const navList = document.querySelector('.nav-list');
--   if (menuToggle) {
--     menuToggle.addEventListener('click', () => {
--       const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
--       menuToggle.setAttribute('aria-expanded', (!expanded).toString());
--       navList.classList.toggle('show');
--     });
--   }
-- 
--   // Переключение языков
--   const langButtons = document.querySelectorAll('.lang-btn');
--   langButtons.forEach(btn => {
--     btn.addEventListener('click', () => {
--       langButtons.forEach(b => b.classList.remove('active'));
--       btn.classList.add('active');
--       const lang = btn.getAttribute('lang');
--       setLanguage(lang);
--     });
--   });
-- 
---  // Инициализация сервиса и квиза после установки языка
--+  // Инициализация услуг и квиза после установки языка
--   setLanguage('ru');
-- 
--   // Квиз обработчик
--   const quizForm = document.getElementById('astro-quiz');
--   if (quizForm) {
--     quizForm.addEventListener('submit', (e) => {
--       e.preventDefault();
--       const formData = new FormData(quizForm);
--       const answers = { A: 0, B: 0, C: 0 };
--       for (const [key, value] of formData.entries()) {
--         answers[value]++;
--       }
--       // Определяем преобладающий ответ
--       let topAnswer = 'A';
--       let max = 0;
--       for (const letter in answers) {
--         if (answers[letter] > max) {
--           max = answers[letter];
--           topAnswer = letter;
--         }
--       }
--       // Вывод результата
--       const resultData = quizResults[currentLang][topAnswer];
--       const resultContainer = document.getElementById('quiz-result');
--       if (resultContainer && resultData) {
--diff --git a/script.js b/script.js
--index a4ace13e20dafd3820b72ab7173faef8d401ce2d..2ba3f7eb8262fc15397679369849e303bc9a0e0e 100644
----- a/script.js
--+++ b/script.js
--@@ -336,26 +342,31 @@ function renderServices() {
--     // Цена
--     const price = document.createElement('p');
--     price.className = 'service-price';
--     price.textContent = service.price[currentLang];
--     card.appendChild(price);
--     // Кнопки
--     const actions = document.createElement('div');
--     actions.className = 'service-actions';
--     const detailsBtn = document.createElement('a');
--     detailsBtn.href = '#';
--     detailsBtn.className = 'details';
--     detailsBtn.textContent = currentLang === 'ru' ? 'Подробнее' : 'More info';
--     detailsBtn.setAttribute('aria-label', `${service.title[currentLang]} ${currentLang === 'ru' ? 'подробнее' : 'details'}`);
--     const bookBtn = document.createElement('a');
--     bookBtn.href = 'https://forms.gle/uXqtAvbuG2G3pk5z7';
--     bookBtn.target = '_blank';
--     bookBtn.rel = 'noopener';
--     bookBtn.className = 'book';
--     bookBtn.textContent = currentLang === 'ru' ? 'Записаться' : 'Book';
--     bookBtn.setAttribute('aria-label', `${service.title[currentLang]} ${currentLang === 'ru' ? 'записаться' : 'book'}`);
--     actions.appendChild(detailsBtn);
--     actions.appendChild(bookBtn);
--     card.appendChild(actions);
--     container.appendChild(card);
--   });
---}
--+}
--+
--+// Экспорт для тестирования
--+if (typeof module !== 'undefined') {
--+  module.exports = { setLanguage, renderServices, translations, services };
--+}
-- 
--EOF
--)
-+/*
-+ * Главный скрипт для сайта Life in Astro.
-+ * Реализует смену языка, вывод карточек услуг, работу квиза и навигации.
-+ */
-+
-+// Google Analytics placeholder: replace 'G-XXXXXXXXXX' with your GA measurement ID
-+// window.dataLayer = window.dataLayer || [];
-+// function gtag(){dataLayer.push(arguments);}
-+// gtag('js', new Date());
-+// gtag('config', 'G-XXXXXXXXXX');
-+
-+document.addEventListener('DOMContentLoaded', () => {
-+  // Установка текущего года в футере
-+  const yearSpan = document.getElementById('year');
-+  if (yearSpan) {
-+    yearSpan.textContent = new Date().getFullYear();
-+  }
-+
-+  // Инициализация навигации для мобильных устройств
-+  const menuToggle = document.querySelector('.menu-toggle');
-+  const navList = document.querySelector('.nav-list');
-+  if (menuToggle) {
-+    menuToggle.addEventListener('click', () => {
-+      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
-+      menuToggle.setAttribute('aria-expanded', (!expanded).toString());
-+      navList.classList.toggle('show');
-+    });
-+  }
-+
-+  // Переключение языков
-+  const langButtons = document.querySelectorAll('.lang-btn');
-+  langButtons.forEach(btn => {
-+    btn.addEventListener('click', () => {
-+      langButtons.forEach(b => b.classList.remove('active'));
-+      btn.classList.add('active');
-+      const lang = btn.getAttribute('lang');
-+      setLanguage(lang);
-+    });
-+  });
-+
-+  // Инициализация услуг и квиза после установки языка
-+  setLanguage('ru');
-+
-+  // Квиз обработчик
-+  const quizForm = document.getElementById('astro-quiz');
-+  if (quizForm) {
-+    quizForm.addEventListener('submit', (e) => {
-+      e.preventDefault();
-+      const formData = new FormData(quizForm);
-+      const answers = { A: 0, B: 0, C: 0 };
-+      for (const [key, value] of formData.entries()) {
-+        answers[value]++;
-+      }
-+      // Определяем преобладающий ответ
-+      let topAnswer = 'A';
-+      let max = 0;
-+      for (const letter in answers) {
-+        if (answers[letter] > max) {
-+          max = answers[letter];
-+          topAnswer = letter;
-+        }
-+      }
-+      // Вывод результата
-+      const resultData = quizResults[currentLang][topAnswer];
-+      const resultContainer = document.getElementById('quiz-result');
-+      if (resultContainer && resultData) {
-+        resultContainer.innerHTML = `<p>${resultData.message}</p>` +
-+          `<p><strong>${resultData.title}</strong></p>` +
-+          `<p><a href="https://forms.gle/uXqtAvbuG2G3pk5z7" class="btn book" target="_blank" rel="noopener">${translations[currentLang].quizBookCTA}</a></p>`;
-+      }
-+      quizForm.reset();
-+    });
-+  }
-+});
-+
-+// Переменные глобального состояния
-+let currentLang = 'ru';
-+
-+// Словарь переводов. Каждое значение представляет строку для определённого ключа в соответствующем языке.
-+const translations = {
-+  ru: {
-+    // Навигация
-+    navServices: 'Услуги',
-+    navQuiz: 'Квиз',
-+    navAbout: 'Обо мне',
-+    navTestimonials: 'Отзывы',
-+    navBlog: 'Блог',
-+    navContact: 'Контакты',
-+    // Hero
-+    heroTitle: 'Астрология и психология для самопознания',
-+    heroSubtitle: 'Преобразите свою жизнь и бизнес благодаря астрологическим инсайтам.',
-+    heroCTA: 'Записаться',
-+    // Services
-+    servicesTitle: 'Консультации',
-+    servicesIntro: 'Выберите консультацию, которая подходит именно вам. Мы предлагаем классические астрологические услуги и уникальные индивидуальные форматы.',
-+    // Quiz
-+    quizTitle: 'Квиз: Что говорит о вас ваша Луна?',
-+    quizIntro: 'Ответьте на несколько простых вопросов, чтобы узнать, какую консультацию стоит выбрать.',
-+    quizDescription: 'Этот тест поможет понять, как Луна влияет на ваши качества и потребности.',
-+    quizQ1: 'Как вы предпочитаете проводить время после долгого дня?',
-+    quizQ1A: 'С семьёй и друзьями',
-+    quizQ1B: 'За книгой или фильмом',
-+    quizQ1C: 'В одиночестве, в тишине',
-+    quizQ2: 'Что для вас важнее всего сейчас?',
-+    quizQ2A: 'Карьерный рост и бизнес',
-+    quizQ2B: 'Отношения и семья',
-+    quizQ2C: 'Личное развитие и вдохновение',
-+    quizQ3: 'Как вы реагируете на стресс?',
-+    quizQ3A: 'Берусь за работу и решаю проблемы',
-+    quizQ3B: 'Обращаюсь за поддержкой к близким',
-+    quizQ3C: 'Ухожу в себя и ищу ответы внутри',
-+    quizSubmit: 'Узнать результат',
-+    quizBookCTA: 'Записаться на консультацию',
-+    // About
-+    aboutTitle: 'Обо мне',
-+    aboutP1: 'Меня зовут Анна. Я бухгалтер с 14‑летним опытом, который осознанно выбрал путь астролога. Моя миссия — помочь людям найти опору и смысл в период перемен.',
-+    aboutP2: 'Я изучаю астрологию и психоанализ, создавая авторскую методику, объединяющую символизм и практичные рекомендации для предпринимателей, блогеров и всех, кто стоит на распутье.',
-+    aboutP3: 'Моё вдохновение — соединять высокие технологии и природную гармонию. В каждой консультации я стремлюсь пробудить внутреннюю силу и веру в собственный путь.',
-+    // Testimonials
-+    testimonialsTitle: 'Отзывы клиентов',
-+    testimonial1: '«Анна помогла мне увидеть свои сильные стороны и понять, куда двигаться дальше. После консультации я чувствую себя уверенно и спокойно».',
-+    testimonial2: '«Благодаря Ане я нашёл баланс между работой и личной жизнью. Её подход к астрологии и психологии — настоящий дар».',
-+    testimonial3: '«Консультация с Анной открыла мне глаза на собственные ресурсы и возможности. Рекомендую всем, кто на распутье».',
-+    testimonial4: '«Я долго искал ответ на один важный вопрос и получил его благодаря консультации. Всё встало на свои места».',
-+    // Blog
-+    blogTitle: 'Блог',
-+    blogPostTitle: 'Коридор затмений: что важно знать',
-+    blogExcerpt: 'Период между солнечным и лунным затмениями называют коридором затмений. В это время энергии особенно мощные, а эмоциональный фон нестабилен. Мы рассказываем, как прожить этот период осознанно, что стоит учесть и как использовать возможности для трансформации.',
-+    blogReadMore: 'Читать статью',
-+    // Contact
-+    contactTitle: 'Контакты',
-+    contactIntro: 'Свяжитесь со мной удобным для вас способом:',
-+    telegramChannel: 'Пространство, где астрология помогает найти ответы',
-+    telegramBot: 'Астробот: как задать вопрос и записаться',
-+    telegramFunBot: 'Узнай, как реализовать свою мечту',
-+    contactForm: 'Форма для записи',
-+    // Footer
-+    footerRights: 'Все права защищены.',
-+    privacyPolicy: 'Политика конфиденциальности',
-+    termsOfUse: 'Условия использования'
-+  },
-+  en: {
-+    navServices: 'Services',
-+    navQuiz: 'Quiz',
-+    navAbout: 'About',
-+    navTestimonials: 'Testimonials',
-+    navBlog: 'Blog',
-+    navContact: 'Contact',
-+    heroTitle: 'Astrology & Psychology for Self‑Discovery',
-+    heroSubtitle: 'Transform your life and business through astrological insights.',
-+    heroCTA: 'Book a Session',
-+    servicesTitle: 'Consultations',
-+    servicesIntro: 'Choose the consultation that suits you. We offer classic astrology services and unique bespoke formats.',
-+    quizTitle: 'Quiz: What Does Your Moon Say About You?',
-+    quizIntro: 'Answer a few simple questions to discover which consultation to choose.',
-+    quizDescription: 'This test helps understand how the Moon influences your qualities and needs.',
-+    quizQ1: 'How do you prefer to spend time after a long day?',
-+    quizQ1A: 'With family and friends',
-+    quizQ1B: 'With a book or movie',
-+    quizQ1C: 'Alone, in silence',
-+    quizQ2: 'What is most important to you right now?',
-+    quizQ2A: 'Career growth and business',
-+    quizQ2B: 'Relationships and family',
-+    quizQ2C: 'Personal development and inspiration',
-+    quizQ3: 'How do you react to stress?',
-+    quizQ3A: 'I take action and solve problems',
-+    quizQ3B: 'I reach out to loved ones for support',
-+    quizQ3C: 'I go within and seek answers inside',
-+    quizSubmit: 'Get Result',
-+    quizBookCTA: 'Book a session',
-+    aboutTitle: 'About Me',
-+    aboutP1: "My name is Anna. I'm an accountant with 14 years of experience who consciously chose the path of an astrologer. My mission is to help people find footing and meaning during times of change.",
-+    aboutP2: 'I study astrology and psychoanalysis, creating a proprietary method that combines symbolism with practical recommendations for entrepreneurs, bloggers and anyone at a crossroads.',
-+    aboutP3: 'My inspiration is to connect high technology and natural harmony. In every consultation I strive to awaken inner strength and faith in your own path.',
-+    testimonialsTitle: 'Client Testimonials',
-+    testimonial1: '“Anna helped me see my strengths and understand where to go next. After the consultation I feel confident and calm.”',
-+    testimonial2: '“Thanks to Anna I found balance between work and personal life. Her approach to astrology and psychology is a true gift.”',
-+    testimonial3: '“The consultation with Anna opened my eyes to my own resources and possibilities. I recommend it to everyone at a crossroads.”',
-+    testimonial4: '“I’d been looking for an answer to an important question and I got it thanks to the consultation. Everything fell into place.”',
-+    blogTitle: 'Blog',
-+    blogPostTitle: 'Eclipse Corridor: What You Need to Know',
-+    blogExcerpt: 'The period between a solar and lunar eclipse is called the eclipse corridor. During this time energies are especially powerful and emotions unstable. We explain how to live through this period consciously, what to consider and how to use the opportunities for transformation.',
-+    blogReadMore: 'Read article',
-+    contactTitle: 'Contacts',
-+    contactIntro: 'Get in touch in the way that suits you best:',
-+    telegramChannel: 'A space where astrology helps find answers',
-+    telegramBot: 'Astro‑bot: how to ask a question and book',
-+    telegramFunBot: 'Find out how to make your dream come true',
-+    contactForm: 'Booking form',
-+    footerRights: 'All rights reserved.',
-+    privacyPolicy: 'Privacy policy',
-+    termsOfUse: 'Terms of use'
-+  }
-+};
-+
-+// Данные услуг. Здесь задаём названия, описания и цены для каждого языка.
-+const services = [
-+  {
-+    id: 'natal',
-+    title: { ru: 'Натальная карта', en: 'Natal Chart Reading' },
-+    description: {
-+      ru: 'Разбор вашей натальной карты: таланты, задачи и потенциал.',
-+      en: 'Detailed reading of your birth chart: talents, challenges and potential.'
-+    },
-+    price: { ru: '90 €', en: '€90' }
-+  },
-+  {
-+    id: 'forecast',
-+    title: { ru: 'Прогностика', en: 'Forecast Consultation' },
-+    description: {
-+      ru: 'Годовой прогноз: важные периоды, возможности и предупреждения.',
-+      en: 'Annual forecast: important periods, opportunities and warnings.'
-+    },
-+    price: { ru: '120 €', en: '€120' }
-+  },
-+  {
-+    id: 'synastry',
-+    title: { ru: 'Синастрия', en: 'Relationship Analysis' },
-+    description: {
-+      ru: 'Анализ совместимости для пар и деловых партнёров.',
-+      en: 'Compatibility analysis for couples and business partners.'
-+    },
-+    price: { ru: '130 €', en: '€130' }
-+  },
-+  {
-+    id: 'horary',
-+    title: { ru: 'Хорарный вопрос', en: 'Horary Consultation' },
-+    description: {
-+      ru: 'Ответ на конкретный вопрос с помощью хорарной карты.',
-+      en: 'Answer to a specific question using a horary chart.'
-+    },
-+    price: { ru: '80 €', en: '€80' }
-+  },
-+  {
-+    id: 'electional',
-+    title: { ru: 'Выбор даты', en: 'Electional Astrology' },
-+    description: {
-+      ru: 'Подбор благоприятной даты для событий: свадьбы, запуска проекта, поездки.',
-+      en: 'Choosing a favourable date for events: weddings, project launches, travel.'
-+    },
-+    price: { ru: '140 €', en: '€140' }
-+  },
-+  {
-+    id: 'bizstrategy',
-+    title: { ru: 'Астростратегия для бизнеса', en: 'Business Astro‑Strategy' },
-+    description: {
-+      ru: 'Стратегия развития бизнеса на основе астрологических циклов.',
-+      en: 'Business development strategy based on astrological cycles.'
-+    },
-+    price: { ru: '250 €', en: '€250' }
-+  },
-+  {
-+    id: 'astrobranding',
-+    title: { ru: 'Астробрендинг', en: 'Astro‑Branding' },
-+    description: {
-+      ru: 'Создание личного или корпоративного бренда с учётом вашей карты.',
-+      en: 'Creating a personal or corporate brand based on your chart.'
-+    },
-+    price: { ru: '200 €', en: '€200' }
-+  },
-+  {
-+    id: 'rectification',
-+    title: { ru: 'Ректификация', en: 'Rectification' },
-+    description: {
-+      ru: 'Точный расчёт времени рождения для точности прогнозов.',
-+      en: 'Accurate birth time calculation for precise forecasts.'
-+    },
-+    price: { ru: '180 €', en: '€180' }
-+  }
-+];
-+
-+// Результаты квиза для каждой комбинации
-+const quizResults = {
-+  ru: {
-+    A: {
-+      title: 'Астростратегия для бизнеса',
-+      message: 'Вы ориентированы на действие и достижения. Консультация по бизнес‑астрологии поможет выстроить стратегию и определить благоприятные моменты.'
-+    },
-+    B: {
-+      title: 'Синастрия',
-+      message: 'Отношения играют важную роль в вашей жизни. Анализ совместимости поможет улучшить общение и гармонию с партнёром или семьёй.'
-+    },
-+    C: {
-+      title: 'Натальная карта',
-+      message: 'Вы стремитесь к самопознанию и внутренней гармонии. Разбор натальной карты даст глубокие инсайты и поможет раскрыть потенциал.'
-+    }
-+  },
-+  en: {
-+    A: {
-+      title: 'Business Astro‑Strategy',
-+      message: 'You are action‑oriented and driven by achievement. A business astrology consultation will help build strategy and identify favourable moments.'
-+    },
-+    B: {
-+      title: 'Relationship Analysis',
-+      message: 'Relationships play an important role in your life. A compatibility analysis will improve communication and harmony with your partner or family.'
-+    },
-+    C: {
-+      title: 'Natal Chart Reading',
-+      message: 'You are drawn to self‑discovery and inner harmony. A natal chart reading will provide deep insights and unlock your potential.'
-+    }
-+  }
-+};
-+
-+// Функция для изменения языка на странице
-+function setLanguage(lang) {
-+  currentLang = lang;
-+  // Обновляем атрибут lang у корневого элемента
-+  document.documentElement.setAttribute('lang', lang);
-+  // Обновляем все элементы с data-i18n
-+  document.querySelectorAll('[data-i18n]').forEach(el => {
-+    const key = el.getAttribute('data-i18n');
-+    const translation = translations[lang][key];
-+    if (translation) {
-+      el.textContent = translation;
-+    }
-+  });
-+  // Перерисовываем услуги
-+  renderServices();
-+  // Очищаем результат квиза при смене языка
-+  const quizResult = document.getElementById('quiz-result');
-+  if (quizResult) {
-+    quizResult.innerHTML = '';
-+  }
-+}
-+
-+// Функция для рендера карточек услуг
-+function renderServices() {
-+  const container = document.getElementById('services-container');
-+  if (!container) return;
-+  container.innerHTML = '';
-+  services.forEach(service => {
-+    const card = document.createElement('article');
-+    card.className = 'service-card';
-+    // Заголовок
-+    const h3 = document.createElement('h3');
-+    h3.textContent = service.title[currentLang];
-+    card.appendChild(h3);
-+    // Описание
-+    const desc = document.createElement('p');
-+    desc.textContent = service.description[currentLang];
-+    card.appendChild(desc);
-+    // Цена
-+    const price = document.createElement('p');
-+    price.className = 'service-price';
-+    price.textContent = service.price[currentLang];
-+    card.appendChild(price);
-+    // Кнопки
-+    const actions = document.createElement('div');
-+    actions.className = 'service-actions';
-+    const detailsBtn = document.createElement('a');
-+    detailsBtn.href = '#';
-+    detailsBtn.className = 'details';
-+    detailsBtn.textContent = currentLang === 'ru' ? 'Подробнее' : 'More info';
-+    detailsBtn.setAttribute('aria-label', `${service.title[currentLang]} ${currentLang === 'ru' ? 'подробнее' : 'details'}`);
-+    const bookBtn = document.createElement('a');
-+    bookBtn.href = 'https://forms.gle/uXqtAvbuG2G3pk5z7';
-+    bookBtn.target = '_blank';
-+    bookBtn.rel = 'noopener';
-+    bookBtn.className = 'book';
-+    bookBtn.textContent = currentLang === 'ru' ? 'Записаться' : 'Book';
-+    bookBtn.setAttribute('aria-label', `${service.title[currentLang]} ${currentLang === 'ru' ? 'записаться' : 'book'}`);
-+    actions.appendChild(detailsBtn);
-+    actions.appendChild(bookBtn);
-+    card.appendChild(actions);
-+    container.appendChild(card);
-+  });
-+}
-+
-+// Экспорт для тестирования
-+if (typeof module !== 'undefined') {
-+  module.exports = { setLanguage, renderServices, translations, services };
-+}
- 
-EOF
-)
+/*
+ * Главный скрипт для сайта Life in Astro.
+ * Реализует смену языка, вывод карточек услуг, работу квиза и навигации.
+ */
+
+// Google Analytics placeholder: replace 'G-XXXXXXXXXX' with your GA measurement ID
+// window.dataLayer = window.dataLayer || [];
+// function gtag(){dataLayer.push(arguments);}
+// gtag('js', new Date());
+// gtag('config', 'G-XXXXXXXXXX');
+
+document.addEventListener('DOMContentLoaded', () => {
+  // Установка текущего года в футере
+  const yearSpan = document.getElementById('year');
+  if (yearSpan) {
+    yearSpan.textContent = new Date().getFullYear();
+  }
+
+  // Инициализация навигации для мобильных устройств
+  const menuToggle = document.querySelector('.menu-toggle');
+  const navList = document.querySelector('.nav-list');
+  if (menuToggle && navList) {
+    menuToggle.addEventListener('click', () => {
+      const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
+      menuToggle.setAttribute('aria-expanded', (!expanded).toString());
+      navList?.classList.toggle('show');
+    });
+  }
+
+  // Переключение языков
+  const langButtons = document.querySelectorAll('.lang-btn');
+  langButtons.forEach(btn => {
+    btn.addEventListener('click', () => {
+      langButtons.forEach(b => b.classList.remove('active'));
+      btn.classList.add('active');
+      const lang = btn.getAttribute('lang');
+      setLanguage(lang);
+    });
+  });
+
+  // Инициализация услуг и квиза после установки языка
+  setLanguage('ru');
+
+  // Квиз обработчик
+  const quizForm = document.getElementById('astro-quiz');
+  if (quizForm) {
+    quizForm.addEventListener('submit', (e) => {
+      e.preventDefault();
+      const formData = new FormData(quizForm);
+      const answers = { A: 0, B: 0, C: 0 };
+      for (const [key, value] of formData.entries()) {
+        answers[value]++;
+      }
+      // Определяем преобладающий ответ
+      let topAnswer = 'A';
+      let max = 0;
+      for (const letter in answers) {
+        if (answers[letter] > max) {
+          max = answers[letter];
+          topAnswer = letter;
+        }
+      }
+      // Вывод результата
+      const resultData = quizResults[currentLang][topAnswer];
+      const resultContainer = document.getElementById('quiz-result');
+      if (resultContainer && resultData) {
+        resultContainer.innerHTML = `<p>${resultData.message}</p>` +
+          `<p><strong>${resultData.title}</strong></p>` +
+          `<p><a href="https://forms.gle/uXqtAvbuG2G3pk5z7" class="btn book" target="_blank" rel="noopener">${translations[currentLang].quizBookCTA}</a></p>`;
+      }
+      quizForm.reset();
+    });
+  }
+});
+
+// Переменные глобального состояния
+let currentLang = 'ru';
+
+// Словарь переводов. Каждое значение представляет строку для определённого ключа в соответствующем языке.
+const translations = {
+  ru: {
+    // Навигация
+    navServices: 'Услуги',
+    navQuiz: 'Квиз',
+    navAbout: 'Обо мне',
+    navTestimonials: 'Отзывы',
+    navBlog: 'Блог',
+    navContact: 'Контакты',
+    // Hero
+    heroTitle: 'Астрология и психология для самопознания',
+    heroSubtitle: 'Преобразите свою жизнь и бизнес благодаря астрологическим инсайтам.',
+    heroCTA: 'Записаться',
+    // Services
+    servicesTitle: 'Консультации',
+    servicesIntro: 'Выберите консультацию, которая подходит именно вам. Мы предлагаем классические астрологические услуги и уникальные индивидуальные форматы.',
+    // Quiz
+    quizTitle: 'Квиз: Что говорит о вас ваша Луна?',
+    quizIntro: 'Ответьте на несколько простых вопросов, чтобы узнать, какую консультацию стоит выбрать.',
+    quizDescription: 'Этот тест поможет понять, как Луна влияет на ваши качества и потребности.',
+    quizQ1: 'Как вы предпочитаете проводить время после долгого дня?',
+    quizQ1A: 'С семьёй и друзьями',
+    quizQ1B: 'За книгой или фильмом',
+    quizQ1C: 'В одиночестве, в тишине',
+    quizQ2: 'Что для вас важнее всего сейчас?',
+    quizQ2A: 'Карьерный рост и бизнес',
+    quizQ2B: 'Отношения и семья',
+    quizQ2C: 'Личное развитие и вдохновение',
+    quizQ3: 'Как вы реагируете на стресс?',
+    quizQ3A: 'Берусь за работу и решаю проблемы',
+    quizQ3B: 'Обращаюсь за поддержкой к близким',
+    quizQ3C: 'Ухожу в себя и ищу ответы внутри',
+    quizSubmit: 'Узнать результат',
+    quizBookCTA: 'Записаться на консультацию',
+    // About
+    aboutTitle: 'Обо мне',
+    aboutP1: 'Меня зовут Анна. Я бухгалтер с 14‑летним опытом, который осознанно выбрал путь астролога. Моя миссия — помочь людям найти опору и смысл в период перемен.',
+    aboutP2: 'Я изучаю астрологию и психоанализ, создавая авторскую методику, объединяющую символизм и практичные рекомендации для предпринимателей, блогеров и всех, кто стоит на распутье.',
+    aboutP3: 'Моё вдохновение — соединять высокие технологии и природную гармонию. В каждой консультации я стремлюсь пробудить внутреннюю силу и веру в собственный путь.',
+    // Testimonials
+    testimonialsTitle: 'Отзывы клиентов',
+    testimonial1: '«Анна помогла мне увидеть свои сильные стороны и понять, куда двигаться дальше. После консультации я чувствую себя уверенно и спокойно».',
+    testimonial2: '«Благодаря Ане я нашёл баланс между работой и личной жизнью. Её подход к астрологии и психологии — настоящий дар».',
+    testimonial3: '«Консультация с Анной открыла мне глаза на собственные ресурсы и возможности. Рекомендую всем, кто на распутье».',
+    testimonial4: '«Я долго искал ответ на один важный вопрос и получил его благодаря консультации. Всё встало на свои места».',
+    // Blog
+    blogTitle: 'Блог',
+    blogPostTitle: 'Коридор затмений: что важно знать',
+    blogExcerpt: 'Период между солнечным и лунным затмениями называют коридором затмений. В это время энергии особенно мощные, а эмоциональный фон нестабилен. Мы рассказываем, как прожить этот период осознанно, что стоит учесть и как использовать возможности для трансформации.',
+    blogReadMore: 'Читать статью',
+    // Contact
+    contactTitle: 'Контакты',
+    contactIntro: 'Свяжитесь со мной удобным для вас способом:',
+    telegramChannel: 'Пространство, где астрология помогает найти ответы',
+    telegramBot: 'Астробот: как задать вопрос и записаться',
+    telegramFunBot: 'Узнай, как реализовать свою мечту',
+    contactForm: 'Форма для записи',
+    // Footer
+    footerRights: 'Все права защищены.',
+    privacyPolicy: 'Политика конфиденциальности',
+    termsOfUse: 'Условия использования'
+  },
+  en: {
+    navServices: 'Services',
+    navQuiz: 'Quiz',
+    navAbout: 'About',
+    navTestimonials: 'Testimonials',
+    navBlog: 'Blog',
+    navContact: 'Contact',
+    heroTitle: 'Astrology & Psychology for Self‑Discovery',
+    heroSubtitle: 'Transform your life and business through astrological insights.',
+    heroCTA: 'Book a Session',
+    servicesTitle: 'Consultations',
+    servicesIntro: 'Choose the consultation that suits you. We offer classic astrology services and unique bespoke formats.',
+    quizTitle: 'Quiz: What Does Your Moon Say About You?',
+    quizIntro: 'Answer a few simple questions to discover which consultation to choose.',
+    quizDescription: 'This test helps understand how the Moon influences your qualities and needs.',
+    quizQ1: 'How do you prefer to spend time after a long day?',
+    quizQ1A: 'With family and friends',
+    quizQ1B: 'With a book or movie',
+    quizQ1C: 'Alone, in silence',
+    quizQ2: 'What is most important to you right now?',
+    quizQ2A: 'Career growth and business',
+    quizQ2B: 'Relationships and family',
+    quizQ2C: 'Personal development and inspiration',
+    quizQ3: 'How do you react to stress?',
+    quizQ3A: 'I take action and solve problems',
+    quizQ3B: 'I reach out to loved ones for support',
+    quizQ3C: 'I go within and seek answers inside',
+    quizSubmit: 'Get Result',
+    quizBookCTA: 'Book a session',
+    aboutTitle: 'About Me',
+    aboutP1: "My name is Anna. I'm an accountant with 14 years of experience who consciously chose the path of an astrologer. My mission is to help people find footing and meaning during times of change.",
+    aboutP2: 'I study astrology and psychoanalysis, creating a proprietary method that combines symbolism with practical recommendations for entrepreneurs, bloggers and anyone at a crossroads.',
+    aboutP3: 'My inspiration is to connect high technology and natural harmony. In every consultation I strive to awaken inner strength and faith in your own path.',
+    testimonialsTitle: 'Client Testimonials',
+    testimonial1: '“Anna helped me see my strengths and understand where to go next. After the consultation I feel confident and calm.”',
+    testimonial2: '“Thanks to Anna I found balance between work and personal life. Her approach to astrology and psychology is a true gift.”',
+    testimonial3: '“The consultation with Anna opened my eyes to my own resources and possibilities. I recommend it to everyone at a crossroads.”',
+    testimonial4: '“I’d been looking for an answer to an important question and I got it thanks to the consultation. Everything fell into place.”',
+    blogTitle: 'Blog',
+    blogPostTitle: 'Eclipse Corridor: What You Need to Know',
+    blogExcerpt: 'The period between a solar and lunar eclipse is called the eclipse corridor. During this time energies are especially powerful and emotions unstable. We explain how to live through this period consciously, what to consider and how to use the opportunities for transformation.',
+    blogReadMore: 'Read article',
+    contactTitle: 'Contacts',
+    contactIntro: 'Get in touch in the way that suits you best:',
+    telegramChannel: 'A space where astrology helps find answers',
+    telegramBot: 'Astro‑bot: how to ask a question and book',
+    telegramFunBot: 'Find out how to make your dream come true',
+    contactForm: 'Booking form',
+    footerRights: 'All rights reserved.',
+    privacyPolicy: 'Privacy policy',
+    termsOfUse: 'Terms of use'
+  }
+};
+
+// Данные услуг. Здесь задаём названия, описания и цены для каждого языка.
+const services = [
+  {
+    id: 'natal',
+    title: { ru: 'Натальная карта', en: 'Natal Chart Reading' },
+    description: {
+      ru: 'Разбор вашей натальной карты: таланты, задачи и потенциал.',
+      en: 'Detailed reading of your birth chart: talents, challenges and potential.'
+    },
+    price: { ru: '90 €', en: '€90' }
+  },
+  {
+    id: 'forecast',
+    title: { ru: 'Прогностика', en: 'Forecast Consultation' },
+    description: {
+      ru: 'Годовой прогноз: важные периоды, возможности и предупреждения.',
+      en: 'Annual forecast: important periods, opportunities and warnings.'
+    },
+    price: { ru: '120 €', en: '€120' }
+  },
+  {
+    id: 'synastry',
+    title: { ru: 'Синастрия', en: 'Relationship Analysis' },
+    description: {
+      ru: 'Анализ совместимости для пар и деловых партнёров.',
+      en: 'Compatibility analysis for couples and business partners.'
+    },
+    price: { ru: '130 €', en: '€130' }
+  },
+  {
+    id: 'horary',
+    title: { ru: 'Хорарный вопрос', en: 'Horary Consultation' },
+    description: {
+      ru: 'Ответ на конкретный вопрос с помощью хорарной карты.',
+      en: 'Answer to a specific question using a horary chart.'
+    },
+    price: { ru: '80 €', en: '€80' }
+  },
+  {
+    id: 'electional',
+    title: { ru: 'Выбор даты', en: 'Electional Astrology' },
+    description: {
+      ru: 'Подбор благоприятной даты для событий: свадьбы, запуска проекта, поездки.',
+      en: 'Choosing a favourable date for events: weddings, project launches, travel.'
+    },
+    price: { ru: '140 €', en: '€140' }
+  },
+  {
+    id: 'bizstrategy',
+    title: { ru: 'Астростратегия для бизнеса', en: 'Business Astro‑Strategy' },
+    description: {
+      ru: 'Стратегия развития бизнеса на основе астрологических циклов.',
+      en: 'Business development strategy based on astrological cycles.'
+    },
+    price: { ru: '250 €', en: '€250' }
+  },
+  {
+    id: 'astrobranding',
+    title: { ru: 'Астробрендинг', en: 'Astro‑Branding' },
+    description: {
+      ru: 'Создание личного или корпоративного бренда с учётом вашей карты.',
+      en: 'Creating a personal or corporate brand based on your chart.'
+    },
+    price: { ru: '200 €', en: '€200' }
+  },
+  {
+    id: 'rectification',
+    title: { ru: 'Ректификация', en: 'Rectification' },
+    description: {
+      ru: 'Точный расчёт времени рождения для точности прогнозов.',
+      en: 'Accurate birth time calculation for precise forecasts.'
+    },
+    price: { ru: '180 €', en: '€180' }
+  }
+];
+
+// Результаты квиза для каждой комбинации
+const quizResults = {
+  ru: {
+    A: {
+      title: 'Астростратегия для бизнеса',
+      message: 'Вы ориентированы на действие и достижения. Консультация по бизнес‑астрологии поможет выстроить стратегию и определить благоприятные моменты.'
+    },
+    B: {
+      title: 'Синастрия',
+      message: 'Отношения играют важную роль в вашей жизни. Анализ совместимости поможет улучшить общение и гармонию с партнёром или семьёй.'
+    },
+    C: {
+      title: 'Натальная карта',
+      message: 'Вы стремитесь к самопознанию и внутренней гармонии. Разбор натальной карты даст глубокие инсайты и поможет раскрыть потенциал.'
+    }
+  },
+  en: {
+    A: {
+      title: 'Business Astro‑Strategy',
+      message: 'You are action‑oriented and driven by achievement. A business astrology consultation will help build strategy and identify favourable moments.'
+    },
+    B: {
+      title: 'Relationship Analysis',
+      message: 'Relationships play an important role in your life. A compatibility analysis will improve communication and harmony with your partner or family.'
+    },
+    C: {
+      title: 'Natal Chart Reading',
+      message: 'You are drawn to self‑discovery and inner harmony. A natal chart reading will provide deep insights and unlock your potential.'
+    }
+  }
+};
+
+// Функция для изменения языка на странице
+function setLanguage(lang) {
+  currentLang = lang;
+  // Обновляем атрибут lang у корневого элемента
+  document.documentElement.setAttribute('lang', lang);
+  // Обновляем все элементы с data-i18n
+  document.querySelectorAll('[data-i18n]').forEach(el => {
+    const key = el.getAttribute('data-i18n');
+    const translation = translations[lang][key];
+    if (translation) {
+      el.textContent = translation;
+    }
+  });
+  // Перерисовываем услуги
+  renderServices();
+  // Очищаем результат квиза при смене языка
+  const quizResult = document.getElementById('quiz-result');
+  if (quizResult) {
+    quizResult.innerHTML = '';
+  }
+}
+
+// Функция для рендера карточек услуг
+function renderServices() {
+  const container = document.getElementById('services-container');
+  if (!container) return;
+  container.innerHTML = '';
+  services.forEach(service => {
+    const card = document.createElement('article');
+    card.className = 'service-card';
+    // Заголовок
+    const h3 = document.createElement('h3');
+    h3.textContent = service.title[currentLang];
+    card.appendChild(h3);
+    // Описание
+    const desc = document.createElement('p');
+    desc.textContent = service.description[currentLang];
+    card.appendChild(desc);
+    // Цена
+    const price = document.createElement('p');
+    price.className = 'service-price';
+    price.textContent = service.price[currentLang];
+    card.appendChild(price);
+    // Кнопки
+    const actions = document.createElement('div');
+    actions.className = 'service-actions';
+    const detailsBtn = document.createElement('a');
+    detailsBtn.href = '#';
+    detailsBtn.className = 'details';
+    detailsBtn.textContent = currentLang === 'ru' ? 'Подробнее' : 'More info';
+    detailsBtn.setAttribute('aria-label', `${service.title[currentLang]} ${currentLang === 'ru' ? 'подробнее' : 'details'}`);
+    const bookBtn = document.createElement('a');
+    bookBtn.href = 'https://forms.gle/uXqtAvbuG2G3pk5z7';
+    bookBtn.target = '_blank';
+    bookBtn.rel = 'noopener';
+    bookBtn.className = 'book';
+    bookBtn.textContent = currentLang === 'ru' ? 'Записаться' : 'Book';
+    bookBtn.setAttribute('aria-label', `${service.title[currentLang]} ${currentLang === 'ru' ? 'записаться' : 'book'}`);
+    actions.appendChild(detailsBtn);
+    actions.appendChild(bookBtn);
+    card.appendChild(actions);
+    container.appendChild(card);
+  });
+}
+
+// Экспорт для тестирования
+if (typeof module !== 'undefined') {
+  module.exports = { setLanguage, renderServices, translations, services };
+}
 
EOF
)
