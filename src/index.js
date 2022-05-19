window.onload = () => {
  let inputField = document.querySelector("input.li-input-field");
  let createLiButton = document.querySelector("button.create-list-item-button");
  let ul = document.querySelector("ul.my-list");
  let ulChildrenCount = document.querySelector(".list-items-count");
  let pluralSyntax = document.querySelector(".plural-items-syntax");

  showListChildrenCount();

  createLiButton.addEventListener("click", addListItem);
  inputField.addEventListener("keydown", handleInputField);

  function handleInputField(event) {
    if (event.key == "Enter") {
      addListItem();
    }
  }

  function addListItem(){
    if (inputField.value === "") {
      return false;
    }
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    deleteButton.innerText = " x ";
    deleteButton.addEventListener("click", deleteListItem);
    li.innerText = inputField.value;
    li.appendChild(deleteButton);
    ul.appendChild(li);
    refreshInputField();
    showListChildrenCount();
  }

  function refreshInputField() {
    inputField.value = "";
    inputField.focus();
  }

  function deleteListItem(){
    let closestLi = this.closest("li");
    ul.removeChild(closestLi);
    showListChildrenCount();
  }

  function showListChildrenCount(){
    ulChildrenCount.innerText = ul.children.length;
    pluralSyntax.innerText = ul.children.length === 1 ? "" : "s"
  }
};
