<template>
    <div>
        <ul class="tabs">
            <li
                v-for="(tab, index) in tabs"
                class="text-none font-weight-bold"
                :key="index"
                :class="[activeTab === tab.index ? 'active' : '', classTab]"
                @click="selectTab(tab.index)"
            >{{ tab.name }}</li>
        </ul>
        <div class="tabs-content" :class="classTabContent">
            <slot :active-tab="activeTab"></slot>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "Tabs",
    props: {
        classTabContent: {
            type: String,
            default: ''
        },
        classTab: {
            type: String,
            default: ''
        }
    },  
    data() {
        return {
            tabs: [],
            activeTab: 0,
        };
    },
    provide() {
        return {
            registerTab: this.registerTab,
        };
    },
    methods: {
        selectTab(index) {
            this.activeTab = index;
            this.$emit("tab-changed", index);
        },
        registerTab(tab) {
            if (!this.tabs.some((existingTab) => existingTab.index === tab.index)) {
                this.tabs.push(tab);
            }
        },
    },
};
</script>
  
<style scoped>
.tabs {
    display: flex;
    list-style-type: none;
    padding: 0;
}

.tabs li {
    padding: 10px 20px;
    cursor: pointer;
    font-size: 24px;

    @media (max-width: 1904px) {
        font-size: 20px;
    }

    @media (max-width: 960px) {
        font-size: 16px;
        padding-left: 10px;
        padding-right: 10px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
}

.tabs li.active {
    font-weight: bold;
    border-bottom: 2px solid #0154a6;
}

.tabs-content {
    padding: 40px 30px;
}
</style>