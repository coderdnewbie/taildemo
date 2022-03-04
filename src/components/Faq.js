import React from 'react';

function Faq() {
    return (
        <section className="">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-coolGray-700">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Optio maiores eligendi molestiae totam dolores similique?</summary>
                        <div className="px-4 pb-4">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Modi dolorem veritatis culpa quos consequuntur beatae itaque excepturi perspiciatis?</summary>
                        <div className="px-4 pb-4">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aspernatur quae, eos explicabo odit minima libero veniam similique quibusdam doloribus facilis ipsa accusantium vel maiores corrupti! Libero voluptate a doloribus?</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Magni reprehenderit possimus debitis?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates aspernatur dolores in consequatur doloremque inventore reprehenderit, consequuntur perspiciatis architecto.</p>
                            <p>Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</p>
                        </div>
                    </details>
                </div>
            </div>

            <div class="flex flex-col">
        <div class="flex space-x-24">
            <div class="container space-y-10 relative">
                <h1 class="mb-8 text-xl font-semibold">
                    Regular Spinners
                </h1>

                <div class="flex flex-col">
                    <h4 class="mb-8">
                        Open Rings
                    </h4>

                    <div class="flex flex-row space-x-4">
                        <div class="w-12 h-12 rounded-full animate-spin
                    border border-solid border-yellow-500 border-t-transparent"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-2 border-solid border-blue-500 border-t-transparent"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-4 border-solid border-green-500 border-t-transparent"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-8 border-solid border-purple-500 border-t-transparent"></div>
                    </div>
                </div>

                <div class="flex flex-col">
                    <h4 class="mb-8">
                        Closed Rings
                    </h4>

                    <div class="flex flex-row space-x-16">
                        <div class="flex">
                            <div class="relative">
                                <div class="w-12 h-12 rounded-full absolute
                            border border-solid border-gray-200"></div>

                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border border-solid border-yellow-500 border-t-transparent"></div>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="relative">
                                <div class="w-12 h-12 rounded-full absolute
                            border-2 border-solid border-gray-200"></div>

                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border-2 border-solid border-blue-500 border-t-transparent"></div>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="relative">
                                <div class="w-12 h-12 rounded-full absolute
                            border-4 border-solid border-gray-200"></div>

                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border-4 border-solid border-green-500 border-t-transparent"></div>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="relative">
                                <div class="w-12 h-12 rounded-full absolute
                            border-8 border-solid border-gray-200"></div>

                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border-8 border-solid border-purple-500 border-t-transparent"></div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="flex flex-col">
                    <h4 class="my-8">
                        Edge X Rings
                    </h4>

                    <div class="flex flex-row space-x-4">
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x border-solid border-yellow-500 border-t-transparent"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x-2 border-solid border-blue-500 border-t-transparent"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x-4 border-solid border-green-500 border-t-transparent"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x-8 border-solid border-purple-500 border-t-transparent"></div>
                    </div>
                </div>

                <div class="flex flex-col">
                    <h4 class="mb-8">
                        Edge Y Rings
                    </h4>

                    <div class="flex flex-row space-x-4">
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y border-solid border-yellow-500 border-t-transparent"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y-2 border-solid border-blue-500 border-t-transparent"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y-4 border-solid border-green-500 border-t-transparent"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y-8 border-solid border-purple-500 border-t-transparent"></div>
                    </div>
                </div>
            </div>

            <div class="container space-y-10 relative">
                <h1 class="mb-8 text-xl font-semibold">
                    Dashed Spinners
                </h1>

                <div class="flex flex-col">
                    <h4 class="mb-8">
                        Open Rings
                    </h4>

                    <div class="flex flex-row space-x-4">
                        <div class="w-12 h-12 rounded-full animate-spin
                    border border-dashed border-yellow-500 border-t-transparent"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-2 border-dashed border-blue-500 border-t-transparent"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-4 border-dashed border-green-500 border-t-transparent"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-8 border-dashed border-purple-500 border-t-transparent"></div>
                    </div>
                </div>

                <div class="flex flex-col">
                    <h4 class="mb-8">
                        Closed Rings
                    </h4>

                    <div class="flex flex-row space-x-16">
                        <div class="flex">
                            <div class="relative">
                                <div class="w-12 h-12 rounded-full absolute
                            border border-dashed border-gray-200"></div>

                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border border-dashed border-yellow-500 border-t-transparent"></div>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="relative">
                                <div class="w-12 h-12 rounded-full absolute
                            border-2 border-dashed border-gray-200"></div>

                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border-2 border-dashed border-blue-500 border-t-transparent"></div>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="relative">
                                <div class="w-12 h-12 rounded-full absolute
                            border-4 border-dashed border-gray-200"></div>

                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border-4 border-dashed border-green-500 border-t-transparent"></div>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="relative">
                                <div class="w-12 h-12 rounded-full absolute
                            border-8 border-dashed border-gray-200"></div>

                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border-8 border-dashed border-purple-500 border-t-transparent"></div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="flex flex-col">
                    <h4 class="my-8">
                        Edge X Rings
                    </h4>

                    <div class="flex flex-row space-x-4">
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x border-dashed border-yellow-500 border-t-transparent"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x-2 border-dashed border-blue-500 border-t-transparent"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x-4 border-dashed border-green-500 border-t-transparent"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x-8 border-dashed border-purple-500 border-t-transparent"></div>
                    </div>
                </div>

                <div class="flex flex-col">
                    <h4 class="mb-8">
                        Edge Y Rings
                    </h4>

                    <div class="flex flex-row space-x-4">
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y border-dashed border-yellow-500 border-t-transparent"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y-2 border-dashed border-blue-500 border-t-transparent"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y-4 border-dashed border-green-500 border-t-transparent"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y-8 border-dashed border-purple-500 border-t-transparent"></div>
                    </div>
                </div>
            </div>

            <div class="container space-y-10 relative">
                <h1 class="mb-8 text-xl font-semibold">
                    Spinners With Shadow
                </h1>

                <div class="flex flex-col">
                    <h4 class="mb-8">
                        Open Rings
                    </h4>

                    <div class="flex flex-row space-x-4">
                        <div class="w-12 h-12 rounded-full animate-spin
                    border border-solid border-yellow-500 border-t-transparent shadow-md"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-2 border-solid border-blue-500 border-t-transparent shadow-md"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-4 border-solid border-green-500 border-t-transparent shadow-md"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-8 border-solid border-purple-500 border-t-transparent shadow-md"></div>
                    </div>
                </div>

                <div class="flex flex-col">
                    <h4 class="mb-8">
                        Closed Rings
                    </h4>

                    <div class="flex flex-row space-x-16">
                        <div class="flex">
                            <div class="relative">
                                <div class="w-12 h-12 rounded-full absolute
                            border border-solid border-gray-200"></div>

                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border border-solid border-yellow-500 border-t-transparent shadow-md"></div>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="relative">
                                <div class="w-12 h-12 rounded-full absolute
                            border-2 border-solid border-gray-200"></div>

                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border-2 border-solid border-blue-500 border-t-transparent shadow-md"></div>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="relative">
                                <div class="w-12 h-12 rounded-full absolute
                            border-4 border-solid border-gray-200"></div>

                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border-4 border-solid border-green-500 border-t-transparent shadow-md"></div>
                            </div>
                        </div>

                        <div class="flex">
                            <div class="relative">
                                <div class="w-12 h-12 rounded-full absolute
                            border-8 border-solid border-gray-200"></div>

                                <div class="w-12 h-12 rounded-full animate-spin absolute
                            border-8 border-solid border-purple-500 border-t-transparent shadow-md"></div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="flex flex-col">
                    <h4 class="my-8">
                        Edge X Rings
                    </h4>

                    <div class="flex flex-row space-x-4">
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x border-solid border-yellow-500 border-t-transparent shadow-md"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x-2 border-solid border-blue-500 border-t-transparent shadow-md"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x-4 border-solid border-green-500 border-t-transparent shadow-md"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-x-8 border-solid border-purple-500 border-t-transparent shadow-md"></div>
                    </div>
                </div>

                <div class="flex flex-col">
                    <h4 class="mb-8">
                        Edge Y Rings
                    </h4>

                    <div class="flex flex-row space-x-4">
                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y border-solid border-yellow-500 border-t-transparent shadow-md"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y-2 border-solid border-blue-500 border-t-transparent shadow-md"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y-4 border-solid border-green-500 border-t-transparent shadow-md"></div>

                        <div class="w-12 h-12 rounded-full animate-spin
                    border-y-8 border-solid border-purple-500 border-t-transparent shadow-md"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <form>
		<div class="relative z-0 mb-6 w-full group">
			<input type="email" name="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
			<label for="floating_email" class="absolute text-sm text-yellow-500 dark:text-yellow-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
		</div>
		<div class="relative z-0 mb-6 w-full group">
			<input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
			<label for="floating_password" class="absolute text-sm text-yellow-500 dark:text-yellow-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
		</div>
		<div class="relative z-0 mb-6 w-full group">
			<input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
			<label for="floating_repeat_password" class="absolute text-sm text-yellow-500 dark:text-gyellowray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
		</div>
		<div class="grid xl:grid-cols-2 xl:gap-6">
			<div class="relative z-0 mb-6 w-full group">
				<input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
				<label for="floating_first_name" class="absolute text-sm text-yellow-500 dark:text-yellow-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
			</div>
			<div class="relative z-0 mb-6 w-full group">
				<input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
				<label for="floating_last_name" class="absolute text-sm text-yellow-500 dark:text-yellow-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
			</div>
		</div>
		<div class="grid xl:grid-cols-2 xl:gap-6">
			<div class="relative z-0 mb-6 w-full group">
				<input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
				<label for="floating_phone" class="absolute text-sm text-yellow-500 dark:text-yellow-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
			</div>
			<div class="relative z-0 mb-6 w-full group">
				<input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-400 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
				<label for="floating_company" class="absolute text-sm text-yellow-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
			</div>
		</div>
		<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
	</form>

        </section>
    );  
}

export default Faq;
