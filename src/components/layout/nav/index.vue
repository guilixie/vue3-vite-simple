<template>
	<Menu :theme="theme" :mode="mode" v-model:selectedKeys="selectedKeys">
		<NavItem data="routes" />
	</Menu>
</template>

<script setup>
import { Menu } from 'ant-design-vue'
import NavItem from './NavItem.vue'
import routes from '@/router/routes.js'

defineProps({
	theme: {
		type: String,
		default: 'dark'
	},
	mode: {
		type: String,
		default: 'inline'
	}
})
</script>
