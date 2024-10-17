import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightPluginAddIntegrationTest from 'starlight-plugin-add-integration-test'

export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl: 'https://github.com/trueberryless/starlight-plugin-add-integration-test/edit/main/docs/',
      },
      plugins: [starlightPluginAddIntegrationTest()],
      sidebar: [
        {
          label: 'Start Here',
          items: [{ slug: 'getting-started' }],
        },
      ],
      social: {
        github: 'https://github.com/trueberryless/starlight-plugin-add-integration-test',
      },
      title: 'starlight-plugin-add-integration-test',
    }),
  ],
})
