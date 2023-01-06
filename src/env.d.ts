/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'uview-plus' {
  export function install(): void

  interface test {
    /** 邮箱格式校验 */
    email(email: string): boolean
  }
  interface $u {
    test: test,
    config: any
  }

  global {
    interface Uni {
      $u: $u
    }
  }
}

// 环境变量
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// npm依赖
declare module "uview-plus"
