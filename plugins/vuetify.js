import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

import en from '../locale/en'

const locales = { en };

function getBrowserLocaleOrDefault() {
    var preferredLocales = (navigator.languages || [navigator.language]).map(l => l.split('-')[0]);
    return preferredLocales.find(l => Object.keys(locales).includes(l)) || 'en';
}

Vue.use(Vuetify, {
  lang: {
    locales,
    current: getBrowserLocaleOrDefault()
  },
  theme: {
    primary: '#121212', // a color that is not in the material colors palette
    accent: colors.grey.darken3,
    secondary: colors.amber.darken3,
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
})

// Leverage Vuetify's internationalization but work around its lousy syntax
Vue.prototype.$t = key => Vue.prototype.$vuetify.t("$vuetify." + key);
