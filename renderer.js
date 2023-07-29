// Import necessary Electron module
const { ipcRenderer } = require('electron');

// Get DOM elements
const inputRegion = document.querySelector("#input-region");
const inputText = document.querySelector("#input-text");

// Add 'dragover' event listener to highlight the input region during file drag-over
inputRegion.addEventListener('dragover', event => {
    event.preventDefault();
    inputRegion.classList.add('drag-over');
});

// Add 'dragleave' event listener to un-highlight the input region when file drag leaves
inputRegion.addEventListener('dragleave', () => {
    inputRegion.classList.remove('drag-over');
});

// Add 'drop' event listener to handle file drop event
inputRegion.addEventListener('drop', event => {
    event.preventDefault();
    inputRegion.classList.remove('drag-over');

    // Read the first file dropped
    const file = event.dataTransfer.files[0];
    if (file) {
        const reader = new FileReader();
        // Set the textarea value as the content of the file
        reader.onload = e => {
            inputText.value = e.target.result;
        };
        reader.readAsText(file);
    }
});

// Listen for 'input' event on textarea
inputText.addEventListener('input', () => {
    const notebookContent = inputText.value;

    // Send 'change-julpty-notebook-to-python' message to main process with the notebook content
    ipcRenderer.send('change-julpty-notebook-to-python', notebookContent);
});

// Listen for 'python-code' event from main process and update the output textarea
ipcRenderer.on('python-code', (event, pythonContent) => {
    document.getElementById('output-text').textContent = pythonContent;
})
