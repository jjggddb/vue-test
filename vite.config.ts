/*
 * @Author: guliangbin
 * @Date: 2022-06-15 16:49:39
 * @LastEditors: guliangbin
 * @LastEditTime: 2022-08-02 10:31:41
 * @Description: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve("./src")
      }
    ]
  },
  base: "./",
  server: {
    host: '0.0.0.0',
    port: 8081
  }
})
  