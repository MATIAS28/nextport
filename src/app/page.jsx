import { IntroductionComponent } from '@/components/introduction'
import { Technologies } from '@/components/technologies'
import { AboutComponent } from '@/components/about'
import  ProjectsComponent  from '@/components/projects'
import { SkillsComponent } from '@/components/skills'

export default function Home() {
  return (
    <div>
        <IntroductionComponent/>
        <Technologies/>
        <AboutComponent/>
        <ProjectsComponent/>
        <SkillsComponent/>
    </div>
  )
}
