import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from "./controller/podcast-Controller"
import { Routes } from "./routes/podcastRoutes";


const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {

    const [baseUrl, QueryString] = req.url?.split("?") ?? ("");


    if(req.method === "GET" && baseUrl === Routes.LIST){
        getListEpisodes(req, res);    }
    if(req.method === "GET" && baseUrl === Routes.FILTER){
        getFilterEpisodes(req, res);    }
}
)


server.listen(process.env.PORT, () => {
    console.log(`Servido iniciado na porta ${process.env.PORT}`)
})                  