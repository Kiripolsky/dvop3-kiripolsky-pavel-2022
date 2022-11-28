import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style.css'

function ProjectItems() {
    const [count, setCount] = useState(0)

    return (
        <div className="body">
            <div className="background">
                <div className="flexbox">
                    <div className="levá">
                        <h2 className="inline">🔥Logo</h2>
                        <a href="">About</a>
                        <a href="">Services</a>
                        <a href="">Portfolio</a>

                        <div className="nadpis">
                            <h1>Portfolio</h1>
                            <h2 className="inline">Recent Work</h2>
                            <hr />
                        </div>
                    </div>
                    <div className="pravá">
                        <a href="">Contact</a>
                    </div>
                </div>

                <div className="flex">
                    <div className="leveko">
                        <img src="" alt="kříž" />
                        <div className="text">
                            <h2 className="title"> Project Title</h2>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam bibendum elit eget erat. Integer
                            vulputate sem a nibh.
                        </div>

                        <img src="./1.jpg" alt="pikachu" />
                        <div className="text">
                            <h2 className="title"> Project Title</h2>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam bibendum elit eget erat. Integer
                            vulputate sem a nibh.
                        </div>

                        <img src="" alt="controller" />
                        <div className="text">
                            <h2 className="title"> Project Title</h2>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam bibendum elit eget erat. Integer
                            vulputate sem a nibh.
                        </div>
                    </div>

                    <div className="praveko">
                        <img src="" alt="mašinka" />
                        <div className="text">
                            <h2 className="title"> Project Title</h2>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam bibendum elit eget erat. Integer
                            vulputate sem a nibh.
                        </div>

                        <img src="" alt="sova" />
                        <div className="text">
                            <h2 className="title"> Project Title</h2>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam bibendum elit eget erat. Integer
                            vulputate sem a nibh.
                        </div>

                        <img src="" alt="mouka" />
                        <div className="text">
                            <h2 className="title"> Project Title</h2>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam bibendum elit eget erat. Integer
                            vulputate sem a nibh.
                        </div>
                    </div>
                </div>
                <div className="copy">Copyright © Example.com 2022</div>
            </div>
        </div>
    )
}

export default ProjectItems