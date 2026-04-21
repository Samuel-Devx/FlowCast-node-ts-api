import * as http from "http";
import {getFilterEpisodes, getListEpisodes} from "./controller/podcast-Controller"
import { Routes } from "./routes/podcastRoutes";
export const app =
(
req: http.IncomingMessage, 
res: http.ServerResponse) => {

    const [baseUrl, QueryString] = req.url?.split("?") ?? ("");


    if(req.method === "GET" && baseUrl === Routes.LIST){
        getListEpisodes(req, res);    }
    if(req.method === "GET" && baseUrl === Routes.FILTER){
        getFilterEpisodes(req, res);    }
}

