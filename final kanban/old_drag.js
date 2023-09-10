var draggables = document.querySelectorAll(".task");
const droppables = document.querySelectorAll(".swim-lane");
var oldparent;
var oldparent1;
var oldchildarray=[];
draggables.forEach((task) => {
  task.addEventListener("dragstart", () => {
    task.classList.add("is-dragging");
     oldparent=document.getElementById(task.parentNode.id);
     oldparent1=task.parentNode.id;
     console.log(oldparent1);
     /*var parent= task.closest(".swim-lane");
    if (parent) {
      // Loop through the child elements of the swim-lane
      for (var i = 0; i < parent.children.length; i++) {
          var child = parent.children[i];
          if (child.nodeName === 'P' && child.classList.contains('task')) {
              oldchildarray.push(child.id);
          }
      }
  }
  //HERE WE WILL CALL OUR API TO CHANGE the data of <SPECIFIC> list
  console.log(oldchildarray);*/
  });
  task.addEventListener("dragend", () => {
    task.classList.remove("is-dragging");
    console.log(100);
    console.log(oldparent);
    var newparent=task.parentNode.id;
    if(oldparent1!=newparent){
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

    var parent= task.closest(".swim-lane");
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


    }else{
    var parent= task.closest(".swim-lane");
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

}
  });
});

droppables.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();

    const bottomTask = insertAboveTask(zone, e.clientY);
    const curTask = document.querySelector(".is-dragging");

    if (!bottomTask) {
      zone.appendChild(curTask);
    } else {
      zone.insertBefore(curTask, bottomTask);
    }
  });
  /*zone.addEventListener("drop", () => {
    console.log(100); // Print 100 when a successful drop happens
  });*/
});

const insertAboveTask = (zone, mouseY) => {
  const els = zone.querySelectorAll(".task:not(.is-dragging)");

  let closestTask = null;
  let closestOffset = Number.NEGATIVE_INFINITY;

  els.forEach((task) => {
    const { top } = task.getBoundingClientRect();

    const offset = mouseY - top;

    if (offset < 0 && offset > closestOffset) {
      closestOffset = offset;
      closestTask = task;
    }
  });

  return closestTask;
};