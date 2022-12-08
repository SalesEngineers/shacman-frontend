module.exports = {
  apps: [
    {
      name: 'XCMG',
      exec_mode: 'cluster',
      cron_restart: '0 0 * * *',
      //host: '188.225.44.134',
      port: 3025,
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}
