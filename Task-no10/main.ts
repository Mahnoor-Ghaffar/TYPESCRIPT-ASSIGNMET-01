//Qno10:program # 1:Adding Comments: Choose two of the programs youâ€™ve written, and add at least one comment to each. If you donâ€™t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
//using for loop method want to run the same code over and over again, each time with a different value.
for (let i = 1; i < 11; i++) {
    let n1=2
    let ans=n1*i;
    console.log(n1," ","x"," ",i," ","="," ",ans);
}
//program # 2:if else
var score: number=80;
//if score equal or greater then 80 execute this condition 
if(score>=80){
    console.log("Grade A");
} 
//else if score equal or greater then 70 execute this condition 
else if(score>=70){
    console.log("Grade B");
}  
//else if score equal or greater then 60 execute this condition 
else if(score>=60){
    console.log("Grade C");
}
    //else print failed.
else{
    console.log("failed");
}
