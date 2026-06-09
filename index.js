// reurular function statement
function sweet(){
    console.log ("misty")
}
const dokan =sweet()
console.log(dokan)
//function exprestion
const matribandar=function(){
    console.log("sweety")
}
//named exprestion function
const namematribandar=function matribandar(){
    console.log("sweety")
}
// arrow function
const hello=()=>{
    return{
        a:5,
        b:6
    }
})
console.log(hello())

funciton hello(){
    return ()=> {
        conlolog.log("hello")
    }
}
//nullish undifind
console.log(null ?? "hello")
console.log(undefined  || "hello")
console.log(null && "hello")

 api fetch("https://jsonplaceholder.typicode.com/posts")
 .then(res=>res.json())
.then(data=>console.log(data))
async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();
  } catch (err) {
    console.log(err);
  }
}