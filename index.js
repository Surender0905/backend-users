require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./lib/sequelize");
const User = require("./models/user");

const app = express();

app.use(express.json());

app.use(cors());

//sync database
sequelize
    .sync()
    .then(function () {
        console.log("Database synced");
    })
    .catch(function (err) {
        console.log("Unable to connect to the database:", err);
    });

//dummy data

const games = [
    {
        id: 1,
        title: "The Legend of Zelda: Breath of the Wild",
        genre: "Action-adventure",
        platform: "Nintendo Switch",
        releaseYear: 2017,
    },
    {
        id: 2,
        title: "God of War",
        genre: "Action-adventure",
        platform: "PlayStation 4",
        releaseYear: 2018,
    },
    {
        id: 3,
        title: "Cyberpunk 2077",
        genre: "Role-playing",
        platform: "PC",
        releaseYear: 2020,
    },
    {
        id: 4,
        title: "Hollow Knight",
        genre: "Metroidvania",
        platform: "PC",
        releaseYear: 2017,
    },
    {
        id: 5,
        title: "Minecraft",
        genre: "Sandbox",
        platform: "Multi-platform",
        releaseYear: 2011,
    },
];

const players = [
    {
        id: 1,
        name: "Virat Kohli",
        country: "India",
        role: "Batsman",
        runs: 12000,
        wickets: 4,
    },
    {
        id: 2,
        name: "James Anderson",
        country: "England",
        role: "Bowler",
        runs: 1243,
        wickets: 600,
    },
    {
        id: 3,
        name: "Kane Williamson",
        country: "New Zealand",
        role: "Batsman",
        runs: 7000,
        wickets: 29,
    },
    {
        id: 4,
        name: "Pat Cummins",
        country: "Australia",
        role: "Bowler",
        runs: 750,
        wickets: 250,
    },
    {
        id: 5,
        name: "Ben Stokes",
        country: "England",
        role: "All-rounder",
        runs: 4500,
        wickets: 150,
    },
];
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/users", async (req, res) => {
    try {
        const user = await User.findAll();
        res.send({ user });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error });
    }
});

app.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        res.send({ user });
    } catch (error) {
        console.log(error);
        res.status(500).send({ error });
    }
});

app.get("/games", (req, res) => {
    res.send({ games });
});

app.get("/games/:id", (req, res) => {
    const id = req.params.id;
    const game = games.find((game) => game.id == id);
    res.send({ game });
});

app.get("/players", (req, res) => {
    res.send({ players });
});

app.get("/players/:id", (req, res) => {
    const id = req.params.id;
    const player = players.find((player) => player.id == id);
    res.send({ player });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});
