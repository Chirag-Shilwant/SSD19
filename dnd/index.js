
alertify.confirm("Simulation of class diagram:<br><br>1. The entire page is divided into 2 parts. The left part consists of the attributes, methods list whereas the right part has a template of class diagram wherein there are multiple classes.<br> <br>2. The goal here is to map appropriate attributes/methods to the correct classes, i.e. drag the items from the left and drop it in right boxes.<br><br>3. You can hover over the classes/arrows to get insight of what the those are all about.").set('resizable',true).resizeTo('50%',350).setHeader('Instructions');

var dropTarget = document.querySelector(".wrapper");
var draggables = document.querySelectorAll(".task");
var draggables2 = document.querySelectorAll(".task_arrow");

var map_object = new Map([["task1", "class1"], ["task7", "class1"], ["task9", "class1"], ["task11", "class1"], ["task3", "class3"], ["task4", "class3"], ["task2", "class2"],
 ["task5", "class2"],["task6", "class2"], ["task10", "class3_1"], ["task11", "class4"], ["task12", "class4"], ["task13", "class5"], ["task14", "class5"], ["task15", "class5"],
  ["task16", "class1_1"], ["task17", "class1_1"], ["task18", "class1_1"], ["task19", "class5_1"], ["task20", "class2_1"], ["task21", "class4_1"], ["task22", "class3_1"],
   ["task23", "class3_1"], ["task24", "class5_1"], ["task25", "class6"], ["task26", "class7"], ["task27", "class8"] , ["task28", "class9"] , ["task29", "class2_1"]])
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

for(let i = 0; i < draggables2.length; i++) {
  draggables2[i].addEventListener("dragstart", function (ev) {
     ev.dataTransfer.setData("srcId2", ev.target.id);
     
      
  });
}

var e = document.getElementById('class1');
e.onmouseover = function() {
  document.getElementById('popup1').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('popup1').style.display = 'none';
}

var e = document.getElementById('class2');
e.onmouseover = function() {
  document.getElementById('popup2').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('popup2').style.display = 'none';
}

var e = document.getElementById('class5');
e.onmouseover = function() {
  document.getElementById('popup3').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('popup3').style.display = 'none';
}

var e = document.getElementById('class4');
e.onmouseover = function() {
  document.getElementById('popup4').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('popup4').style.display = 'none';
}

var e = document.getElementById('class3');
e.onmouseover = function() {
  document.getElementById('popup5').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('popup5').style.display = 'none';
}

var e = document.getElementById('class1_1');
e.onmouseover = function() {
  document.getElementById('popup6').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('popup6').style.display = 'none';
}

var e = document.getElementById('class2_1');
e.onmouseover = function() {
  document.getElementById('popup7').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('popup7').style.display = 'none';
}

var e = document.getElementById('class3_1');
e.onmouseover = function() {
  document.getElementById('popup8').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('popup8').style.display = 'none';
}

var e = document.getElementById('class4_1');
e.onmouseover = function() {
  document.getElementById('popup9').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('popup9').style.display = 'none';
}

var e = document.getElementById('class5_1');
e.onmouseover = function() {
  document.getElementById('popup10').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('popup10').style.display = 'none';
}

var e = document.getElementById('arrow_design1');
e.onmouseover = function() {
  document.getElementById('popup11').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('popup11').style.display = 'none';
}

var e = document.getElementById('arrow_design2');
e.onmouseover = function() {
  document.getElementById('popup14').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('popup14').style.display = 'none';
}

var e = document.getElementById('arrow_design3');
e.onmouseover = function() {
  document.getElementById('popup12').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('popup12').style.display = 'none';
}

var e = document.getElementById('arrow_design4');
e.onmouseover = function() {
  document.getElementById('popup13').style.display = 'block';
}
e.onmouseout = function() {
  document.getElementById('popup13').style.display = 'none';
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
  let srcId2 = ev.dataTransfer.getData("srcId2");
  //document.write(srcId2);
  //document.write(target.id);
  
  if (droppable && (map_object.get(srcId) == target.id) ){
    //document.write(document.getElementById(srcId).textContent);
    ev.target.appendChild(document.getElementById(srcId));
    alertify.set('notifier','position', 'top-right');
    alertify.set('notifier','delay', 2);
    alertify.success("Good going!!")
  }
  else if(droppable && map_object.get(srcId2) == target.id ){
    ev.target.appendChild(document.getElementById(srcId2));
    alertify.set('notifier','position', 'top-right');
    alertify.success("Good going!!");
    alertify.set('notifier','delay', 2);
    document.getElementById(srcId2).style.backgroundColor = "whitesmoke";
  }
  else{
    alertify.set('notifier','position', 'top-right');
    alertify.error("Hard luck! Try again");
    alertify.set('notifier','delay', 2);
  }

  if(document.getElementById("temp").children.length == 0)
  {
  alertify.alert("Hurray, you did it!!").setHeader('Success');
  }

});


 
