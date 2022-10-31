<script>
    import axios from "axios";
    import {updateTasksStore} from "$lib/stores/TasksStore.js";

    let taskBody = "";

    const addTask = async () => {
        let postData = {
            body: taskBody
        }
        await axios.post("/api/tasks", postData);
        await updateTasksStore();
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