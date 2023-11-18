import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Blogs = () => {
    useEffect(() => {
        console.log(JSON.parse(sessionStorage.getItem("id")));
    })
    const [loader,setLoader]=useState(false)
    const [data, setData] = useState(null)
    useEffect(() => {
        setLoader(true)
        axios.get(`https://jsonplaceholder.typicode.com/users/${JSON.parse(sessionStorage.getItem("id")).id}/posts`)
            .then((res) => {
                setLoader(false)
                setData(res.data)
            })
    }, [])
    return (

        <div>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="-my-8 divide-y-2 divide-gray-100">
                        {
                            data?.map((i) => {
                                return (
                                    <div class="py-8 flex flex-wrap md:flex-nowrap">
                                        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                            <span class="font-semibold title-font text-gray-700">Post Id</span>
                                            <span class="mt-1 text-gray-500 text-sm">{i.id}</span>
                                        </div>
                                        <div class="md:flex-grow">
                                            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{i.title}</h2>
                                            <p class="leading-relaxed">{i.body}</p>

                                        </div>
                                    </div>

                                )
                            })
                        }
                        {
                            loader && <div className='loader flex'/>
                        }

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blogs
