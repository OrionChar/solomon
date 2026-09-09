// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    fonts: [{
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
    }
    ]
});
