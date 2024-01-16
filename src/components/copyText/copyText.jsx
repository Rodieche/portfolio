import { useEffect, useRef, useState } from "react";
import MESSAGES from "../../helpers/texts"

import './copyText.css';

export const CopyText = () => {

    const copyText = useRef(null);
    const [isMobile, setisMobile] = useState(null);
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if(mobile){
            setisMobile(true);
            setIcon("fa-brands fa-whatsapp");
        }else{
            setisMobile(false);
            setIcon("fas fa-clone");
        }
    },[])

    const copyToClipboard = () => {
        if(isMobile){
            window.open('https://wa.me/+640273412719/?text=Hi, I would like to contact you to know more about your services')
        }else{
            navigator.clipboard.writeText(MESSAGES.EMAIL);
            copyText.current.classList.add('active');
            setTimeout(() => {
                copyText.current.classList.remove('active');
            }, 2000);            
        }


    }

    return (
        <>
            <div className="copy-text" ref={copyText} style={{ marginTop: '30px' }}>
                <input type="text" className="text" value={ MESSAGES.EMAIL } readOnly />
                <button onClick={copyToClipboard}>
                    <i className={ icon }></i>
                </button>
            </div>
        </>
    )
}
