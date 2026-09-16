import type { SocialLink } from "../types";

export const SOCIALS: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/PFMassiani",
        linkTitle: `Follow Pierre-François Massiani on Github`,
        isActive: true,
    },
    {
        name: "Mail",
        href: "mailto:example@gmail.com",
        linkTitle: `Shoot me an email!`,
        isActive: false,
    },
    {
        name: "Google Scholar",
        href: "https://scholar.google.com/citations?user=ax9cEIQAAAAJ",
        linkTitle: `Pierre-François Massiani on Google Scholar`,
        isActive: true,
    },
    {
        name: "ORCID",
        href: "https://orcid.org/0000-0002-8019-4401",
        linkTitle: `Pierre-François Massiani on ORCID`,
        isActive: true,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/pfmassiani/",
        linkTitle: `Pierre-François Massiani on LinkedIn`,
        isActive: true, // Assuming Claude doesn't have a LinkedIn profile
    },
];

export const SOCIAL_ICONS: Record<string, string> = {
    Github: "Github",
    Mail: "Mail",
    Linkedin: "LinkedIn",
    "Google Scholar": "GoogleScholar",
    ORCID: "ORCID",
    RSS: "RSS",
};