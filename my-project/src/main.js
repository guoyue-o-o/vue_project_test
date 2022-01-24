// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import router from "./router";
import VueI18n from "vue-i18n";
import ElementUI from "element-ui";
import enLocale from "element-ui/lib/locale/lang/en";
import zhLocale from "element-ui/lib/locale/lang/zh-CN";
import "element-ui/lib/theme-chalk/index.css";

import App from "./App";

Vue.config.productionTip = false;

Vue.use(VueI18n);
// Vue.use(ElementUI);

const messages = {
  en: {
    message: "hello",
    ...enLocale // 或者用 Object.assign({ message: 'hello' }, enLocale)
  },
  zh: {
    message: "你好",
    ...zhLocale // 或者用 Object.assign({ message: '你好' }, zhLocale)
  }
};
// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: "en", // set locale
  messages // set locale messages
});

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
});

// 给new Vue这行代码上面加这个注释，把这行代码规则的校验跳过，通过eslint-disable
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  i18n,
  components: { App },
  template: "<App/>"
});
