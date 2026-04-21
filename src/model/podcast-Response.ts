import { Podcast } from "./podcast-Model";

export interface Response {
    status: number,
    body: Podcast[]
}