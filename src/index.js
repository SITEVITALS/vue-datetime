import Datetime from './Datetime.vue'
import DatetimePopup from './DatetimePopup.vue'
import DatetimeTimePicker from './DatetimeTimePicker.vue'

function plugin (Vue) {
  Vue.component('datetime', Datetime)
  Vue.component('datetime-popup', DatetimePopup)
  Vue.component('datetime-time-picker', DatetimeTimePicker)
}

// Install by default if using the script tag
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
const version = '__VERSION__'

// Export all components too
export {
  Datetime,
  DatetimePopup,
  DatetimeTimePicker,
  version
}
