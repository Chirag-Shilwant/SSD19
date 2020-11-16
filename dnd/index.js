var dropTarget = document.querySelector(".wrapper");
var draggables = document.querySelectorAll(".task");

var map_object = new Map([["task1", "class1"], ["task7", "class1"], ["task9", "class1"], ["task11", "class1"], ["task3", "class3"], ["task4", "class3"], ["task2", "class2"],
 ["task5", "class2"],["task6", "class2"], ["task9", "class2"]])
/*
What to Drag - ondragstart and setData()
Then, specify what should happen when the element is dragged.

In the example above, the ondragstart attribute calls a function, 
drag(event), that specifies what data to be dragged.

The dataTransfer.setData() method sets the data type and the 
value of the dragged data:
*/

for(let i = 0; i < draggables.length; i++) {
  draggables[i].addEventListener("dragstart", function (ev) {
     ev.dataTransfer.setData("srcId", ev.target.id);
  });
}

/*
Where to Drop - ondragover
The ondragover event specifies where the dragged data can be dropped.

By default, data/elements cannot be dropped in other 
elements. 
To allow a drop, we must prevent the default handling of 
the element.

This is done by calling the event.preventDefault() method for 
the ondragover event:
*/

dropTarget.addEventListener('dragover', function(ev) {
  ev.preventDefault();
});

dropTarget.addEventListener('drop', function(ev) {
  ev.preventDefault();
  let target = ev.target;
  let droppable  = target.classList.contains('dropbox');
  let srcId = ev.dataTransfer.getData("srcId");

  //document.write(srcId);
  //document.write(target.getAttribute("id"));
  
  if (droppable && map_object.get(srcId) == target.id) {
    //document.write(document.getElementById(srcId).textContent);
    ev.target.appendChild(document.getElementById(srcId));
  }
  else{
    alert("Attribute does not belong to this class");
  }
});
