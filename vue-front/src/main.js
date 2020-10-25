import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "element-ui/lib/theme-chalk/index.css";
import api from './../axios/index'
import echarts from 'echarts'
import { Button, Form, Input, FormItem, Container, Header ,Aside ,Main,Dropdown,
  Menu,Card,
  DropdownMenu,
  DropdownItem,
  Submenu,
  Row,Col,DatePicker,
  MenuItem,
  Avatar,Notification,
  MenuItemGroup } from 'element-ui';

  
Vue.prototype.$echarts = echarts
Vue.use(api)
Vue.use(Button).use(Form).use(Input).use(FormItem).use(Container).use(Avatar).use(DropdownItem).use(DropdownMenu).use(Card).use(Notification)
.use(Header).use(Aside).use(Main).use(Menu).use(Submenu).use(MenuItem).use(MenuItemGroup).use(Dropdown).use(Col).use(Row).use(DatePicker)
Vue.prototype.$notify = Notification;
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
