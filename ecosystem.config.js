module.exports = {
  apps : [{
    name: "apiwhatsapp",
    watch: true,
    namespace: "apiwhatsapp",
    script: "./index.js",
    instances  : 2,
    exec_mode  : "cluster",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  },
  //{
    // name: 'apiwhatsapp',
    // script: 'index.js'
  //}
]
}