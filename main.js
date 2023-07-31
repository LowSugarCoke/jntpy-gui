// Import Electron modules
const { app, BrowserWindow, ipcMain, screen } = require('electron')

// Import Node.js modules
const path = require('path')
const { spawn } = require('child_process')

// Declare the window object globally to avoid garbage collection
let win = null


// Create a new BrowserWindow when `app` is ready
function createWindow() {
    // Get the dimensions of the primary display
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    // Create the browser window.
    win = new BrowserWindow({
        width: width * 0.5, // 50% of screen width
        height: height * 0.8, // 80% of screen height
        webPreferences: {
            nodeIntegration: true, // allows renderer processes to use `require`
            contextIsolation: false // allows renderer processes to use `ipcRenderer`
        }
    })

    // Load the index.html file into our BrowserWindow
    win.loadFile('index.html')

    // Remove the default menu
    win.setMenu(null);
}
app.whenReady().then(createWindow)

// Listen for the 'change-julpty-notebook-to-python' event from renderer process
ipcMain.on('change-julpty-notebook-to-python', (event, notebookContent) => {

    // Create a new Python child process and execute the conversion script
    const python = spawn(path.join(__dirname, 'script.exe'));

    // Write the notebook content into the Python program's standard input
    python.stdin.write(notebookContent);
    python.stdin.end();

    // When the Python program writes to its standard output, send the result back to the renderer process
    python.stdout.on('data', (data) => {
        event.reply('python-code', data.toString());
    });

    // If the Python program writes anything to its standard error output, or if the exit code is not 0, send the error message to the renderer process
    python.stderr.on('data', (data) => {
        event.reply('python-error', data.toString());
    });
    python.on('close', (code) => {
        if (code !== 0) {
            event.reply('python-error', `Python process exited with code ${code}`);
        }
    });
});
