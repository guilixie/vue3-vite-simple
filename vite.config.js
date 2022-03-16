import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteComponents, { AntDesignVueResolver } from 'vite-plugin-components'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			components: resolve(__dirname, './src/components'),
			views: resolve(__dirname, './src/views')
		}
	},
	plugins: [
		vue(),
		viteComponents({
			customComponentResolvers: [
				AntDesignVueResolver({
					importStyle: 'css', // TODO 目前无法正确按需引入样式，why???
					resolveIcons: true // 图标可以自动导入
				})
			]
		})
	]
})
