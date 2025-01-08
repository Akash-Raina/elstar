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
        key: 'purchaseMenu.terms',
        path: '/addterms',
        component: lazy(()=>import('@/views/purchase-master/newTerms'))
    },
    {
        key: 'purchaseMenu.setting',
        path: '/settinglist',
        component: lazy(()=>import('@/views/purchase-master/glSetting'))
    },
    {
        key: 'purchaseMenu.setting',
        path: '/addsetting',
        component: lazy(()=>import('@/views/purchase-master/newSetting'))
    },
    {
        key: 'purchaseMenu.supplier',
        path: '/supplierlist',
        component: lazy(()=>import('@/views/purchase-master/supplierType'))
    },
    {
        key: 'purchaseMenu.supplier',
        path: '/addsupplier',
        component: lazy(()=>import('@/views/purchase-master/newSupplier'))
    },
    {
        key: 'purchaseMenu.tender',
        path: '/tenderlist',
        component: lazy(()=>import('@/views/purchase-master/tenderType'))
    },
    {
        key: 'purchaseMenu.tender',
        path: '/addtender',
        component: lazy(()=>import('@/views/purchase-master/newTender'))
    },
    {
        key: 'purchaseMenu.issue',
        path: '/issuelist',
        component: lazy(()=>import('@/views/purchase-master/issueType'))
    },
    {
        key: 'purchaseMenu.issue',
        path: '/addissue',
        component: lazy(()=>import('@/views/purchase-master/newIssue'))
    },
    {
        key: 'purchaseMenu.item',
        path: '/itemlist',
        component: lazy(()=>import('@/views/purchase-master/itemMaster'))
    },
    {
        key: 'purchaseMenu.suppliermaster',
        path: '/suppliermasterlist',
        component: lazy(()=>import('@/views/purchase-master/supplierMaster'))
    },
    {
        key: 'purchaseMenu.challantype',
        path: '/challantype',
        component: lazy(()=>import('@/views/purchase-master/deliveryChallanType'))
    },
    {   
        key: 'purchaseMenu.challantype',
        path: '/addchallan',
        component: lazy(()=>import('@/views/purchase-master/newDeliveryChallan'))
    },
    {
        key: 'purchaseMenu.tarrifheading',
        path: '/tarrifheading',
        component: lazy(()=>import('@/views/purchase-master/tarrifHeading'))
    },
    {
        key: 'purchaseMenu.tarrifheading',
        path: '/addtarrif',
        component: lazy(()=>import('@/views/purchase-master/newTarrif'))
    },
    {
        key: 'purchaseMenu.locationcategory',
        path: '/locationcategory',
        component: lazy(()=>import('@/views/purchase-master/locationCategoryMaster'))
    },
    {
        key: 'purchaseMenu.locationcategory',
        path: '/addlocation',
        component: lazy(()=>import('@/views/purchase-master/newLocationCategory'))
    },
    {
        key: 'purchaseMenu.locationmaster',
        path: '/locationmaster',
        component: lazy(()=>import('@/views/purchase-master/locationMaster'))
    },
    {
        key: 'purchaseMenu.locationmaster',
        path: '/addlocationmaster',
        component: lazy(()=>import('@/views/purchase-master/newLocationMaster'))
    },
    {
        key: 'purchaseMenu.workordertypes',
        path: '/workordertypes',
        component: lazy(()=>import('@/views/purchase-master/workOrderTypes'))
    },
    {
        key: 'purchaseMenu.workordertypes',
        path: '/addworkordertypes',
        component: lazy(()=>import('@/views/purchase-master/newWorkTypes'))
    },
    {
        key: 'purchaseMenu.paymentterms',
        path: '/paymentterms',
        component: lazy(()=>import('@/views/purchase-master/paymentTermTypeMaster'))
    },
    {
        key: 'purchaseMenu.paymentterms',
        path: '/addpaymentterms',
        component: lazy(()=>import('@/views/purchase-master/newPaymentTerms'))
    },
    {
        key: 'purchaseMenu.workordertype',
        path: '/workordertype',
        component: lazy(()=>import('@/views/purchase-master/workOrderType'))
    },
    {
        key: 'purchaseMenu.workordertype',
        path: '/addworkordertype',
        component:lazy(()=>import('@/views/purchase-master/newWorkType'))
    },
    {
        key: 'purchaseMenu.payterms',
        path: '/payterms',
        component: lazy(()=>import('@/views/purchase-master/payTermsTypeMaster'))
    },
    {
        key: 'purchaseMenu.payterms',
        path: '/addpayterms',
        component: lazy(()=>import('@/views/purchase-master/newPayTerms'))
    },
    {
        key: 'purchaseMenu.supplierMaster',
        path: '/addsuppliermaster',
        component: lazy(()=>import('@/views/purchase-master/newSupplierMaster'))
    },
    {
        key: 'purchaseMenu.item',
        path: '/additem',
        component: lazy(()=>import('@/views/purchase-master/newItemMaster'))
    },
    {
        key: 'salesMaster.item1',
        path: '/salesinvoice',
        component: lazy(()=>import('@/views/sales-master/salesInvoice'))
    },
    {
        key: 'salesMaster.item1',
        path: '/addsalesinvoice',
        component: lazy(()=>import('@/views/sales-master/newSalesInvoice'))
    },
    {
        key: 'salesMaster.item2',
        path: '/molasseslocalsetting',
        component: lazy(()=>import('@/views/sales-master/molassesLocalSetting'))
    },
    {
        key: 'salesMaster.item2',
        path: '/addmolasseslocal',
        component: lazy(()=>import('@/views/sales-master/newMolassesLocal'))
    },
    {
        key: 'salesMaster.item3',
        path: '/customermaster',
        component: lazy(()=>import('@/views/sales-master/customerMaster'))
    },
    {
        key: 'salesMaster.item3',
        path: '/addcustomermaster',
        component: lazy(()=>import('@/views/sales-master/newCustomerMaster'))
    },
    {
        key: 'salesMaster.item4',
        path:'/releaseorder',
        component: lazy(()=>import('@/views/sales-master/releaseorder'))
    },
    {
        key: 'salesMaster.item4',
        path: '/addreleaseorder',
        component: lazy(()=>import('@/views/sales-master/newReleaseOrder'))
    },
    {
        key: 'salesMaster.item5',
        path: '/currency',
        component: lazy(()=>import('@/views/sales-master/currency'))
    },
    {
        key: 'salesMaster.item5',
        path: '/addcurrency',
        component: lazy(()=>import('@/views/sales-master/newCurrency'))
    },
    {
        key: 'salesMaster.item6',
        path: '/molassescustomersetting',
        component: lazy(()=>import('@/views/sales-master/molassesCustomerSetting'))
    }

]