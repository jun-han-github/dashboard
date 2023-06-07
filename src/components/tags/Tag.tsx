import { getWebsiteUrl } from "../../util/helper"

const tagStyle = {
  display: 'inline-block',
  backgroundColor: '#FF7B19',
  borderRadius: '20px',
  padding: '4px 8px',
  fontSize: '12px',
  marginRight: '8px',
  marginBottom: '8px',
  letterSpacing: '1px'
}

type TagProps = {
  tag: string
}

const Tag = ({tag}: TagProps) => {
  return (
    <a href={getWebsiteUrl(tag)} style={{ pointerEvents: getWebsiteUrl(tag) === '' ? 'none' : 'auto' }} target="_blank">
      <div style={tagStyle}>
        <strong style={{color: '#000000'}}>{tag}</strong>
      </div>
    </a>
  )
}
export default Tag
