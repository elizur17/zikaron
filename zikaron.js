let cardrd = ["a1","a2","b1","b2","c1","c2","d1","d2","e1","e2","f1","f2","g1","g2","h1","h2","i1","i2","j1","j2"]

function shufl (arr) {
    let arrr = arr.slice();
   
    let miqumsofi = []
    for (i in arr) {
        let r=Math.floor(arrr.length*Math.random());
        miqumsofi [i] = arrr [r];
         arrr.splice (r, 1)
    }
    return (miqumsofi)
}
function mazav(){
    let mazaav=""
    
    for (i in sach){
        mazaav=mazaav+"  "  +tozaa[i] +":"+sach[i]+"\n "
    }
  if (zugot>0) { mazaav=mazaav + sach[tor] + "עכשו תורך  "}
 else { mazaav=mazaav +  "תוצאות סופיות. תם המשחק"}
    return mazaav

}
let miqum=shufl(cardrd)
console.log(shufl(cardrd));
const hazeg = (event) =>{
    
    if((event.target.className !== "hidd")&&(peseq==1)){
       
    if(benzug==0){event.target.classList.add(event.target.id[0]);benzug=event.target.id;return}
    else{
        if (benzug[0]==event.target.id[0]){
            
            event.target.classList.replace("cards",event.target.id[0]);
            peseq=0;
             setTimeout (()=>{
                 event.target.classList.replace(event.target.id[0],"hidd"); console.log("sha");
            document.getElementById(benzug).classList.replace(benzug[0],"hidd"); console.log("2sha");
            benzug=0;
            tozaa[tor]=tozaa[tor]+1;zugot=zugot-1;
            peseq=1
            
            },2000);
           
        }
        else{
            console.log (benzug)
            event.target.classList.replace("cards",event.target.id[0]);console.log("shon");
            peseq=0;
            setTimeout (()=>{
            event.target.classList.replace(event.target.id[0],"cards");console.log("shon");
            document.getElementById(benzug).classList.replace(benzug[0],"cards");console.log("2shon");
            benzug=0
            tor=tor+1;
            peseq=1
            if(tor==missac){tor=0}
            },2000);
        }
        }
    }
    else {console.log("lo");}
    setTimeout (()=>{  document.getElementById("maaqav").innerText=(mazav());},2100)
     }

     


let missac=prompt("מספר שחקנים:");
let sach=[];
for (let index = 0; index < missac; index++) {
     sach[index]=prompt("שם שחקן ")
    
}

let benzug=0, tor=0,zugot=10,tozaa=[],peseq=1
for(n in sach) {tozaa[n]=0}
for(n of miqum){
    elem = document.createElement("div");
    elem.id=(n)
   
    
    sulhan.appendChild(elem);
     elem.className = "cards";
    elem.onclick= hazeg;
  
   
   
}
elem = document.createElement("div");
elem.id=("maaqav")
elem.innerText = (mazav());

sulhan.appendChild(elem);
 elem.className = "maaqav";