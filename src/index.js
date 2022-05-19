window.onload = () => {
  let inputField = document.querySelector("input.li-input-field");
  let createLiButton = document.querySelector("button.create-list-item-button");
  let ul = document.querySelector("ul.my-list");

  createLiButton.addEventListener("click", addListItem);

  function addListItem(){
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    deleteButton.innerText = " x ";
    deleteButton.addEventListener("click", deleteListItem);
    li.innerText = inputField.value;
    li.appendChild(deleteButton);
    ul.appendChild(li);
    inputField.value = "";
  }

  function deleteListItem(){
    let closestLi = this.closest("li");
    ul.removeChild(closestLi);
  }
};
