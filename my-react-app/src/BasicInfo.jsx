function BasicInfo({person}){
    return(
        <div>
            <h1> {person.name}</h1>
            <h2>{person.address}</h2>
            <h2>{person.dob}</h2>
        </div>
    );
}

export default BasicInfo