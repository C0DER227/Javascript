//Fibonacci Series

let num=parseInt(prompt('Enter number of terms:'))
const fib=(n1=0,n2=1,nextTerm)=>{
  console.log('fibonacci series')
  for(let i=0;i<=num;i++){
    console.log(n1)
    nextTerm=n1+n2
    n1=n2
    n2=nextTerm
  }
}
fib()