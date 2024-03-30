const fs = require('fs');// this cmd is not finished yet wait for its official release
const path = require('path');
const request = require('request');

module.exports = {
    config: {
        name: "anime",
        version: "1.0",
        author: "Kshitiz",
        countDown: 5,
        role: 0,
        shortDescription: {
            en: "Anime recommendation"
        },
        longDescription: {
            en: "Recommend an anime based on a genre."
        },
        category: "anime",
        guide: "{prefix} anime [genre] genre = shonen, seinen, isekai, scifi"
    },


    lastRecommendation: {},

    onStart: async function ({ api, args, message, event }) {
        const animeRecommendations = {
            shonen: [
                {
                    animeName: "Naruto",
                    imageUrl: "https://drive.google.com/uc?export=download&id=1OP2zmycLmFihRISVLzFwrw__LRBsF9GN"
                },
                {
                    animeName: "One Piece",
                    imageUrl: "https://drive.google.com/uc?export=download&id=1QaK3EfNmbwAgpJm4czY8n8QRau9MXoaR"
                },
                {
                    animeName: "Dragon Ball Z",
                    imageUrl: "https://drive.google.com/uc?export=download&id=1q-8lFZD5uPmhRySvT75Bgsr2lp9UQ4Mi"
                },
                {
                    animeName: "Bleach",
                    imageUrl: "https://drive.google.com/uc?export=download&id=1bds-i6swtqi2k4YCoglPKTV7kL7f-SF7"
                },
                {
                    animeName: "My Hero Academia",
                    imageUrl: "https://drive.google.com/uc?export=download&id=1uOcTZ8r1zDGmqF9Nyg1vupuWHKEg1eVf"
                },
                {
                    animeName: "Attack on Titan",
                    imageUrl: "https://drive.google.com/uc?export=download&id=1DrBwp7irJrW_DVmIXHbNvFjofHCTmZ0a"
                },
                {
                    animeName: "Hunter x Hunter",
                    imageUrl: "https://drive.google.com/uc?export=download&id=1W4RHPv1zWtFUGFVUJ0uiCxvP5ovpURHG"
                },
                {
                    animeName: "Fullmetal Alchemist: Brotherhood",
                    imageUrl: "https://drive.google.com/uc?export=download&id=1C-pRqtjpCFFPSZf8xAsNLgn9VgZBUgu6"
                },
                {
                    animeName: "Demon Slayer: Kimetsu no Yaiba",
                    imageUrl: "https://drive.google.com/uc?export=download&id=1vU5XMLgKwBPfsiheUF4SK79LfKbzU6NX"
                },
                {
                    animeName: "Death Note",
                    imageUrl: "https://drive.google.com/uc?export=download&id=1tUJEum_tf79gj9420mHx-_q7f0QP27DC"
                },
                {
                    animeName: "Yu Yu Hakusho",
                    imageUrl: "https://drive.google.com/uc?export=download&id=1JL07gw2S4f6T_d9ufWDnNkDme3zqOuLU"
                },
                {
                    animeName: "Fairy Tail",
                    imageUrl: "https://drive.google.com/uc?export=download&id=13WKaqx8rdmwZE7VDWRK0fFkk8zkA7AOi"
                },
                {
                    animeName: "One Punch Man",
                    imageUrl: "https://drive.google.com/uc?export=download&id=10KOnQyrli8HPaeThalyN3KA2yX0T28Uj"
                },
                {
                    animeName: "Sword Art Online",
                    imageUrl: "https://drive.google.com/uc?export=download&id=1JxczwxBgreEc4tZdLTdFHh6klsvlCYkM"
                },
                {
                    animeName: "JoJo's Bizarre Adventure",
                    imageUrl: "https://drive.google.com/uc?export=download&id=1aKzkrSAYAPXNIPhazTT6pkQxJpdQOD2p"
                },
                {
                    animeName: "Dragon Ball",
                    imageUrl: "https://drive.google.com/uc?export=download&id=1oonrlOFBjdYLV2zv9V-oB0AenGH4HNr2"
                },
                {
                    animeName: "Haikyuu!!",
                    imageUrl: "https://drive.google.com/uc?export=download&id=1tFHwCTNgoLHi34YL6fdXq2taZINZERHR"
                },
                {
                    animeName: "Black Clover",
                    imageUrl: "https://drive.google.com/uc?export=download&id=1ecenM1HVzgPtwaN8eISfxwBB-uKqdZoj"
                },
                {
                    animeName: "The Seven Deadly Sins",
                    imageUrl: "https://drive.google.com/uc?export=download&id=1FzV9FwXri9xxwAy-xrlA8zA6dyO70tkf"
                },
                {
                    animeName: "Mob Psycho 100",
                    imageUrl: "https://drive.google.com/uc?export=download&id=1qBXCvbhENmyC05vLHQLFJR-xlf5HhZzF"
                },
                {
                    animeName: "Assassination Classroom",
                    imageUrl: "https://drive.google.com/uc?export=download&id=13IP6cwdimzHv3nUJi-kODbGKIAHpJEAy"
                },
                {