var middleware = function (event, next) {
  next();
}

module.exports = {
  init: function(bp) {
    bp.middlewares.register({
      name: 'botpress-booking.registerDate', // friendly name
      type: 'incoming', // either incoming or outgoing
      order: 50, // arbitrary number
      handler: middleware, // the middleware function
      module: 'botpress-booking', // the name of the module, if any
      description: 'Manage Bookings.'
    });
  },
  ready: function(bp) {
    bp.getRouter('botpress-booking')
    .get('/homepage', (req, res) => {
      const packageJSON = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
      res.send({ homepage: packageJSON.homepage })
    })
  }
}
