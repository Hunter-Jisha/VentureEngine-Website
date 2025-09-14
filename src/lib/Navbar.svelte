<script>
    import MenuRight from "./icons/MenuRight.svelte";
    import { page } from '$app/stores';  

</script>

<div class="absolute top-0 left-0 w-full h-0 z-20" style="box-shadow: 0px 0px 5rem 40px rgba(0,0,0,0.75);"></div>

<div class="fixed top-0 left-0 w-full p-4 z-20">

    <div class="flex flex-row w-full h-14 justify-center md:justify-between items-center z-20">
        <button class="hidden md:flex flex-row items-center h-full gap-1">
            <img class="h-full aspect-square mb-2" alt="logo" src="logo.png">
    
            <p class="font-fancy text-3xl text-white">Venture Engine</p>
        </button>

        <div class="flex flex-row gap-8 text-center md:gap-24 items-center text-gray-400 text-xl">
            <a href="/" class={$page.url.pathname === "/"  ? "text-white" : ""}>Home</a>
            <a href="/about" class={$page.url.pathname === "/about"  ? "text-white" : ""}>About</a>
            <a href="/investment-process" class={$page.url.pathname === "/investment-process"  ? "text-white" : ""}>Investment Process</a>
            <!--<a href="/services" class={$page.url.pathname === "/services"  ? "text-white" : ""}>Services</a>-->
            <a href="#contact" on:click={() => document.getElementById("get-started")?.scrollIntoView({ behavior: "smooth" })} class={$page.url.pathname === "/contact"  ? "text-white" : ""}>Contact</a>
        </div>

        <!--
        <button class="h-full aspect-square rounded-full bg-white text-black p-4">
            <MenuRight/>
        </button>
        -->
        <div class="hidden md:block w-32"/>
    </div>
</div>