const language = [{
  skillName: 'JavaScript (ES 2018)',
  proficiency: 80,
  detail: [
    '原生模块',
    'Class的创建和继承',
    '模板字符串',
    'Set对象',
    'async函数'
  ],
  collapse: false
}, {
  skillName: 'HTML5',
  proficiency: 85,
  detail: [
    '语义化标签',
    'canvas绘制',
    'FormData、Blob等新对象',
    'progress、dialog、video等新标签',
    'contenteditable等新属性'
  ],
  collapse: false
}, {
  skillName: 'CSS3',
  proficiency: 85,
  detail: [
    'SASS',
    'grid / flex布局',
    '响应式单位',
    '媒体查询',
    'animation / transition',
  ],
  collapse: false
}, {
  skillName: '微信小程序',
  proficiency: 80,
  detail: [
    '内置组件',
    '数据绑定',
    '列表、条件渲染',
    '云开发'
  ],
  collapse: false
}]
const library = [{
  skillName: 'vue.js',
  proficiency: 65,
  detail: [
    'v-bind',
    '自定义事件',
    '单文件组件'
  ],
  collapse: false
}, {
  skillName: 'react.js',
  proficiency: 65,
  detail: [
    '创建组件',
    '组件间通信'
  ],
  collapse: false
}, {
  skillName: 'three.js',
  proficiency: 65,
  detail: [
    '创建几何体、材质',
    '选择物体',
    '绘制几何体',
    'requestAnimationFrame'
  ],
  collapse: false
}, {
  skillName: 'express',
  proficiency: 70,
  detail: [
    '使用generator初始化项目',
    '基础的路由规则',
    '使用pug模板引擎',
    '增删查改数据库'
  ],
  collapse: false
}, {
  skillName: 'node.js',
  proficiency: 70,
  detail: [
    'NPM',
    'webpack构建',
    '发送请求抓取html',
    '读写本地文件'
  ],
  collapse: false
}, {
  skillName: 'Bootstrap',
  proficiency: 90,
  detail: [
    '4.0组件',
    '使用utilities'
  ],
  collapse: false
}, {
  skillName: 'MongoDB',
  proficiency: 50,
  detail: [
    'MongoDB Atlas',
    '简单CRUD操作'
  ],
  collapse: false
}]
const software = [{
  skillName: 'Photoshop',
  proficiency: 90,
  detail: [
    '设计传单、海报、喷绘、名片、室内画报等'
  ],
  collapse: false
}, {
  skillName: 'Illustrator',
  proficiency: 70,
  detail: [
    '设计logo',
    '制作毛笔字体效果'
  ],
  collapse: false
}, {
  skillName: 'Premiere',
  proficiency: 85,
  detail: [
    '视频剪辑',
    '加字幕、音轨',
    '简单特效'
  ],
  collapse: false
}, {
  skillName: 'Word 2016',
  proficiency: 90,
  detail: [
    '高效使用标题样式'
  ],
  collapse: true
}, {
  skillName: 'Power Point 2016',
  proficiency: 85,
  detail: [
    '高效使用母版'
  ],
  collapse: true
}, {
  skillName: 'Sketch Up',
  proficiency: 90,
  detail: [
    '制作建筑模型'
  ],
  collapse: true
}, {
  skillName: '3ds Max',
  proficiency: 90,
  detail: [
    '根据CAD挤出',
    '制作简单模型'
  ],
  collapse: true
}]

export default {language, library, software}
