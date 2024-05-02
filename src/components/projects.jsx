'use client'

import { useEffect, useState } from "react"
import { ProjectComponent } from "@/components/project/project"
import { Loader } from '@/components/loader'
import  axios  from "axios"

function ProjectsComponent(){
    const [Apps, setApps] = useState(null)

    useEffect(() => {
        const getProjects = async () => {
            try {
                const projects = await axios.get(process.env.NEXT_PUBLIC_SERVER_URL)
                setApps(projects.data)
            } catch (e) {
                console.log(e);
            }
            
        }

        getProjects()
    }, [])
    
    return(
        <div id="projects" className="h-full my-20 md:my-32 p-2">
            <div className="flex items-center mb-4">
                <span className="text-2xl md:text-3xl font-semibold text-yellow-300 mr-1">+</span>
                <h2 className="text-2xl md:text-3xl text-white font-semibold">Mis Proyectos</h2>
            </div>

            <div className="flex justify-center items-center mt-14 md:mt-20 w-full min-h-screen">
                <div className="flex-col space-y-52 w-full h-full">
                    {Apps ?
                     Apps.map((app, i) => {
                        return(
                            <ProjectComponent app={app} key={i}/>
                        )
                    })

                    :
                    
                    <Loader/>

                    }
                </div>

                
            </div>

        </div>
    )
}

export default ProjectsComponent