import baseConfig, { pkgName, fileName } from "./rollup.config";

export default {
    ...baseConfig,
    output: {
        name: pkgName,
        file: fileName({ name: pkgName, type: 'esm' }),
        format: 'es'
    }
}