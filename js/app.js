function submitform(e){
e.preventDefault();
var name=document.forms["welcome_form"]["name"].value;
sessionStorage.setItem("name", name);   
console.log(form_data);
}