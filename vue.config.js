module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/Photography_website/'
  : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}