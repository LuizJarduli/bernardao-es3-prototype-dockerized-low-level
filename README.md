# bernardao-es3-prototype-dockerized-low-level

FATEC Bernardo 'original' prototype

Original authors of this sample MEAN stack project is [bezkoder](https://www.bezkoder.com/node-express-mongodb-crud-rest-api/)

## BRAVO VIN ..Err, Bernardo

![Bernardo](https://veja.abril.com.br/wp-content/uploads/2023/06/upaventura.jpg?quality=90&strip=info&w=1173&h=678&crop=1)

---

## Install and run

> Install

To 'install' this project, you only need docker installed obligatorily:

- Follow the instructions to install docker [here](https://www.docker.com/products/docker-desktop/)
- Optionally install nodeJS IRON LTS (v20.*) or below here to run via npm scripts [here](https://nodejs.org/en/download)

> Run

If you opt to run via docker only (docker compose v1 or v2) run in the root of this project:

```sh
# If Docker compose v1 use
docker-compose -f docker-compose.dev.yml up --build

# If docker compose v2..
docker compose -f docker-compose.dev.yml up --build
```

Optionally, there is a npm script to run and make this docker command a shortcut in there.

```sh
# Docker compose v1
npm run start:v1

# Docker compose v2
npm run start:v2
```

After the above commands executed successfully, access the respective services below on the ports in your browser:

- Angular Nginx static server: [`http://localhost:80`](http://localhost:80)
- Node js express API: [`http://localhost:4444`](http://localhost:4444)

## Disclaimer

This project have the only purpose to better distribute the teacher prototype for the students of ES3.
