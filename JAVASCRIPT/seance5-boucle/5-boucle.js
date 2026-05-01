const fruits = ["Orange","Watermellon","Apple","Kiwi"];
///////////////////////////////////
for (i=0;i<=3;i++){
    console.log(fruits[i]) 
}

for(item of fruits){
    console.log(item)
}

for(i in fruits){
    console.log(fruits[i])
}

let n = 0;
while(n<20){
   n = n + 1;
    if(n==6){
        continue;
    }
    console.log(n);
}

///////////////////////////////////
let m=10
do{
    console.log("m",m)
    
            m +=1
}while(m < 20)

fruits.forEach(function(item,i){
    console.log(item, i);
})

let newFruits;

newFruits=fruits.map(function(item){
    return item
})

console.log(newFruits)