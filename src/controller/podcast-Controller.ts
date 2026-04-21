import {IncomingMessage, ServerResponse} from "http"
import * as service from "../service/podcast-Service"
import { ContentType } from '../utils/podcast-ContentType';
import { Response }  from  "../model/podcast-Response"


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    const content: Response = await service.serviceListEpisodis(req, res)

    res.writeHead(content.status, {'Content-Type': ContentType.JSON })
    res.write(JSON.stringify(content.body))
    res.end()
}


export const getFilterEpisodes = async (
    req: IncomingMessage, 
    res: ServerResponse) => {

    

    const content: Response = await service.serviceFilterEpisodis(req.url ?? null)

    res.writeHead(content.status, {'Content-Type': ContentType.JSON })
    res.write(JSON.stringify(content.body))
    res.end()
}
