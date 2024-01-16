import MESSAGES from "../../../helpers/texts";
import './socialMedia.css';

const socials = MESSAGES.SOCIALMEDIAS;

export const SocialMedia = () => {
  return (
    <ul className="effect">
        {
            socials.map(social => {
                return(
                    <li key={social.name} style={{"--clr": social.color}}>
                        <a href={social.link} target="_blank" rel="noreferrer">
                            <i className={ social.icon }></i>&nbsp;
                            <span>{ social.name }</span>
                        </a>
                    </li>
                )
            })
        }
    </ul>
    )
}
