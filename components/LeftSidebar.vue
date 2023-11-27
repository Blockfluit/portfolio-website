<template>
    <div class="container-sidebar">
        <div class="container-sidebar-item">
            <h3>project</h3>
            <Icon name="icon-park-solid:folder-open" />
        </div>
    </div>
</template>

<style scoped>
.container-sidebar {
    width: 26px;
    height: 100%;
    border: 1px solid var(--background-color-3);
    border-bottom: 0;
}

.container-sidebar h3 {
    writing-mode: vertical-rl;
    transform: scale(-1, -1);
    padding: 6px 0 10px 6px;
}

.container-sidebar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10px;
    background-color: var(--background-color-3);
    cursor: pointer;
}
</style>