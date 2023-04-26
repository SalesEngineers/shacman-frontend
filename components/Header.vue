<template>
    <div
        class="header-wrap"
        :class="[
            visabilityHeader ? '' : 'header-wrap-press-up',
            showHeader ? '' : 'header-wrap-visability',
        ]"
    >
        <v-navigation-drawer
            class="mobile-menu"
            v-model="drawer"
            fixed
            temporary
        >
            <v-list-item>
                <v-list-item-icon>
                    <svg
                        viewBox="0 0 40 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1.69531 1H38.3033"
                            stroke="#0154A6"
                            stroke-width="4"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                        />
                        <path
                            d="M1.69531 10H38.3033"
                            stroke="#0154A6"
                            stroke-width="4"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                        />
                        <path
                            d="M1.69531 19H38.3033"
                            stroke="#0154A6"
                            stroke-width="4"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                        />
                    </svg>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>Меню</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>
                <v-list-item
                    v-for="item in mobMenu"
                    :key="item.title"
                    link
                    :to="item.link"
                >
                    <v-list-item-icon v-html="item.icon"> </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <header>
            <div class="upper-header">
                <div class="container">
                    <div v-if="dynamicContact" class="upper-header-content">
                        <span class="d-none d-sm-block">
                            Официальный дилер Shacman
                        </span>
                        <client-only>
                            <span v-if="dynamicContact.email">
                                <a
                                    class="d-block d-sm-none"
                                    :href="dynamicContact.email.href"
                                    >{{ dynamicContact.email.name }}</a
                                >
                            </span>
                            <div>
                                <span
                                    class="d-none d-sm-inline"
                                    v-if="dynamicContact.email"
                                >
                                    <a :href="dynamicContact.email.href">{{
                                        dynamicContact.email.name
                                    }}</a>
                                </span>
                                <span v-if="dynamicContact.phone">
                                    <a
                                        class="pl-14"
                                        :href="dynamicContact.phone.href"
                                        >{{ dynamicContact.phone.name }}</a
                                    >
                                </span>
                            </div>
                        </client-only>
                    </div>
                    <v-divider
                        class="header-line"
                        v-show="!showHeader"
                        color="white"
                        insert
                    ></v-divider>
                </div>
            </div>
            <div class="bottom-header">
                <div class="container">
                    <div class="bottom-header-content">
                        <span class="d-flex">
                            <nuxt-link to="/" style="line-height: 1">
                                <img height="44" src="/img/logo_shacman.svg" />
                            </nuxt-link>
                        </span>
                        <div class="d-none d-md-block">
                            <span @mouseover="expand = true">
                                <nuxt-link
                                    @click.native="expand = false"
                                    class="catalog-menu_btn"
                                    to="/product-category/"
                                    >Каталог</nuxt-link
                                >
                            </span>
                            <nuxt-link
                                @click.native="expand = false"
                                class="pl-xl-15 pl-7"
                                to="/service/"
                                >Сервис</nuxt-link
                            >
                            <nuxt-link
                                @click.native="expand = false"
                                class="pl-xl-15 pl-7"
                                to="/parts/"
                                >Запчасти</nuxt-link
                            >
                            <nuxt-link
                                @click.native="expand = false"
                                class="pl-xl-15 pl-7"
                                to="/lizing/"
                                >Лизинг</nuxt-link
                            >
                            <nuxt-link
                                @click.native="expand = false"
                                class="pl-xl-15 pl-7"
                                to="/about/"
                                >О компании</nuxt-link
                            >
                            <nuxt-link @click.native="expand = false" class="pl-xl-15 pl-7" to="/blog/">Блог</nuxt-link>
                            <nuxt-link
                                @click.native="expand = false"
                                class="pl-xl-15 pl-7"
                                to="/contacts/"
                                >Контакты</nuxt-link
                            >
                        </div>
                        <div
                            class="d-block d-md-none mobile-menu-icon"
                            @click.stop="drawer = !drawer"
                        >
                            <svg
                                width="40"
                                height="20"
                                viewBox="0 0 40 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.69531 1H38.3033"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M1.69531 10H38.3033"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                />
                                <path
                                    d="M1.69531 19H38.3033"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-miterlimit="10"
                                    stroke-linecap="round"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <v-expand-transition>
                    <div
                        v-show="expand"
                        @mouseleave="expand = false"
                        class="catalog-menu_wrapper"
                    >
                        <v-container
                            class="catalog-menu_container catalog-main_category"
                        >
                            <div class="pt-3 pb-3 d-flex">
                                <span
                                    @mouseenter="spectech = true"
                                    class="d-flex mr-9"
                                >
                                    <svg
                                        width="25"
                                        height="26"
                                        class="mr-2"
                                        :class="
                                            spectech ? 'menu-left_hover' : ''
                                        "
                                        viewBox="0 0 25 26"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_1376_60473)">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M6.17312 6.5C6.06266 6.5 5.97312 6.58954 5.97312 6.7V7.43836C5.97312 7.54882 6.06266 7.63836 6.17312 7.63836H13.7416C13.8521 7.63836 13.9416 7.54882 13.9416 7.43836V6.7C13.9416 6.58954 13.8521 6.5 13.7416 6.5H6.17312ZM10.0809 17.1256C9.82392 18.2133 8.84673 19.0227 7.6805 19.0227C6.31832 19.0227 5.21405 17.9185 5.21405 16.5563C5.21405 16.2199 5.28138 15.8993 5.4033 15.6071H5.03473C4.92427 15.6071 4.83473 15.5176 4.83473 15.4071V13.8396L2.73276 10.8179L1.83733 14.1248L2.38352 14.2418C2.49106 14.2649 2.60224 14.227 2.67575 14.1452C3.07512 13.7007 3.69638 13.1083 3.69638 13.5203C3.69638 13.9227 3.59759 15.1453 3.53097 15.9043C3.51741 16.0589 3.38785 16.1768 3.23269 16.1768H0.709687C0.569987 16.1768 0.448777 16.0804 0.417368 15.9443L0.00790115 14.1697C-0.0414826 13.9557 0.148308 13.7629 0.363079 13.8089L0.675047 13.8757L1.76535 7.08753C1.78332 6.97562 1.8906 6.901 2.00177 6.92307L3.4862 7.21781C3.59982 7.24037 3.67058 7.35444 3.6403 7.46626L3.23325 8.96954L4.83473 11.0437V9.73586C4.83473 9.62541 4.92427 9.53587 5.03473 9.53587H6.41465V7.63925H13.3384L13.8998 11.0705L16.3324 11.676L16.5975 11.7236V10.8731C16.5975 10.7627 16.6871 10.6731 16.7975 10.6731H17.5359C17.6463 10.6731 17.7359 10.7627 17.7359 10.8731V12.159L20.0131 14.4398V13.151C20.0131 13.0406 20.1027 12.951 20.2131 12.951H21.3748C21.4666 12.951 21.5465 13.0135 21.5688 13.1025L22.3379 16.179L24.3128 18.6995C24.4157 18.8308 24.3221 19.0229 24.1554 19.0228L22.2286 19.0223L22.2241 19.0223H20.2131C20.1027 19.0223 20.0131 18.9327 20.0131 18.8223V16.8965L18.0604 16.0348C18.0966 16.2029 18.1157 16.3774 18.1157 16.5563C18.1157 17.9185 17.0114 19.0227 15.6492 19.0227C14.483 19.0227 13.5058 18.2133 13.2488 17.1256H10.1572H10.0809ZM10.3914 12.9051C9.90189 12.3444 9.33685 12.0116 8.8442 11.8262C8.3273 11.6317 7.87035 11.1752 7.87035 10.623V9.01815C7.87035 8.46586 8.31806 8.01815 8.87035 8.01815H11.3761C11.8697 8.01815 12.2895 8.37826 12.3645 8.86609L12.6019 10.409C12.6096 10.4593 12.6135 10.5102 12.6135 10.5611V12.3305C12.6135 12.8828 12.1658 13.3305 11.6135 13.3305H11.2514C10.9171 13.3305 10.6113 13.157 10.3914 12.9051Z"
                                                fill="#0154A6"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1376_60473">
                                                <rect
                                                    width="25"
                                                    height="25"
                                                    fill="white"
                                                    transform="translate(0 0.5)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span
                                        :class="
                                            spectech ? 'menu-left_hover' : ''
                                        "
                                        >Спецтехника</span
                                    >
                                </span>
                                <span
                                    @mouseenter="spectech = false"
                                    class="d-flex"
                                    v-if="naves.length != 0"
                                >
                                    <svg
                                        width="25"
                                        height="25"
                                        class="mr-2"
                                        :class="
                                            spectech ? '' : 'menu-left_hover'
                                        "
                                        viewBox="0 0 25 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M10.8534 3H14.5608V3.00148L16.4147 3.00148V6.24542H14.5608V8.09762H13.6338V9.02847C14.789 8.689 15.6598 8.59217 15.7477 8.82712C15.8457 9.0888 14.941 9.67765 13.6338 10.2346V12.1427C14.789 11.8033 15.6598 11.7064 15.7477 11.9414C15.8457 12.2031 14.941 12.7919 13.6338 13.3488V15.3846C14.789 15.0452 15.6598 14.9483 15.7477 15.1833C15.8457 15.445 14.941 16.0338 13.6338 16.5907V18.6295C14.789 18.29 15.6598 18.1932 15.7477 18.4282C15.8457 18.6898 14.941 19.2787 13.6338 19.8356V20.9361L12.7069 22.0006L11.7801 20.9361V20.5027C10.6275 20.8409 9.75933 20.9371 9.67153 20.7025C9.57371 20.4412 10.4758 19.8536 11.7801 19.2973V17.2578C10.6275 17.596 9.75933 17.6922 9.67153 17.4576C9.57371 17.1963 10.4758 16.6087 11.7801 16.0525V14.0159C10.6275 14.3541 9.75933 14.4503 9.67153 14.2157C9.57371 13.9544 10.4758 13.3668 11.7801 12.8105V10.9017C10.6275 11.2399 9.75933 11.336 9.67153 11.1014C9.57371 10.8401 10.4758 10.2525 11.7801 9.69629V8.09762H10.8534V6.24542H9L9 3.00148L10.8534 3.00148V3Z"
                                            fill="#0154A6"
                                        />
                                    </svg>
                                    <span
                                        :class="
                                            spectech ? '' : 'menu-left_hover'
                                        "
                                        >Навесное оборудование</span
                                    >
                                </span>
                            </div>
                        </v-container>

                        <v-container
                            class="
                                catalog-menu_container
                                catalog-main_products
                                menu-right_wrap
                            "
                        >
                            <v-row v-if="spectech">
                                <v-col cols="10">
                                    <v-row>
                                        <v-col
                                            v-for="(item, index) in tech"
                                            :key="index"
                                            cols="4"
                                        >
                                            <nuxt-link
                                                @click.native="expand = false"
                                                :to="`/product-category/${item.url}/`"
                                            >
                                                {{ item.name }}
                                            </nuxt-link>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <v-row v-else>
                                <v-col cols="10">
                                    <v-row>
                                        <v-col
                                            v-for="(item, index) in naves"
                                            :key="index"
                                            cols="4"
                                        >
                                            <nuxt-link
                                                @click.native="expand = false"
                                                :to="`/product-category/${item.url}`"
                                            >
                                                {{ item.name }}
                                            </nuxt-link>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-container>
                    </div>
                </v-expand-transition>
            </div>
            <client-only>
                <div
                    v-if="displayBreadcrumbs"
                    :class="[
                        viasbilityBreadcrumbs ? 'show-breadcrumbs' : '',
                        visabilityHeader ? 'breadcrumbs-item_colored' : '',
                    ]"
                    class="header-breadcrumbs container pt-9 pt-lg-11"
                >
                <v-breadcrumbs
                        itemscope
                        itemtype="https://schema.org/BreadcrumbList"
                        class="pa-0"
                        :items="displayBreadcrumbs"
                    >
                        <template v-slot:item="{ item }">
                            <li
                                itemprop="itemListElement"
                                itemtype="https://schema.org/ListItem"
                                itemscope=""
                            >
                                <template v-if="!item.disabled">
                                    <nuxt-link :to="item.href" itemprop="item">
                                        <span itemprop="name">{{
                                            item.text
                                        }}</span>
                                    </nuxt-link>
                                    <meta
                                        itemprop="position"
                                        :content="item.position"
                                    />
                                </template>
                                <template v-else>
                                    <span
                                        :class="
                                            visabilityHeader
                                                ? 'disabled-breadcrumb-black'
                                                : 'disabled-breadcrumb-white'
                                        "
                                        >{{ item.text }}</span
                                    >
                                    <meta
                                        itemprop="position"
                                        :content="item.position"
                                    />
                                </template>
                            </li>
                        </template>
                    </v-breadcrumbs>
                </div>
            </client-only>
        </header>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            drawer: false,
            expand: false,
            spectech: true,
            mobMenu: [
                {
                    title: "Каталог",
                    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.16 16.2667C8.35911 16.2667 8.53333 16.1956 8.68267 16.0533C8.832 15.9111 8.90667 15.7404 8.90667 15.5413C8.90667 15.328 8.832 15.1502 8.68267 15.008C8.53333 14.8658 8.35911 14.7947 8.16 14.7947C7.96089 14.7947 7.79022 14.8658 7.648 15.008C7.50578 15.1502 7.43467 15.328 7.43467 15.5413C7.43467 15.7404 7.50578 15.9111 7.648 16.0533C7.79022 16.1956 7.96089 16.2667 8.16 16.2667ZM8.16 12.7253C8.35911 12.7253 8.53333 12.6542 8.68267 12.512C8.832 12.3698 8.90667 12.1991 8.90667 12C8.90667 11.8009 8.832 11.6267 8.68267 11.4773C8.53333 11.328 8.35911 11.2533 8.16 11.2533C7.96089 11.2533 7.79022 11.328 7.648 11.4773C7.50578 11.6267 7.43467 11.8009 7.43467 12C7.43467 12.1991 7.50578 12.3698 7.648 12.512C7.79022 12.6542 7.96089 12.7253 8.16 12.7253ZM8.16 9.16267C8.35911 9.16267 8.53333 9.09511 8.68267 8.96C8.832 8.82489 8.90667 8.65067 8.90667 8.43733C8.90667 8.23822 8.832 8.064 8.68267 7.91467C8.53333 7.76533 8.35911 7.69067 8.16 7.69067C7.96089 7.69067 7.79022 7.76533 7.648 7.91467C7.50578 8.064 7.43467 8.23822 7.43467 8.43733C7.43467 8.65067 7.50578 8.82489 7.648 8.96C7.79022 9.09511 7.96089 9.16267 8.16 9.16267ZM10.9333 16.2667H16.288V14.7947H10.9333V16.2667ZM10.9333 12.7253H16.288V11.2533H10.9333V12.7253ZM10.9333 9.184H16.288V7.712H10.9333V9.184ZM5.64267 20C5.20178 20 4.81778 19.8364 4.49067 19.5093C4.16356 19.1822 4 18.7982 4 18.3573V5.64267C4 5.20178 4.16356 4.81778 4.49067 4.49067C4.81778 4.16356 5.20178 4 5.64267 4H18.3573C18.7982 4 19.1822 4.16356 19.5093 4.49067C19.8364 4.81778 20 5.20178 20 5.64267V18.3573C20 18.7982 19.8364 19.1822 19.5093 19.5093C19.1822 19.8364 18.7982 20 18.3573 20H5.64267Z" fill="#0154A6"/></svg>',
                    link: "/product-category/",
                },
                {
                    title: "Сервис",
                    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1677_59497)"><path d="M17.1117 20.451C17.0055 20.451 16.9051 20.4304 16.8107 20.3891C16.7162 20.3477 16.6336 20.2976 16.5628 20.2385L12.1534 15.8115V14.324L13.2867 13.1552H14.8096L19.2013 17.5823C19.2603 17.6531 19.3135 17.7387 19.3607 17.8391C19.4079 17.9394 19.4315 18.0427 19.4315 18.149C19.4315 18.2552 19.4109 18.3585 19.3695 18.4589C19.3282 18.5592 19.2721 18.6507 19.2013 18.7333L17.7138 20.2385C17.6312 20.2976 17.5397 20.3477 17.4393 20.3891C17.339 20.4304 17.2298 20.451 17.1117 20.451ZM17.1294 18.8219L17.7669 18.1667L13.9951 14.3771L13.3398 15.0323L17.1294 18.8219ZM5.88464 20.4688C5.77839 20.4688 5.67214 20.4451 5.56589 20.3979C5.45964 20.3507 5.37109 20.2976 5.30026 20.2385L3.81276 18.751C3.75373 18.692 3.70356 18.6123 3.66224 18.512C3.62092 18.4116 3.60026 18.3024 3.60026 18.1844C3.60026 18.0781 3.62092 17.9719 3.66224 17.8656C3.70356 17.7594 3.75373 17.6708 3.81276 17.6L8.27526 13.1729H9.88672L10.4888 12.5708L7.15964 9.22396H6.04401L3.51172 6.70937L5.63672 4.58438L8.16901 7.09896V8.21458L11.4982 11.5615L13.8711 9.18854L12.5961 7.91354L13.6232 6.90417H11.569L11.1086 6.44375L13.8003 3.73438L14.2784 4.2125V6.24896L15.2878 5.23958L18.6346 8.60417C18.8353 8.81667 18.9977 9.05868 19.1216 9.33021C19.2456 9.60174 19.3076 9.87326 19.3076 10.1448C19.3076 10.4753 19.2456 10.7734 19.1216 11.0391C18.9977 11.3047 18.8471 11.5437 18.6701 11.7562L17.0055 10.0917L15.9076 11.1896L14.8982 10.1802L10.8961 14.1823V15.7937L6.4513 20.2385C6.39227 20.2976 6.31259 20.3507 6.21224 20.3979C6.11189 20.4451 6.00269 20.4688 5.88464 20.4688ZM5.88464 18.8219L9.67422 15.05L9.01901 14.3948L5.22943 18.1667L5.88464 18.8219Z" fill="#0154A6"/><path d="M8.88402 14.4609L4.96094 18.384L6.26863 19.0379L9.53786 15.7686L10.1917 14.4609H8.88402Z" fill="#0154A6" stroke="#0154A6"/><path d="M14.7698 14.4609L18.0391 17.7302L17.3852 19.0379L14.116 15.7686L13.4621 15.1148L14.7698 14.4609Z" fill="#0154A6" stroke="#0154A6"/></g><defs><clipPath id="clip0_1677_59497"><rect width="17" height="17" fill="white" transform="translate(3 4)"/></clipPath></defs></svg>',
                    link: "/service/",
                },
                {
                    title: "Запчасти",
                    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.73018 3.93302C8.68772 3.73175 8.80482 3.53109 9.00095 3.46906L10.425 3.01869C10.6221 2.95635 10.8343 3.05452 10.9144 3.24513L11.0307 3.52211C11.2011 3.92745 11.6163 4.16756 12.056 4.16427C12.0759 4.16412 12.0959 4.16404 12.1158 4.16404C12.5529 4.16404 12.9606 3.91028 13.107 3.49841L13.148 3.38318C13.2169 3.18936 13.4216 3.0794 13.6212 3.12893L15.0708 3.48856C15.2715 3.53835 15.4012 3.73287 15.3699 3.93725L15.3526 4.0507C15.284 4.49911 15.5294 4.9317 15.9254 5.15298C15.9325 5.15692 15.9395 5.16088 15.9465 5.16484C16.3495 5.39166 16.8577 5.37009 17.2048 5.06453L17.2398 5.03373C17.3941 4.8978 17.6265 4.90113 17.7769 5.04143L18.8691 6.06009C19.0204 6.20111 19.0392 6.43413 18.9125 6.59758L18.8408 6.69018C18.5649 7.04629 18.5672 7.53959 18.8014 7.92437C18.9353 8.14447 19.0587 8.3717 19.1709 8.60537C19.1711 8.60587 19.1716 8.60617 19.1722 8.60612L20.3231 8.49809C20.5279 8.47886 20.7139 8.6181 20.7531 8.82003L21.038 10.2861C21.0775 10.4891 20.9557 10.6887 20.7572 10.7465L20.6943 10.7648C20.2227 10.9022 19.9276 11.3621 19.9357 11.8533C19.9364 11.8971 19.9368 11.941 19.9368 11.985C19.9368 12.0168 19.9366 12.0486 19.9362 12.0803C19.9304 12.5652 20.2201 13.0187 20.6842 13.159L20.7783 13.1875C20.9762 13.2474 21.0959 13.4482 21.0544 13.6507L20.7544 15.1139C20.713 15.3154 20.5256 15.4527 20.321 15.4313L19.893 15.3867C19.4749 15.3431 19.0795 15.5734 18.8669 15.9359C18.6477 16.3096 18.6486 16.7806 18.9096 17.1263L18.9505 17.1805C19.0745 17.3447 19.0537 17.5761 18.9025 17.7156L17.8047 18.7282C17.6527 18.8684 17.4189 18.8696 17.2654 18.7311C16.9727 18.4668 16.5365 18.4497 16.2003 18.6559C16.1113 18.7106 16.021 18.7635 15.9296 18.8147C15.534 19.0361 15.2889 19.4684 15.3574 19.9166L15.3699 19.9983C15.4012 20.2026 15.2715 20.3972 15.0708 20.4469L13.6212 20.8066C13.4216 20.8561 13.2169 20.7461 13.148 20.5523L13.1229 20.4817C12.9742 20.0634 12.5598 19.806 12.1158 19.806C12.0665 19.806 12.0172 19.8055 11.9681 19.8046C11.5239 19.7964 11.1021 20.0368 10.93 20.4464L10.8636 20.6044C10.7835 20.7951 10.5713 20.8932 10.3742 20.8309L8.95017 20.3805C8.75404 20.3185 8.63694 20.1178 8.6794 19.9165L8.6879 19.8763C8.78433 19.4193 8.54771 18.9621 8.14547 18.7247C8.10443 18.7004 8.06363 18.6758 8.02307 18.6509C7.64757 18.4198 7.15937 18.4357 6.8321 18.7311C6.67862 18.8696 6.44485 18.8684 6.29287 18.7282L5.19503 17.7156C5.04383 17.5761 5.02306 17.3447 5.147 17.1805L5.29491 16.9846C5.53418 16.6677 5.53835 16.2367 5.33965 15.8929C5.14454 15.5553 4.77745 15.342 4.38965 15.3825L3.92104 15.4313C3.71645 15.4527 3.52903 15.3154 3.48771 15.1139L3.18768 13.6507C3.14615 13.4482 3.26582 13.2474 3.46372 13.1875L3.54749 13.1622C4.01176 13.0218 4.30143 12.5681 4.29546 12.0831C4.29506 12.0504 4.29486 12.0177 4.29486 11.985C4.29486 11.9821 4.29486 11.9792 4.29487 11.9762C4.29538 11.5118 4.0248 11.078 3.58567 10.9269L3.2699 10.8182C3.0754 10.7513 2.96337 10.5477 3.01088 10.3476L3.35586 8.8944C3.40362 8.69324 3.59682 8.56162 3.80151 8.5908L4.89332 8.74647C4.9454 8.7539 5.00089 8.73267 5.02311 8.685C5.1344 8.44621 5.25739 8.21397 5.39135 7.98902C5.59906 7.64025 5.59903 7.19745 5.35443 6.87348L5.147 6.59875C5.02306 6.43458 5.04383 6.20317 5.19503 6.0637L6.29287 5.05106C6.44485 4.91088 6.67862 4.90962 6.8321 5.04816L6.90905 5.11762C7.26039 5.43477 7.7869 5.45314 8.19628 5.2156C8.60347 4.97932 8.85296 4.5149 8.75577 4.05427L8.73018 3.93302ZM10.259 10.4974C10.0011 10.842 9.62711 11.1289 9.19668 11.1289H7.86871C7.2687 11.1289 6.79435 10.5977 6.98673 10.0293C7.58682 8.25663 8.99913 7.31006 10.1697 6.88083C10.7331 6.67427 11.2617 7.13593 11.2617 7.73594V9.00389C11.2617 9.46276 10.9261 9.84888 10.5797 10.1498C10.4561 10.2572 10.3493 10.3768 10.259 10.4974ZM14.0761 6.85396C13.5077 6.66158 12.9765 7.13593 12.9765 7.73594V9.06391C12.9765 9.49434 13.2634 9.86831 13.6079 10.1263C13.7286 10.2166 13.8482 10.3234 13.9556 10.4469C14.2565 10.7933 14.6426 11.1289 15.1015 11.1289H16.3695C16.9695 11.1289 17.4311 10.6003 17.2246 10.037C16.7953 8.86635 15.8488 7.45405 14.0761 6.85396ZM13.9791 13.4732C14.2371 13.1286 14.6111 12.8418 15.0415 12.8418H16.3695C16.9695 12.8418 17.4438 13.373 17.2514 13.9413C16.6513 15.714 15.239 16.6606 14.0684 17.0898C13.5051 17.2964 12.9765 16.8347 12.9765 16.2347V14.9668C12.9765 14.5079 13.3121 14.1218 13.6585 13.8208C13.782 13.7135 13.8888 13.5939 13.9791 13.4732ZM10.1621 17.1167C10.7304 17.3091 11.2617 16.8347 11.2617 16.2347V14.9068C11.2617 14.4763 10.9748 14.1024 10.6302 13.8444C10.5096 13.7541 10.3899 13.6473 10.2826 13.5238C9.98165 13.1774 9.59553 12.8418 9.13666 12.8418H7.86871C7.2687 12.8418 6.80704 13.3704 7.0136 13.9337C7.44283 15.1043 8.3894 16.5166 10.1621 17.1167Z" fill="#0154A6"/></svg>',
                    link: "/parts/",
                },
                {
                    title: "Лизинг",
                    icon: '<svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 9C22.9853 9 25 6.98528 25 4.5C25 2.01472 22.9853 0 20.5 0C18.0147 0 16 2.01472 16 4.5C16 6.98528 18.0147 9 20.5 9ZM19.8805 5.17857H20.8929C21.3413 5.17857 21.7212 5.02857 22.0327 4.72857C22.3442 4.42381 22.5 4.05 22.5 3.60714C22.5 3.15476 22.3442 2.77619 22.0327 2.47143C21.7212 2.15714 21.3413 2 20.8929 2H19.0664V4.44286H18.5V5.17857H19.0664V5.65714H18.5V6.21429H19.0664V7H19.8805V6.21429H21.5442V5.65714H19.8805V5.17857ZM19.8805 2.77143H20.8929C21.1195 2.77143 21.3059 2.85238 21.4522 3.01429C21.608 3.17619 21.6858 3.37381 21.6858 3.60714C21.6858 3.84048 21.608 4.03809 21.4522 4.2C21.3059 4.3619 21.1195 4.44286 20.8929 4.44286H19.8805V2.77143Z" fill="#0154A6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M6.17216 7C6.0617 7 5.97216 7.08954 5.97216 7.2V7.93836C5.97216 8.04882 6.0617 8.13836 6.17216 8.13836H13.7407C13.8511 8.13836 13.9407 8.04882 13.9407 7.93836V7.2C13.9407 7.08954 13.8511 7 13.7407 7H6.17216ZM10.0814 17.625C9.82457 18.713 8.84724 19.5227 7.68079 19.5227C6.31861 19.5227 5.21435 18.4185 5.21435 17.0563C5.21435 16.72 5.28163 16.3995 5.40347 16.1074H5.03544C4.92498 16.1074 4.83544 16.0179 4.83544 15.9074V14.3408L2.73376 11.3195L1.83882 14.6247L2.38352 14.7414C2.49106 14.7644 2.60224 14.7265 2.67575 14.6447C3.07512 14.2003 3.69638 13.6079 3.69638 14.0199C3.69638 14.4223 3.59759 15.6448 3.53097 16.4038C3.51741 16.5584 3.38785 16.6764 3.23269 16.6764H0.709687C0.569987 16.6764 0.448777 16.5799 0.417368 16.4438L0.00790115 14.6692C-0.0414826 14.4552 0.148308 14.2624 0.363079 14.3084L0.67652 14.3756L1.7668 7.58753C1.78477 7.47562 1.89205 7.401 2.00322 7.42307L3.48765 7.71781C3.60127 7.74037 3.67203 7.85444 3.64175 7.96626L3.2343 9.47101L4.83544 11.5447V10.2362C4.83544 10.1257 4.92498 10.0362 5.03544 10.0362H6.41357V8.13867H13.3373L13.8987 11.5699L16.3313 12.1754L16.5972 12.2232V11.3737C16.5972 11.2633 16.6867 11.1737 16.7972 11.1737H17.5355C17.646 11.1737 17.7355 11.2633 17.7355 11.3737V12.6591L20.0112 14.9384V13.6502C20.0112 13.5398 20.1008 13.4502 20.2112 13.4502H21.3729C21.4647 13.4502 21.5447 13.5127 21.5669 13.6017L22.3358 16.6773L24.3114 19.1988C24.4143 19.33 24.3207 19.5221 24.1539 19.5221L22.2271 19.5216L22.2204 19.5215H20.2112C20.1008 19.5215 20.0112 19.4319 20.0112 19.3215V17.3955L18.0608 16.5349C18.0969 16.703 18.116 16.8774 18.116 17.0563C18.116 18.4185 17.0117 19.5227 15.6495 19.5227C14.4831 19.5227 13.5058 18.713 13.249 17.625H10.1561H10.0814ZM10.3917 13.4046C9.90214 12.8438 9.3371 12.511 8.84445 12.3257C8.32755 12.1312 7.8706 11.6747 7.8706 11.1224V9.51758C7.8706 8.96529 8.31831 8.51758 8.8706 8.51758H11.3764C11.87 8.51758 12.2897 8.87769 12.3648 9.36552L12.6021 10.9084C12.6099 10.9588 12.6138 11.0096 12.6138 11.0605V12.8299C12.6138 13.3822 12.166 13.8299 11.6138 13.8299H11.2517C10.9173 13.8299 10.6116 13.6565 10.3917 13.4046Z" fill="#0154A6"/></svg>',
                    link: "/lizing/",
                },
                {
                    title: "О компании",
                    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM11.2054 8.97063C11.4244 9.18047 11.6798 9.2854 11.9718 9.2854C12.2729 9.2854 12.5283 9.18047 12.7382 8.97063C12.9572 8.75166 13.0666 8.49619 13.0666 8.20423C13.0666 7.91227 12.9572 7.6568 12.7382 7.43783C12.5283 7.21886 12.2729 7.10938 11.9718 7.10938C11.6798 7.10938 11.4244 7.21886 11.2054 7.43783C10.9955 7.6568 10.8906 7.91227 10.8906 8.20423C10.8906 8.49619 10.9955 8.75166 11.2054 8.97063ZM11.0959 16.9494H12.8614V10.1065H11.0959V16.9494Z" fill="#0154A6"/></svg>',
                    link: "/about/",
                },
                {
                    title: "Контакты",
                    icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.66667 16.4444C6.66667 14.6667 10.2222 13.6889 12 13.6889C13.7778 13.6889 17.3333 14.6667 17.3333 16.4444V17.3333H6.66667M14.6667 9.33333C14.6667 10.0406 14.3857 10.7189 13.8856 11.219C13.3855 11.719 12.7072 12 12 12C11.2928 12 10.6145 11.719 10.1144 11.219C9.61428 10.7189 9.33333 10.0406 9.33333 9.33333C9.33333 8.62609 9.61428 7.94781 10.1144 7.44772C10.6145 6.94762 11.2928 6.66667 12 6.66667C12.7072 6.66667 13.3855 6.94762 13.8856 7.44772C14.3857 7.94781 14.6667 8.62609 14.6667 9.33333ZM4 5.77778V18.2222C4 18.6937 4.1873 19.1459 4.5207 19.4793C4.8541 19.8127 5.30628 20 5.77778 20H18.2222C18.6937 20 19.1459 19.8127 19.4793 19.4793C19.8127 19.1459 20 18.6937 20 18.2222V5.77778C20 5.30628 19.8127 4.8541 19.4793 4.5207C19.1459 4.1873 18.6937 4 18.2222 4H5.77778C5.30628 4 4.8541 4.1873 4.5207 4.5207C4.1873 4.8541 4 5.30628 4 5.77778Z" fill="#0154A6"/></svg>',
                    link: "/contacts/",
                },
                // { title: 'Блог', icon: '<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.63395 20C5.1954 20 4.81344 19.8373 4.48806 19.5119C4.16269 19.1866 4 18.8046 4 18.366V5.63395C4 5.1954 4.16269 4.81344 4.48806 4.48806C4.81344 4.16269 5.1954 4 5.63395 4H15.5438L20 8.45623V18.366C20 18.8046 19.8373 19.1866 19.5119 19.5119C19.1866 19.8373 18.8046 20 18.366 20H5.63395ZM7.56499 16.1804H16.435V14.695H7.56499V16.1804ZM7.56499 12.7639H16.435V11.2573H7.56499V12.7639ZM14.6525 9.34748H18.366L14.6525 5.63395V9.34748ZM7.56499 9.32626H12.1273V7.84085H7.56499V9.32626Z" fill="#0154A6"/></svg>', link: '/blog/' },
            ],
            tech: [],
            naves: [],
            showHeader: false,
            viasbilityBreadcrumbs: true,
        };
    },
    methods: {
        handleScroll() {
            //хлебные крошки
            const scrollNow = window.scrollY;
            if (scrollNow > 50) {
                this.viasbilityBreadcrumbs = false;
            } else {
                this.viasbilityBreadcrumbs = true;
            }

            //хедер
            if (this.visabilityHeader) {
                this.showHeader = true;
            } else {
                if (scrollNow > 250) {
                    this.showHeader = true;
                } else {
                    this.showHeader = false;
                }
            }
        },
    },
    computed: {
        ...mapGetters({
            visabilityHeader: "getVisabilityHeader",
            displayBreadcrumbs: "getBreadcrumbs",
            categories: "getCategories",
            settings: "getSettings",
            dynamicContact: "getDynamicContact"
        }),
    },
    watch: {
        visabilityHeader() {
            if (this.visabilityHeader) {
                this.showHeader = true;
            } else {
                this.showHeader = false;
            }
        },
        categories: {
            handler: function () {
                this.naves = [];
                this.tech = [];
                this.categories.forEach((element) => {
                    if (element.id == 1) {
                        element.children.forEach((category) => {
                            this.naves.push(category);
                        });
                    } else {
                        element.children.forEach((category) => {
                            this.tech.push(category);
                        });
                    }
                });
            },
            immediate: true
        },
    },
    mounted() {
        if (this.visabilityHeader) {
            this.showHeader = true;
        }
    },
    beforeMount() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.handleScroll);
    },
};
</script>

<style lang="scss" scoped>
header {
    z-index: 11;
    color: white;
    position: fixed;
    width: 100%;
}
.header-wrap {
    padding-bottom: 100px;
    transition: all 1s;
}
.header-wrap-press-up {
    padding-bottom: 0;
}
.header-wrap-visability .upper-header {
    padding-top: 8px;
}
.header-wrap-visability .bottom-header,
.header-wrap-visability .upper-header {
    background: unset;
}
.header-line {
    transition: 0.5s all;
}
.header-wrap-visability:hover .header-line {
    opacity: 0;
}
.header-wrap-visability:hover .bottom-header {
    background-color: $primary-color;
}
.header-wrap-visability:hover .upper-header {
    background-color: $secondary-color;
}
.v-navigation-drawer--temporary {
    z-index: 12;
}
.bottom-header {
    background-color: $primary-color;
    transition: all 0.3s;
    position: relative;
    z-index: 10;
}
.upper-header {
    background-color: $secondary-color;
    transition: all 0.4s;
}
.menu-left_hover {
    font-weight: bold !important;
    color: $hover-color !important;
}
.menu-left_hover path {
    fill: $hover-color;
    transition: 0.5s all;
}
.catalog-menu_wrapper span {
    transition: 0.5s all;
    cursor: default;
    color: #000;
}
.catalog-menu_wrapper a {
    color: #000;
}
.catalog-menu_wrapper a {
    @include hover-active {
        color: $hover-color;
    }
    @include hover-transition(0.5s);
}
.bottom-header-content {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.upper-header-content {
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.catalog-menu_wrapper {
    width: 100%;
    position: absolute;
}
.catalog-main_category {
    background: #f3f3f3;
}
.catalog-main_products {
    background: #ffffff;
    padding-top: 24px;
    padding-bottom: 24px;
}
.header-breadcrumbs {
    visibility: hidden;
    opacity: 0;
    transition: 0.2s all;
}
.show-breadcrumbs {
    opacity: 1 !important;
    visibility: visible !important;
}
.disabled-breadcrumb-black {
    color: rgba($color: #000000, $alpha: 0.5);
}
.disabled-breadcrumb-white {
    color: rgba($color: #fff, $alpha: 0.5);
}
.mobile-menu-icon {
    cursor: pointer;
    height: 20px;
    &:hover {
        path {
            stroke: $hover-color;
        }
    }
}
.mobile-menu-icon path {
    transition: 0.5s;
}
.mobile-menu svg {
    width: 24px;
    height: 24px;
}

@media (max-width: 599px) {
    .bottom-header-content {
        height: 62px;

        img {
            height: 30px;
        }
    }
}

@include xl {
    .upper-header-content {
        font-size: 16px;
    }
}
@include xs {
    .v-breadcrumbs li {
        font-size: 12px;
    }
}
</style>

<style lang="scss">
.breadcrumbs-item_colored a {
    color: black;
}
.theme--light.v-breadcrumbs .v-breadcrumbs__divider,
.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled {
    color: rgba(0, 0, 0, 0.5) !important;
}
.header-wrap-press-up .theme--light.v-breadcrumbs .v-breadcrumbs__divider,
.theme--light.v-breadcrumbs .v-breadcrumbs__item--disabled {
    color: rgba(255, 255, 255, 0.5) !important;
}
</style>