const arr = ['1','2','3','4','5'];
const arr2=['3','4','5','6','7']
function conArr() {
     let newArr=[]
  arr.forEach(el => {
       arr2.forEach(el1=>{
          if(el===el1){
            newArr.push(el)
          }
       })
  });
return newArr
}
console.log(conArr());