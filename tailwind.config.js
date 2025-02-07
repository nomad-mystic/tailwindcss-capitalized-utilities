import plugin from 'tailwindcss/plugin';
import { TestUtilities } from './src/test-utility.js';

// Tests

export default {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities(TestUtilities);
        }),
    ],
};