<script>
    import Navbar from "$lib/Navbar.svelte";
    import Arrow from "$lib/icons/Arrow.svelte";
    import Signal from "$lib/icons/Signal.svelte";
    import Globe from "$lib/icons/Globe.svelte";
    import Instagram from "$lib/icons/Instagram.svelte";
    import Quote from "$lib/icons/Quote.svelte";
    import ArrowDiagonal from "$lib/icons/ArrowDiagonal.svelte";
    import GoogleFormWrapper from "$lib/GoogleFormWrapper.svelte";
    import Trophy from "../lib/icons/Trophy.svelte";

</script>

<Navbar/>

<div class="w-full h-[90vh] relative flex flex-col flex-shrink-0 p-12">
    <img class="absolute top-0 left-0 w-full h-full object-cover z-0" alt="background" src="background.webp">

    <div class="mt-auto flex flex-col w-full md:w-2/3 z-10 gap-8 text-white md:absolute md:top-64 md:left-16">
        <p class="text-5xl md:text-8xl font-fancy" style="filter: drop-shadow(0px 0px 10px #00000088);">Driving Growth Through <br> Hands-On Activist Investment</p>
        <p class="text-xl md:text-2xl md:w-2/3">
            We partner with $1M-$10M EBITDA <br>Founders to scale their businesses 10x
        </p>

        <button on:click={() => document.getElementById("what-we-do")?.scrollIntoView({ behavior: "smooth" })} 
        class="px-16 py-4 text-xl bg-white text-gray-700 w-min font-bold hover:bg-gray-200 transition-all">Continue</button>
    </div>

    <div class="hidden md:flex flex-col w-52 z-10 gap-4 text-white absolute bottom-16 right-16 p-4 bg-white bg-opacity-20 backdrop-blur-md">
        <button on:click={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })} 
        class="w-full aspect-square bg-gray-400 text-white flex flex-col items-center justify-between p-5 transition-all hover:bg-gray-600 group">
            <p class="font-bold text-xl">Partners</p>

            <div class="w-16 aspect-square p-4 rounded-full bg-white bg-opacity-20 group-hover:bg-opacity-50 delay-100 transition-all">
                <Arrow class="w-full h-full"/>
            </div>
        </button>

        <button on:click={() => document.getElementById("get-started")?.scrollIntoView({ behavior: "smooth" })}
        class="w-full aspect-square bg-blue-400 text-white flex flex-col items-center justify-between p-5 transition-all hover:bg-blue-500 group">
            <p class="font-bold text-xl">Want to scale? <br> Apply here</p>

            <div class="w-16 aspect-square p-4 rounded-full bg-white bg-opacity-20 group-hover:bg-opacity-50 delay-100 transition-all">
                <Arrow class="w-full h-full rotate-90"/>
            </div>
        </button>
    </div>
</div>

<div id="what-we-do" class="w-full h-max md:h-[50rem] relative flex flex-col bg-gray-700 flex-shrink-0 items-center pt-16 p-8 md:p-16 md:justify-around gap-8">
    <div class="flex flex-col items-center w-full gap-4">
        <p class=" text-white">WHAT WE DO</p>
        <p class="font-fancy text-white text-5xl md:text-7xl text-center md:text-left">Revenue Growth + Cost Savings</p>
    </div>
    
    <div class="md:w-full justify-center flex flex-col md:flex-row md:h-80 gap-1">
        <div class="h-full w-72 bg-gray-500 flex flex-col p-6 gap-4 text-white">
            <Globe class="w-16 h-16 bg-blue-400 p-4"/>
            <p class="font-fancy text-4xl">Process Mapping <br> and Improvement</p>
            <p class="">Work on-site, directly with operations, to document and make processes efficient</p>
        </div>

        <div class="h-full w-72 bg-gray-500 flex flex-col p-6 gap-4 text-white">
            <Signal class="w-16 h-16 bg-white text-gray-500 p-4"/>
            <p class="font-fancy text-4xl">Data <br> Warehousing</p>
            <p class="">Consolidate data from disparate systems to create a single source of truth</p>
        </div>

        <div class="h-full w-72 bg-gray-500 flex flex-col p-6 gap-4 text-white">
            <Instagram class="w-16 h-16 bg-blue-400 p-4"/>
            <p class="font-fancy text-4xl">Customer <br> Outreach</p>
            <p class="">Bring in our sales team to scale revenue - including branding, social media, and ad campaigns</p>
        </div>
    </div>
</div>

<div id="testimonials" class="w-full relative flex flex-col bg-blue-400 flex-shrink-0 items-center py-16 px-8 md:px-48 gap-16">
    <div class="flex flex-col w-full text-white gap-2 text-center md:text-left">
        <p class="">OUR PARTNERS</p>
        <p class="font-fancy text-5xl md:text-6xl">Some of our success stories</p>
    </div>

    <div class="w-full h-full gap-4 grid grid-rows-2 grid-cols-2 text-white">
        <div class="flex flex-col row-span-1 col-span-2 items-start gap-4 bg-white text-gray-500 p-6 md:p-12">
            <Trophy class="h-12 aspect-square text-blue-400"/>
            <p class="text-xl md:text-3xl">
                • Automated processes saving thousands of data entry man-hours
                <br><br>• Converted manual reporting to live dashboards across all business channels
                <br><br>• Saved over $1M in shipping and box costs annually through supplier negotiations
                <br><br>• Created employee performance tracking, increasing visibility across the business
            </p>
            <div class="flex flex-row items-center gap-4">
                <a href="https://mercatalyst.com" target="_blank" rel="noopener noreferrer" class="text-4xl text-blue-400 font-fancy">Mercatalyst (USA)</a>
            </div>
        </div>

        <div class="flex flex-col row-span-1 col-span-2 items-start gap-4 bg-white text-gray-500 p-6 md:p-12">
            <Trophy class="h-12 aspect-square text-blue-400"/>
            <p class="text-xl md:text-3xl">
                • Automated testing protocols to optimize factory settings, saving $150k+ annually
                <br><br>• Created preventative maintenance system covering 150+ plant checkpoints, reducing failure rate by 65%
                <br><br>• Documented, mapped processes, and optimized operations leading to more than 30% increase in throughput
            </p>

            <div class="flex flex-row items-center gap-4">
                <a href="https://squibgroup.com" target="_blank" rel="noopener noreferrer" class="text-4xl text-blue-400 font-fancy">Squib Group (Australia)</a>
            </div>
        </div>

        <div class="flex flex-col row-span-1 col-span-2 items-start gap-4 bg-white text-gray-500 p-6 md:p-12">
            <Trophy class="h-12 aspect-square text-blue-400"/>
            <p class="text-xl md:text-3xl">
                • Programatically mapped all client and prospect equipment then optimized inventory to align with sales needs
                <br><br>• Identified underserved markets and expanded shipping coverage from 4 to 15 states driving 70% YoY revenue growth
                <br><br>• Reduced delivery times by more than 60% by optimizing logistics, increasing spare parts sales more than 220% in under a year
            </p>

            <div class="flex flex-row items-center gap-4">
                <a href="https://rentalpatagonia.cl" target="_blank" rel="noopener noreferrer" class="text-4xl text-blue-400 font-fancy">Rental Patagonia (Chile)</a>
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