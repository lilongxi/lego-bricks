import { name } from "../package.json";
import vue from "rollup-plugin-vue";
import css from "rollup-plugin-css-only";
import { terser } from "rollup-plugin-terser";
import typescript2 from "rollup-plugin-typescript2";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export const fileName = ({ name, type }) => `dist/${name}.${type}.js`
export const overrides = {
    compilerOptions: {
        declaration: true
    },
    exclude: [
        'node_modules',
        "tests/**/*.ts",
        "tests/**/*.tsx"
    ]
}
export const pkgName = name

export default {
    input: 'src/index.ts',
    output: {
        name,
        file: fileName({ name, type: 'esm' }),
        format: 'es'
    },
    plugins: [
        terser(),
        nodeResolve(),
        typescript2({ tsconfigOverride: overrides }),
        vue(),
        css({ output: 'bundle.css' })
    ],
    external: [
        'vue'
    ]
}