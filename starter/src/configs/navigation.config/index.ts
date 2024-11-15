import {
    NAV_ITEM_TYPE_ITEM,
    NAV_ITEM_TYPE_COLLAPSE
} from '@/constants/navigation.constant'
import type { NavigationTree } from '@/@types/navigation'

const navigationConfig: NavigationTree[] = [
    {
        key: 'home',
        path: '/home',
        title: 'Home',
        translateKey: 'nav.home',
        icon: 'home',
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
        subMenu: [],
    },
    {
        key: 'salesMenu',
        path: '',
        title: 'Sales Menu',
        translateKey: 'nav.collapseMenu.collapseMenu',
        icon: 'sales',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'salesMenu.item1',
                path: '/sales-menu-product-list',
                title: 'Sales menu item 1',
                translateKey: 'nav.collapseMenu.item1',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'salesMenu.item2',
                path: '/sales-menu-product-new',
                title: 'Sales menu item 2',
                translateKey:'nav.collapseMenu.item2',
                icon:'',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu:[]
            },
            {
                key: 'salesMenu.item3',
                path: '/sales-menu-product-edit/3',
                title: 'Sales menu item 3',
                translateKey:'nav.collapseMenu.item3',
                icon:'',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu:[]
            },

        ],
    },
    {
        key: 'shopMenu',
        path: '',
        title: 'Shop',
        translateKey: 'nav.shopMenu.shopMenu',
        icon: 'shop',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'shopMenu.item1',
                path: '/category',
                title: 'Category',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'shopMenu.item2',
                path: '/subcategory/1',
                title: 'Sub Category',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },

        ],
    },
]

export default navigationConfig
