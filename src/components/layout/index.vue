<template>
	<Layout class="app-layout">
		<LayoutSider v-model:collapsed="collapsed" :trigger="null" collapsible>
			<div class="app-logo" :class="{ 'text-center': collapsed }">
				<FundProjectionScreenOutlined class="logo" />
				{{ collapsed ? '' : '演示平台' }}
			</div>
			<Menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
				<MenuItem key="1">
					<UserOutlined />
					<span>nav 1</span>
				</MenuItem>
				<MenuItem key="2">
					<VideoCameraOutlined />
					<span>nav 2</span>/
				</MenuItem>
				<MenuItem key="3">
					<UploadOutlined />
					<span>nav 3</span>
				</MenuItem>
			</Menu>
		</LayoutSider>
		<Layout>
			<LayoutHeader class="app-header">
				<MenuUnfoldOutlined v-if="collapsed" class="trigger" @click="switchCollapsed" />
				<MenuFoldOutlined v-else class="trigger" @click="switchCollapsed" />
			</LayoutHeader>
			<LayoutContent class="app-content">
				<router-view />
			</LayoutContent>
		</Layout>
	</Layout>
</template>

<script setup>
import { ref, watch } from 'vue'
import { Layout, LayoutSider, LayoutHeader, LayoutContent, Menu, MenuItem } from 'ant-design-vue'

const selectedKeys = ref(['1'])

const collapsed = ref(false)

const switchCollapsed = () => (collapsed.value = !collapsed.value)

watch(() => selectedKeys.value, (newVal) => {
	console.log(newVal)
})
</script>

<style lang="less" scoped>
.app-layout {
	height: 100vh;
	
	.text-center {
		text-align: center;
	}

	.trigger {
		font-size: 18px;
		line-height: 64px;
		padding: 0 24px;
		cursor: pointer;
		transition: color 0.3s;
		&:hover {
			color: #1890ff;
		}
	}

	.app-logo {
		height: 32px;
		line-height: 32px;
		margin: 16px 24px;
		font-size: 18px;
		color: #fff;

		.logo {
			font-size: 20px;
			margin-right: 2px;
		}
	}

	.app-header {
		background: #fff;
		padding: 0;
		height: 68px;
		line-height: 68px;
	}

	.app-content {
		margin: 24px 16px;
		padding: 24px;
		background: #fff;
		min-height: 280px;
	}
}
</style>
