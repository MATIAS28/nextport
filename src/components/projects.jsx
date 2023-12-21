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
                const projects = await axios.get('http://localhost:3000/api/apps')
                setApps(projects.data)
                console.log(projects);
            } catch (e) {
                console.log(e);
            }
            
        }

        getProjects()
    }, [])
    
    return(
        <div className="h-full">
            <div className="flex justify-center">
                <div>
                    <h2 className="sm:text-lg md:text-3xl text-white font-semibold">Mis Proyectos</h2>
                    <div className="flex items-center">
                    <div className="secondaryBack w-7 md:w-12 h-1 rounded-3xl"></div>
                    <div className="secondaryBack w-20 md:w-36 h-1 rounded-3xl mx-2"></div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center p-3 md:mt-20 w-full h-full">
                <div className="flex-col space-y-48 w-full h-full">
                    
                    {   Apps ?
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