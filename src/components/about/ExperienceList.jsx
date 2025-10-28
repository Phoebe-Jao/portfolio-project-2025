import experienceData from "../../data/experienceData";

const ExperienceList= () => {
  return (
    <div>
      {experienceData.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.company}</p>
          <span>{item.period}</span>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ExperienceList;