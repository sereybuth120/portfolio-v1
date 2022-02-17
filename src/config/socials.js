import LinkedInIcon from 'assets/Icons/LinkedInIcon';
import GitHubIcon from 'assets/Icons/GitHubIcon';
import FacebookIcon from 'assets/Icons/FacebookIcon';
import InstagramIcon from 'assets/Icons/InstagramIcon';

import { CONSTANTS } from './constants';

export const socials = [
  { name: 'LinkedIn', href: CONSTANTS.contact.linkedIn, icon: <LinkedInIcon /> },
  { name: 'GitHub', href: CONSTANTS.contact.gitHub, icon: <GitHubIcon /> },
  { name: 'Facebook', href: CONSTANTS.contact.facebook, icon: <FacebookIcon /> },
  { name: 'Instagram', href: CONSTANTS.contact.instagram, icon: <InstagramIcon /> },
];
