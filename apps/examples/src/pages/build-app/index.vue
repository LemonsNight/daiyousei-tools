<script setup lang="ts">
import { onMounted, reactive, ref, unref, watch } from 'vue'

const localStorageKey = 'buildAppFormData'
const initFormData = {
  uniId: 'http://localhost:3000',
  isUploadServer: false,
  url: 'D:\\WEB\\sy-git\\mini-programv2',
  env: '',
}

const formData = ref()
const wsMessage = reactive(['正在尝试连接服务'])

watch(
  formData,
  () => {
    localStorage.setItem(localStorageKey, JSON.stringify(unref(formData)))
  },
  {
    deep: true,
  },
)

const init = () => {
  try {
    formData.value = JSON.parse(
      localStorage.getItem(localStorageKey) || JSON.stringify(initFormData),
    )
  } catch (e) {
    formData.value = initFormData
  }
}

onMounted(() => {
  init()
})

const onSubmit = () => {
  const socket = new WebSocket('ws://localhost:888')
  socket.addEventListener('open', () => {
    socket.send(JSON.stringify(unref(formData)))
  })
  socket.addEventListener('message', (e) => {
    wsMessage.push(e.data)
  })
}
</script>

<template>
  <main>
    <v-form v-if="formData" fast-fail @submit.prevent>
      <v-text-field
        v-model="formData.uniId"
        label="AppId"
        placeholder="不填默认本地 3000"
        autofocus
      />

      <v-text-field v-model="formData.url" label="项目根目录(手动输入)" />

      <v-switch
        v-model="formData.isUploadServer"
        label="是否将安装包上传至蒲公英"
      ></v-switch>

      <v-select
        v-model="formData.env"
        label="APP接口访问环境"
        :items="[
          '宣恩开发环境',
          '宣恩测试环境',
          '宣恩正式环境',
          '来凤正式环境',
        ]"
      ></v-select>

      <v-dialog width="500" :persistent="true">
        <template #activator="{ props }">
          <v-btn
            v-bind="props"
            type="submit"
            block
            class="mt-2"
            @click="onSubmit"
            >确 定</v-btn
          >
        </template>

        <template>
          <v-card color="primary">
            <v-card-text>
              <h3>服务端日志</h3>
              <ul>
                <li v-for="(item, index) in wsMessage" :key="index">
                  {{ item }}
                </li>
              </ul>
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </template>
      </v-dialog>
    </v-form>
  </main>
</template>
