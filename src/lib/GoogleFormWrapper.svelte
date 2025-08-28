<script>
    // @ts-nocheck

    import Form from "./Form.svelte";

    let classVariable = ""
    export {classVariable as class}

    async function handle(data)
    {
        await fetch(`https://docs.google.com/forms/d/e/1FAIpQLSeiHUzqheH8hXojXsndikKG8Ukvfd_6GFNd3vXRF20OAa96Hw/formResponse?usp=pp_url&entry.461758734=${data.firstname || "blank"}&entry.626201685=${data.lastname || "blank"}&entry.453784336=${data.business || "blank"}&entry.1043587745=${data.email || "blank"}&entry.629263945=${data.phone || "blank"}&entry.1274421353=${data.industry || "blank"}&entry.1675344538=${data.businessDescription || "blank"}&submit=Submit`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                mode: "no-cors"
            }
        )

        alert("Form Submitted")
    }
</script>

<Form class={classVariable} {handle}>
    <slot/>
</Form>