<template>
    <div>
        <v-container class="content-padding">
            <h1 class="mb-md-14 mb-9">
                {{ subcategory.name }}
            </h1>

            <Banner class="block-padding" v-if="subcategory.promotion" :img="subcategory.promotion.image" :title="subcategory.promotion.content"/>
            
            <div class="filters-block mb-10">
                <div class="filters" v-if="subcategory.filters.length != 0">
                    <span class="d-block card-title text-uppercase mb-md-8 mb-7">
                        Фильтры
                    </span>      

                    <v-row class="mb-10">
                        <v-col cols="12" sm="6" md="4" lg="3" v-for="item, index in fitersCategory" :key="index">
                            <v-select
                                class="select-input"
                                v-on:change="productsFilter()"
                                v-model="item.selected"
                                :items="item.values"
                                :label="item.name"
                                chips
                                small-chips
                                multiple
                                color="primary"
                                item-color="thirdBlack"
                                :menu-props="{ bootom: true, offsetY: true }"
                                hide-details
                                validate-on-blur
                                clearable
                                persistent-hint
                                outlined 
                            ></v-select>
                        </v-col>
                    </v-row>                   
                </div>
            </div>  

            <div class="block-padding">
                <Catalog v-if="statusSort && productsFiltered.length != 0 && !loader" :items="sortProducts" :category="subcategory"/>
                <Catalog v-else-if="products.length != 0 && !loader" :items="products" :category="subcategory"/>

                <v-row v-else-if="loader && products.length == 0 || productsFiltered.length == 0">
                    <v-col cols="12" sm="6" md="4" lg="3" v-for="index in 8" :key="index">
                        <v-skeleton-loader
                            v-bind="{elevation: 1}"
                            loading
                            type="card"
                        ></v-skeleton-loader>
                    </v-col>
                </v-row>

                <h2 v-else class="mb-md-14 mb-9 text-uppercase">Уточняйте наличие товаров у менеджера</h2>
            </div>
            
            <div v-if="!statusSort && meta && meta.last_page > 1 && products.length != 0 && !loader" class="block-padding">
                <Pagination :meta="meta"/>
            </div>

            <CategoryInfo v-if="category.id == 3"/>

            <div class="block-padding column-content category-content" v-if="subcategory.content" v-html="subcategory.content">
            </div>

            <Feedback/>

            <div v-if="subcategory.video" class="block-padding">
              <v-row>
                <v-col cols="12" md="6">
                  <div class="iframe-video-block">
                    <iframe loading="lazy" :src="subcategory.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </v-col>
              </v-row>
            </div>
            
            <v-contacts></v-contacts>

        </v-container>
        <FeedbackMan title="Подберём технику специально для вас!" content="Квалифицированный менеджер поможет с выбором спецтехники под вашу задачу и ответит на любой вопрос" btnTitle="Подобрать технику"/>
    </div>
</template>

<script>
import VContacts from '~/components/VContacts/index.vue'
import FeedbackMan from '~/components/Feedback_man.vue'
import Banner from '~/components/Banner.vue'
import Catalog from '~/components/Catalog_tech_list.vue'
import Pagination from '~/components/Pagination.vue'
import Feedback from '~/components/Feedback.vue'
import CategoryInfo from '~/components/Category_info_block.vue'

export default {
    components: {
        VContacts,
        FeedbackMan,
        Banner,
        Catalog,
        Pagination,
        Feedback,
        CategoryInfo
    },
    data() {
        return {
            sortProducts: [],
            products: [],
            loader: true,
            filters: null,
            category: null,
            subcategory: null,
            meta: null,
            productsFiltered: [],
            statusSort: false
        }
    },
    head () {
        return {
            title: `${this.subcategory.seo.title} - Cтраница ${this.$route.params.page}`,
            meta: [
                { charset: 'utf-8' },
                { hid: 'description', name: 'description', content: `${this.subcategory.seo.description} - Cтраница ${this.$route.params.page}`},
                { hid: 'keywords', name: 'keywords', content: this.subcategory.seo.keywords}
            ],
            link: [
                {
                    rel: 'canonical',
                    href: this.$route.path.split('page/')[0]
                }
            ]
        }
    },
    async asyncData ({ $axios, error, route }) {
        const categoryUrl = route.params.categories
        const productUrl = route.params.subcategory
        let subcategory = null

        const category = await $axios.get(`/categories/` + categoryUrl)
        .then((res) => {
            return res.data.data
        }).catch((e) => {
            console.log(e)
            error({ statusCode: 404, message: 'Страница не найдена' })
        })

        //Подкатегория
        category.children.forEach(element => {
            if(element.url == productUrl) {
                subcategory = element
            }
        });

        return { category: category, subcategory: subcategory };
    },
    async fetch() {
        const { data, meta } = await this.getProducts(this.subcategory.id, this.$route.params.page)
        this.products = data
        this.meta = meta
        this.loader = false
    },
    computed: {
        fitersCategory() {
            return this.subcategory.filters.map(item => {
                if(!item.selected) item.selected = null
                return item;
            })
        }
    },
    methods: {
        async productsFilter() {
            try {
                if(this.productsFiltered.length == 0) {
                    this.loader = true
                    this.productsFiltered = await this.getProductsForFilter(this.subcategory.id)
                    this.loader = false
                } 
            } catch(e) {
                console.log(e)
                this.loader = false
            }

            this.sortProducts = []
            this.statusSort = false

            this.productsFiltered.forEach(prod => {
                prod.characteristics.forEach(char => {
                    this.fitersCategory.forEach(filterChar => {
                        if(char.id == filterChar.id && filterChar.selected) {
                            filterChar.selected.forEach(selected => {
                                if(selected == char.value) {
                                    this.sortProducts.push(prod)
                                    this.statusSort = true
                                }
                            });
                        }
                    });
                });
            })
            if (!this.statusSort) this.sortProducts = [...this.productsFiltered]
        },
        async getProducts(url, page = 1) {
            return await this.$axios.get(`/categories/` + url + '/products' + '?per_page=16' + '&page=' + page)
            .then((res) => {
                if (process.server) {
                    if (res.data.data.length == 0) this.$nuxt.context.res.statusCode = 404
                }
                return res.data
            }).catch((e) => {
                if (process.server) {
                    this.$nuxt.context.res.statusCode = 404
                }
            })
        },
        async getProductsForFilter(url) {
            return await this.$axios.get(`/categories/` + url + '/products' + '?per_page=999')
            .then((res) => {
                return res.data.data
            }).catch((e) => {
                console.log(e)
            })
        }
    },
    created() {
        this.$store.commit('onVisabilityHeader')
        this.$store.commit('setBreadCrumbs', 
        [
            {
            text: 'Официальный дилер Shacman',
            disabled: false,
            href: '/',
            position: 1,
            },
            {
            text: 'Каталог',
            disabled: false,
            href: '/product-category/',
            position: 2,
            },
            {
            text: this.category.name,
            disabled: false,
            href: '../../../',
            position: 3,
            },
            {
            text: this.subcategory.name,
            disabled: true,
            href: '',
            position: 4,
            },            
        ])
    },
}
</script>

<style lang="scss" scoped>
    @import "~/assets/catalog_page.scss";
</style>