import {useParams} from 'react-router-dom';

export default function UserView(){
    const params = useParams();
    /*const {id} = useParams(); es lo mismo xq params es un objeto con un campo id*/
    return(
        <div>
            User <h1>{params.id}</h1>
        </div>
    )
}