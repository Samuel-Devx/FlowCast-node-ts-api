import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from "./controller/podcast-Controller"
import { Routes } from "./routes/podcastRoutes";
import { app } from "./app";


const server = http.createServer(app)


server.listen(process.env.PORT, () => {
    console.log(`Servido iniciado na porta ${process.env.PORT}`)
})                  