import { IntroductionComponent } from '@/components/introduction'
import { Technologies } from '@/components/technologies'
import { AboutComponent } from '@/components/about'
import  ProjectsComponent  from '@/components/projects'
import { SkillsComponent } from '@/components/skills'

export default function Home() {
  return (
    <div className='w-[85%] md:w-4/5 mx-auto space-y-52 mb-16 md:mb-32 md:my-12'>
        <IntroductionComponent/>
        <ProjectsComponent/>
        <SkillsComponent/>
        <AboutComponent/>
    </div>
  )
}
