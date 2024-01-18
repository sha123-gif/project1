import { useState } from "react";

function Home(){
    const navbar="Hello Programmer"
    let [nav,setName]=useState("Hello");
    function updatename(){
        setName("Hello world welcome to the world of Web Development");
        console.log(nav);
    }
    return (
        <div>
            <h2>{navbar}</h2>
            <p>{nav}</p>
            <button onClick={updatename}>Click ME</button>
        </div>
    )
}

export default Home;