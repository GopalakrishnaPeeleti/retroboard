let gridContainer = document.getElementsByClassName("grid-container")
let headerNames = ["Went well", "Went wrong", "To Improve"]

let gridItems = document.getElementsByClassName("grid-item");
let user_input = document.getElementsByClassName("text-area");
let submit_buttons = document.getElementsByClassName("submit-btn");
let clearButtons = document.getElementsByClassName("clear-btn");

let saveButtons2 = document.getElementsByClassName("save-btn2");
let cancelButtons = document.getElementsByClassName("cancel-btn");
   
let retroCards = document.getElementsByClassName("retro-card");
let editButtons = document.getElementsByClassName("edit-btn");
let  = document.getElementsByClassName("input-container2");
function renderBoardWideget(test) {

  var addGridItem = `<section id="grid_item" class="grid-item"><div class="grid-header"><h1 class="grid-title">` + test + `</h1> <!-- <grid-title></grid-title> --><button class="add-btn"><img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/plus-512.png" alt="add" width="25" height="25"></button> <!-- <add-btn></add-btn> --></div><!-- Input container for user input --><form action="#" class="input-container"  onsubmit="return false"><textarea class="text-area" id="story" name="story" rows="4" cols="57" placeholder="Waiting for your input.."></textarea><div class="action-container"><button class="clear-btn" value="Clear">Clear</button><button class="submit-btn">Submit</button></div></form></section>`
  return addGridItem
}


for (let index = 0; index < headerNames.length; index++) {
  gridContainer[0].insertAdjacentHTML('beforeend', renderBoardWideget(headerNames[index]));

}

let addButtons = document.getElementsByClassName("add-btn");
let inputCards = document.getElementsByClassName("input-container");


Array.from(addButtons).forEach((button, index) => {

  button.addEventListener('click', function () {
    if (inputCards[index].classList.contains('open-input-container')) {
      inputCards[index].classList.remove('open-input-container')
      button.className = "add-btn"

      if (button.className = "rotate-btn") {
        button.className = "add-btn"
      }
    }
    else {
      inputCards[index].classList.add('open-input-container')
      button.className = "rotate-btn"

    }
  });
});



Array.from(submit_buttons).forEach((item, index) => {
  item.addEventListener('click', function () {
    console.log();

    if (user_input[index].value.trim() == "") {
     // console.log(user_input[index].value);

      alert("Enter your input");
    }

    else {
      
      var cardDetails = `<div class="retro-card"><div id=card-"`+retroCards.length+`" class="card-body"><p class="card-text">` + user_input[index].value + `</p><br><div class="card-footer"><button class="edit-btn">Edit</button><div class="tooltip"><img class="user-avatar" src="https://assets4.freshgenie.com/assets/misc/profile_blank_thumb.gif"  height="28" width="28">   <span class="tooltiptext">User</span>
    </div></div></div></div>`
    
      gridItems[index].insertAdjacentHTML('beforeend', cardDetails);
      oldData = user_input[index].value
      user_input[index].value = "";
      

      
          
      //Array.from(gridItems).forEach((item2, index2) => {

            Array.from(editButtons).forEach((item1, index1) => {
               // Array.from(retroCards).forEach((item3, index3) => {
                  item1.addEventListener('click', function () {
                   

                    console.log(document.getElementById("card-retroCards.length"));

                    retroCards[index1].remove("retro-card");
          
          
      
            var newCard = `<form action="#" class="input-container2"  onsubmit="return false"><textarea class="text-area2" id="story" name="story" rows="4" cols="57"placeholder="">` + oldData + `</textarea><div class="action-container"><button class="cancel-btn">Cancel</button><button class="save-btn">Save</button></div></form>`
          
            
         // });
         retroCards[index1].insertAdjacentHTML('beforeend', newCard);

          });
          
        
        });
     // });
      
      
    
      
    }
});
});


Array.from(clearButtons).forEach((item, index) => {
  item.addEventListener('click', function () {

    user_input[index].value = "";

  });
});

