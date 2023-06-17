import "./recomendation.css";

function Recomendation({ title = 'Default Title', description = 'Default Description' }) {
  return (
    <div className="content-pr">
      <div className="content-box">
        
        <div className="recomendation">
          
          <div className="recomendation-img">
            <img src="./huella.png" alt="Recommendation" />
          </div>
          
          <div className="recomendation-text">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          
        </div>
      
      </div>
    </div>
  );
}

export default Recomendation;