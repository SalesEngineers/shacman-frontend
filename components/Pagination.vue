<template>
    <div class="pagination">
        <div class="pagination__single" :class="item.page == meta.current_page ? 'pagination__single-active' : ''" v-for="item, index in metaPages" :key="index">
            <nuxt-link v-if="item.name == 'prePrevios' && item.page == 1" :to="!isFirst ? `../../` : '/'">&lt;&lt;</nuxt-link>
            <nuxt-link v-else-if="item.name == 'previos' && item.page == 1" :to="!isFirst ? `../../` : '/'">&lt;</nuxt-link>

            <nuxt-link v-else-if="item.name == 'previos'" :to="!isFirst ? `../${item.page}/` : `page/${item.page}/`">&lt;</nuxt-link>
            <nuxt-link v-else-if="item.name == 'prePrevios'" :to="!isFirst ? `../${item.page}/` : `page/${item.page}/`">&lt;&lt;</nuxt-link>

            <nuxt-link v-else-if="item.name == 'preNext'" :to="!isFirst ? `../${item.page}/` : `page/${item.page}/`">>></nuxt-link>
            <nuxt-link v-else-if="item.name == 'next'" :to="!isFirst ? `../${item.page}/` : `page/${item.page}/`">></nuxt-link>

            <span v-else-if="item.page == meta.current_page">{{ item.page }}</span>

            <nuxt-link class="pagination__single-inactive" v-else-if="item.page == 1" :to="!isFirst ? `../../` : '/'">{{ item.page }}</nuxt-link>
            <nuxt-link class="pagination__single-inactive" v-else :to="!isFirst ? `../${item.page}/` : `page/${item.page}/`">{{ item.page }}</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        meta: {
            type: Object,
            required: true,
        },
        isFirst: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        metaPages() {
            let paginationArray = []
            let lastPage = this.meta.last_page
            let currentPage = this.meta.current_page

            if (currentPage > 2) paginationArray.push({page: 1, name: 'prePrevios'})
            if (currentPage - 1 > 0) paginationArray.push({page: currentPage - 1, name: 'previos'})
            for (let i = 1; i <= this.meta.last_page; i++) {
                let paginationElement = {}
                paginationElement.page = i
                paginationElement.name = 'page'
                paginationArray.push(paginationElement)
            }
            if (currentPage <= lastPage - 1) paginationArray.push({page: currentPage + 1, name: 'next'})
            if (currentPage <= lastPage - 2) paginationArray.push({page: lastPage, name: 'preNext'}) 

            return paginationArray
        }
    }
}
</script>

<style lang="scss" scoped>
    .pagination {
        display: flex;
        .pagination__single {
            height: 32px;
            width: 36px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all .5s;
            a {
                font-size: 20px;
            }
            span {
                font-size: 20px;
            }
            &:hover {
                background: #F0F0F0;
            }
        }
        .pagination__single-active {
            background: #F0F0F0;
            color: $primary-color;
        }
        .pagination__single-inactive {
            opacity: .5;
            &:hover {
                opacity: 1;
            }
        }
        a {
            color: $primary-color;
        }
    }
    @include md {
        .pagination {
            .pagination__single {
                a {
                    font-size: 16px;
                }
                span {
                    font-size: 16px;
                }
            }
        }
    }
</style>