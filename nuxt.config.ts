// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    "srcDir":"src/",
    css:['@/styles/tailwind.css'],
    // 配置别名
    alias:{
        "@":"src/"
    },
    // 使用依赖
    modules:["@nuxtjs/tailwindcss"],
    typescript:{
        shim:false
    }
})
