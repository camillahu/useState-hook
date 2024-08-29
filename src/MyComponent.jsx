import React, {useState} from 'react'

function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsImployed] = useState(false);

    const updateName = () => {
        setName("Spongebob")
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsImployed(!isEmployed)
    }

    return <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment age</button>

                <p>Is employed: {isEmployed ? "yes" : "no"}</p>
                <button onClick={toggleEmployedStatus}>Toggle employment status</button>
    </div>
}

export default MyComponent