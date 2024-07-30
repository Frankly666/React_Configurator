<h1 align="center">❯ React-Configurator</h1>

<p align="center">
  <a href="https://npmjs.org/package/react-configurator">
    <img src="https://img.shields.io/npm/v/react-configurator.svg" alt="version" />
  </a>
  <!-- <a href="https://github.com/terkelg/prompts/actions/workflows/test.yml">
    <img src="https://github.com/terkelg/prompts/actions/workflows/test.yml/badge.svg" alt="test" />
  </a>
  <a href="https://npmjs.org/package/react-configurator">
    <img src="https://img.shields.io/npm/dm/react-configurator.svg" alt="downloads" />
  </a>
  <a href="https://licenses.dev/npm/react-configurator">
    <img src="https://licenses.dev/b/npm/react-configurator" alt="licenses" />
  </a> -->
  
</p>

# 基于react的快速配置目录的工具
![split](https://github.com/terkelg/prompts/raw/master/media/split.png)
## 工具一: 快速生成react组件

#### ❯ install
```
npm i react-configurator
```

#### ❯ use
* 使用命令行生成react组件
* 注意这里采用的是styled-components的方式使用css
```
npx create-component [options] <ComponentName> <OutputDirectory>
```

#### ❯ examples
```
npx create-component ts MyComponent ./src/components


// 成功后终端输出
Component index.tsx created successfully at src\components\MyComponent\index.tsx,
Component style.ts created successfully at src\components\MyComponent\style.ts
```

![split](https://github.com/terkelg/prompts/raw/master/media/split.png)

## 工具二: 快速生成目录文件

