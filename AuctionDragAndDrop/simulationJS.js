alertify.alert("1. Drag attributes, methods, etc from list on the LHS and drop it to its respective box in the class").set('resizable',true).resizeTo('50%',700).setHeader('Instructions');
var map1 = new Map([["task1" , "b1"], ["task2" , "b1"],["task3" , "b1"], ["task4" , "b1"], ["task5" , "b2"], ["task6" , "b2"], ["task7" , "b2"], ["task8" , "b3"], ["task9" , "b3"], ["task10" , "b3"], ["task11" , "b3"], ["task11a", "b7"], ["task11b", "b7"], ["task11c", "b9"], ["task11d", "b10"], ["task11e", "b9"], ["task11f", "b10"], ["task12", "b4"], ["task13", "b4"],["task14", "b2"], ["task15", "b5"], ["task16", "b5"], ["task17", "b5"], ["task18", "b5"], ["task19", "b6"], ["task20", "b6"], ["task21", "b6"], ["task22", "b8"], ["task22a", "b9a"], ["task22b", "b10a"], ["task22c", "b9a"], ["task22d", "b10a"], ["task23", "A1"], ["task24", "A2"],  ["task25", "A4"], ["task26", "A5"], ["task27", "A3"]]); 

var dropTarget = document.querySelector(".wrapper");
var draggables = document.querySelectorAll(".task");
var count = 0;
console.log(draggables.length)
//console.log(dropTarget)

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
  //console.log(target.id)
  //console.log(map1.get(srcId))
  if(droppable)
  {
	  if (map1.get(srcId) == target.id) {
	    ev.target.appendChild(document.getElementById(srcId));
	    alertify.set('notifier','position', 'top-right');
	   
	    alertify.success('Good going 🤝');
	   
	    count++;
	  }
	  else
	  {
	    alertify.set('notifier','position', 'top-right');
	    alertify.error("Hard Luck 😕. Please try again")
	   
          }
  }
  else
  {
  	 alertify.set('notifier','position', 'top-right');
	 alertify.error('Please Drop elements in Rectangular Boxes Only!!');
  }
   
});
