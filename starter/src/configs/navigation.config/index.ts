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
            {
                key: 'shopMenu.item3',
                path: '/productlist/2',
                title: 'Product List',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'shopMeny.item4',
                path: '/productlist/newproduct',
                title: 'New Product',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
            {
                key: 'shopMeny.item5',
                path: '/category/newcategory',
                title: 'New Category',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
            {
                key: 'shopMeny.item6',
                path: '/subcategory/newsubcategory',
                title: 'New SubCategory',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
            {
                key: 'shopMeny.item7',
                path: '/product/editproduct/3',
                title: 'Edit Product',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
            {
                key: 'shopMeny.item8',
                path: '/category/editcategory/1',
                title: 'Edit Category',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            },
            {
                key: 'shopMeny.item9',
                path: '/subcategory/editsubcategory/1',
                title: 'Edit SubCategory',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: []
            }

        ],
    },
    {
        key: 'purchaseMenu',
        path: '',
        title: 'Purchase',
        translateKey: 'nav.purchaseMenu.purchaseMenu',
        icon: '',
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [],
        subMenu: [
            {
                key: 'purchaseMenu.countrylist',
                path: '/countrylist',
                title: 'Country Master',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'purchaseMenu.statelist',
                path: '/statelist',
                title: 'State Master',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'purchaseMenu.districtlist',
                path: '/districtlist',
                title: 'District Master',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'purchaseMenu.mainlist',
                path: '/mainlist',
                title: 'Main Group',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'purchaseMenu.sublist',
                path: '/sublist',
                title: 'Sub Group',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'purchaseMenu.godown',
                path: '/godown',
                title: 'Godown',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'purchaseMenu.measure',
                path: '/measure',
                title: 'Measuring Unit',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'purchaseMenu.order',
                path: '/order',
                title: 'Purchase Order',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'purchaseMenu.terms',
                path: '/termslist',
                title: 'Terms & Conditions',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'purchaseMenu.setting',
                path: '/settinglist',
                title: 'GL Setting for admin charges',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'purchaseMenu.supplier',
                path: '/supplierlist',
                title: 'Supplier Type',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'purchaseMenu.tender',
                path: '/tenderlist',
                title: 'Tender Type',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'purchaseMenu.issue',
                path: '/issuelist',
                title: 'Issue Type',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },

            {
                key: 'purchaseMenu.item',
                path: '/itemlist',
                title: 'Item Master',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            },
            {
                key: 'purchaseMenu.suppliermaster',
                path: '/suppliermasterlist',
                title: 'Supplier Master',
                translateKey: '',
                icon: '',
                type: NAV_ITEM_TYPE_ITEM,
                authority: [],
                subMenu: [],
            }
        ]
    }
]

export default navigationConfig
