## Project report

Our project takes a URL and converts/makes a QR-code that links to that URL.
We made the decision to make all of our components standalone-type modules from eachother. This will make out project more easy to build on if we in the future want more features.
The project is an SPA because we allways make request to the DOM and we don’t refresh the page when we use the Navbar elements. We use our useState methods to update variabels and HTML elements and in that we don’t need to refresh the page for example when we make a qr-code.

&nbsp;

##### Prop question

The value from the form is passed down from the qrgen.jsx to the QR.jsx, it is also in that function the code renders HTML.
The Hooks we used was

```javascript
const [formInput, setFormInput] = useState("");
const [qr, qrSet] = useState();
```
