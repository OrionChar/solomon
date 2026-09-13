// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

export const locales = ['en', 'ru',] as const;

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: 'en',
        locales: [...locales],
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: true
        }
    },
    fonts: [
        {
            provider: fontProviders.local(),
            name: "Cinzel",
            cssVariable: "--font-cinzel",
            options: {
                variants: [
                    {
                        weight: "400 900",
                        style: "normal",
                        src: ["./src/shared/assets/fonts/Cinzel/Cinzel-VariableFont_wght.ttf"],
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: "Cormorant Garamond",
            cssVariable: "--font-cormorant-garamond",
            options: {
                variants: [
                    {
                        weight: "300 700",
                        style: "normal",
                        src: ["./src/shared/assets/fonts/Cormorant Garamond/CormorantGaramond-VariableFont_wght.ttf"],
                    },
                    {
                        weight: "300 700",
                        style: "italic",
                        src: ["src/shared/assets/fonts/Cormorant Garamond/CormorantGaramond-Italic-VariableFont_wght.ttf"],
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: "Segoe Script",
            cssVariable: "--font-segoe-script",
            options: {
                variants: [{
                    src: ['./src/shared/assets/fonts/Segoe-Script.woff'],
                    weight: 'normal',
                    style: 'normal'
                }]
            }
        },
        {
            provider: fontProviders.local(),
            name: "Beware",
            cssVariable: "--font-beware",
            options: {
                variants: [{
                    src: ['./src/shared/assets/fonts/Beware.ttf'],
                    weight: 'normal',
                    style: 'normal',
                }]
            },
        },
        {
            provider: fontProviders.local(),
            name: "Sagrada",
            cssVariable: "--font-amador-gothic",
            options: {
                variants: [{
                    src: ['./src/shared/assets/fonts/Sofiya/Amador Gothic.ttf'],
                    weight: 'normal',
                    style: 'normal',
                }]
            },
        },
        {
            provider: fontProviders.local(),
            name: "Sagrada",
            cssVariable: "--font-durer-gothic",
            options: {
                variants: [{
                    src: ['./src/shared/assets/fonts/Sofiya/Durer Gothic.ttf'],
                    weight: 'normal',
                    style: 'normal',
                }]
            },
        }
    ]
});
