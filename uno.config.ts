import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons,
} from 'unocss';

export default defineConfig({
  presets: [
    presetUno(), // default utilities (like Tailwind)
    presetAttributify(), // enables attribute-based usage (bg="red-500")
    presetIcons(), // use icons as classes
  ],
  theme: {
    breakpoints: {
      sm: '500px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
});
