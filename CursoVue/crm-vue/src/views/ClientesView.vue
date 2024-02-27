        
<script setup>
import RouterLinkSlot from '../components/UI/RouterLinkSlot.vue'
import Heading from '../components/UI/Heading.vue'
defineProps({ titulo: { type: String } })

</script>
<template>
    <div>
        <div class="flex justify-end">
            <RouterLinkSlot to="agregar-cliente">
                Agregar Cliente
            </RouterLinkSlot>
        </div>
        <Heading>{{ titulo }}</Heading>
    </div>
</template>

