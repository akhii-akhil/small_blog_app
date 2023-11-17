import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="mx-auto block w-full rounded-xl border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
                <div>
                    <div class="container mx-auto flex items-center justify-center text-gray-900">
                        <a
                            href="#"
                            class="mr-4 block cursor-pointer py-1.5 font-sans text-sm font-normal leading-normal text-inherit antialiased"
                        >
                            <span className='text-3xl text-blue-600'>Small Blogging Application</span>
                        </a>


                    </div>
                    <div
                        class="block h-0 w-full basis-full overflow-hidden text-blue-gray-900 transition-all duration-300 ease-in lg:hidden"
                        data-collapse="navbar"
                    >

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
