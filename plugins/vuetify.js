import Vue from 'vue'
import Vuetify from 'vuetify'
import VApp from 'vuetify/es5/components/VApp'
import VAutocomplete from 'vuetify/es5/components/VAutocomplete'
import VContainer from 'vuetify/es5/components/VGrid/VContainer'
import VContent from 'vuetify/es5/components/VGrid/VContent'
import VFlex from 'vuetify/es5/components/VGrid/VFlex'
import VFooter from 'vuetify/es5/components/VFooter'
import VLayout from 'vuetify/es5/components/VGrid/VLayout'
import VList, { VListTile, VListTileContent, VListTileTitle } from 'vuetify/es5/components/VList'
import VListGroup from 'vuetify/es5/components/VList/VListGroup'
import VListTileAction from 'vuetify/es5/components/VList/VListTileAction'
import VNavigationDrawer from 'vuetify/es5/components/VNavigationDrawer'
import VTextarea from 'vuetify/es5/components/VTextarea'
import VTextField from 'vuetify/es5/components/VTextField'
import VToolbar, { VToolbarTitle } from 'vuetify/es5/components/VToolbar'
import VToolbarSideIcon from 'vuetify/es5/components/VToolbar/VToolbarSideIcon'

import en from '../locale/en'

const locales = { en };

function getBrowserLocaleOrDefault() {
    var preferredLocales = (navigator.languages || [navigator.language]).map(l => l.split('-')[0]);
    return preferredLocales.find(l => Object.keys(locales).includes(l)) || 'en';
}

Vue.use(Vuetify, {
  components: {
    VApp,
    VAutocomplete,
    VContainer,
    VContent,
    VFlex,
    VFooter,
    VLayout,
    VList,
    VListGroup,
    VListTile,
    VListTileAction,
    VListTileContent,
    VListTileTitle,
    VNavigationDrawer,
    VTextarea,
    VTextField,
    VToolbar,
    VToolbarSideIcon,
    VToolbarTitle,
  },
  lang: {
    locales,
    current: getBrowserLocaleOrDefault()
  },
  theme: {
    primary: '#0091ea',
    accent: '#0091ea',
    secondary: '#757575',
    info: '#ab47bc',
    warning: '#ff9800',
    error: '#f44336',
    success: '#4caf50',
  }
})

// Leverage Vuetify's internationalization but work around its lousy syntax
Vue.prototype.$t = key => Vue.prototype.$vuetify.t("$vuetify." + key);
