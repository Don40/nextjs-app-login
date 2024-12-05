import { Raleway, Montserrat, Darker_Grotesque, Playfair_Display } from 'next/font/google'

const raleway_init = Raleway({
    subsets: ['latin'],
    weight: ['100', '300', '700'],
    variable: '--font-raleway',
});


const montserrat_init = Montserrat({
    subsets: ['latin'],
    weight: ['600'],
    variable: '--font-montserrat',
});

const darkerGrotesque_init = Darker_Grotesque({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-darker-grotesque',
});

const playfairDisplay_init = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800', '900'],
    variable: '--font-playfair-display',
});

export const raleway = raleway_init.variable;
export const montserrat = montserrat_init.variable;
export const grotesque = darkerGrotesque_init.variable;
export const playfair = playfairDisplay_init.variable;
