import { getWebsiteUrl } from "../../util/helper"
import './Tag.scss';

type TagProps = {
  tag: string
}

const Tag = ({tag}: TagProps) => {
	return (
	<a href={getWebsiteUrl(tag)} style={{ pointerEvents: getWebsiteUrl(tag) === '' ? 'none' : 'auto' }} target="_blank">
		<div className={`tag ${ getWebsiteUrl(tag) === '' ? '' : 'glow' }`}>
			<strong style={{color: '#000000'}}>{tag}</strong>
		</div>
	</a>
	)
}
export default Tag
