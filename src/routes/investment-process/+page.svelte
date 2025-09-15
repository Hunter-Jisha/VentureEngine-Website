<script>
    import Navbar from "$lib/Navbar.svelte";
    import Arrow from "$lib/icons/Arrow.svelte";
    import Signal from "$lib/icons/Signal.svelte";
    import Globe from "$lib/icons/Globe.svelte";
    import Instagram from "$lib/icons/Instagram.svelte";
    import Quote from "$lib/icons/Quote.svelte";
    import ArrowDiagonal from "$lib/icons/ArrowDiagonal.svelte";
    import GoogleFormWrapper from "$lib/GoogleFormWrapper.svelte";
    import Trophy from "$lib/icons/Trophy.svelte";

</script>

<Navbar/>

<div class="w-full h-[90vh] relative flex flex-col flex-shrink-0 p-12">
    <img class="absolute top-0 left-0 w-full h-full object-cover z-0" alt="background" src="investment-process-background.webp">

    <div class="mt-auto flex flex-col w-full md:w-2/3 z-10 gap-8 text-white md:absolute md:top-64 md:left-16">
        <p class="text-5xl md:text-8xl font-fancy" style="filter: drop-shadow(0px 0px 10px #00000088);">A Look Through <br> Our Investment Process</p>
        <p class="text-xl md:text-2xl md:w-2/3">
            We optimize every channel <br>to drive top and bottom-line growth
        </p>

        <button on:click={() => document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" })} 
        class="px-16 py-4 text-xl bg-white text-gray-700 w-min font-bold hover:bg-gray-200 transition-all">Continue</button>
    </div>
</div>

<div id="timeline" class="w-full relative flex flex-col bg-gray-700 flex-shrink-0 items-center py-16 px-4 lg:px-48 gap-16">
    <div class="flex flex-col w-full text-white gap-2 text-center">
        <p class="font-fancy text-5xl md:text-6xl">Investment Process</p>
        <p class="">Timeline</p>
    </div>

    <!--timeline container-->
    <div class="w-full flex flex-col relative gap-12">
        <!--little dashy line-->
        <div class="h-full absolute border-dashed border-2 border-white left-1/2 top-0 w-0 -translate-x-1/2"/>

        <!--row container (event on left)-->
        <div class="w-full flex flex-row">
            <!--event box-->
            <div class="h-full w-1/2 flex flex-row text-gray-500 relative pr-2">
                <div class="h-full flex flex-col md:flex-row">
                    <div class="h-full flex flex-col gap-2 p-2 md:p-6 w-full bg-white">
                        <p class="text-3xl font-bold text-gray-700">Discovery Session</p>
                        <p class="text-lg">Meeting to set expectations and see if there's a good fit. Evaluation and qualification.</p>
                    </div>

                    <!--date-->
                    <div class="h-full w-full py-2 md:w-48 bg-white flex items-center justify-center flex-col border-t-2 md:border-t-0 md:border-l-2 border-gray-700/50">
                        <p class="font-bold text-3xl">T-2</p>
                        <p>Intro</p>
                    </div>
                </div>
                

                <!--lil triangle thang-->
                <div class="w-12 overflow-hidden relative">
                    <div class="w-full aspect-square bg-white -rotate-45 absolute top-1/2 -left-1/2 -translate-y-1/2"/>
                </div>

                <!--evans dot-->
                <div class="bg-white p-1 rounded-full flex-shrink-0 size-6 absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2">
                    <div class="size-full bg-blue-400 rounded-full"/>
                </div>
            </div>
        </div>

        <!--row container (event on right)-->
        <div class="w-full flex flex-row justify-end">
            <!--event box-->
            <div class="h-full w-1/2 flex flex-row text-gray-500 relative pl-2">
                <!--lil triangle thang-->
                <div class="w-12 overflow-hidden relative">
                    <div class="w-full aspect-square bg-white -rotate-45 absolute top-1/2 -right-1/2 -translate-y-1/2"/>
                </div>

                <div class="h-full flex flex-col md:flex-row">
                    <div class="h-full flex flex-col gap-2 p-2 md:p-6 w-full bg-white">
                        <p class="text-3xl font-bold text-gray-700">Meet with Operations</p>
                        <p class="text-lg">Sessions by department to confirm assumptions from discovery. Roadmaps and timelines.</p>
                    </div>

                    <!--date-->
                    <div class="h-full w-full py-2 md:w-48 bg-white flex items-center justify-center flex-col border-t-2 md:border-t-0 md:border-l-2 border-gray-700/50">
                        <p class="font-bold text-3xl">T-1</p>
                        <p>Plan</p>
                    </div>
                </div>
                
                <!--evans dot-->
                <div class="bg-white p-1 rounded-full flex-shrink-0 size-6 absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2">
                    <div class="size-full bg-blue-400 rounded-full"/>
                </div>
            </div>
        </div>

         <!--row container (event on left)-->
        <div class="w-full flex flex-row">
            <!--event box-->
            <div class="h-full w-1/2 flex flex-row text-gray-500 relative pr-2">
                <div class="h-full flex flex-col md:flex-row">
                    <div class="h-full flex flex-col gap-2 p-2 md:p-6 w-full bg-white">
                        <p class="text-3xl font-bold text-gray-700">Launch Day</p>
                        <p class="text-lg">Integrate our team into operations to drive change. Agreements finalized.</p>
                    </div>

                    <!--date-->
                    <div class="h-full w-full py-2 md:w-48 bg-white flex items-center justify-center flex-col border-t-2 md:border-t-0 md:border-l-2 border-gray-700/50">
                        <p class="font-bold text-3xl">T-0</p>
                        <p>Launch</p>
                    </div>
                </div>
                

                <!--lil triangle thang-->
                <div class="w-12 overflow-hidden relative">
                    <div class="w-full aspect-square bg-white -rotate-45 absolute top-1/2 -left-1/2 -translate-y-1/2"/>
                </div>

                <!--evans dot-->
                <div class="bg-white p-1 rounded-full flex-shrink-0 size-6 absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2">
                    <div class="size-full bg-blue-400 rounded-full"/>
                </div>
            </div>
        </div>

                <!--row container (event on right)-->
        <div class="w-full flex flex-row justify-end">
            <!--event box-->
            <div class="h-full w-1/2 flex flex-row text-gray-500 relative pl-2">
                <!--lil triangle thang-->
                <div class="w-12 overflow-hidden relative">
                    <div class="w-full aspect-square bg-white -rotate-45 absolute top-1/2 -right-1/2 -translate-y-1/2"/>
                </div>

                <div class="h-full flex flex-col md:flex-row">
                    <div class="h-full flex flex-col gap-2 p-2 md:p-6 w-full bg-white">
                        <p class="text-3xl font-bold text-gray-700">Continuous Feedback</p>
                        <p class="text-lg">Consistent communication to check progress to timeline. Optimize and Scale.</p>
                    </div>

                    <!--date-->
                    <div class="h-full w-full py-2 md:w-48 bg-white flex items-center justify-center flex-col border-t-2 md:border-t-0 md:border-l-2 border-gray-700/50">
                        <p class="font-bold text-3xl">T+X</p>
                        <p>Track</p>
                    </div>
                </div>
                
                <!--evans dot-->
                <div class="bg-white p-1 rounded-full flex-shrink-0 size-6 absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2">
                    <div class="size-full bg-blue-400 rounded-full"/>
                </div>
            </div>
        </div>
    </div>
</div>

<div id="get-started" class="w-full relative flex flex-col bg-gray-700 flex-shrink-0 items-center pt-32 pb-32 px-16 md:px-48 gap-16 text-white">
    <p class="text-center md:text-left font-fancy text-6xl">Ready To Scale?</p>

    <div class="flex flex-col md:flex-row w-full gap-32 md:gap-96">
        <div class="w-full flex flex-col gap-8">
            <div class="flex flex-col gap-2">
                <p class="text-4xl font-fancy">Let's Do It</p>
                <p class="text-md text-gray-400">Tell us about your venture and we'll set up a <br>Discovery session if we think it's a good fit
            </div>
    
            <GoogleFormWrapper class="w-full flex flex-col gap-4">
                <div class="w-full flex flex-row gap-4 h-14">
                    <input class="w-full h-full px-4 font-bold bg-gray-500 text-white focus:text-gray-800 focus:bg-white transition-all" type="text" name="firstname" placeholder="First Name"/>
                    <input class="w-full h-full px-4 font-bold bg-gray-500 text-white focus:text-gray-800 focus:bg-white transition-all" type="text" name="lastname" placeholder="Last Name"/>
                </div>

                <input class="w-full h-14 px-4 font-bold bg-gray-500 text-white focus:text-gray-800 focus:bg-white transition-all" name="business" type="text" placeholder="Business Name"/>
				<input class="w-full h-14 px-4 font-bold bg-gray-500 text-white focus:text-gray-800 focus:bg-white transition-all" name="email" type="email" placeholder="Email"/>
				<input class="w-full h-14 px-4 font-bold bg-gray-500 text-white focus:text-gray-800 focus:bg-white transition-all" name="phone" type="number" placeholder="Phone"/>
                <input class="w-full h-14 px-4 font-bold bg-gray-500 text-white focus:text-gray-800 focus:bg-white transition-all" name="industry" type="text" placeholder="Industry"/>
                <input class="w-full h-14 px-4 font-bold bg-gray-500 text-white focus:text-gray-800 focus:bg-white transition-all" name="businessDescription" type="text" placeholder="Business Description"/>

                <input class="w-full h-14 px-4 font-bold text-white bg-gray-500 transition-all text-lg" type="submit" value="SUBMIT"/>

            </GoogleFormWrapper>
        </div>

        <div class="w-full flex flex-col gap-12">
            <div class="flex flex-col gap-2">
                <p class="text-4xl font-fancy">Not Quite</p>
                <p class="text-md text-gray-400">Find out more below about us and <br>what our services look like
                </p>
            </div>

            <div class="w-full flex flex-col gap-2">
                <a href="/" class="flex w-full flex-row items-center justify-between h-14 pl-6 bg-gray-500 hover:bg-blue-400 transition-all text-white font-bold">
                    <p class="whitespace-nowrap">Home</p>
                    <ArrowDiagonal class="h-full aspect-square p-4"/>
				</a>

                <a href="/about" class="flex w-full flex-row items-center justify-between h-14 pl-6 bg-gray-500 hover:bg-blue-400 transition-all text-white font-bold">
                    <p class="whitespace-nowrap">About Us</p>
                    <ArrowDiagonal class="h-full aspect-square p-4"/>
				</a>
            </div>
        </div>
    </div>
</div>