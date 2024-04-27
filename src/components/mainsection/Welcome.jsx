import React from 'react'
import AsciiArt from './AsciiArt'
import HeaderText from './HeaderText'
import DescriptionText from './DescriptionText'


const Welcome = () => {
    return (
        <div className='bg-zinc-800 h-screen flex flex-col items-center'>
            <div className='flex flex-col items-center'>
                <AsciiArt text="WELCOME" />
                <HeaderText text="Lorem ipsum dolor sit amet consectetur adipisicing elit" />
                <DescriptionText text="
Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptates ut, cupiditate vero corrupti ipsum fugiat quo magnam consequatur similique sint asperiores suscipit unde, necessitatibus autem accusantium non quibusdam dolore officia exercitationem dolorum! Natus ipsa excepturi nam quibusdam amet, qui possimus ipsum, dolor dignissimos maxime consequatur deleniti, enim dolorum. Neque repellendus nobis eaque voluptatem consequatur quibusdam, at ea totam odio fugit illo, sequi adipisci sed sint minus aut cumque explicabo enim ad, et tempore amet? Ut corporis eligendi consequuntur, neque, expedita harum libero consectetur cumque aperiam assumenda sunt autem. Quisquam possimus consequatur asperiores laboriosam vero ex rem itaque! Velit, dolor?"/>

            </div>

        </div>
    )
}

export default Welcome