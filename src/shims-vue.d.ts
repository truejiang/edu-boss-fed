/**
 * 解决ts无法识别 import * from 'xx.vue'
 */

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
