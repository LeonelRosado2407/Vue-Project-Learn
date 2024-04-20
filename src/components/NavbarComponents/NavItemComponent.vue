<script>
import { RouterLink } from 'vue-router'

export default {
    name: 'NavItemComponent',
    components: {
        RouterLink
    },
    props: {
        to: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <RouterLink :to>
        <div class="p-0.5 hover:bg-gray-100 rounded-lg">
            <li class="block p-1 font-sans text-sm antialiased font-normal leading-normal hover:text-blue-300">
                <slot></slot>
            </li>
        </div>
    </RouterLink>
</template>
