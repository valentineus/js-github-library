import babel from "rollup-plugin-babel";
import { uglify } from "rollup-plugin-uglify";
import { version } from "./package.json";

export default [ {
    input: "src/index.js",
    output: {
        file: `dist/bundle-${version}.js`,
        format: "iife",
        name: "Github"
    },
    plugins: [
        babel({
            babelrc: false,
            comments: true,
            presets: [ [ "es2015", { modules: false } ] ]
        })
    ]
},
{
    input: "src/index.js",
    output: {
        file: `dist/bundle-${version}.min.js`,
        format: "iife",
        name: "Github"
    },
    plugins: [
        babel({
            babelrc: false,
            comments: false,
            presets: [ [ "es2015", { modules: false } ] ]
        }),
        uglify({
            ie8: true,
            sourcemap: true,
            toplevel: false,
            warnings: true
        })
    ]
} ];
