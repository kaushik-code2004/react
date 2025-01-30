import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
    return(
        <div>
            <h1>custom app </h1>
            <App/>
        </div>
    )
}

// const ReactElement = {
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank',  
//     },
//     childern:'click me to visit google'
// }

const anotherElement = (
    <a href='https://google.com' target='_blank'>Visit google</a>
)

const anotheruser = "hello kaushik"
const reactElement = React.createElement(
    'a',{
        href:'https://google.com',
        target:'_blank'
    },
    "visit the google",
    anotheruser
    
)

ReactDOM.createRoot(document.getElementById('root')).render(
   reactElement
)
