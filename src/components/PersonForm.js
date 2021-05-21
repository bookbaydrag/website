import React, { useState } from 'react';
import axios from 'axios';

export default props => {
    const { 
        initialDragName,
        initialOtherName,
        initialEmail,
        initialPhone,
        initialContactMethod,
        intialCity,
        initialFacebook,
        initialInsta,
        initialTwitter,
        initialYoutube,
        initialTiktok,
        initialWebsite,
        initialRace,
        initialEthnicity,
        initialGender,
        initialPronouns,
        initialDisability,
        initialADA,
        initialCauses,
        initialPicture,
        initialSexuality,
        onSubmitProp 
    } = props;

    const [dragName, setDragName] = useState(initialDragName);
    const [otherName, setOtherName] = useState(initialOtherName);
    const [email, setEmail] = useState(initialEmail);
    const [phone, setPhone] = useState(initialPhone);
    const [contactMethod, setContactMethod] = useState(initialContactMethod);
    const [city, setCity] = useState(intialCity);
    const [facebook, setFacebook] = useState(initialFacebook);
    const [insta, setInsta] = useState(initialInsta);
    const [twitter, setTwitter] = useState(initialTwitter);
    const [youtube, setYoutube] = useState(initialYoutube);
    const [tiktok, setTiktok] = useState(initialTiktok);
    const [website, setWebsite] = useState(initialWebsite);
    const [race, setRace] = useState(initialRace);
    const [ethnicity, setEthnicity] = useState(initialEthnicity);
    const [gender, setGender] = useState(initialGender);
    const [pronouns, setPronouns] = useState(initialPronouns);
    const [disability, setDisability] = useState(initialDisability);
    const [aDA, setADA] = useState(initialADA);
    const [causes, setCauses] = useState(initialCauses);
    const [picture, setPicture] = useState(initialPicture);
    const [sexuality, setSexuality] = useState(initialSexuality);
    
    // Error fields ------------------------------------------------------------------------
    // const [dragNameError, setDragNameError] = useState("");
    // const [otherNameError, setOtherNameError] = useState("");
    // const [emailError, setEmailError] = useState("");
    // const [phoneError, setPhoneError] = useState("");
    // const [contactMethodError, setContactMethodError] = useState("");
    // const [cityError, setCityError] = useState("");
    // const [facebookError, setFacebookError] = useState("");
    // const [instaError, setInstaError] = useState("");
    // const [twitterError, setTwitterError] = useState("");
    // const [youtubeError, setYoutubeError] = useState("");
    // const [tiktokError, setTiktokError] = useState("");
    // const [websiteError, setWebsiteError] = useState("");
    // const [raceError, setRaceError] = useState("");
    // const [genderError, setGenderError] = useState("");
    // const [ethnicityError, setEthnicityError] = useState("");
    // const [pronounsError, setPronounsError] = useState("");
    // const [disabilityError, setDisabilityError] = useState("");
    // const [aDAError, setADAError] = useState("");
    // const [causesError, setCausesError] = useState("");
    // const [pictureError, setPictureError] = useState("");
    // const [sexualityError, setSexualityError] = useState("");
    // const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({
            initialDragName,
            initialOtherName,
            initialEmail,
            initialPhone,
            initialContactMethod,
            intialCity,
            initialFacebook,
            initialInsta,
            initialTwitter,
            initialYoutube,
            initialTiktok,
            initialWebsite,
            initialRace,
            initialEthnicity,
            initialGender,
            initialPronouns,
            initialDisability,
            initialADA,
            initialCauses,
            initialPicture,
            initialSexuality,
        });
    // Call individual error + event handlers ------------------------------------------------------
        // handleDragName;
        // handleOtherName;
        // handleEmail;
        // handlePhone;
        // handleCity;
        // handleFacebook;
        // handleInsta;
        // handleTwitter;
        // handleYoutube;
        // handleTiktok;
        // handleWebsite;
        // handleRace;
        // handleEthnicity;
        // handleGender;
        // handlePronouns;
        // handleDisability;
        // handleADA;
        // handleCauses;
        // handlePicture;
        // handleSexuality;

        axios.post('http://localhost:8000/api/person', {
            dragName,
            otherName,
            email,
            phone,
            contactMethod,
            city,
            facebook,
            insta,
            twitter,
            youtube,
            tiktok,
            website,
            race,
            ethnicity,
            gender,
            pronouns,
            disability,
            aDA,
            causes,
            picture,
            sexuality
        })
        .then(res => console.log(res))
        .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errArr);
        })
    
    } 

    //Input Field Handlers/ Front End Validations--------------------------------------------------
    // const handleDragName = e => {
    //     setDragName(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setDragNameError("You must include your stage name");
    //     } else {
    //         setDragNameError("");
    //     }
    // }

    // const handleOtherName = e => {
    //     setOtherName(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setOtherNameError("You must include your last name");
    //     } else {
    //         setOtherNameError("");
    //     }
    // }

    // const handleEmail = e => {
    //     setEmail(e.target.value);
    //     if(e.target.value.length < 5) {
    //         setEmailError("You must include your email address");
    //     } else {
    //         setEmailError("");
    //     }
    // }

    // const handlePhone = e => {
    //     setPhone(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setPhoneError("You must include your phone number");
    //     } else {
    //         setPhoneError("");
    //     }
    // }

    // const handleCity = e => {
    //     setCity(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setCityError("You must include your city");
    //     } else {
    //         setCityError("");
    //     }
    // }

    // const handleFacebook = e => {
    //     setFacebook(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setFacebookError("You must include your Facebook page");
    //     } else {
    //         setFacebookError("");
    //     }
    // }

    // const handleInsta = e => {
    //     setInsta(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setInstaError("You must include your Instagram handle");
    //     } else {
    //         setInstaError("");
    //     }
    // }

    // const handleTwitter = e => {
    //     setTwitter(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setTwitterError("You must include your Twitter handle");
    //     } else {
    //         setTwitterError("");
    //     }
    // }

    // const handleYoutube = e => {
    //     setYoutube(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setYoutubeError("You must include your Youtube page");
    //     } else {
    //         setYoutubeError("");
    //     }
    // }

    // const handleTiktok = e => {
    //     setTiktok(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setTiktokError("You must include your Tiktok handle");
    //     } else {
    //         setTiktokError("");
    //     }
    // }

    // const handleWebsite = e => {
    //     setWebsite(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setWebsiteError("You must include your website");
    //     } else {
    //         setWebsiteError("");
    //     }
    // }

    // const handleRace = e => {
    //     setRace(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setRaceError("You must include your race");
    //     } else {
    //         setRaceError("");
    //     }
    // }

    // const handleEthnicity = e => {
    //     setEthnicity(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setEthnicityError("You must include your ethnicity");
    //     } else {
    //         setEthnicityError("");
    //     }
    // }

    // const handleGender = e => {
    //     setGender(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setGenderError("You must include your gender");
    //     } else {
    //         setGenderError("");
    //     }
    // }

    // const handlePronouns = e => {
    //     setPronouns(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setPronounsError("You must include your pronouns");
    //     } else {
    //         setPronounsError("");
    //     }
    // }

    // const handleDisability = e => {
    //     setDisability(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setDisabilityError("You must include your disability");
    //     } else {
    //         setDisabilityError("");
    //     }
    // }

    // const handleADA = e => {
    //     setADA(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setADAError("You must include your needed ADA accommodations");
    //     } else {
    //         setADAError("");
    //     }
    // }

    // const handleCauses = e => {
    //     setCauses(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setCausesError("You must include your causes close to heart");
    //     } else {
    //         setCausesError("");
    //     }
    // }

    // const handlePicture = e => {
    //     setPicture(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setPictureError("You must include your picture");
    //     } else {
    //         setPictureError("");
    //     }
    // }

    // const handleSexuality = e => {
    //     setSexuality(e.target.value);
    //     if(e.target.value.length < 1) {
    //         setSexualityError("You must include your sexuality");
    //     } else {
    //         setSexualityError("");
    //     }
    // }



    return (
        <form onSubmit={onSubmitHandler}>
            { errors.map((err, index) => <p key={index}>{err}</p>)}
          
                <label>Performer Name</label>
                <input type="text" onChange={(e)=>setDragName(e.target.value)} value={dragName}/>
                
                <label>Other Name</label>
                <input type="text" onChange={(e)=>setOtherName(e.target.value)} value={otherName}/>

                <label>Current City</label>
                <input type="text" onChange={(e)=>setCity(e.target.value)} value={city}/>
                
                <label>Email</label>
                <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                
                <label>Phone Number</label>
                <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone}/>
                
                <label>Preferred Contact Method</label>
                <input type="text" onChange={(e)=>setContactMethod(e.target.value)} value={contactMethod}/>
                
                <label>Facebook</label>
                <input type="text" onChange={(e)=>setFacebook(e.target.value)} value={facebook}/>
                
                <label>Instagram</label>
                <input type="text" onChange={(e)=>setInsta(e.target.value)} value={insta}/>
                
                <label>Twitter</label>
                <input type="text" onChange={(e)=>setTwitter(e.target.value)} value={twitter}/>
                
                <label>Youtube</label>
                <input type="text" onChange={(e)=>setYoutube(e.target.value)} value={youtube}/>
                
                <label>Tiktok</label>
                <input type="text" onChange={(e)=>setTiktok(e.target.value)} value={tiktok}/>
                
                <label>Personal Website</label>
                <input type="text" onChange={(e)=>setWebsite(e.target.value)} value={website}/>
                
                <label>Race</label>
                <input type="text" onChange={(e)=>setRace(e.target.value)} value={race}/>
                   
                <label>Ethnicity</label>
                <input type="text" onChange={(e)=>setEthnicity(e.target.value)} value={ethnicity}/>
                
                <label>Gender</label>
                <input type="text" onChange={(e)=>setGender(e.target.value)} value={gender}/>
                
                <label>Disability</label>
                <input type="text" onChange={(e)=>setDisability(e.target.value)} value={disability}/>
                
                <label>Accommodations</label>
                <input type="text" onChange={(e)=>setADA(e.target.value)} value={aDA}/>
                
                <label>Causes close to heart</label>
                <input type="text" onChange={(e)=>setCauses(e.target.value)} value={causes}/>
                
                <label>Picture</label>
                <input type="file" onChange={(e)=>setPicture(e.target.value)} value={picture}/>
                
                <label>Sexuality</label>
                <input type="text" onChange={(e)=>setSexuality(e.target.value)} value={sexuality}/>
                
            <input type="submit"/>
        </form>
    )
}

