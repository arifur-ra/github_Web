/*------------- Assignment----------------- */

const myData = [{
    name: "ReactJS",
    type: "javascript",
    rank: 2,
  },
  {
    name: "Bootstrap",
    type: "css",
    rank: 3,
  },
  {
    name: "JSON",
    type: "datatype",
    rank: 2,
  },
  {
    name: "AngularJS",
    type: "javascript",
    rank: 4,
  },
  {
    name: "VSCode",
    type: "editing",
    rank: 1,
  },
  {
    name: "Google.com",
    type: "search",
    rank: 1,
  },
  {
    name: "iPad",
    type: "device",
    rank: 1,
  },
  {
    name: "Hamburger SV",
    type: "football team",
    rank: 5,
  },
  {
    name: "Family",
    type: "relation",
    rank: 0,
  },
];

/**
 * @author ArArif
 * @param {Array<{name:string,type:string,rank:number}>} data  the array containing the value that should be display
 * @param {HTMLElement} resultDisplay
 * @param {string} word
 * @returns {Array}
 */
//Show Data function :

//showData : defining the tool
function showData(data, resultDisplay) {
  resultDisplay.innerHTML = ``;
  for (let index = 0; index < data.length; index++) {
    resultDisplay.innerHTML += `<table>
            <tr>
               <td>${index + 1}</td>
               <td>${data[index].name}</td>
               <td>${data[index].type}</td>
               <td>${data[index].rank}</td>
              </tr>
        </table>
          `;
  }
}

//sortByName() -- please create this tool
function sortByName(data) {
  // take isolated copy keep the reference safe
  let sortedByName = data.slice();

  return sortedByName.sort(function (a, b) {
    //make case insensitive compare
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
      return -1;
    } else {
      return 1;
    }
  });
}

//sortByType()please create this tool
function sortByType(data) {
  // take isolated copy keep the reference safe
  let sortedByType = data.slice();
  return sortedByType.sort(function (a, b) {
    //make case insensitive compare
    if (a.type.toLowerCase() < b.type.toLowerCase()) {
      return -1;
    } else {
      return 1;
    }
  });
}

//sortByRank()-- please create this tool

/**
 * 
 * @param {Array<name:string,type:string,rank:number>} data  the array containing the value that should be display sorted by Rank
 * @returns {Array<name:string,type:string,rank:number>}  return a sorted by rank array
 */

function sortByRank(data) {
  // take isolated copy keep the reference safe
  let sortedByRank = data.slice();

  return sortedByRank.sort(function (a, b) {
    //make case insensitive compare

    // return a.rank-b.rank;     // shorter solution;

    if (a.rank < b.rank) {
      return -1;
    } else {
      return 1;
    }
  });
}
// show Data

function showDataHandler() {
  // using the tool
  showData(myData, document.getElementById("display"));
}

// sortByNameHandler by using sortBYName()

function sortByNameHandler() {
  let sorted = sortByName(myData);
  showData(sorted, document.getElementById("display"));
}
// sortByTypeHandler by using sortBYType()

function sortByTypeHandler() {
  let sorted = sortByType(myData);
  showData(sorted, document.getElementById("display"));
}

// change sortByRankHandler by using sortByRank() and showData()

function sortByRankHandler() {
  let sorted = sortByRank(myData);
  showData(sorted, document.getElementById("display"));
}





// create a filter input with a button , have a list of types, to filter according to the input value , and the result is sorted by type and then presented to the filtered table

//* creating a button called filter - done in index.html

// * prepare a list of keywords
for (let index = 0; index < myData.length; index++) {
  // wordsList.push(myData[index].type);
  keyWords.innerHTML += `<ul><ol>${myData[index].type}</ol></ul>
    
    <style>

    ul{
    margin:.5rem;
    }
    ol{
        text-align:center;
        color:#EF9810;
        background-color: rgb(51, 48, 2);
        padding:.5rem 0;

    }
    </style>
    
    `;
}

// handel the filter action

// a filter function - tool
function filterArray(someArr, word) {
  return someArr.filter(function (item) {
    if (item.type != word) {
      return item;
    }
  });
}
// Handel the click event of filter button
function dataFilter() {
  let filteredArray = myData.slice();
  let filterWord = document.getElementById("filter").value;

  // use a filter tool
  filteredArray = filterArray(filteredArray, filterWord);

  // re-using the sort by type, name rank tool

  let sortedNameArray = sortByName(filteredArray);
  //let sortedTypeArray = sortByType(filteredArray);
  //let sortedRankArray = sortByRank(filteredArray);

  // re-using the show data tool
  //showData(sortedNameArray, filteredDisplay);
  showData(sortedNameArray, document.getElementById('filteredDisplay'));
  // showData(sortedRankArray, filteredDisplay);
}