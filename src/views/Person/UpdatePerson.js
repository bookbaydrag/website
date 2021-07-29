import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@react/router';

import PersonForm from '../../components/PersonForm';
import DeleteButton from '../../components/DeleteButton';


export default props => {

    const { id } = props;
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/person/' + id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
    }, [])

    const updatePerson = person => {
        axios.put('http://localhost:8000/api/person/' + id, person)
            .then(res => console.log(res));
    }
    
    return (
        <div>
            {loaded && (
                <PersonForm
                    onSubmitProp={updatePerson}
                    initialDragName = { person.dragName }
                    initialOtherName = { person.otherName }
                    initialEmail = { person.email }
                    initialPhone = { person.phone }
                    initialContactMethod ={ person.contactMethod }
                    intialCity = { person.city }
                    initialFacebook = { person.facebook }
                    initialInsta = { person.insta }
                    initialTwitter = { person.twitter }
                    initialYoutube = { person.youtube }
                    initialTiktok = { person.tiktok }
                    initialWebsite = { person.website }
                    initialRace = { person.race }
                    initialEthnicity = { person.ethnicity }
                    initialGender = { person.gender }
                    initialPronouns = { person.pronouns }
                    initialDisability = { person.disability }
                    initialADA = { person.aDA }
                    initialCauses = { person.causes }
                    initialPicture = { person.picture }
                    initialSexuality = { person.sexuality }
                />
            )}
            <DeleteButton personId = { person._id } successCallBack={() => NavigationPreloadManager("/")} /> 
            <Link to={"/people/"+ person._id}>Go back</Link>
        </div>
    )

}