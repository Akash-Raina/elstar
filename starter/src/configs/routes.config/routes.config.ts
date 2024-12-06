import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'
import { components } from 'react-select'
import path from 'path'

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
    }

]