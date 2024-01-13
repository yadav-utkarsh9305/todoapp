const task = document.getElementById("input-box");
const time = document.getElementById("input-box-1");
const group = document.getElementById("list");
function Addtask(){

  if(task.value === ''|| time.value ==='' ){
    alert("You Must Write Any Task With The Time");
  }
  else{
    let div = document.createElement('div');
    group.appendChild(div);
    let span = document.createElement('span');
    span.innerHTML= task.value;
    div.appendChild(span);
  
    let Samay = document.createElement('span');
     Samay.innerHTML= time.value;
     div.appendChild(Samay);
      // Delete button
     let Del = document.createElement('button');
     Del.innerText='Delete';
     
     div.appendChild(Del);

    
  }
  Savedata()
  task.value = "";
  time.value = "";
  


}

   group.addEventListener("click" ,(e) => {
   if (e.target.tagName === "BUTTON") {
   e.target.parentElement.remove();
   Savedata()
   }
   },false);

 function Savedata() {
  localStorage.setItem("data",group.innerHTML);
 }
  function Showdata(){
    group.innerHTML = localStorage.getItem("data");
  }
  Showdata();
   