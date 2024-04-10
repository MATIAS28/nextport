'use client'
import { SocialNetworks } from '@/components/socialNetworks'


export const FooterComponent = () => {
    return(
        <footer className="flex items-center p-4 py-6">
            <div>
            <img src="/logo.png" className="w-16 md:w-28" alt="" />
            </div>

            <p className="relative font-light text-white text-center bottom-0 w-full text-xs/[2px] md:text-lg">
                ©2024 Copyright: Matias Muñoz
            </p>



            <SocialNetworks/>
        </footer>
    )
}