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
            <div className="flex justify-center mt-20">
                <div>
                    <h2 className="sm:text-xl md:text-3xl text-white font-semibold">Mis Proyectos</h2>
                    <div className="flex items-center">
                    <div className="secondaryBack w-7 md:w-12 h-1 rounded-3xl"></div>
                    <div className="secondaryBack w-20 md:w-36 h-1 rounded-3xl mx-2"></div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center p-3 mt-14 md:mt-20 w-full min-h-screen">
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