import dbConnect from "../lib/connDB"
import App from "../models/app"

import { About } from "../components/about"
import  Projects  from "../components/projects"
import { SkillsComponent } from "../components/skills"


const index = ({Apps}) => {
    return(
        <div>
            <About/>
            <div className="bg-light">
                <Projects Apps={Apps} />
                <SkillsComponent/>
            </div>
        </div>
    )
}

export async function getServerSideProps(){
    await dbConnect()
    
    try {
        const res = await App.find()
        const apps = res.map((doc) => {
            const app = doc.toObject();
            app._id = `${app._id}`;
            return app;
        })
    return {props:{Apps: apps}}
    } catch (e) {
        return {props:{Error: e}}
    }
}

export default index

