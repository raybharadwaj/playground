<script>
    import {updateTasksStore} from "$lib/stores/TasksStore.js"
    import {fade} from "svelte/transition"
    import axios from "axios";

    export let task;
    let updateMode = false;

    const updateTask = async () => {
        try {
            await axios.patch(`/api/task/${task._id}`, task);
            await updateTasksStore();
            updateMode = false;
        } catch (err) {
            console.log(err.message);
        }
    }

    const deleteTask = async () => {
        try {
            await axios.delete(`/api/task/${task._id}`);
            await updateTasksStore();
        } catch (err) {
            console.log(err.message);
        }
    }
</script>

<div class="task-component component">
    <div class="wrapper" class:completed={task.completed}>

        <div class="task-title" class:strikethrough={task.completed}>
            {#if !updateMode}
                <span on:click={() => updateMode = !updateMode} on:keyup>
                    {task.title}
                </span>
            {:else}
                <textarea bind:value={task.title}></textarea>
            {/if}
        </div>

        <div class="task-actions">
            {#if !updateMode}
                {#if !task.completed}
                    <button on:click={() => {
                        task.completed = !task.completed
                        updateTask();
                    }}>Complete</button>
                {:else}
                    <button on:click={() => {
                        task.completed = !task.completed
                        updateTask();
                    }}>Undo</button>
                {/if}
                <button on:click={deleteTask}>Delete</button>
            {:else}
                <button on:click={updateTask}>Update</button>
                <button on:click={() => updateMode = !updateMode}>Cancel</button>
            {/if}
        </div>

    </div>
</div>

<style>
    .task-component {
        margin: 1rem auto;
        max-width: 300px;
        border-radius: 10px;
    }

    .task-component .wrapper {
        padding: 1rem;
        background: orangered;
        border-radius: 4px;
        transition: 0.08s all ease-in-out;
    }

    .wrapper.completed {
        background: mediumseagreen;
    }

    .task-title {
        margin-bottom: 0.5rem;
        color: white;
        font-size: larger;
    }

    textarea {
        width: 100%;
        height: 6rem;
    }

</style>