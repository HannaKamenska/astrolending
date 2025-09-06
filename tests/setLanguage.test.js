 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/tests/setLanguage.test.js b/tests/setLanguage.test.js
index e4e729c8e885d20547e4f73b2ad643ed83837d51..aaeae4f5eb49051714a7ac99929379287a2c3bd3 100644
--- a/tests/setLanguage.test.js
+++ b/tests/setLanguage.test.js
@@ -1,46 +1,37 @@
- (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
-diff --git a//dev/null b/tests/setLanguage.test.js
-index 0000000000000000000000000000000000000000..aaeae4f5eb49051714a7ac99929379287a2c3bd3 100644
---- a//dev/null
-+++ b/tests/setLanguage.test.js
-@@ -0,0 +1,37 @@
-+const assert = require('assert');
-+const { JSDOM } = require('jsdom');
-+
-+const dom = new JSDOM(`<!DOCTYPE html><html><body>
-+<span data-i18n="navServices"></span>
-+<h1 data-i18n="heroTitle"></h1>
-+<div id="services-container"></div>
-+<div id="quiz-result"></div>
-+</body></html>`);
-+
-+global.window = dom.window;
-+global.document = dom.window.document;
-+
-+const { setLanguage, translations, services } = require('../script.js');
-+
-+setLanguage('ru');
-+assert.strictEqual(
-+  document.querySelector('.service-card h3').textContent,
-+  services[0].title.ru
-+);
-+
-+setLanguage('en');
-+assert.strictEqual(
-+  document.querySelector('[data-i18n="navServices"]').textContent,
-+  translations.en.navServices
-+);
-+assert.strictEqual(
-+  document.querySelector('[data-i18n="heroTitle"]').textContent,
-+  translations.en.heroTitle
-+);
-+assert.strictEqual(
-+  document.querySelector('.service-card h3').textContent,
-+  services[0].title.en
-+);
-+
-+console.log('setLanguage updates translations and services correctly');
-+
- 
-EOF
-)
+const assert = require('assert');
+const { JSDOM } = require('jsdom');
+
+const dom = new JSDOM(`<!DOCTYPE html><html><body>
+<span data-i18n="navServices"></span>
+<h1 data-i18n="heroTitle"></h1>
+<div id="services-container"></div>
+<div id="quiz-result"></div>
+</body></html>`);
+
+global.window = dom.window;
+global.document = dom.window.document;
+
+const { setLanguage, translations, services } = require('../script.js');
+
+setLanguage('ru');
+assert.strictEqual(
+  document.querySelector('.service-card h3').textContent,
+  services[0].title.ru
+);
+
+setLanguage('en');
+assert.strictEqual(
+  document.querySelector('[data-i18n="navServices"]').textContent,
+  translations.en.navServices
+);
+assert.strictEqual(
+  document.querySelector('[data-i18n="heroTitle"]').textContent,
+  translations.en.heroTitle
+);
+assert.strictEqual(
+  document.querySelector('.service-card h3').textContent,
+  services[0].title.en
+);
+
+console.log('setLanguage updates translations and services correctly');
+
 
EOF
)
