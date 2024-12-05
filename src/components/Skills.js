import { faCss3, faGithub, faMicrosoft, faGolang, faVuejs, faHtml5, faJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { faCloud, faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Skills=()=>{
return(
    <div className=" w-100 p-3 d-flex flex-wrap gap-1 w-lg-10 justify-content-evenly">
        <div className=" text-warning d-flex align-items-center px-3 flex-column">
            <FontAwesomeIcon icon={faGithub} size="2x"/>
        </div>
        <div className=" text-warning d-flex align-items-center px-3 flex-column">
            <FontAwesomeIcon icon={faPython} size="2x"/>
        </div>
        <div className=" text-primary d-flex align-items-center px-3 flex-column">
            <FontAwesomeIcon icon={faReact} size="2x"/>
        </div>
        <div className=" text-danger d-flex align-items-center px-3 flex-column">
            <FontAwesomeIcon icon={faVuejs} size="2x"/>
           
        </div>
        <div className=" text-primary d-flex align-items-center px-3 flex-column">
            <FontAwesomeIcon icon={faCss3} size="2x"/>
           
        </div>
        <div className=" text-primary d-flex align-items-center px-3 flex-column">
            <FontAwesomeIcon icon={faGolang} size="2x"/>
           
        </div><div className=" text-warning d-flex align-items-center px-3 flex-column">
            <FontAwesomeIcon icon={faJs} size="2x"/>
           
        </div>
        <div className=" text-primary d-flex align-items-center px-3 flex-column">
            <FontAwesomeIcon icon={faDatabase} size="1x"/>

        </div>
        <div className=" text-primary d-flex align-items-center px-3 flex-column">
            <FontAwesomeIcon icon={faCloud} size="1x"/>
        </div>
    </div>
)
}
export default Skills;