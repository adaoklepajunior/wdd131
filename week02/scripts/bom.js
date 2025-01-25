const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', function() {
    const inputValue = input.value.trim(); 


    if (inputValue === "") {
        alert("Enter the book name and the chapter.");
        input.value = "";
        input.focus();
        return;
    }

    
    const hasText = /[a-zA-Z]/.test(inputValue);  // Check for letters
    const hasNumbers = /\d/.test(inputValue);  // Check for numbers

    if (!hasText) {
        alert("Please enter the book name.");
        input.value = "";
        input.focus();
        return;
    }

    if (!hasNumbers) {
        alert("Please enter the chapter.");
        input.value = "";
        input.focus();
        return;
    }

    
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    
    li.textContent = input.value;
    deleteButton.textContent = '❌';

    
    li.appendChild(deleteButton);

    
    chapterList.appendChild(li);

    input.value = "";
    input.focus();

    
    deleteButton.addEventListener('click', function() {
        chapterList.removeChild(li);  // Remove the li from the ul
        input.value = "";
        input.focus();
    });

});