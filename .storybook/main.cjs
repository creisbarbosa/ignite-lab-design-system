module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  
  // Se o repositório estiver dentro de outra dependência no github, a ação abaixo será necessária para fazer o storybook entender a url, se ele já for o repositório raiz ou uma página pesso, não será necessário realizar esta tarefa.

  viteFinal: (config, {configType}) => {
    if (configType === 'PRODUCTION') {
      config.base = '/ignite-lab-design-system/'
    }
     return config
  }
}