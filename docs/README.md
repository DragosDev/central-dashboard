# Description
Admin / Central Dashboard made in react

# Getting Started
1. In the terminal run
<br>
<code>npx create-react-app ./</code>

2. Install the Material Icons
<br><code>yarn add @material-ui/icons</code>
<br><code>yarn add @material-ui/core</code>

3. Install recharts
<br><code>yarn add recharts</code>

4. Clean application directories by removing the files we don't need from the public directory
<br>![](2022-05-22-21-18-38.png)

5. Clean the file from the src directory that we dont need
<br>![](2022-05-22-21-21-13.png)

6. Clean the index.html file of some code 
<br>![](2022-05-22-21-24-18.png)

7. Install the fonts from google fonts and copy them in index.html

8. In index.js delete the imports for the file that we're deleted before

9. Your App.js file should look like this 
<br>![](2022-05-22-21-35-48.png)

# Creating the components

<strong>1. TopBar</strong>
<br>a. Create Topbar.jsx - we are using JSX because it's more easier to use html inside of the components.
<br>
b. Topbar.jsx - Type in rfc - this is a special command for React, which can be installed from the VS Extension tab. It's called ES7 React/Redux
<br>
Your code should look like:
```
import React from 'react'

export default function Topbar() {
  return (
    <div>Topbar</div>
  )
}
```
c. App.js -  Import the Topbar component in App.js
```
import Topbar from './components/topbar/Topbar'
function App() {
  return (
    <div>
      <Topbar/>
    </div>
  )
}
export default App;
```

d. topbar.css - inside the topbar folder create a new file topbar.css
<br>
e. Topbar.jsx - import the topbar.css file created
<br><code>import './topbar.css'</code>





# Errors
1. Unreachable code  no-unreachable in App.js and the Topbar.jsx component is not loading in the App.js screen
<br>Possible you forgot to add the parenthesis's to the return ()
<br>![](2022-05-23-10-04-21.png)

