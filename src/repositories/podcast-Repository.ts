import fs from "fs"
import path from "path"
import { Podcast } from '../model/podcast-Model';




const pathData = path.join(__dirname,"../repositories/poscasts.json")


export const repositoryPodcast = async (podcastname ?: string): Promise<Podcast[]> =>{
    const language = "utf8";

    const rawData =  fs.readFileSync(pathData, language);
    let jsonFile = JSON.parse(rawData)


    if(podcastname){
        jsonFile = jsonFile.filter(
            (podcast: Podcast) => podcast.podCastName === podcastname 
        );
    }

    return jsonFile;
}
