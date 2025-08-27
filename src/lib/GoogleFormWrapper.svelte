<script>
    // @ts-nocheck

    import Form from "./Form.svelte";

    let classVariable = ""
    export {classVariable as class}

    async function handle(data)
    {
        await fetch(`https://docs.google.com/forms/d/e/1FAIpQLSe_N9aCU1aftRa8MyPx2e8gugP7TPq6oQ2bu3fznbNzyH6kqw/formResponse?usp=pp_url&entry.648455676=${data.firstname || "blank"}&entry.1869834714=${data.lastname || "blank"}&entry.430230401=${data.email || "blank"}&entry.292098261=${data.phone || "blank"}&submit=Submit`,
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