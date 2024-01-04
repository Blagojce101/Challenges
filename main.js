const name = prompt('Enter a Name to see if that person is voted.');
let upppercase = name.charAt(0).toUpperCase() + name.slice(1);

let people = [
  ['Antonio', true, 5],
  ['Marija', false],
  ['Darko', true, 3],
  ['Blagoja', true, 5],
  ['George', false],
  ['Mario', true, 2],
  ['Aleksandra', false],
  ['Angela', true, 5],
  ['Stefanija', false],
  ['Daniel', true, 5]
];

let table = document.createElement("table");
let tr = document.createElement("tr");
let td1 = document.createElement("td");
let td2 = document.createElement("td");
let td3 = document.createElement("td");
let td4 = document.createElement("td");
table.appendChild(tr);
document.body.appendChild(table);
document.body.style.fontSize = "20px";

table.setAttribute("cellspacing", "0");
table.style.width = "50%";
table.style.border = "border: 2px solid black";

table.style.border = "2px solid black"
table.style.margin ="0 auto"
td1.style.borderRight = "2px solid black";
td2.style.borderRight = "2px solid black";
td1.style.background = "green";
td3 .style.background = "red";
td4 .style.background = "red";
td4.style.padding = "15px";


td1.style.padding = "15px";
td1.style.textAlign = "center";
td2.style.padding = "15px";
td2.style.textAlign = "center";
td3.style.padding = "15px";
td3.style.textAlign = "center";
td4.style.padding = "15px";
td4.style.textAlign = "center";
td4.style.fontSize = "25px";


const vote = (arrayName) => {
  for (let i = 0; i < arrayName.length; i++) {
      if(people[i][0] === upppercase && people[i][1] === true){
      td1.innerHTML = upppercase;
      td2.innerHTML = "Voted!";
      td3.innerHTML = people[i][2];
      td4.style.display ="none";
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
    } else if (people[i][0] === upppercase && people[i][1] === false) {
      td1.innerHTML = upppercase;
      td2.innerHTML = "Didn't vote.";
      td4.style.display ="none";
      tr.appendChild(td1);
      tr.appendChild(td2);
    } else if (people[i][0] != upppercase) {
      td4.innerText = `Cannot find the ${upppercase}. Please try again!`;
      tr.appendChild(td4);
    };
  };
};

vote(people);