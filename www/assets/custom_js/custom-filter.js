Vue.filter('formatDate', function(value) {
    if (value) {
      return moment(String(value)).format('DD-MM-YYYY')
    }
  })
Vue.filter('formatTime', function(value) {
    if (value) {
      return moment(String(value)).format('hh:mm')
    }
  })