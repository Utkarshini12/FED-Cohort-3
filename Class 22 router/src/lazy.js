// import {add} from './math';

// console.log(add(15, 20));



// import('./math').then(math=> {
//   console.log(math.add(15, 20));
// })

import React, {Suspense} from 'react'
import Component from './component';
// import component from React.lazy(()=> ('./component'));
// import component2 from React.lazy(()=> ('./component'));

// const allImports = {
//   1: Component1
//   2: Componet2
// }

// import allImports from React.lazy(()=> ('./allimport.js'))


const CustomComponent = React.lazy(
  () =>
    new Promise((resolve, reject) =>
      setTimeout(() => resolve(import("./component")), 100)
    )
  
);

const CustomComponent2 = React.lazy(
  () => 
    new Promise((resolve, reject) => setTimeout(() => resolve(import("./component")), 5000))
);


function Lazy() {
  return(
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <CustomComponent label="Component1 " />
    </Suspense>
    <Suspense fallback={<div>Loading...</div>}>
      <CustomComponent2 label="Component 2" />
    </Suspense>
    </>


  )
}

export default Lazy; 

