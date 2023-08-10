const throat = require('throat');

const input = Array(10).fill(0).map((el, index)=>index)
const data = Promise.all(
  input.map(throat(2, (fileName, index) => fetchSomething(fileName, index)))
);

data.then((res)=>{
  console.log('res')
  console.log(res)
}).catch(err=>{
  console.log('this is err')
  console.log(err)
})

function fetchSomething(str, index) {
  if (index % 2 === 1) {
    console.log('hi')
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${str}${index}`)
        resolve(true)
      }, 0)
    })
  } else {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${str}${index}`)
        resolve(true)
      }, 2000)
    })
  }
}

