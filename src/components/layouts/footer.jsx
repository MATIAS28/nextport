'use client'
import { SocialNetworks } from '@/components/socialNetworks'


export const FooterComponent = () => {
    return(
        <footer className="md:w-4/5 md:mx-auto flex justify-between items-center p-4 py-6">
            <div>
            <img src="/logo.png" className="w-16 md:w-28" alt="" />
            </div>
            <SocialNetworks/>
        </footer>
    )
}