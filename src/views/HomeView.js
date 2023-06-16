import {Link} from 'react-router-dom';


const idUser = 20;
export default function HomeView(){
    return <div>
        
        <h1>Home</h1>
        {/* Me va a direccionar a una pesaña con el numero del id. */}
        <Link to={`/about/${idUser}`}>About</Link>
        
        
        </div>
}
