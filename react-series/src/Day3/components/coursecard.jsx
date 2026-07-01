function Coursecard(props) {
  return (
    <div className="card">

      <img src={props.image} alt={props.title} />

      <h2>{props.title}</h2>

      <p>{props.trainer}</p>

      <p>{props.duration}</p>

      <button>Enroll Now</button>

    </div>
  );
}

export default Coursecard;