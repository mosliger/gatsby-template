module.exports = {
  development: {
    isProduction: false,
    host: 'localhost',
    service: 'http://localhost:1337',
    port: 3000
  },
  production: {
    isProduction: true,
    service: 'http://yourserver.com',
    host: 'http://yourserver.com', // use localhost to test in local machine
    port: 3000
  }
}[process.env.NODE_ENV || 'development']
