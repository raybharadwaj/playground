<script>

    import Task from "$lib/components/tasks/Task.svelte";
    import TaskForm from "$lib/components/tasks/TaskForm.svelte";
    import {TasksStore} from "$lib/stores/TasksStore.js";
    import {flip} from "svelte/animate";

    let taskData = [];
    TasksStore.subscribe((data) => {
        if (data) {
            taskData = data.reverse();
        } else {
            taskData = []
        }
    });

    // export let data;

</script>

<div id="tasks-app" class="app">
    <div class="wrapper">
        <h1>Get 'em done!</h1>

        <TaskForm/>

        {#each taskData as task(task.id)}
            <div animate:flip={{duration: 50}}>
                <Task {task}/>
            </div>
        {/each}
    </div>
</div>

<style>
    #tasks-app {
        background: rgba(0, 0, 0, 0.94);
        min-height: 100vh;
        color: rgba(255, 255, 255, 0.90);
    }

    #tasks-app .wrapper {
        max-width: 500px;
        margin: 0 auto;
        text-align: center;
    }
</style>