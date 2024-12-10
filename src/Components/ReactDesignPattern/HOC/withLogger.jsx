// what is HOC?
// A Higher Order Componnet(HOC) is a function that takes a component as input and returns a new component with additional functionality.

import React from "react";

const withLogger=(WrappedComponent)=>{
    // HOC returs a new component
    return (props)=>{
        console.log('Props:', props); // Log props to the console

         // Render the original component with its props
        return <WrappedComponent {...props}/>
    }
}

export default withLogger;