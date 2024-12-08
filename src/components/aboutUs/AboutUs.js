import './AboutUs.css'
import MeImage from '../image/Images/Me.jpg'
const AboutUs = () => {
    console.log(MeImage)
    return(
        <div className='aboutUs'>


    <div class="wrapper">

        <div class="main-content">

            <div class="about-me-container">
                <h2 class="my-profession">Front-End Developer</h2>
                <h1 class="my-name">Artem Martynenko</h1>

                <p class="my-descr"> I am a student. I often play valleyball. Started learning a programming language, and learning a programming at University.  I
                    also study English. I go to the GYM. I live according to the momemnt is life type. </p>

            </div>

            <div class="projects-container">
                <h3 class="main-content-titel">Projects</h3>
                <ol class="project-list">
                    <li class="project-item">
                        <a href="https://agymfinal.netlify.app"
                            class="project-item-link">https://agymfinal.netlify.app</a>
                        <span class="project-item-descr">
                            .......................[ HTML5, CSS3 ]
                        </span>
                    </li>
                    <li class="project-item">
                        <a href="https://merry-rabanadas-2c6334.netlify.app"
                            class="project-item-link">https://merry-rabanadas-2c6334.netlify.app</a>
                        <span class="project-item-descr">
                            .............[ JavaScript ]
                        </span>
                    </li>
                    <li class="project-item">
                        <a href=""
                            class="project-item-link"></a>
                        <span class="project-item-descr">
                            ...................[ React.js, Node.js ]
                        </span>
                    </li>
                </ol>
            </div>

            <div class="work-experience-container">
                <h3 class="main-content-titel">Work Experience</h3>


                <div class="work-experience-place">
                    <h4 class="work-experience-position">
                        Front-End Developer -
                        <span class="work-experience-company">Student Intern</span>
                    </h4>

                    <p class="work-period">September 2023 - January 2024 | Country: Ukraine</p>

                    <ul class="work-duties-list">
                        <li class="work-duties">Learned the initial steps of programming.</li>
                        <li class="work-duties">Learned the basics of HTML and CSS.</li>
                        <li class="work-duties">Successfully completed the course</li>
                    </ul>
                </div>

                <div class="work-experience-place">
                    <h4 class="work-experience-position">
                        Front-End Developer -
                        <span class="work-experience-company"> Edvanced</span>
                    </h4>

                    <p class="work-period">January 2024 - Now | Country: Ukraine/Slovakia.</p>

                    <ul class="work-duties-list">
                        <li class="work-duties">I started learning programming in depth.</li>
                        <li class="work-duties">I study in depth HTML, CSS, JavaScript and React.</li>
                    </ul>
                </div>
                <div class="work-experience-place">
                    <h4 class="work-experience-position">
                    Student of - 
                        <span class="work-experience-company"> University </span>
                    </h4>

                    <p class="work-period">September 2024 - Now | Country: Slovakia</p>

                    <ul class="work-duties-list">
                        <li class="work-duties">I study at the University.</li>
                        <li class="work-duties">Learned a new programming language: Pascal.</li>
                        <li class="work-duties">I am still learning automation programming.</li>
                    </ul>
                </div>
            </div>
            <div>
                <h3 class="main-content-titel">Education: </h3>
                <ul class="work-duties-list">
                    <h4>
                        <li class="work-duties">School with in-depth study of the English language number.</li>
                        <li class="work-duties">Technical University in Kosice.</li>
                    </h4>
                    <h4>Now a first-year student</h4>
                </ul>
                <p class="work-period">September 2011 - Now | Country: Ukraine/Slovakia</p>
            </div>

        </div>
        <aside class="sidebar">
        <img src={MeImage} alt="Me" className='Me'/>
            <div class="contacts-conteiner">
                <h3 class="sidebar-title">Contacts</h3>
                <p class="contacts-item">
                    <span class="contacts-type">C: </span>
                    <a href="tel:+380687169976" class="contacts-number">+380 68 716 99 76</a>
                </p>
                <p class="contacts-item"></p>
                <span class="contacts-type">E: </span>
                <a href="mailto:a@gmail.com" class="contacts-email">amartynenko06@gmail.com</a>
            </div>
            <div class="tech-skills-conteiner">
                <h3 class="sidebar-title">Tech Skills</h3>
                <ul class="skills-list">
                    <li class="skills-list-item">
                        <span class="skills-list-text">HTML5</span>
                    </li>
                    <li class="skills-list-item">
                        <span class="skills-list-text">CSS</span>
                    </li>
                    <li class="skills-list-item">
                        <span class="skills-list-text">GIT</span>
                    </li>
                    <li class="skills-list-item">
                        <span class="skills-list-text">WebPack</span>
                    </li>
                    <li class="skills-list-item">
                        <span class="skills-list-text">JavaScript</span>
                    </li>
                    <li class="skills-list-item">
                        <span class="skills-list-text">Pascal</span>
                    </li>
                    <li class="skills-list-item">
                        <span class="skills-list-text">React.js</span>
                    </li>
                    <li class="skills-list-item">
                        <span class="skills-list-text">Node.js</span>
                    </li>
                </ul>
            </div>
            <div class="soft-skills-conteiner">
                <h3 class="sidebar-title">Soft Skills</h3>
                <ul class="soft-list">
                    <li class="soft-skills-item">
                        <span class="soft-skills-text">Communication</span>
                    </li>
                    <li class="soft-skills-item">
                        <span class="soft-skills-text">Assertiveness</span>

                    </li>
                    <li class="soft-skills-item">
                        <span class="soft-skills-text">Personality</span>
                    </li>
                    <li class="soft-skills-item">
                        <span class="soft-skills-text">Teamwork</span>
                    </li>
                </ul>
            </div>
        </aside>

    </div>
            <a href="/">На головну</a>
        </div>
    )
}
export default AboutUs