<template>
  <v-card class="mx-auto" color="grey-lighten-3" max-width="448">
    <v-layout>
      <v-app-bar
        color="teal-darken-4"
        image="https://picsum.photos/1920/1080?random"
      >
        <template #image>
          <v-img
            gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template #prepend>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
      <v-main>
        <v-container fluid>
          <v-row>
            <v-col v-for="item in list" :key="item" cols="12">
              <v-card :title="item">
                <v-card-actions>
                  <v-btn
                    color="orange"
                    text="启动服务"
                    @click="handleStart"
                  ></v-btn>
                  <v-btn
                    color="orange"
                    text="关闭服务"
                    @click="handleClose"
                  ></v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>
<script setup lang="ts">
const list = ['dvs-main', 'dvs-cons', 'dvs-ffp', 'dvs-base']
const handleStart = () => {}
const handleClose = () => {}
</script>
