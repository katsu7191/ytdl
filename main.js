const fs = require('fs');
const ytdl = require('ytdl-core');
const data = require("./data.json")
const BASE_PATH = `https://www.youtube.com/watch?v=`;
const youtubeId = data.yturl;
const url = BASE_PATH+youtubeId;

ytdl(url).pipe(fs.createWriteStream(`${youtubeId}.mp4`));