<script>
    import {TasksStore, randID} from "$lib/stores/TasksStore.js";

    let taskBody = "";

    const addTask = () => {
        if(taskBody) {
            TasksStore.update(data => [...data.reverse(), {
                    body: taskBody,
                    completed: false,
                    id: randID()
                }]
            );
            taskBody = "";
        } else {
        //    validate
        }
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