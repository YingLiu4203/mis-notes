// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
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
                'ch07_cryptograph/cryptograph',
                'ch08_security/security',
                'ch09_bitcoin/bitcoin',
                'ch10_netflix/netflix',
            ],
        }),
    ],
});
