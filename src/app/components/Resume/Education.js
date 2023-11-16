import React from 'react'

const Education = () => {
    return (
        <section className="my-8">
            <h4 className="text-xl font-black">Education</h4>
            <div className="text-lg font-black px-4 pb-4">
                <ul className="ml-4">
                    <li className="list-disc text-base font-normal">
                        MA, Mass Communication, University of Florida, August 2005
                    </li>
                    <li className="list-disc text-base font-normal">
                        BA, English, University of Florida, December 2000
                    </li>
                </ul>
            </div>
        </section>
    )
}
Education.displayName = "Education"
export default Education