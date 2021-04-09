import HelloWorld from "./components/HelloWorld.vue";
import { App } from "vue";

const components = [
    HelloWorld
]

const componentInstall = (app: App) => {
    components.forEach(component => {
        app.component(component.name, component)
    })
}

export {
    HelloWorld,
    componentInstall
}

export default componentInstall