/*
 * @Author: your name
 * @Date: 2021-09-22 13:27:24
 * @LastEditTime: 2021-09-27 14:50:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun-main/src/routes/index.js
 */
import Hello from '../views/Hello.vue'
import List from '../views/List.vue'
const routes = [
    {
      path: "/",
      name: "Hello",
      component: Hello,
    },
    {
      path: "/list",
      name: "List",
      component: List,
    },
  ];
  
  export default routes;