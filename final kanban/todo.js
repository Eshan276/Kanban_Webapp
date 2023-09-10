var curid;
const form = document.getElementById("todo-form");
const todotitle = document.getElementById("todo-title");
const tododesc = document.getElementById("todo-description");
var todoLane = document.getElementById("todo-lane");
const dropdownForm1 = document.getElementById("dropdownForm");
//todolane ta hoche todo r list ta
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const titlevalue = todotitle.value;
  const descvalue= tododesc.value;
  
  if (!titlevalue) return;

  const newTask = document.createElement("p");
  newTask.classList.add("task");
  //newTask.id.add(curid);
  curid++
  newTask.setAttribute("id", curid);
  
  newTask.setAttribute("draggable", "true");
  //newTask.innerText = value;
  newTask.innerText= titlevalue + "\n" + descvalue;
  var taskupload= titlevalue + "$" + descvalue;
   //HERE WE WILL CALL OUR API TO add  data of this task+ need to add 
  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
     oldparent=document.getElementById(newTask.parentNode.id);
     oldparent1=newTask.parentNode.id;
     console.log(oldparent1);

  });
  /*newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
     oldparent=document.getElementById(newTask.parentNode.id);
     oldparent1=newTask.parentNode.id;
     console.log(oldparent1);
  });*/
  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
    console.log(100);
    console.log("oldparent"+oldparent1[2]);
    var newparent=newTask.parentNode.id;
    if(oldparent1!=newparent){
      var opr=1;//alada
      //console.log(oldparent1+"equal"+newparent);
      //var childElements = oldparent.querySelectorAll('.task');
      var childElements = oldparent.children;
      var paragraphIds = [];

  // Iterate through the child elements
  for (var i = 0; i < childElements.length; i++) {
    var child = childElements[i];

    // Check if the child is a paragraph
    if (child.nodeName === "P") {
      // Push the ID of the paragraph into the array
      paragraphIds.push(child.id);
    }
  }

  // Now, paragraphIds contains the IDs of the child paragraphs
   console.log(paragraphIds)
      //call api to enter this data

    var parent= newTask.closest(".swim-lane");
    var childarray=[];
    console.log(parent);
    if (parent) {
      // Loop through the child elements of the swim-lane
      for (var i = 0; i < parent.children.length; i++) {
          var child = parent.children[i];
          if (child.nodeName === 'P' && child.classList.contains('task')) {
              childarray.push(child.id);
          }
      }
  }
  //HERE WE WILL CALL OUR API TO CHANGE the data of <SPECIFIC> list
  console.log(childarray);
  console.log("not same");
   
  var order=[];
  if(oldparent1[2]=="d"){
    //console.log(oldparent1[2]+"how");
  order.push(0);
}else if(oldparent1[2]=="i"){
  order.push(1);
}else if(oldparent1[2]=="n"){
  order.push(2);
}
if(newparent[2]=="d"){
  //console.log(newparent[2]+"how");
  order.push(0);
}else if(newparent[2]=="i"){
  order.push(1);
}else if(newparent[2]=="n"){
  order.push(2);
}
console.log(user,paragraphIds ,childarray,order,opr);
list_entry(user,paragraphIds ,childarray,order,opr);
    }else{
      var opr=0; // same hole
      console.log("new"+newparent);
    var parent= newTask.closest(".swim-lane");
    var childarray=[];
    console.log(parent);
    if (parent) {
      // Loop through the child elements of the swim-lane
      for (var i = 0; i < parent.children.length; i++) {
          var child = parent.children[i];
          if (child.nodeName === 'P' && child.classList.contains('task')) {
              childarray.push(child.id);
          }
      }
  }
  //HERE WE WILL CALL OUR API TO CHANGE the data of <SPECIFIC> list
  console.log(childarray);
  console.log("same");
  var order=[];
if(newparent[2]=="d"){
  order.push(0);
}else if(newparent[2]=="i"){
  order.push(1);
}else if(newparent[2]=="n"){
  order.push(2);
}
var newarray1=[0]; //unused
console.log(user,childarray,newarray1,order,opr);
list_entry(user,childarray,newarray1,order,opr);


}

  });

  todoLane.appendChild(newTask);
  task_entry(user,taskupload,curid)
  todotitle.value ="";
  tododesc.value = "";
  dropdownForm1.style.display = "none";
  //draggables = document.querySelectorAll(".task");
  console.log(newTask.parentNode.id)
});
function task_entry (user,utask,curid1) {
      
  // instantiate a headers object
  var myHeaders = new Headers();
  // add content type header to object
  myHeaders.append("Content-Type", "application/json");
  // using built in JSON utility package turn object to string and store in a variable
  var raw = JSON.stringify({"user": user,"utask":utask,"curid1":curid1});
  // create a JSON object with parameters for API call and store in a variable
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  // make API call with parameters and use promises to get response
  fetch("https://4qcyee34jd.execute-api.ap-south-1.amazonaws.com/dev/trello_taskentry", requestOptions)
    .then(response => response.text())
    .then(result => {
      const responseBody = JSON.parse(result).body;
      console.log(responseBody);
    })
    .catch(error => console.log('error', error));
}
