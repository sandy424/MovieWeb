import {useNavigate} from "react-router-dom";

function Main() {
    const navigate = useNavigate();
    const onClick = () => {
        navigate("/Movie_list")
    }
    return(
        <div>
            <h2>MoviePickr</h2>
            <button onClick={onClick}>Let's watch</button>
        </div>
    )
}
export default Main;