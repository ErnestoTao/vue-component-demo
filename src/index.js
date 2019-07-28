import MySwitch from './packages/index';
console.log(MySwitch);
const components = [
    MySwitch
]

const install = function(Vue, opts = {}){
    components.map(component => {
        Vue.component(component.name, component);
    })
}

/* 支持使用标签的方式引入 */
if(typeof window !== 'undefined' && window.Vue){
    install(window.Vue);
}
console.log(123);
export default {
    install,
    MySwitch
}