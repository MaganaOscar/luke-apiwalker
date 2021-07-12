import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Result = (props) => {
    console.log(props)
    // const [resource, setResource] = useState(props.resource);
    // const [idAPI, setIdAPI] = useState(props.idAPI);
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

    useEffect( () => {

        axios.get(`https://swapi.dev/api/${props.resource}/${props.idAPI}`)
            .then(response => {
                console.log(response.data);
                console.log(props.resource);
                console.log(props.idAPI);
                // setResource(props.resource);
                // setIdAPI(props.idAPI);
                setResults(response.data);
                setError(null);
            })
            .catch((e) => {
                // setResource(props.resource);
                // setIdAPI(props.idAPI);
                setError("These aren't the droids you're looking for")
            })
    }, [props.resource, props.idAPI])

    return (
        <div>
            {
                error ?
                <p>{error}</p> :
                <p>{results.name}</p>
            }
        </div>
    )
}

export default Result;