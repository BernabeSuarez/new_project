const mobile = 480;
const mobilemin = 320;
const tablet = 768;
const tabletmin = 481;
const desktop = 1200;
const desktopmin = 1024;

/* Defining the media queries for the different screen sizes. */

export const media_mobile = `@media(max-width: ${mobile}px) and (min-width: ${mobilemin}px) `;
export const media_tablet = `@media(max-width: ${tablet}px) and (min-width: ${tabletmin}px)`;
export const media_desktop = `@media(max-width: ${desktop}px) and (min-width: ${desktopmin}px)`;