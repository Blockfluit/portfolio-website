<script setup>
import { useMainStore } from '#imports';

const mainStore = useMainStore()

const { currentFile } = storeToRefs(mainStore)

</script>

<template>
    <div class="container-explorer">
        <ul style="margin-left: 0;">
            <li>
                <Icon name="mdi:chevron-down" />
                <Icon name="icon-park-solid:folder-open" />
                <h3 style="font-weight: bold;">portfolio</h3>
            </li>
            <ul>
                <li>
                    <Icon name="mdi:chevron-right" />
                    <Icon name="icon-park-solid:folder-open" />
                    <h3>design</h3>
                </li>
                <li>
                    <Icon name="mdi:chevron-down" />
                    <Icon name="icon-park-solid:folder-open" />
                    <h3>src</h3>
                </li>
                <ul>
                    <li>
                        <Icon name="mdi:chevron-down" />
                        <Icon name="icon-park-solid:folder-open" />
                        <h3>main</h3>
                    </li>
                    <ul>
                        <li>
                            <Icon name="mdi:chevron-down" />
                            <Icon name="icon-park-solid:folder-open" />
                            <h3>java</h3>
                        </li>
                        <ul>
                            <li>
                                <Icon name="mdi:chevron-down" />
                                <Icon name="icon-park-solid:folder-open" />
                                <h3>nl.nielsvanbruggen</h3>
                            </li>
                            <ul>
                                <li>
                                    <Icon name="" />
                                    <Icon name="solar:copyright-bold" style="color: rgb(71, 148, 153);" />
                                    <a @click="currentFile = 'Main.java'">
                                        <h3>Main.java</h3>
                                    </a>
                                </li>
                                <li>
                                    <Icon name="" />
                                    <Icon name="solar:copyright-bold" style="color: rgb(71, 148, 153);" />
                                    <a @click="currentFile = 'User.java'">
                                        <h3>User.java</h3>
                                    </a>
                                </li>
                                <li>
                                    <Icon name="" />
                                    <Icon name="solar:copyright-bold" style="color: rgb(71, 148, 153);" />
                                    <a @click="currentFile = 'Role.java'">
                                        <h3>Role.java</h3>
                                    </a>
                                </li>
                            </ul>
                        </ul>
                    </ul>
                    <li>
                        <Icon name="mdi:chevron-right" />
                        <Icon name="icon-park-solid:folder-open" />
                        <h3>test</h3>
                    </li>
                </ul>
                <li>
                    <Icon name="ph:file-text-bold" />
                    <a @click="currentFile = 'README.txt'">
                        <h3>README.txt</h3>
                    </a>
                </li>
            </ul>
        </ul>
    </div>
</template>

<style scoped>
svg {
    width: var(--font-size-3);
    height: var(--font-size-3);
}

h3 {
    font-size: var(--font-size-2);
}

.container-explorer {
    padding: 4px 10px 2px 0;
}

.container-explorer ul {
    margin-left: var(--font-size-4);
}

.container-explorer li {
    display: flex;
    align-items: center;
    list-style-type: none;
}

.container-explorer li svg {
    padding-right: 6px;
}
</style>