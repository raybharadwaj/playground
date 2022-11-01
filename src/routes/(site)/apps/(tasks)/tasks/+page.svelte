<script>
    import Task from "$lib/components/tasks/Task.svelte";
    import TaskForm from "$lib/components/tasks/TaskForm.svelte";
    import {flip} from "svelte/animate";
    import {TasksStore} from "$lib/stores/TasksStore.js";

    let tasksData = [];
    TasksStore.subscribe(data => tasksData = data);
</script>

<div id="tasks-app" class="app">
    <div class="wrapper">
        <h1>Get 'em done!</h1>

        <TaskForm />

        {#each tasksData as task(task._id)}
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
        padding: 1rem;
        text-align: center;
    }
</style>