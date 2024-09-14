import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  // If entries is not provided, will be automatically inferred from package.json
  entries: [
    // default
    './src/index',
    // mkdist builder transpiles file-to-file keeping original sources structure
    {
      builder: 'mkdist',
      input: './src/generated/',
      outDir: './dist/generated',
    },
  ],

  // Generates .d.ts declaration file
  declaration: true,

  // See https://github.com/unjs/unbuild/issues/268#issuecomment-1877020726
  rollup: {
    emitCJS: true
  }
});
