export function PersonCard({lastName,firstName,age,hairColor}){
    return <div>
                <h2>{lastName}, {firstName} </h2>
                <p>Age: {age}</p>
                <p>Hair color: {hairColor}</p>
            </div>
}