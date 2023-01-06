import axios from 'axios';

const FetchData = async () =>{

    return(
        await axios.get('http://localhost:3000/user/12').then(result => result.data)
    )
}


export default FetchData