/*
 * @Author: guliangbin
 * @Date: 2022-06-15 17:33:13
 * @LastEditors: guliangbin
 * @LastEditTime: 2022-08-08 15:51:26
 * @Description: 
 */
// let debounceTimer: NodeJS.Timeout | null , throttleTimer: NodeJS.Timeout | null
let debounceTimer: any | null , throttleTimer: any

// 防抖
export const debounce = (fn: Function, delay: number) :Function => {
  return (...args: unknown[]) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    debounceTimer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};
// 节流
export const throttle = (fn: Function, delay: number) :Function => {
  return (...args: unknown[]) => {
    if (throttleTimer) {
      return;
    }
    throttleTimer = setTimeout(() => {
      fn.apply(this, args);
      throttleTimer = null;
    }, delay);
  }
}