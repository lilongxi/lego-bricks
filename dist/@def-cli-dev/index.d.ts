import HelloWorld from "./components/HelloWorld.vue";
import { App } from "vue";
declare const componentInstall: (app: App) => void;
export { HelloWorld, componentInstall };
export default componentInstall;
