<script>
    import Navbar from "$lib/Navbar.svelte";
    import Arrow from "$lib/icons/Arrow.svelte";
    import Signal from "$lib/icons/Signal.svelte";
    import Globe from "$lib/icons/Globe.svelte";
    import Instagram from "$lib/icons/Instagram.svelte";
    import Quote from "$lib/icons/Quote.svelte";
    import Form from "$lib/Form.svelte";
    import ArrowDiagonal from "$lib/icons/ArrowDiagonal.svelte";
    import Profile from "$lib/icons/Profile.svelte";
    import Briefcase from "$lib/icons/Briefcase.svelte";
    import Robot from "$lib/icons/Robot.svelte";
    import GoogleFormWrapper from "$lib/GoogleFormWrapper.svelte";

</script>

<Navbar/>

<div class="w-full md:h-[55rem] relative flex flex-col flex-shrink-0 pt-24 p-8 gap-16">

    <img class="w-full h-full object-cover absolute top-0 left-0" alt="background" src="about-us-background.jpg">

    <div class="md:absolute mt-auto left-16 top-32 flex flex-col text-white gap-4 drop-shadow-md" style="text-shadow: 0px 0px 20px #000a;">
        <p class="text-xl">ABOUT US</p>
        <p class="font-fancy text-5xl md:text-8xl">Your Partner <br> For Growth</p>
    </div>

    <div class="z-10 md:absolute right-16 bottom-16 w-full md:w-1/3 flex flex-col bg-white p-8 gap-4">
        <p class="font-fancy text-3xl text-blue-400">Why?</p>
        <p class="text-xl text-gray-700">We solve the operational bottlenecks that prevent growth and then drive sales with 
            our own sales team, rebranding, and digital marketing.
        </p>

        <button class="flex flex-row items-center py-4 pl-6 pr-4 text-white bg-blue-400 w-min gap-2">
            <p class="font-bold whitespace-nowrap">Investment Process</p>
            <ArrowDiagonal class="w-6 aspect-square"/>
        </button>
    </div>
</div>

<div class="w-full h-max md:h-[50rem] relative flex flex-col bg-gray-700 flex-shrink-0 items-center p-16 justify-center gap-12">
    <p class="font-fancy text-6xl md:text-7xl text-white text-center">Where it started</p>

    <div class="w-full h-full flex flex-col md:flex-row gap-8 md:gap-32 items-center justify-center">
        <div class="h-full aspect-square relative">
            <img class="w-full h-full invert opacity-40" alt="texas" src="/texas.png">
            <div class="absolute w-12 h-12 bg-blue-500 bg-opacity-20 right-1/4 top-1/3 rounded-full p-3">
                <div class="w-full h-full rounded-full bg-blue-500"></div>
            </div>
        </div>
    
        <div class="flex flex-col text-white text-left gap-8">
            <p class="text-2xl leading-relaxed md:max-w-[30rem]">
                Venture Engine was founded and is headquartered in Dallas, Texas. However, we partner with 
                businesses across the globe and strongly believe in using technology to connect 
                people and businesses anywhere. <br>Schedule a Discovery session.
            </p>
            <button on:click={() => document.getElementById("get-started")?.scrollIntoView({ behavior: "smooth" })} 
                class="px-16 py-4 text-xl bg-white text-gray-700 w-min font-bold hover:bg-gray-200 transition-all">Contact</button>
        </div>
    </div>
    
</div>

<div id="testimonials" class="w-full relative flex flex-col bg-blue-400 flex-shrink-0 items-center p-8 md:px-48 gap-16">
    <p class="font-fancy text-6xl text-white text-center">How we work</p>

    <div class="w-full h-full gap-8 grid grid-rows-2 grid-cols-2 text-white">
        <div class="flex flex-col row-span-1 col-span-2 items-start gap-12 bg-gray-700 text-gray-500 p-12">
            <div class="w-20 h-20 aspect-square p-4 bg-white text-gray-700">
                <Briefcase/>
            </div>

            <div class="w-full flex flex-col gap-4">
                <p class="font-fancy text-5xl text-white">Problem Solving</p>
                <p class="text-xl md:text-3xl text-gray-400">
                    We start with a discovery session to dig into your business challenges and identify roadblocks. 
                    From there, we outline a clear strategy to address each issue head-on, from leading teams in person directly to
                    automating processes. We align our incentives with yours and make sustainable growth happen fast.
                </p>
            </div>
            
        </div>

        <div class="flex flex-col row-span-1 col-span-2 items-start gap-12 bg-gray-700 text-gray-500 p-12">
            <div class="w-20 h-20 aspect-square p-2  bg-white text-gray-700 md:ml-auto">
                <Robot/>
            </div>

            <div class="w-full flex flex-col gap-4">
                <p class="font-fancy text-5xl text-white ml-auto">Technology Driven</p>
                <p class="text-xl md:text-3xl text-gray-400">
                    We prepare your business for AI through data warehousing, modeling, and documentation. 
                    We solve the problem of data mismatches across systems and departments, create a single source of truth for the business, and enrich your data.
                </p>
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
                <p class="text-md text-gray-400">Find out more below about us and <br>what our investment process looks like
                </p>
            </div>

            <div class="w-full flex flex-col gap-2">
                <a href="/" class="flex w-full flex-row items-center justify-between h-14 pl-6 bg-gray-500 hover:bg-blue-400 transition-all text-white font-bold">
                    <p class="whitespace-nowrap">Home</p>
                    <ArrowDiagonal class="h-full aspect-square p-4"/>
				</a>
    
                <a href="/investment-process" class="flex w-full flex-row items-center justify-between h-14 pl-6 bg-gray-500 hover:bg-blue-400 transition-all text-white font-bold">
                    <p class="whitespace-nowrap">Investment Process</p>
                    <ArrowDiagonal class="h-full aspect-square p-4"/>
				</a>
            </div>
        </div>
    </div>
</div>