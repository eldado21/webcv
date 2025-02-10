import { SocialUrl } from "./social-url";

export interface Owner {
    name: string;
    country: string;
    image: string;
    socialUrls: SocialUrl[];
}
