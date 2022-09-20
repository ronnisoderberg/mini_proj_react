# 2. The project must use at least 1 of the built-in hooks in the React library
We have used useState at several points in the QR Gen. To be able to set values to the different variables/props.

# At least 1 value must be passed down the component hierarchy using props
The value from the form is being passed down the component hierarchy. But that is also the only thing if I'm not wrong.

# 4. Routing must take place according to SPA
We are using react-router-dom for the routing and it is according to spa because the whole page never reloads.
You can find this in `App.js` & `Index.js`

# 6. Your components must be responsive
The button component that generates the QR code is responsive because only the image itself is being reloaded nothing else. It never reloads the whole webpage because that would've "failed" the task.

# 8. Your project should be version controlled and uploaded to github. There should be a README.md with information about the kind of
It is version controlled on github.
`https://github.com/ronnisoderberg/mini_proj_react`

# Personal thoughts
I think the project went well even if we had a short time span.
I think the solutions also was good to how the qr code is generated and it works like it's supposed to. But it's somewhat bad since we rely on someone elses API that it's always up and running and doesn't encounter any issues since we will not be able to fix it. It would've been better if we would've made our own api or tool to generate the QR codes itself.