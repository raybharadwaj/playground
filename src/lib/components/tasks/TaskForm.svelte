<script>


    let taskBody = "";

    const addTask = () => {

    }


</script>

<div class="task-form-component component">
    <div class="wrapper">
        <form on:submit|preventDefault={addTask}>
            <input type="text" placeholder="Enter your Task" bind:value="{taskBody}" required>
            <button>Submit</button>
        </form>
    </div>
</div>