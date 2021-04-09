import { App } from "vue";
import HelloWorld from "../components/HelloWorld.vue";

const plugins = {
    install(app: App) {
        app.config.globalProperties.$echo = () => {
            console.log('a plugin')
        }
        app.component('hello-word', HelloWorld)
        app.provide('test', { message: 'form plugin' })
    }
}

export default plugins