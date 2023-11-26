import { Menu } from "../types/Menu";
import {
    BsGithub as GithubIcon,
    BsInstagram as InstagramIcon,
    BsLinkedin as LinkedinIcon,
} from 'react-icons/bs';
import { BiLogoGmail as MailIcon } from 'react-icons/bi';

const iconSize = 20;

export const SOCIAL_MEDIA: Menu[] = [
    {
        name: 'Github',
        url: 'https://github.com/rafiakbar13',
        icon: <GithubIcon size={iconSize} />
    },
    {
        name: 'Instagram',
        url: 'https://instagram.com/mrafiakb',
        icon: <InstagramIcon size={iconSize} />
    },
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/muhammad-rafi-akbar-a8b67b148/',
        icon: <LinkedinIcon size={iconSize} />
    },
    {
        name: 'Mail',
        url: 'mailto:muhammadrafia13@gmail.com',
        icon: <MailIcon size={iconSize} />
    }
];