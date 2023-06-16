import React from "react";
import '../styles/main.css'

function Main() {
    return (
      <div className="main">
        <MyComponent showText={true}/>
      </div>
    );
}

function MyComponent(props){
    if(props.showText){
        return(
            <h1>Hello World</h1>
        ) 
    }
}



  export default Main;