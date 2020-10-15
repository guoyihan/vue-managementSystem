import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "element-ui/lib/theme-chalk/index.css";
import { Button, Form, Input, FormItem, Container, Header ,Aside ,Main,Dropdown,
  Menu,
  DropdownMenu,
  DropdownItem,
  Submenu,
  MenuItem,
  Avatar,
  MenuItemGroup } from 'element-ui';

Vue.use(Button).use(Form).use(Input).use(FormItem).use(Container).use(Avatar).use(DropdownItem).use(DropdownMenu)
.use(Header).use(Aside).use(Main).use(Menu).use(Submenu).use(MenuItem).use(MenuItemGroup).use(Dropdown)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
