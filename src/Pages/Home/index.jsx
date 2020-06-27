import React from 'react';
import TextInput from '../../components/Input';
import Button from '../../components/Button';
import { useHistory } from "react-router-dom";



function Home(props){
    const { setUser } = props
    const [ inputValue, setInputValue ] = React.useState({ name: '', bio: ''})
    let history = useHistory();
    const handleChange = (e) =>{
        setInputValue({...inputValue, [e.target.name]: e.target.value })

    }


    const handleSubmit = () => {
        setUser(inputValue.name)
        history.push('/todo')
    }


    return(
        <div>
            <h2>
                Welcome Home
            </h2>
            <div>
            <TextInput
                name='name'
                placeholder='Enter your name'
                height="20px"
                value={inputValue.name}
                onChange={handleChange}
            />
            <TextInput
                name='bio'
                placeholder='Tell a bit about your self'
                value={inputValue.bio}
                onChange={handleChange}
            />

            <Button
                value='ENTER'
                onClick={handleSubmit}
                disabled={ (!Boolean(inputValue.name) || !Boolean(inputValue.bio)) }
            />

            </div>
           
        </div>
    )
}

export default Home;