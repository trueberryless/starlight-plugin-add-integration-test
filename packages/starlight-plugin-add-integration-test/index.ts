import type { StarlightPlugin } from "@astrojs/starlight/types";
import react from "@astrojs/react";

export default function starlightPluginAddIntegrationTest(): StarlightPlugin {
    return {
        name: "starlight-plugin-add-integration-test",
        hooks: {
            setup({ addIntegration, astroConfig, logger }) {
                /**
                 * This is the entry point of your Starlight plugin.
                 * The `setup` hook is called when Starlight is initialized (during the Astro `astro:config:setup` integration
                 * hook).
                 * To learn more about the Starlight plugin API and all available options in this hook, check the Starlight
                 * plugins reference.
                 *
                 * @see https://starlight.astro.build/reference/plugins/
                 */
                logger.info("Hello from the starlight-plugin-add-integration-test plugin!");

                const isReactLoaded = astroConfig.integrations.find(
                    ({ name }) => name === "@astrojs/react"
                );

                // Only add the React integration if it's not already loaded.
                if (!isReactLoaded) {
                    addIntegration(react());
                }
            },
        },
    };
}
