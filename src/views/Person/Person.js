import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default props => {

    const [person, setPerson] = useState({})

    useEffect(() => {
        axios.get("http://localhost:800/api/person/"+props.id)
            .then(res => setPerson(res.data))
    }, [])

    return(
        <div>
            <article>
                <section>
                    <div class="banner">
                        <img src={person.picture} alt={person.dragName}/>
                        <h2>{person.dragName}</h2>
                        <p> { person.causes } </p>
                    </div>
                </section>
                <aside>
                    <ul>
                        <p>Below should be accordions, one closes the other</p>
                        <li>{ person.otherName }</li>
                        <li>{ person.pronouns }</li>
                        <li>{ person.gender }</li>
                        <li>{ person.race }</li>
                        <li>{ person.ethnicity }</li>
                        <li>{ person.sexuality }</li>
                        <li>{ person.disability }</li>
                        <li>{ person.accommodations }</li>
                        <li>{ person.pronouns }</li>
                    </ul>
                    <ul>
                        <li>{ person.facebook }</li>
                        <li>{ person.instagram }</li>
                        <li>{ person.twitter }</li>
                        <li>{ person.youtube }</li>
                        <li>{ person.tiktok }</li>
                        <li>{ person.website }</li>
                    </ul>
                </aside>
            </article>
            <Link to={"/people"}><button>Go back</button></Link>
            <Link to={"/people" + person._id +"/edit"}><button>Edit</button></Link>
            <Link to={"/people" + person._id +"/delete"}><button>Delete</button></Link>
        </div>

    )

}