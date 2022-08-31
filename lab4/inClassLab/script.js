// let days = ["Sunday", "Monday", "Tueday", "Wednesday", "Thursday", "Friday", "Saturday"];
          
// let pElement = document.createElement("p")
// let text = document.createTextNode("This is a new node")
// pElement.appendChild(text)
// document.body.appendChild(pElement)
// create ol
// let olist = document.createElement("ol")
// let li = document.createElement("li")
// let textol = document.createTextNode("Sunday")
// li.appendChild(textol)
// olist.appendChild(li)
// document.body.appendChild(olist)
//create list
// let olist = document.createElement("ol")
// for(let i = 0; i<7;i++){
//     let li = document.createElement("li")
//     let textol = document.createTextNode(days[i])
//     li.appendChild(textol)
//     olist.appendChild(li)
//     document.body.appendChild(olist)
// }

// function addNode() {
//     // <p>a new paragraph</p>
//     let ptag = document.createElement("p");
//     let txt = document.createTextNode("4. a new paragraph");
//     ptag.appendChild(txt);
//     // select a parent node            
//     let parent1 = document.getElementById("div1");
//     // parent1.appendChild(ptag); 
    
//     /*  uncomment in step 2 **/
//         let childP1 = document.getElementById("p1");
//         parent1.insertBefore(ptag, childP1);
               
// }
// function addNewImage() {
//     // <img src="apples.jpg">
//     let imgtag = document.createElement("img");
//     let srcAttr = document.createAttribute("src");
//     srcAttr.value ="http://10.0.15.20/312lab4/apples.jpg";   
//     // change size
//     let imgtag = document.createElement("img");
//     let srcAttr = document.createAttribute("src");
//     srcAttr.value ="http://10.0.15.20/312lab4/apples.jpg"; 

          
//     imgtag.setAttributeNode(srcAttr);  
//     // add to <body>
//     document.body.appendChild(imgtag);                              
// }

// function deleteNode() {
//     let parent2 = document.getElementById("div1");
//     let delPtag = document.getElementById("p2");
//     parent2.removeChild(delPtag);
// }
// function AnswerText() {                           
//     //
//     // ** create label **
//     // <label>Answer : </label> 
    
//     let la = document.createElement("label");
//     la.innerHTML ="Answer : "
    
//     // ** create input **
//     // <input id="answerbox"></input>

//     let inp = document.createElement("input");
//     let inatt = document.createAttribute("id"); 
//     inatt.value = "answerbox";
//     // Something is missing !! 


//     // ** add to a parent node **
//     let parent = document.getElementById("ans");
//     parent.appendChild(la);
//     parent.appendChild(inp);
// }
let table = document.getElementById('table0');

    for (let ln = 0; ln < 5; ln++ ) {
    let row = table.insertRow(-1); //Row position 0,1,2,...,n  -1 = last
    let cell, text, tnode;
        
    for (let i = 0; i < 3; i++) {
        // create a new column
        cell = row.insertCell(-1);
        text = row.rowIndex + ', ' + i;
        tnode = document.createTextNode(text);
        // add TextNode to column
        cell.appendChild(tnode);
    }    
    }