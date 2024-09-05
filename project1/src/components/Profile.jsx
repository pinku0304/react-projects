const Profile = () => {
  const skills = [
    {
      skill: "html",
      level: "Advanced",
      color: "#ddd",
    },
    {
      skill: "css",
      level: "Advanced",
      color: "#eee",
    },
    {
      skill: "Javascript",
      level: "Intermediate",
      color: "#f8f8f8",
    },
    {
      skill: "react",
      level: "Intermediate",
      color: "#f9f9f9",
    },
    {
      skill: "Nextjs",
      level: "Basic",
      color: "#f0f0f0",
    },
  ];

  return (
    <>
      <div className="card">
        <img src="https://images.pexels.com/photos/2282660/pexels-photo-2282660.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <h3>Priyanka</h3>
        <p>
          I am a React developer. I am working in one of the famous mnc company
          know as accenture with 15lakh package.
        </p>
        <ul>
          {skills.map((skill, index) => (
            <li key={index} style={{ backgroundColor: skill.color }}>
              <span>{skill.skill}</span>{" "}
              <span>
                {skill.level === "Basic" && "👶"}
                {skill.level === "Intermediate" && "👍"}
                {skill.level === "Advanced" && "💪"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Profile;
