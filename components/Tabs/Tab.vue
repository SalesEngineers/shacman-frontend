<template>
    <div v-show="isActive">
        <slot></slot>
    </div>
</template>
  
<script>
export default {
    name: "Tab",
    props: {
        name: { required: true },
        index: {
            type: Number,
            required: true,
        },
        activeTab: {
            type: Number,
            required: true,
        }
    },
    computed: {
        isActive() {
            return this.index === this.activeTab;
        },
    },
    inject: ['registerTab'],
    created() {
        this.registerTab({ name: this.name, index: this.index });
    },
};
</script>