import {Routes, Route} from "react-router-dom";
import Main from './component/Main';
import Movie_list from './component/Movie_list';
import Detail from './component/Detail';

function App() {
    return(
      <div>
      <Routes>
        <Route path={process.env.PUBLIC_URL+"/"} element={<Main/>}/>
        <Route path="/Movie_list" element={<Movie_list/>}/>
        <Route path="/movie/:id" element={<Detail/>}/>
      </Routes>
    </div>
    );
}
export default App;