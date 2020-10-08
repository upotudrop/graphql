import React, { useState } from 'react'
import {gql, useQuery} from '@apollo/client'
import Persons from './person'
import Registration from './registration'
import {ALL_PERSONS} from '../queries/queries'




const App = () => {
    const [errorMessage, setErrorMessage] = useState(null)
    const result = useQuery(ALL_PERSONS)

    if(result.loading) {
        return <div>loading...</div>
    }

    const notify = (message) => {
        setErrorMessage(message)
        setTimeout(() => {
            setErrorMessage(null)
        }, 10000)
    }

    return (
        <div>
      <Notify errorMessage={errorMessage} />
      <Persons persons = {result.data.allPersons} />
      <Registration setError={notify} />
    </div>

    )
}

const Notify = ({errorMessage}) => {
    if(!errorMessage) {
        return null
    }
    return (
        <div style={{color: 'red'}}>{errorMessage}</div>
    )
}

export default App