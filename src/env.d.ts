/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
    readonly PUBLIC_DEFAULT_IMAGE: string;
    readonly PUBLIC_DEFAULT_BACKGROUND: string;
    readonly PUBLIC_DEFAULT_HEADER: string;
    readonly PUBLIC_DEFAULT_FOOTER: string;
    readonly PUBLIC_DEFAULT_TUNO: string;
    readonly GOOGLE_ANALYTICS_TRACKING_CODE: string;
}

interface ImportMeta {
readonly env: ImportMetaEnv;
}
