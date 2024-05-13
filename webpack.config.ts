import path from "path";
import webpack from 'webpack';
import {buildWebpackConfig} from "./config/buildConfig/buildWebpackConfig";
import {BuildPaths} from "./config/buildConfig/types/config";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode = 'development';
const isDev = mode === 'development';
const config: webpack.Configuration = buildWebpackConfig({
    mode: 'development',
    paths,
    isDev
})

export default config;