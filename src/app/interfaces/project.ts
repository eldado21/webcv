import { Technology } from "./technology";

export interface Project {
    title: string;
    creationDate: number;
    description: string;
    url: string;
    techStack: Technology[];
    imageUrl: string;
}
