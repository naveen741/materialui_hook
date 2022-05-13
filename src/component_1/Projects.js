import ImgMediaCard from './ImgMediaCard';
import './Projects.css'
export default function Projects(){
    return(
        <div className="projects">
            <h1 className="project"> Project Details</h1>
            <div className='cards'>
            <ImgMediaCard/>
                
            </div>
        </div>
    );
}