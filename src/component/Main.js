import {useNavigate} from "react-router-dom";
import "../style/style-main.css"

function Main() {
    const navigate = useNavigate();
    const onClick = () => {
        navigate("/Movie_list");
    }
    const style = {
        color: "yellow",
    }
    return(
        <div>
            <h2 style={style}>MoviePickr</h2>
            <button onClick={onClick}>Let's watch</button>
        </div>
    )
}
export default Main;