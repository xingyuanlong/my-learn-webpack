// function getComponent() {
//   return import(/* webpackChunkName: "lodash" */ "lodash")
//     .then((_) => {
//       var element = document.createElement("div");

//       element.innerHTML = _.join(["Hello", "webpack"], " ");

//       return element;
//     })
//     .catch((error) => "An error occurred while loading the component");
// }

async function getComponent() {
  const element = document.createElement("div");
  const { default: _ } = await import(
    /* webpackChunkName: "lodash" */ "lodash"
  );

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
         var print = module.default;
    
         print();
       });

  return element;
}

// 懒加载
// 3分钟后才会加载
// 同期也可以换成其他方式
setTimeout(() => {
  getComponent().then((component) => {
    document.body.appendChild(component);
  });
}, 3000);


