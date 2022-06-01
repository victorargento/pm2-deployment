# PM2 Deployment

Deploy your nodejs or typescript app with PM2.

## How to use the action?
```yml
steps:
  - uses: actions/checkout@v3
  
  - name: Deploy app
    uses: victorargento/pm2-deployment@main
    with:
      remote-path: "/deployment/api"
      host: 12.34.56.78
      username: ${{ secrets.prod-user }}
      port: 2080
      password: ${{ secrets.prod-password }}
      pm2-id: "api"
```

## How does it work?
The action does the following:
1. Copies the repository contents to the remote server on the specified folder
2. Runs ``npm ci``
3. Runs ``npm run build`` (optional)
4. Runs ``pm2 reload`` the ecosystem.config.js
5. Runs ``pm2 reset <id>`` to set 0 the number of restarts

## Input arguments
- ``remote-path`` - Where do you want to copy the files to?
- ``host`` - _What's the host IP address?
- ``username`` - What's the username that you're going to login into
- ``port`` - What's the port of SSH? (default: ``22``)
- ``password`` - What's the password of the user?`` (Note: in the future SSH Keys will be supported)
- ``build`` - Build your typescript app
- ``pm2-id`` - What's the ID/Name of the PM2 application?

> Note: I recommend to use ecosystem.config.js in your project, you can envs, interpreters, node args, num of instances and more options. Here there are more content [about it](https://pm2.keymetrics.io/docs/usage/application-declaration).

> Good Practices: Why do I use reload instead restart? Restart is a hard way to stop and start a web server.