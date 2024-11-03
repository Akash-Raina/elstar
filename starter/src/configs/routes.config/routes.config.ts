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
        key: 'collapseMenu.item1',
        path: '/collapse-menu-product-list',
        component: lazy(() => import('@/views/sales/ProductList')),
        authority: [],
    },
    {
        key: 'collapseMenu.item2',
        path: '/collapse-menu-product-new',
        component: lazy(()=> import('@/views/sales/ProductNew')),
        authority: [],
        meta:{
            header: 'Add New Product'
        }
    },
    {
        key: 'collapseMenu.item3',
        path: '/collapse-menu-product-edit/:productId',
        component: lazy(()=> import('@/views/sales/ProductEdit')),
        authority: [],
        meta:{
            header: 'Edit Product'
        }
    }

]