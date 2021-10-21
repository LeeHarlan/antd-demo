import { defineConfig } from 'umi';

export default defineConfig({
  mfsu: {},
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  theme: {
    '@root-entry-name': 'default',
  }
});
