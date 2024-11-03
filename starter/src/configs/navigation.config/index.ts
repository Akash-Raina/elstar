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
        key: 'collapseMenu',
        path: '',
        title: 'Collapse Menu',
        translateKey: 'nav.collapseMenu.collapseMenu',
        icon: 'sales',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'collapseMenu.item1',
                path: '/collapse-menu-product-list',
                title: 'Collapse menu item 1',
                translateKey: 'nav.collapseMenu.item1',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'collapseMenu.item2',
                path: '/collapse-menu-product-new',
                title: 'Collapse menu item 2',
                translateKey:'nav.collapseMenu.item2',
                icon:'',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu:[]
            },
            {
                key: 'collapseMenu.item3',
                path: '/collapse-menu-product-edit/3',
                title: 'Collapse menu item 3',
                translateKey:'nav.collapseMenu.item3',
                icon:'',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu:[]
            },

        ],
    },
]

export default navigationConfig
