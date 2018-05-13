var addmentee = document.querySelector("#add");
var noofmentees = 1;

function edit(value){
	var tdname = document.getElementsByClassName("name")[value]
	tdname.contentEditable = "true"
}
function addRow(){
	var table = document.getElementById("Table");

	var newRow = table.insertRow(noofmentees);

	var newCell1 = newRow.insertCell(0);
	var newCell2 = newRow.insertCell(1);
	var newCell3 = newRow.insertCell(2);
	var newCell4 = newRow.insertCell(3);
	var newCell5 = newRow.insertCell(4);
	var text = document.getElementById("text").value
	

	var Name = document.createTextNode(text);
	var Edit = document.createTextNode("Edit");
	var Delete = document.createTextNode("Delete");
	var Rating = document.createTextNode(document.getElementById("rating").value)
	var Comment = document.createTextNode(document.getElementById("comment").value)

	newCell1.setAttribute("class","name");
	newCell2.setAttribute("class","edit");
	newCell3.setAttribute("class","delete");

	newCell2.addEventListener("click",function(){edit(newCell2.parentNode.rowIndex);});
	newCell3.addEventListener("click",function(){
		table.deleteRow(newCell3.parentNode.rowIndex);
	});

	newCell1.appendChild(Name);
	newCell2.appendChild(Edit);
	newCell3.appendChild(Delete);
	newCell4.appendChild(Rating);
	newCell5.appendChild(Comment);	



	document.querySelector("input").textContent = '';
	noofmentees++;
 }


addmentee.addEventListener("click",addRow);

