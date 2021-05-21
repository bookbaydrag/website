import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PersonForm from '../../components/PersonForm';
import PersonList from '../../components/PersonList';

export default () => {
    const [ title, setTitle ] = useState("Loading...");
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/people")
            .then(res=>{
                setTitle(res.data.title);
                setPeople(res.data);
                setLoaded(true);
            });
    }, []);

    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId));
    }

    const createPerson = person => {
        axios.post('http://localhost:800/api/person', person)
            .then(res=>{
                setPeople([...people, res.data]);
            })
    }
    
    return (
        <div>
            <h1>{title}</h1>
            <article>
                { loaded && <PersonList people={people} removeFromDom={removeFromDom} /> }
            </article>
            <sidebar>
               <PersonForm 
                    onSubmitProp = {createPerson} 
                    initialDragName = ""
                    initialOtherName = ""
                    initialEmail = ""
                    initialPhone = ""
                    initialContactMethod = ""
                    intialCity = ""
                    initialFacebook = ""
                    initialInsta = ""
                    initialTwitter = ""
                    initialYoutube = ""
                    initialTiktok = ""
                    initialWebsite = ""
                    initialRace = ""
                    initialEthnicity = ""
                    initialGender = ""
                    initialPronouns = ""
                    initialDisability = ""
                    initialADA = ""
                    initialCauses = ""
                    initialPicture = ""
                    initialSexuality = ""
                />
            </sidebar>
        </div>
    )
}