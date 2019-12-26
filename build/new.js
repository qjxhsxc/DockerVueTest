'use strict';
/**
* @desicription:新建组件、页面模板
 * 命令：
 * 新建组件  make new component 组件名
 * 新建页面  make new page 页面名
* @author huangjianhui
* @date 2019/9/21
*/
process.on('exit', () => {
  console.log();
});

if (!process.argv[2]) {
  console.error('[组件名]必填');
  process.exit(1);
}

const path = require('path');
const fileSave = require('file-save');
const name =process.argv[3]
const component = path.resolve(__dirname, '../src/component', name);
const page = path.resolve(__dirname,'../src/pages',name)
if(process.argv[2]==='component'){
  const Files = [
    {
      filename: 'index.js',
      content: `import ${name} from './${name}.vue';

export default ${name};
`
    },
    {
      filename: `${name}.vue`,
      content: `<template>
    <div class="${name}"></div>
</template>
    
<script>
export default {
  name: '${name}'
};
</script>
<style lang='scss' scoped>
@import './index.scss';
</style>
`
    },
    {
      filename: path.join('./', `index.scss`),
      content: ``
    }
  ];
  // 创建组件
  Files.forEach(file => {
    fileSave(path.join(component, file.filename))
      .write(file.content, 'utf8')
      .end('\n');
  });
}else if(process.argv[2]==='page'){
  const Files = [
    {
      filename: `${name}.js`,
      content: `import Vue from "vue"
import App from "./${name}.vue"
import store from "@/store"
// 引入sgui组件库
import "southgisui/lib/sgui-theme/index.css"
//import "southgisui/lib/sgui-theme/fpa.css"
import {
  SgButton,
  SgButtonGroup,
  SgIcon,
  sgCollapse,
  sgCollapseItem,
  SgSignet,
  SgBadge,
  // form
  SgInput,
  SgCheckbox,
  SgCheckboxGroup,
  SgRadio,
  SgRadioGroup,
  SgSelect,
  SgOption,
  SgCascader,
  SgForm,
  SgFormItem,
  SgDropdown,
  SgDropdownItem,
  SgDatePicker,
  SgInputNumber,
  SgSlider,
  // data
  SgTree,
  SgTable,
  SgPage,
  //nav
  SgTab,
  SgTabPane,
  SgStep,
  SgBreadcrumb,
  SgBreadcrumbItem,
  //server
  SgSpin,
  SgMsg,
  SgProgress,
  SgNotice,
  SgTooltip,
  SgModal,
  SgPreview,
  SgContainer,
  SgMain,
  SgAside,
  SgHeader,
  SgRow,
  SgCol
} from 'southgisui'
// 引入系统样式表
import "@/assets/scss/common"
import "./${name}.scss"

Vue.use(SgButton)
Vue.use(SgButtonGroup)
Vue.use(SgIcon)
Vue.use(sgCollapse)
Vue.use(sgCollapseItem)
Vue.use(SgSignet)
Vue.use(SgBadge)
Vue.use(SgInput)
Vue.use(SgCheckbox)
Vue.use(SgCheckboxGroup)
Vue.use(SgRadio)
Vue.use(SgRadioGroup)
Vue.use(SgSelect)
Vue.use(SgOption)
Vue.use(SgCascader)
Vue.use(SgForm)
Vue.use(SgFormItem)
Vue.use(SgDropdown)
Vue.use(SgDropdownItem)
Vue.use(SgDatePicker)
Vue.use(SgInputNumber)
Vue.use(SgSlider)
Vue.use(SgTree)
Vue.use(SgTable)
Vue.use(SgPage)
Vue.use(SgTab)
Vue.use(SgTabPane)
Vue.use(SgStep)
Vue.use(SgBreadcrumb)
Vue.use(SgBreadcrumbItem)
Vue.use(SgSpin)
Vue.use(SgMsg)
Vue.use(SgProgress)
Vue.use(SgNotice)
Vue.use(SgTooltip)
Vue.use(SgModal)
Vue.use(SgContainer)
Vue.use(SgNotice)
Vue.use(SgMain)
Vue.use(SgAside)
Vue.use(SgHeader)
Vue.use(SgPreview)
Vue.use(SgRow)
Vue.use(SgCol)
// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount("#${name}")
`
    },
    {
      filename: `${name}.html`,
      content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <title>${name}</title></head>
    <link rel="stylesheet" href="http://192.168.10.9:3002/bootstrap/common.css">
<body>
<div id="${name}"></div>
</body>
<script src="http://192.168.10.9:3002/bootstrap/axios.min.js"></script>
<script src="http://192.168.10.9:3002/bootstrap/apiMgr.js"></script>
</html>
`
    },
    {
      filename:`${name}.vue`,
      content:`<template>
    <div class="${name}"></div>
</template>

<script>
export default {
  name: "${name}"
}
</script>

<style scoped lang="scss">
@import "./${name}.scss";
</style>
`
    },
    {
      filename: path.join('./', `${name}.scss`),
      content: ``
    }
  ];
  // 创建页面
  Files.forEach(file => {
    fileSave(path.join(page, file.filename))
      .write(file.content, 'utf8')
      .end('\n');
  });
}


console.log('创建完成');
