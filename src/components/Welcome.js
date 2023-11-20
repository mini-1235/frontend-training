import React, { useEffect, useState } from "react";
const people = [
    { id: 1, name: "gogin", gender: "male", age: 30 },
    { id: 2, name: "go", gender: "female", age: 28 },
    { id: 3, name: "g0", gender: "male", age: 13 },
    { id: 4, name: "gin", gender: "male", age: 8 }
  ];
export default function Welcome(props) {
    function click() {
        console.log("clicked");
        // setName("new name");
        // setName((name)=>name+" new name");
        fetch("https://dog.ceo/api/breeds/image/random")
        //response status and message

    }
    
    const [name, setName] = useState("blablabla");
    const [imgSrc, setImgSrc] = useState("");

    return <div>
        <h1>Welcome, {props.person}</h1>
        <h2>{name}</h2>
        <button onClick={click}>Click me</button>
        {/* how to map an arryay of data with the array people */}
        {
            people.map((person)=>{return <div key={person.id}>{person.name}</div>})
        }
        <img src={imgSrc} alt="dog"></img>
    </div>

}