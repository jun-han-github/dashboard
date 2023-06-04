import { JobExperience } from "../../assets/data/job-experiences";
import Tag from "../tags/Tag";

const experienceStyle = {
  borderRadius: '12px',
  backgroundColor: '#ffffff4C',
  padding: '16px',
  marginBottom: '24px',
}

const ExperienceBox = ({ title, url, description, tags }: JobExperience) => {

  return (
    <div style={experienceStyle}>
      <a href={url}>
        <strong>{title}</strong>
      </a>
      { description.map((content, index) => (<p key={index} style={{ fontSize: '12px' }}>{content}<br/></p>)) }
      { tags.map((tag: string, index: number) => <Tag key={index} tag={tag} />) }
    </div>
  )
}
export default ExperienceBox;
