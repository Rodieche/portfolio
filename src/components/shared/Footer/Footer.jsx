import './Footer.css'

import { SvgComponent } from "./svg";
// import MESSAGES from '../../../helpers/texts';
import { SocialMedia } from '../socialMedias/socialMedia';

export const Footer = () => {

    const year = new Date().getFullYear();
    // const navs = MESSAGES.NAVS;
    
    return (
        <footer>
            <div className="backgound">
                <SvgComponent />
            </div>
            <section>
                <SocialMedia />
                {/* <ul className="links">
                    {
                        navs.map(n => {
                            return(
                                <li key={ n.name }><a href={ n.link }>{ n.name }</a></li>
                            )
                        })
                    }
                </ul> */}
                <p className="legal">&copy; { year } All rights reservated</p>
            </section>
        </footer>
    )
}
