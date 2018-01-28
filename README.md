# thesignal-alpha
Ghost theme and docker environment for the revamped The Sign.al

### IDE
[WebStorm](https://www.jetbrains.com/webstorm/) from JetBrains is highly recommended.
You can get a student license for free.

### Architecture 
The Sign.al website runs on [Ghost](https://ghost.org/), a open-sourced blogging platform based on Node.js.

### Development
To start the Ghost CMS on your local machine, 
1. Download and install [Docker](https://www.docker.com/docker-mac) if you haven't already.
2. Run `docker pull ghost:1.20.3` to get the latest version of Ghost.
3. Run `docker run -d --name thesignal-ghost -p 4001:2368 ghost` to start the image.
4. Point your web browser to `http://localhost:4001`.

### Production
TBA
