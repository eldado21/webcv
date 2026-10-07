import { Technology } from "./technology";

export interface Project {
    id: number;
    title: string;
    creationDate: number;
    description: string;
    url: string;
    techStack: Technology[];
    imageUrl: string;
}
