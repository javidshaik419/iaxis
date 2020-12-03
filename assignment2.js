function checkIsSequence(arr,seq){
 
    var fstIndex=0;
    var isSequence=true;
    for(var i=0;i<=seq.length-1;i++){
        console.log("=====",arr.indexOf(seq[i]));
    var temp=arr.indexOf(seq[i]);
    if(fstIndex < temp){
    fstIndex=temp;
    isSequence=true;
    }else{
    isSequence=false;
    return isSequence;
    }
    };
    return isSequence;
    }
// console.log(checkIsSequence([5, 1, 22, 25, 6, -1, 8, 10],[1, 6, -1, 10])) 
console.log(checkIsSequence([5, 1, 22, 25, 6, -1, 8, 10],[5, 25, 8, -1])) 
