import './Style.css';
import './App.css';
import picture from './nature.jpeg'

function App() {
  return (
<div className ="App">
<div style={{MaxWidth:"100vw"}}>
<h1 className ="title red">Your name here</h1>
<br/>
<img src="/eau_nature.jpg" alt="nature"/>
<br/>
<img src= {picture} alt="nature.jpeg"/>
</div>
<video width="320" height="240" controls>
<source src="..https://www.youtube.com/watch?v=0J_Z0SlvEbA" type="video/mp4"/>
</video>
    </div>
  );
}
export default App; 
