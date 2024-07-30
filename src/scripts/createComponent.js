import * as fs from 'fs';
import * as path from 'path';

// 解析命令行参数
const args = process.argv.slice(2);
const extension = args[0];
const componentName = args[1];
const outputDir = args[2] || './src/components'; // 默认输出目录

if (!extension || !componentName) {
  console.error('Usage: ts-node createComponent.ts [tsx|ts] ComponentName [OutputDir]');
  process.exit(1);
}

// 定义组件名常量
const ComponentName = `${componentName[0].toUpperCase() + componentName.slice(1)}`;

// 读取模板文件
const templatePath = path.join(__dirname, 'Template.tsx');
const templateContent = fs.readFileSync(templatePath, 'utf8').toString();

// 替换模板中的COMPONENT_NAME占位符
const content = templateContent.replace(/ComponentName/g, ComponentName);

// 构建输出文件路径
const outputPath = path.join(outputDir, `${componentName}${extension}`);

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 写入文件
fs.writeFileSync(outputPath, content, 'utf8');
console.log(`Component ${componentName}${extension} created successfully at ${outputPath}`);