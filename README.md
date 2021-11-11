# cjsTomjs
小工具：实现指定文件夹下的指定类型文件的commonjs转esmodule


# fs模块实现commJs转换成ESmodule

#### 介绍
fs模块实现commJs转换成ESmodule,将module.exports和require语法转成export default和import

#### 软件架构
软件架构说明


#### 安装教程

 git clone https://github.com/Simon-He95/cjsTomjs.git

#### 使用说明

1.  在main.js中引入readFile
2.  readFile(src, extension, excludeArr,callback)
3.  执行node main.js

#### readFile参数说明

1.  src：文件夹路径或者文件路径
2.  extension：匹配文件类型 例如'.js','.mjs'，如果存在多种类型文件可使用['.js','.mjs']
3.  excludeArr：排除个别文件的转换，例如['node_modules', 'src', 'tests']

