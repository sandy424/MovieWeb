import {Routes, Route} from "react-router-dom";
import Main from '../component/Main';
import Movie_list from '../component/Movie_list';

function App() {
    return(
      <div>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/Movie_list" element={<Movie_list/>}/>
      </Routes>
    </div>
    );
}
export default App;