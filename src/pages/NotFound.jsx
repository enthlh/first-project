import {useNavigate} from 'react-router-dom'
const NotFound = () => {
    const navigate = useNavigate()
    return (
        <>
        <h1>Not Found 404</h1>
        <button onClick={()=>navigate('/')}>Back To Home</button>
        </>
    )
}
export default NotFound