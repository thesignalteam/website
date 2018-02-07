# thesignal-alpha
Code and Docker environment for the revamped The Sign.al. <br>

### IDE
[WebStorm](https://www.jetbrains.com/webstorm/) from JetBrains is highly recommended.
You can get a student license for free.

### Architecture 
The Sign.al website runs on [Ghost](https://ghost.org/), a open-sourced blogging platform based on Node.js.

### Setting Up The Environment
To start the Ghost CMS on your local machine,
1. Download and install [Docker](https://www.docker.com/docker-mac) if you haven't already.
2. To get a local copy of the repository and the submodules, run `git pull --recurse-submodules`.
3. Open your terminal and `cd` into the current directory. 
4. Run `docker-compose pull` to get the Docker image of Ghost (1.20.3) and Nginx (1.13.8).
5. Run `docker-compose up -d` to start Ghost.
6. Ghost will be running at `http://localhost:4001`.
7. Nginx will be running at `http://localhost:4002`. This is a static server of files under `styles`. 
8. When you're done, run `docker-compose down -d` to shut down the local server.

#### Running on Windows
1. Disable Hyper-V.
2. Run with Docker Quickstart Terminal.
3. Replace `localhost` with result from `docker-machine ip`.

### Development
Feel free to play around with the production environment. **Any change you make will not affect the actual `thesign.al` site**, but note that:
1. Development happens inside the `src` folder. **If you make changes to files in the `src` folder, they should be automatically reflected on your local Ghost server**.
2. HTML mockups and stylesheets are in the `mockups` folder. This should make it easier for you to debug frontend elements without interacting with the database. File changes are automatically reflected as well.
3. If for some weird reason you need to restart Ghost or Nginx, run `docker-compose restart`.
4. The test environment has been filled with *some* articles and contents on `thesign.al`, though my differ from the main site.
5. To log into the content panel of Ghost, go to `http://localhost:4001/ghost`. Log in with credentials from submodule `private/credentials.md`. **For security reasons, accounts for the main thesign.al production server will be separate from the testing environment.**
6. Note: the Ghost SQLite database is part of the repository. Changes made through the panel WILL be committed through `git` by default, and thus available for other team members.

### Testing And Deployment
Logs from your local server are at `logs`.
Testing server is available at `http://alpha.thesign.al`. Contact Bill if you need file or shell access.

### Mockups
1. ~~Go to folder `mockups`.~~
2. ~~Run `python -m SimpleHTTPServer 4002`.~~
3. ~~Point your web browser to `http://localhost:4002`.~~
No need for this. File server now runs inside Docker.

### Behind The Scenes
The docker environment is composed from the official Ghost image. Database, image and configurations inside the container is mapped to this working directory on the host machine through `volumes`.

### Production
TBD

### Copyright and Copyleft
*GNU General Public License v3.0*.
I know this is very mean. We'll look into licenses later.

### Links
Work Session time --    [when2meet](https://www.when2meet.com/?6631949-VHpnt) <br>
Web Redesign -- 		[Things to do](https://docs.google.com/spreadsheets/d/1CPL-ihFxR4s-n53Axbh6vIsOoQFyvRgYOlbNg6Dm3wk/edit?usp=sharing) <br>
Directory --			[Update](https://docs.google.com/spreadsheets/d/1AFeRltFyYb89ThbIBhfFgOz3HApTA3_in_ffCvAAFNk/edit?usp=sharing)
