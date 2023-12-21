import { IntroductionComponent } from '@/components/introduction'
import { AboutComponent } from '@/components/about'
import  ProjectsComponent  from '@/components/projects'
import { SkillsComponent } from '@/components/skills'

export default function Home() {
  return (
    <div className='space-y-60 md:w-full mx-5 md:mx-12 h-full'>
      <IntroductionComponent/>
      <AboutComponent/>
      <ProjectsComponent/>
      <SkillsComponent/>
    </div>
  )
}
