import Recomendation from "../components/Recomendation";
import "../components/recomendation.css";

const activity = [
  {
    title: "Alimentación adecuada",
    description:
      "Proporciona a tu mascota una dieta equilibrada y adecuada a sus necesidades. Consulta con un veterinario para determinar qué tipo de alimento es el más adecuado para su especie, raza, edad y estado de salud.",
  },
  {
    title: "Agua fresca y limpia",
    description:
      "Asegúrate de que tu mascota siempre tenga acceso a agua fresca y limpia. Cambia el agua regularmente para mantenerla en óptimas condiciones.",
  },
  {
    title: "Ejercicio regular",
    description:
      "Proporciona a tu mascota suficiente ejercicio diario para mantenerla activa y saludable. El tipo y la cantidad de ejercicio pueden variar según la especie y la raza, así que infórmate sobre las necesidades específicas de tu mascota.",
  },
  {
    title: "Visitas al veterinario",
    description:
      "Lleva a tu mascota a revisiones veterinarias periódicas para garantizar su bienestar general. Mantén al día las vacunas, desparasitaciones y cualquier otro tratamiento preventivo recomendado por el veterinario.",
  },
  {
    title: "Higiene y cuidado personal",
    description:
      "Cepilla el pelaje de tu mascota regularmente para evitar la formación de nudos y mantenerlo limpio. Baña a tu mascota según sea necesario, utilizando productos adecuados para su especie y evitando el exceso de baños, ya que puede dañar la piel.",
  },
  {
    title: "Ambiente seguro",
    description:
      "Crea un entorno seguro para tu mascota, asegurándote de que no tenga acceso a productos tóxicos, cables eléctricos, plantas venenosas u otros objetos peligrosos. También es importante proporcionarle un refugio adecuado, con un lugar cómodo para descansar.",
  },
  {
    title: "Socialización",
    description:
      "Brinda a tu mascota la oportunidad de socializar con otros animales y personas. Esto ayuda a prevenir problemas de comportamiento y promueve su bienestar emocional.",
  },
  {
    title: "Juego y enriquecimiento",
    description:
      "Proporciona juguetes y actividades enriquecedoras para mantener a tu mascota mentalmente estimulada. Esto puede incluir rompecabezas de comida, juguetes interactivos o tiempo dedicado a jugar juntos.",
  },
  {
    title: "Identificación y microchip",
    description:
      "Asegúrate de que tu mascota tenga una identificación clara con tu información de contacto actualizada. Considera la posibilidad de colocarle un microchip, ya que proporciona una forma adicional de identificación en caso de que se pierda.",
  },
  {
    title: "Amor y atención",
    description:
      "Por último, pero no menos importante, bríndale a tu mascota amor, atención y tiempo de calidad. Ellos dependen de nosotros para su bienestar y felicidad, así que asegúrate de demostrarles cuánto los aprecias.",
  },
];


function RecommendationsView() {
  return (
    <div className="recommendationsViews">

      <div id="title-content">  
        <span className="title">       
          <h1>Recomendaciones</h1>
        </span>    
      </div>

      
      {activity.map((item, index) => (
        <Recomendation
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default RecommendationsView;
