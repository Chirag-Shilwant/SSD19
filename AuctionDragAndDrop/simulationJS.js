var map1 = new Map([["task1" , "b1"], ["task2" , "b1"],["task3" , "b1"], ["task4" , "b1"], ["task5" , "b2"], ["task6" , "b2"], ["task7" , "b2"], ["task8" , "b3"], ["task9" , "b3"], ["task10" , "b3"], ["task11" , "b3"], ["task12", "b4"], ["task13", "b4"],["task14", "b2"], ["task15", "b5"], ["task16", "b5"], ["task17", "b5"], ["task18", "b5"], ["task19", "b6"], ["task20", "b6"], ["task21", "b6"]]); 

var dropTarget = document.querySelector(".wrapper");
var draggables = document.querySelectorAll(".task");

console.log(draggables)
console.log(dropTarget)

for(let i = 0; i < draggables.length; i++) {
  draggables[i].addEventListener("dragstart", function (ev) {
     ev.dataTransfer.setData("srcId", ev.target.id);
  });
}


dropTarget.addEventListener('dragover', function(ev) {
  ev.preventDefault();
});

dropTarget.addEventListener('drop', function(ev) {
  ev.preventDefault();
  let target = ev.target;
  let droppable  = target.classList.contains('box');
  let srcId = ev.dataTransfer.getData("srcId");
  console.log(target.id)
  console.log(map1.get(srcId))
  if(droppable)
  {
	  if (map1.get(srcId) == target.id) {
	    ev.target.appendChild(document.getElementById(srcId));
	  }
	  else
	  {
	    alert("Wrong Answer")
          }
  }
  else
  {
  	alert("Drop the item in the rectangle only")
  }
          
});


