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