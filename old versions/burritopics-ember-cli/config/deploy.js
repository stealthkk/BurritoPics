/* jshint node: true */

module.exports = {
  production: {
    store: {
      type: 'ssh',
      remoteDir: '/var/www/',
      host: 'example.com',
      username: 'root',
      privateKeyFile: process.env.SSH_KEY_FILE,
    },
    assets: {
      type: 's3',
      accessKeyId: process.env.AWS_KEY,
      secretAccessKey: process.env.AWS_SECRET,
      bucket: 'assets.example.com',
    },
  },
  development: {
    // Add a development configuration here, similar to the production one above
  },
};