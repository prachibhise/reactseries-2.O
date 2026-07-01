import "./team.css";
import TeamCard from "./components/teamCard";

function Team() {
  return (
    <div className="container">
      <h1>Our Team Members</h1>

      <div className="teamCards">
        <TeamCard
          name="Leona"
          role="Frontend Developer"
          image="https://i.pinimg.com/1200x/2c/a7/64/2ca764d3372199a7e4b239f46f4e92ef.jpg"/>

        <TeamCard
          name="Aisha"
          role="UI/UX Designer"
          image="https://i.pinimg.com/736x/5a/c0/b5/5ac0b511ef3e4df108c869b2c55e52fe.jpg"/>

        <TeamCard
          name="Rahul"
          role="Backend Developer"
          image="https://i.pinimg.com/1200x/d3/ed/7b/d3ed7b114e72e5f985cf712d269a1f19.jpg"/>
        <TeamCard
          name="Priya"
          role="Full Stack Developer"
          image="https://i.pinimg.com/736x/b5/12/58/b5125827b800e548c727fd26deb66f02.jpg" />
      </div>
    </div>
  );
}

export default Team;