let get_name=sessionStorage.getItem("name");
let get_points=sessionStorage.getItem("points");
let user_time=sessionStorage.getItem("time");
document.querySelector(".name").innerHTML=get_name;
document.querySelector(".points").innerHTML=get_points;
document.querySelector(".time").innerHTML=user_time;


