import React from 'react';

function Cta(){
    return<>
         <section className="py-14 bg-[#34344F]">
            <div className="max-w-screen-xl mx-auto px-4  gap-x-12 justify-between md:flex md:px-20">
                <div className="max-w-xl">
                    <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                        Your Journey with Progrentures!
                    </h3>

                    <ul class="list-disc pl-10 pt-8">
                        <li className="mt-3 text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse - - varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                        </li>
                        <li className="mt-3 text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse - - varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col justify-end items-center mt-4 md:mt-0">
                    <a href="javascript:void(0)" className="inline-block py-2 px-15 text-[#34344F] font-medium bg-[#B8AAC9] duration-150 active:bg-[#B8AAC9] rounded-lg shadow-md hover:shadow-none">
                    Start with Registration
                    </a>
                </div>
            </div>
        </section>
    </>
}

export default Cta;