import axios from 'axios';
import { Button } from '@material-ui/core';

export default props => {
    const { personId, successCallBack } = props;
    const deletePerson = e => {
        axios.delete('http://localhost:8000/api/person/' + personId )
            .then(res=>{
                successCallBack();
            })
    }

    return (
        <Button onClick={deletePerson}>Delete</Button>
    )
}