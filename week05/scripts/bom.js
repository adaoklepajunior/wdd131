// Update localStorage
function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
    console.log("Set localStorage:", JSON.stringify(chaptersArray)); // Audit log
}

// Return Chapter array
function getChapterList() {
    const storedChapters = localStorage.getItem('chapters');
    return storedChapters ? JSON.parse(storedChapters) : []; // Or an empty one
}

// Declare an array and assign it the result from getChapterList
let chaptersArray = getChapterList();

// Select necessary elements from the DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('#button');
const chapterList = document.querySelector('#list');

// Function to handle deletion
function deleteChapter(chapter, li) {
    chapter = chapter.trim();

    console.log("Deleting chapter:", chapter); // Log

    chaptersArray = chaptersArray.filter((item) => item.trim() !== chapter);

    console.log("Updated chaptersArray:", chaptersArray);

    // Update localStorage with the new array
    setChapterList();

    // Remove the list item from the DOM
    chapterList.removeChild(li);

    console.log("Updated localStorage:", localStorage.getItem('chapters'));
}

// Function to display a single chapter on the list
function displayList(item) {
    // Create a new list item and delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    // Set the text content for the list item and button
    li.textContent = item;
    deleteButton.textContent = '❌';
    
    // Append the delete button to the list item
    li.appendChild(deleteButton);
    
    // Append the list item to the chapter list (ul)
    chapterList.appendChild(li);
    
    // Add event listener to handle chapter deletion
    deleteButton.addEventListener('click', function() {
        deleteChapter(item, li);  // Call deleteChapter with the chapter and its corresponding list item
    });
}

// Populate the list of chapters when the page loads by iterating over chaptersArray
chaptersArray.forEach(chapter => displayList(chapter));

// Add a click event listener to the Add Chapter button
button.addEventListener('click', function() {
    const inputValue = input.value.trim();  // Get and trim the input value

    // Check if the input field is completely blank
    if (inputValue === "") {
        alert("Enter the book name and the chapter.");
        input.value = "";
        input.focus();  // Return focus to the input field
        return;
    }

    // Check if the input contains both text and numbers
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

    // Call displayList with the input value to add the chapter to the list
    displayList(inputValue);
    
    // Push the new chapter into chaptersArray
    chaptersArray.push(inputValue);

    // Update localStorage with the new array
    setChapterList();

    // Clear the input and focus it
    input.value = "";
    input.focus();
});