function prime(num){
count = 0;
  for(let i =2;i<=num/2;i++){
    if(num%i==0){
      count++;
  }
}
 if(count==0){
  return true;
}else{
 return false;
}
}
let ans=prime(13);
 if (ans==true){
   console.log("Prime");
 }else{
   console.log("not Prime");
}