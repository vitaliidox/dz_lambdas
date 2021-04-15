for(let i = 0;;i++){
    let first, second, info;

    do{
        first = prompt("first number");
        console.log(first);
    } while(isNaN(first) == false&&first ==null);

    do{
        second = prompt("second number");
        console.log(second);
    }while(isNaN(second) == false&&second ==null);

    if(first>second){
        info = "second number is less";
        console.log(info);
    }else if(first<second){
        info = "first number is less";
    }else{info = "Numbers are same"};

    alert(info);
}
