import { PageProps as InertiaPageProps } from '@inertiajs/inertia';
import type { route as routeFn } from 'ziggy-js';
declare global {
    const route: typeof routeFn;
}
declare module '@inertiajs/inertia' {
    interface PageProps extends InertiaPageProps {
        flash: {
            success?: string;
        };
    }
}
