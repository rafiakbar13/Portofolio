import React from 'react'
import { SOCIAL_MEDIA } from '../constant/Social'
import Link from 'next/link'
import { Tooltip } from "@nextui-org/tooltip";
type Props = {}

const SocialMedia = (props: Props) => {
    return (
        <section>
            <div className='flex gap-x-4 mt-5'>
                {SOCIAL_MEDIA.map((item, index) => (
                    <Tooltip key={index} content={item.name}>
                        <Link href={item.url} className='text-2xl text-gray-500 hover:text-gray-700 transition-colors duration-300'>
                            {item.icon}
                        </Link>
                    </Tooltip>
                ))}
            </div>
        </section>
    )
}

export default SocialMedia