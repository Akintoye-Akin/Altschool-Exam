import './App.css';
import Pagination from './component/Pagination';
import DataFetchings from './component/DataFetching';
import Post from './component/Post'
import 'react-bootstrap/dist/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Pagination/>
      <DataFetchings/>
      <Post/>
    </div>
  );
}

export default App;
