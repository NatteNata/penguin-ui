import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	build: {
		lib: {
			entry: 'src/index',
			name: 'penguin-ui',
			formats: ['es', 'cjs', 'umd'],
			fileName: format => `penguin-ui.${format}.js`,
		},
	},
})