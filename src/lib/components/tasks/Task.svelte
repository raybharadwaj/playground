<script>
    import {TasksStore} from "$lib/stores/TasksStore.js";
    export let task;
    let updateMode = false;

    const updateTasks = () => {
        TasksStore.update(data => {
            let updatedData = [];
            if (data) {
                data.reverse().forEach((taskObj) => {
                    if (taskObj.id === task.id) {
                        updatedData.push({
                            body: task.body,
                            completed: task.completed,
                            id: task.id
                        })
                    } else {
                        updatedData.push(taskObj);
                    }
                });
                updateMode = false;
                return updatedData;
            }
        });
    }

    const deleteTask = () => {
        TasksStore.update(data => {
            let updatedData = [];
            if (data) {
                data.reverse().forEach((taskObj) => {
                    if (taskObj.id !== task.id) {
                        updatedData.push(taskObj);
                    }
                });
                return updatedData;
            }
        });
    }
</script>

<div class="task-component component">
    <div class="wrapper" class:completed={task.completed}>

        <div class="task-body" class:strikethrough={task.completed}>
            {#if !updateMode}
                <span on:click={() => updateMode = !updateMode} on:keyup>
                    {task.body}
                </span>
            {:else}
                <textarea bind:value={task.body}></textarea>
            {/if}
        </div>

        <div class="task-actions">
            {#if !updateMode}
                <button on:click={() => {
                    task.completed = !task.completed
                    updateTasks();
                }}>
                    {#if !task.completed}
                        Complete
                    {:else}
                        Undo
                    {/if}
                </button>
                <button on:click={deleteTask}>Delete</button>
            {:else}
                <button on:click={updateTasks}>Update</button>
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

    .task-body {
        margin-bottom: 0.5rem;
        color: white;
        font-size: larger;
    }

    textarea {
        width: 100%;
        height: 6rem;
    }

</style>