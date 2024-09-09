let ac = document.getElementsByClassName("ac")[0];
let scr = document.querySelector(".screen");
let per = document.querySelector(".percent");
let change = document.querySelector(".change");
let ans="";



document.addEventListener("keypress", function(e) {
    if(e.key=="="){
        var res = eval(ans);
        if(isNaN(res) || res=="Infinity"){
            scr.innerText = "enter valid data";
            ans="";
            return;
        }
        scr.innerText = res;
        ans=res;
        return;
    }
    ans+=e.key;
    scr.innerText=ans;
})

document.addEventListener("keyup", function(e) {
    console.log(e.key);
})

change.addEventListener("click", function() {
    if(ans=="" || ans=="undefined"){
        scr.innerText = "please enter values";
        return;
    }
    var res = eval(ans*(-1));
    if(res=="NaN" || res=="undefined"){
        scr.innerText="enter valid data";
        ans="";
        return;
    }
    scr.innerText = res;
    ans = res;
})

ac.addEventListener("click", function() {
    scr.innerText = "hello";
    ans = "";
});

per.addEventListener("click", function() {
    if(ans==""){
        scr.innerText = "please enter values";
        return;
    }
    var res = eval(ans/100);
    if(isNaN(res) || res=="undefined"){
        scr.innerText="enter valid data";
        ans="";
        return;
    }
    scr.innerText = res;
    ans = res;
})

let op1 = document.querySelectorAll(".op1");
for(let i = 0; i<op1.length; i++){
    op1[i].addEventListener("click", function() {
        ans=ans + op1[i].innerText;
        scr.innerText=ans;
    });
}

let operand = document.querySelectorAll(".special");
let result = document.querySelector(".res");

for(let i=0; i<operand.length; i++){
    operand[i].addEventListener("click", function() {
        if(ans=="undefined" || ans=="" || ans=="Infinity"){
            scr.innerText = "please enter values";
            return;
        }
            ans = ans + " " + operand[i].innerText +" ";
            scr.innerText = ans;
    });
}

result.addEventListener("click", function(){
    if(ans=="undefined" || ans=="" || ans=="NaN" || ans=="Infinity"){
        console.log(ans);
        scr.innerText = "please enter  values";
        ans = "";
        return;
    }
    let res = eval(ans);
    if(isNaN(res) || res=="undefined" || res=="Infinity"){
        scr.innerText="enter valid data";
        ans="";
        return;
    }
    console.log(res);
    scr.innerText = res;
    ans=res;
});







