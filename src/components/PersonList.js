import React from 'react'
import { Link } from '@reach/router';
import { Card } from '@material-ui/core'
import DeleteButton from './DeleteButton';


export default props => {
    return (
        <div>
            {props.people.map((person, idx)=>{
                return ( 
                    <ul>
                        <li key={idx}>
                            <Link to={"/" + person._id}>
                                <Card>
                                    <img src={person.picture} />
                                    <CardContent>
                                        <h4>{person.dragName}</h4>
                                        <p>{person.city}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                            <DeleteButton personId = { person._id } successCallBack={() => removeFromDom(person._id)} /> 
                        </li>
                    </ul>
                )
            })}
        </div>
    )
}