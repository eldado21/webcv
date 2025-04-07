import { Technology } from "./technology";

export interface Project {
    title: string;
    creationDate: string;
    description: string;
    url: string;
    techStack: Technology[];
    imageUrl: string;
}
