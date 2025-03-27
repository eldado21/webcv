import { SocialUrl } from "./social-url";

export interface Owner {
    name: string;
    jobTitle: string;
    country: string;
    imageUrl: string;
    socialUrls: SocialUrl[];
}
