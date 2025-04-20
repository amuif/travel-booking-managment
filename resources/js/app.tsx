import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import NavigationMenu from './components/custom/navbar';
import { ThemeProvider } from './components/theme-provider';
import { initializeTheme } from './hooks/use-appearance';
import { Footer } from './components/custom/footer';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <>
                <NavigationMenu />
                <ThemeProvider  defaultTheme="light" storageKey="vite-ui-theme">
                    <App {...props} />
                </ThemeProvider>
                <Footer/>
            </>,
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();
