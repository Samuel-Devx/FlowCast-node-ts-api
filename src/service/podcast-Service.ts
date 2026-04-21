import {IncomingMessage, ServerResponse} from "http"
import { repositoryPodcast } from "../repositories/podcast-Repository"
import { Response }  from  "../model/podcast-Response"
import { StatusCode } from '../utils/posdcast-StatusCode';



export const serviceListEpisodis = async (req: IncomingMessage, res: ServerResponse): Promise<Response> =>{
    const data = await repositoryPodcast()

    let response: Response = {
        status: data.length !== 0 ? StatusCode.OK : StatusCode.NOCONTENT,
        body: data
    }

    return response
}


export const serviceFilterEpisodis = async (podcastName: string | null) =>{
 
    const querySring = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(querySring)


    let response: Response = {
        status: data.length !== 0 ? StatusCode.OK : StatusCode.NOCONTENT,
        body: data
    }

    
    return response;
}
