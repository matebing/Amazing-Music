/// <reference types="react-scripts" />

//声明node环境
declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_BASE_URL: string
  }
}
