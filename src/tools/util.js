const common = {
  tranToJSON: function (str) {
    let json = str
    if (typeof str === 'string') {
      try {
        json = JSON.parse(str)
      } catch (e) {
      }
      return json
    }
  }
}
export default common
