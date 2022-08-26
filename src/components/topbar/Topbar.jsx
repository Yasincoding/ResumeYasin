import "./topbar.scss";
import {Person,Mail} from "@material-ui/icons";

export default function topbar({setMenuOpen, menuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Portfolio</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+0642061401</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>yasin52gumus@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>

            </div>
        </div>
    )
}
