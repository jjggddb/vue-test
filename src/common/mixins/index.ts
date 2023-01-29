/*
 * @Author: guliangbin
 * @Date: 2022-08-09 17:38:41
 * @LastEditors: guliangbin
 * @LastEditTime: 2022-10-28 10:10:45
 * @Description: 
 */
import { onMounted, computed } from "vue"
export default function test(a: string, c: number) :Object {
  // const b:string = 'res'
  onMounted(() => {
    console.log('onMounted')
  })
  const b = computed(() => {
      return a + c
  })

  return {
    a,
    b,
    c
  }
}