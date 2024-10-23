# Usage Instructions for the Script

- This script in [homework_3_noJQuery_ver](https://github.com/Angelsslayer/Search_WebElements_CSS-03_Practical_Task/blob/main/homework_3_noJQuery_ver.js) is designed to be executed by injecting JavaScript into the browser console, the instructions below may help you in this.
- This script in the [homework_3](https://github.com/Angelsslayer/Search_WebElements_CSS-03_Practical_Task/blob/main/homework_3.js) contains code with its alternative version using jQuery and may be copied/pasted directly into the console panel. Before running it, open the [website](https://www.greencity.cx.ua/#/greenCity) and sign in.

## Instructions how to run the Script
1. Open the [website](https://www.greencity.cx.ua/#/greenCity) and log in or register new account.
2. Make sure you are still on the page [page](https://www.greencity.cx.ua/#/greenCity).
3. Open your browser's console. You can do this by pressing `F12` or `Ctrl + Shift + I` (depending on your browser).
4. Copy and paste the following code into the console:

   ```javascript
   javascript:(() => {
       fetch('https://raw.githubusercontent.com/Angelsslayer/Search_WebElements_CSS-03_Practical_Task/main/homework_3_noJQuery_ver.js')
       .then(response => response.text())
       .then(scriptText => eval(scriptText))
       .catch(error => console.error('Error loading the script:', error));
   })();
   5. Press Enter to execute the script.

## Video Tutorials
For additional information on how to use the script, you can watch the tutorials at the following [YouTube link](https://youtu.be/n96fkltIJxU)

