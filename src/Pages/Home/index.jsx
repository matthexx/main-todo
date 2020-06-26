import React from 'react';
import TextInput from '../../components/Input';
import TextArea from '../../components/TextArea';


function Home(props){
    // const { setUser } = props
    const [ inputValue, setInputValue ] = React.useState({ name: '', bio: ''})

    const handleChange = (e) =>{
        setInputValue({...inputValue, [e.target.name]: e.target.value })
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
            value={inputValue.name}
            onChange={handleChange}
            />
            <TextArea
             name='bio'
             placeholder='Tell a bit about your self'
             value={inputValue.value}
             onChange={handleChange}
            />

            </div>
           
        </div>
    )
}

export default Home;