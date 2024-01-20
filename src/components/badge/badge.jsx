import './badge.css';
import MESSAGES from "../../helpers/texts";

export const BadgeComponent = () => {
  return (
    <>
      <p>
        {
          MESSAGES.TECHNOLOGIES.map(tech => {
            return(
              <span className="badge" key={ tech.name } style={{ "--clr": tech.color, '--tcl': tech.textColor }} ><i className={ tech.icon }></i>&nbsp;{ tech.name }</span>
            )
          })
        }
      </p>
    </>
    )
}
