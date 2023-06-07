import { FaLink } from "react-icons/fa";
import { JobExperience } from "../../assets/data/job-experiences";
import Tag from "../tags/Tag";
import './ExperienceBox.scss';

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
        <strong>{title}&nbsp;&nbsp;{ url && <FaLink size={12}/>}</strong>
      </a>
      { description.map((content, index) => (<p key={index} style={{ fontSize: '12px' }}>{content}<br/></p>)) }
      <div className="tags-box">
        { tags.map((tag: string, index: number) => <Tag key={index} tag={tag} />) }
      </div>
    </div>
  )
}
export default ExperienceBox;
