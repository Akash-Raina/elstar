import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'

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
        meta:{
            header: 'Category'
        }
    },
    {
        key:'shopMenu.item2',
        path: '/subcategory/:id',
        component: lazy(()=> import('@/views/shop/SubCategory')),
        authority: [],
        meta:{
            header: 'Sub Category'
        }
    }

]