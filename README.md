# Hello World - UI plugin demo

This plugin includes some basic UI demostrations:

* Usage of i18n to get messages
* Usage of javascript to modify Main Page
* Usage of javascript + ajax request to modify Jobs list page
* Usage of javascript + css to modify the execution page

### Hello World.
Display `Hello world` text from `messages.properties`, if the user change the language to Spanish on Rundeck, the message changes to `Hola Mundo`.

### XKCD random image.
On the jobs page, it adds on top of the job list, a random image from a source json.
To retrieve this image, the code uses a ajax call to a local file, this can be replaced with a call to a webservice on the same server as the rundeck instance.

### Panic mode
On the execution page, changes the header to red when a failed execution is open.