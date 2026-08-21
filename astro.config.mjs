// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://misnotes.uk',
    base: '/',
    integrations: [
        starlight({
            title: 'MIS Notes',
            sidebar: [
                'ch01_mis/mis',
                'ch02_information/information',
                'ch03_hardware/hardware',
                'ch04_software/software',
                'ch05_network/network',
                'ch06_database/database',
                'ch07_web/web',
                'ch08_cryptograph/cryptograph',
                'ch09_security/security',
                'ch10_bitcoin/bitcoin',
                'ch11_netflix/netflix',
            ],
        }),
    ],
});
