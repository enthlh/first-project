import {useNavigate} from 'react-router-dom'
const First = () =>{
    const navigate = useNavigate()
    return(
        <>
            <h1>
             Home Page
            </h1>
            <button onClick={()=>{navigate('/about')}}>Get About</button>
        </>
    )
}

export default First;