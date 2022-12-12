import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style.css'

function ProjectItems() {
    const [count, setCount] = useState(0)

    return (
        <div className="body">
            <div class="background">
                <div class="flexbox">
                    <div class="levá">
                        <h2 class="inline">🔥Logo</h2>
                        <a href="">About</a>
                        <a href="">Services</a>
                        <a href="">Portfolio</a>

                        <div class="nadpis">
                            <h1>Portfolio</h1>
                            <h2 class="inline">Recent Work</h2>
                            <hr />
                        </div>
                    </div>
                    <div class="pravá">
                        <a href="">Contact</a>
                    </div>
                </div>

                <div class="flex">
                    <div class="leveko">
                        <img src="1.jpg" alt="kříž" />
                        <div class="text">
                            <h2 class="title"> Project Title</h2>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam bibendum elit eget erat. Integer
                            vulputate sem a nibh.
                        </div>

                        <img src="1.jpg" alt="pikachu" />
                        <div class="text">
                            <h2 class="title"> Project Title</h2>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam bibendum elit eget erat. Integer
                            vulputate sem a nibh.
                        </div>

                        <img src="1.jpg" alt="controller" />
                        <div class="text">
                            <h2 class="title"> Project Title</h2>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam bibendum elit eget erat. Integer
                            vulputate sem a nibh.
                        </div>
                    </div>

                    <div class="praveko">
                        <img src="1.jpg" alt="mašinka" />
                        <div class="text">
                            <h2 class="title"> Project Title</h2>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam bibendum elit eget erat. Integer
                            vulputate sem a nibh.
                        </div>

                        <img src="1.jpg" alt="sova" />
                        <div class="text">
                            <h2 class="title"> Project Title</h2>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam bibendum elit eget erat. Integer
                            vulputate sem a nibh.
                        </div>

                        <img src="1.jpg" alt="mouka" />
                        <div class="text">
                            <h2 class="title"> Project Title</h2>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam bibendum elit eget erat. Integer
                            vulputate sem a nibh.
                        </div>
                    </div>
                </div>

                <div class="copy">Copyright © Example.com 2022</div>
            </div>
        </div>
    )
}

export default ProjectItems