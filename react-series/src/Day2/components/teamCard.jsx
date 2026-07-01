function TeamCard(props) {
  return (
    <div className="teamCard">
      <img src={props.image} alt={props.name} />

      <h2>{props.name}</h2>

      <p>{props.role}</p>

      <button>View Profile</button>
    </div>
  );
}

export default TeamCard;