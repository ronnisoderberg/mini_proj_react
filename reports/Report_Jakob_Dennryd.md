# Report 

## Is our page SPA?
By definition a single page application is a web application or website that interacts with
the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading
enitre new pages. <br>

Our page does just this. When navigating throughout the page the only thing that is reloaded are the different components on the new requested page.
The navbar for example stays loaded no matter where the user is on the page. <br>
When creating the QR code on our QR Generator page the site doesn't reload, it simply loads in the QR image on the page.

## Adressing points
### 1. Create a project with any purpose.
We decided to create a website where the user can input a link to another website and then receive a QR code that leads to said link.

### 2. The project must use at least 1 of the build-in hooks in the React library.
We used ```useState``` when assigning data to our constants who in turn give data to our properties. 
This was the simplest solution when working with a form since we already used this hook in our last assignment.

### 3. At least 1 value must be passed down the component hierarchy using Props.
We pass down the input from our form to the QR component as a property.

### 4. Routing must take place according to SPA.
The routing we decided to use is the ```react-router-dom``` package with BrowserRouter, Routes and Route imported into the project.
When navigating the site, the browser doesn't have to reload the entire page. Just the components that are introduced/altered.

### 6. Your components must be responsive.
The three components we created for this website are all responsive. When you navigate the site with the navbar the page you are currently on is highlighted.
When typing in the form the text appears accordingly and the QR component adapts to the data that it receives from the form.
