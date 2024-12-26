import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'
import { components } from 'react-select'
import path from 'path'
import { m } from 'framer-motion'

export const publicRoutes: Routes = [...authRoute]

export const protectedRoutes = [
    {
        key: 'home',
        path: '/home',
        component: lazy(() => import('@/views/Home')),
        authority: [],
    },
    /** Example purpose only, please remove */
    {
        key: 'SalesMenu.item1',
        path: '/sales-menu-product-list',
        component: lazy(() => import('@/views/sales/ProductList')),
        authority: [],
    },
    {
        key: 'SalesMenu.item2',
        path: '/sales-menu-product-new',
        component: lazy(()=> import('@/views/sales/ProductNew')),
        authority: [],
        meta:{
            header: 'Add New Product'
        }
    },
    {
        key: 'SalesMenu.item3',
        path: '/sales-menu-product-edit/:productId',
        component: lazy(()=> import('@/views/sales/ProductEdit')),
        authority: [],
        meta:{
            header: 'Edit Product'
        }
    },
    {
        key:'shopMenu.item1',
        path: '/category',
        component: lazy(()=> import('@/views/shop/CategoryList')),
        authority: [],
    },
    {
        key:'shopMenu.item2',
        path: '/subcategory/:id',
        component: lazy(()=> import('@/views/shop/SubCategory')),
        authority: [],
    },
    {
        key:'shopMenu.item3',
        path: '/productlist/:id',
        component: lazy(()=> import('@/views/shop/ProductList')),
        authority: [],
    },
    {
        key:'shopMenu.item4',
        path: '/productlist/newproduct',
        component: lazy(()=> import('@/views/shop/NewProduct'))
    },
    {
        key:'shopMenu.item5',
        path:'/category/newcategory',
        component: lazy(()=> import ('@/views/shop/NewCategory'))
    },
    {
        key: 'shopMenu.item6',
        path: '/subcategory/newsubcategory',
        component: lazy(()=> import('@/views/shop/NewSubCategory'))
    },
    {
        key: 'shopMenu.item7',
        path: '/product/editproduct/:id',
        component: lazy(()=>import('@/views/shop/ProductEdit'))
    },
    {
        key: 'shopMeny.item8',
        path: '/category/editcategory/:id',
        component: lazy(()=>import('@/views/shop/CategoryEdit'))
    },
    {
        key: 'shopMeny.item9',
        path: '/subcategory/editsubcategory/:id',
        component: lazy(()=>import('@/views/shop/SubCategoryEdit'))
    },
    {
        key: 'purchaseMenu.countrylist',
        path: '/countrylist',
        component: lazy(()=>import ('@/views/purchase-master/countryMaster'))
    },
    {
        key: 'purchaseMenu.countrylist',
        path: '/addcountry',
        component: lazy(()=>import('@/views/purchase-master/newCountry'))
    },
    {
        key: 'purchaseMenu.statelist',
        path: '/statelist',
        component: lazy(()=>import('@/views/purchase-master/stateMaster'))
    },
    {
        key: 'purchaseMenu.statelist',
        path: '/addstate',
        component: lazy(()=>import('@/views/purchase-master/newState'))
    },
    {
        key: 'purchaseMenu.districtlist',
        path: '/districtlist',
        component: lazy(()=>import('@/views/purchase-master/districtMaster'))        
    },
    {
        key: 'purchaseMenu.districtlist',
        path: '/adddistrict',
        component: lazy(()=>import('@/views/purchase-master/newDistrict'))
    },
    {
        key: 'purchaseMenu.mainlist',
        path: '/mainlist',
        component: lazy(()=>import('@/views/purchase-master/mainGroup'))
    },
    {
        key: 'purchaseMenu.mainlist',
        path: '/addmain',
        component: lazy(()=>import('@/views/purchase-master/newMain'))
    },
    {
        key: 'purchaseMenu.sublist',
        path: '/sublist',
        component: lazy(()=>import('@/views/purchase-master/subGroup'))
    },
    {
        key: 'purchaseMenu.sublist',
        path: '/addsub',
        component: lazy(()=>import('@/views/purchase-master/newSub'))
    },
    {
        key: 'purchaseMenu.godown',
        path: '/godown',
        component: lazy(()=> import('@/views/purchase-master/goDown'))
    },
    {
        key: 'purchaseMenu.godown',
        path: '/addgodown',
        component: lazy(()=> import('@/views/purchase-master/newGoDown'))
    },
    {
        key: 'purchaseMenu.measure',
        path: '/measure',
        component: lazy(()=> import('@/views/purchase-master/measuringUnit'))
    },
    {
        key: 'purchaseMenu.measure',
        path: '/addunit',
        component: lazy(()=>import('@/views/purchase-master/newUnit'))
    },
    {
        key: 'purchaseMenu.order',
        path: '/order',
        component: lazy(()=>import('@/views/purchase-master/purchaseOrderType'))
    },
    {
        key: 'purchaseMenu.order',
        path: '/addorder',
        component: lazy(()=>import('@/views/purchase-master/newPurchase'))
    },
    {
        key: 'purchaseMenu.terms',
        path: '/termslist',
        component: lazy(()=>import('@/views/purchase-master/termsConditions'))
    },
    {
        key: 'purchase.terms',
        path: '/addterms',
        component: lazy(()=>import('@/views/purchase-master/newTerms'))
    },
    {
        key: 'purchase.setting',
        path: '/settinglist',
        component: lazy(()=>import('@/views/purchase-master/glSetting'))
    },
    {
        key: 'purchase.setting',
        path: '/addsetting',
        component: lazy(()=>import('@/views/purchase-master/newSetting'))
    }

]