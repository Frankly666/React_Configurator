import * as fs from "fs";
import * as path from "path";

// 解析命令行参数
const args = process.argv.slice(2);
const extension = args[0];
const componentName = args[1];
const outputDir = args[2] || "./src/components"; // 默认输出目录

if (!extension || !componentName) {
  console.error(
    "Usage: ts-node createComponent.ts [tsx|ts] ComponentName [OutputDir]"
  );
  process.exit(1);
}

// 定义组件名常量
const ComponentName = `${
  componentName[0].toUpperCase() + componentName.slice(1)
}`;

let componentTemplatePath,
  styleTemplatePath,
  componentTemplateContent,
  styleTemplateContent;

// 判断生成的模板是js还是ts
let fileName1 =
  extension === "ts"
    ? "../reactPages/ts/index.tsx"
    : "../reactPages/js/index.jsx";
let fileName2 =
  extension === "ts"
    ? "../reactPages/ts/style.ts"
    : "../reactPages/ts/style.js";

// 读取模板文件
componentTemplatePath = path.join(__dirname, fileName1);
styleTemplatePath = path.join(__dirname, fileName2);
componentTemplateContent = fs
  .readFileSync(componentTemplatePath, "utf8")
  .toString();
styleTemplateContent = fs.readFileSync(styleTemplatePath, "utf-8").toString();

// 替换模板中的COMPONENT_NAME占位符
const componentContent = componentTemplateContent.replace(
  /COMPONENT_NAME/g,
  ComponentName
);
const styleContent = styleTemplateContent.replace(
  /COMPONENT_NAME/g,
  ComponentName
);

// 构建输出文件路径
const componentOutputPath = path.join(outputDir, `index.${extension}x`);
const styleOutputPath = path.join(outputDir, `style.${extension}`);

// 确保输出目录存在
if (!fs.existsSync(componentOutputPath)) {
  fs.mkdirSync(componentOutputPath, { recursive: true });
}
if (!fs.existsSync(styleOutputPath)) {
  fs.mkdirSync(styleOutputPath, { recursive: true });
}

// 写入文件
fs.writeFileSync(componentOutputPath, componentContent, "utf8");
fs.writeFileSync(styleOutputPath, styleContent, "utf8");
console.log(
  `
          Component index.${extension}x created successfully at ${componentOutputPath},
          Component style.${extension} created successfully at ${styleOutputPath}
         `
);
