module.exports = {
    apps: [{
      name: "demo-api",
      script: "./index.js",
      exec_mode: "cluster",
      instances: 3,
      env: {
        NODE_ENV: "production",
        MYSQL_USER: "demo-user",
        MYSQL_PASSWORD: "passwd1234",
        MYSQL_DATABASE: "customers"
      }
    }]
  }