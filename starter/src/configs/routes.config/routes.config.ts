import { lazy } from 'react'
import authRoute from './authRoute'
import type { Routes } from '@/@types/routes'
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
    },
    {
        key: 'salesMaster.item6',
        path: '/addmolassescustomer',
        component: lazy(()=>import('@/views/sales-master/newMolassesCustomer'))
    },
    {
        key: 'salesMaster.item7',
        path: '/districtmaster',
        component: lazy(()=>import('@/views/sales-master/districtMaster'))
    },
    {
        key: 'salesMaster.item7',
        path: '/adddistrictmaster',
        component: lazy(()=>import('@/views/sales-master/newDistrictMaster'))
    },
    {
        key: 'salesMaster.item8',
        path: '/bagassecustomer',
        component: lazy(()=>import('@/views/sales-master/balasseSaleSetting'))
    },
    {
        key: 'salesMaster.item8',
        path: '/addbalassecustomer',
        component: lazy(()=>import('@/views/sales-master/newBalasseSale'))
    },
    {
        key: 'salesMaster.godown',
        path: '/godown',
        component: lazy(()=>import('@/views/sales-master/godown'))
    },
    {
        key: 'salesMaster.godown',
        path: '/addgodown',
        component: lazy(()=>import("@/views/sales-master/newGodown"))
    },
    {
        key: 'salesMaster.order',
        path: '/ordertype',
        component: lazy(()=>import('@/views/sales-master/orderAcceptanceType'))
    },

    {
        key: 'salesMaster.order',
        path: '/addordertype',
        component: lazy(()=>import('@/views/sales-master/newOrderType'))
    },
    {
        key: 'salesMaster.country',
        path: '/country',
        component: lazy(()=>import('@/views/sales-master/country'))
    },
    {
        key: 'salesMaster.country',
        path: '/addnewcountry',
        component: lazy(()=>import('@/views/sales-master/newCountry'))
    },
    {
        key: 'salesMaster.state',
        path: '/state',
        component: lazy(()=>import('@/views/sales-master/stateMaster'))
    },
    {
        key: 'salesMaster.state',
        path: '/addnewstate',
        component: lazy(()=>import('@/views/sales-master/newStateMaster'))
    },
    {
        key: 'salesMaster.shippingport',
        path: '/shippingport',
        component: lazy(()=>import('@/views/sales-master/shippingPort'))
    },
    {
        key: 'salesMaster.shippingport',
        path: '/addnewport',
        component: lazy(()=>import('@/views/sales-master/newShippingPort'))
    },
    {
        key: 'salesMaster.pressmudsetting',
        path: '/pressmudsetting',
        component: lazy(()=>import('@/views/sales-master/pressmudsetting'))
    },
    {
        key: 'salesMaster.pressmudsetting',
        path: '/addpressmudsetting',
        component: lazy(()=>import('@/views/sales-master/newPressmudSetting'))
    },
    {
        key: 'salesMaster.itemmaster',
        path: '/itemmaster',
        component: lazy(()=>import('@/views/sales-master/itemMaster'))
    },
    {
        key: 'salesMaster.itemmaster',
        path: '/addnewitem',
        component: lazy(()=>import('@/views/sales-master/newItemMaster'))
    },
    {
        key: 'salesMaster.producttype',
        path: '/producttype',
        component: lazy(()=>import('@/views/sales-master/productType'))
    },
    {
        key: 'salesMaster.producttype',
        path: '/addproducttype',
        component: lazy(()=>import('@/views/sales-master/newProductType'))
    },
    {
        key: 'salesMaster.product',
        path: '/product',
        component: lazy(()=>import('@/views/sales-master/products'))
    },
    {
        key: 'salesMaster.product',
        path: '/addnewproduct',
        component: lazy(()=>import('@/views/sales-master/newProduct'))
    },
    {
        key: 'salesMaster.items',
        path: '/items',
        component: lazy(()=>import('@/views/sales-master/items'))
    },
    {
        key: 'salesMaster.items',
        path: '/addsubitem',
        component: lazy(()=>import('@/views/sales-master/newItem'))
    },
    {
        key: 'payroleMaster.employeemaster',
        path: '/employeemaster',
        component: lazy(()=>import('@/views/payrole-master/employeeMaster'))
    },
    {
        key: 'payroleMaster.employeemaster',
        path: '/addemployeemaster',
        component: lazy(()=>import('@/views/payrole-master/newEmployeeMaster'))
    },
    {
        key: 'payroleMaster.employeetype',
        path: '/employeetype',
        component: lazy(()=>import('@/views/payrole-master/employeetype'))
    },
    {
        key: 'payroleMaster.employeetype',
        path: '/addemployeetype',
        component: lazy(()=>import('@/views/payrole-master/newEmployeeType'))
    },
    {
        key: 'payroleMaster.designation',
        path: '/designation',
        component: lazy(()=>import('@/views/payrole-master/designation'))
    },
    {
        key:'payroleMaster.designation',
        path: '/adddesignation',
        component: lazy(()=>import('@/views/payrole-master/newDesignation'))
    },
    {
        key:'payroleMaster.grade',
        path:'/grade',
        component: lazy(()=>import('@/views/payrole-master/grade'))
    },
    {
        key:'payroleMaster.grade',
        path:'/addgrade',
        component: lazy(()=>import('@/views/payrole-master/newGrade'))
    },
    {
        key: 'payroleMaster.department',
        path: '/department',
        component: lazy(()=>import('@/views/payrole-master/department'))
    },
    {
        key: 'payroleMaster.department',
        path: '/adddepartment',
        component: lazy(()=>import('@/views/payrole-master/newDepartment'))
    },
    {
        key: 'payroleMaster.section',
        path: '/section',
        component: lazy(()=>import('@/views/payrole-master/section'))
    },
    {
        key: 'payroleMaster.section',
        path: '/addsection',
        component: lazy(()=>import('@/views/payrole-master/newSection'))
    },
    {
        key: 'payroleMaster.bankbranchmaster',
        path: '/bankbranchmaster',
        component: lazy(()=>import('@/views/payrole-master/bankbranchmaster'))
    },
    {
        key: 'payroleMaster.bankbranchmaster',
        path: '/addbankbranchmaster',
        component: lazy(()=>import('@/views/payrole-master/newBankBranchMaster'))
    },
    {
        key: 'payroleMaster.bank',
        path: '/bank',
        component: lazy(()=>import('@/views/payrole-master/bank'))
    },
    {
        key: 'payroleMaster.bank',
        path: '/addbank',
        component: lazy(()=>import('@/views/payrole-master/newBank'))
    },
    {
        key: 'payroleMaster.deduction',
        path: '/deductionheadandslab',
        component: lazy(()=>import('@/views/payrole-master/deductionheadandslab'))
    },
    {
        key: 'payroleMaster.deduction',
        path: '/adddeductionheadandslab',
        component: lazy(()=>import('@/views/payrole-master/newDeductionHeadandSlap'))
    },
    {
        key: 'payroleMaster.basicslab',
        path: '/basicslab',
        component: lazy(()=>import('@/views/payrole-master/basicSlab'))
    },
    {
        key: 'payroleMaster.basicslab',
        path: '/addbasicslab',
        component: lazy(()=>import('@/views/payrole-master/newBasicSlab'))
    },
    {
        key: 'payroleMaster.overtimetype',
        path: '/overtimetype',
        component: lazy(()=>import('@/views/payrole-master/overTimeType'))
    },
    {
        key: 'payroleMaster.overtimetype',
        path: '/addovertimetype',
        component: lazy(()=>import('@/views/payrole-master/newOverTimeType'))
    },
    {
        key: 'payroleMaster.salaryhead',
        path: '/salaryhead',
        component: lazy(()=>import('@/views/payrole-master/salaryhead'))
    },
    {
        key: 'payroleMaster.salaryhead',
        path: '/addsalaryhead',
        component: lazy(()=>import('@/views/payrole-master/newSalaryHead'))
    },
    {
        key: 'payroleMaster.rtgssetting',
        path: '/rtgssetting',
        component: lazy(()=>import('@/views/payrole-master/rtgsSetting'))
    },
    {
        key: 'payroleMaster.rtgssetting',
        path: '/addrtgssetting',
        component: lazy(()=>import('@/views/payrole-master/newRtgsSetting'))
    },
    {
        key: 'payroleMaster.plsanctionsetting',
        path: '/plsanctionsetting',
        component: lazy(()=>import('@/views/payrole-master/plSanctionSetting'))
    },
    {
        key: 'payroleMaster.plsanctionsetting',
        path: '/addplsanctionsetting',
        component: lazy(()=>import('@/views/payrole-master/newPlSanctionSetting'))
    },
    {
        key: 'payroleMaster.otherincomehead',
        path: '/otherincomehead',
        component: lazy(()=>import('@/views/payrole-master/otherIncomeHead'))
    },
    {
        key: 'payroleMaster.otherincomehead',
        path: '/addotherincomehead',
        component: lazy(()=>import('@/views/payrole-master/newOtherIncomeHead'))
    },
    {
        key: 'payroleMaster.castmaster',
        path: '/castmaster',
        component: lazy(()=>import('@/views/payrole-master/castMaster'))
    },
    {
        key: 'payroleMaster.castmaster',
        path: '/addcastmaster',
        component: lazy(()=>import('@/views/payrole-master/newCastMaster'))
    },
    {
        key: 'payroleMaster.holidaymaster',
        path: '/holidaymaster',
        component: lazy(()=>import('@/views/payrole-master/holidayMaster'))
    },
    {
        key: 'payroleMaster.holidaymaster',
        path: '/addholidaymaster',
        component: lazy(()=>import('@/views/payrole-master/newHolidayMaster'))
    },
    {
        key: 'payroleMaster.openingleavebalance',
        path: '/openingleavebalance',
        component: lazy(()=>import('@/views/payrole-master/openingLeaveBalance'))
    },
    {
        key: 'payroleMaster.openingleavebalance',
        path: '/addopeningleave',
        component: lazy(()=>import('@/views/payrole-master/newOpeningLeaveBalance'))
    },
    {
        key: 'payroleMaster.reason',
        path: '/reason',
        component: lazy(()=>import('@/views/payrole-master/reason'))
    },
    {
        key: 'payroleMaster.reason',
        path: '/addreason',
        component: lazy(()=>import('@/views/payrole-master/newReason'))
    },
    {
        key: 'payroleMaster.SalaryStatusMaster',
        path: '/salarystatus',
        component: lazy(()=>import('@/views/payrole-master/salaryStatusMaster'))
    },
    {
        key: 'payroleMaster.SalaryStatusMaster',
        path: '/addsalarystatus',
        component: lazy(()=>import('@/views/payrole-master/newSalaryStatusMaster'))
    },
    {
        key: 'payroleMaster.from16setting',
        path: '/from16setting',
        component: lazy(()=>import('@/views/payrole-master/from16Setting'))
    },
    {
        key: 'payroleMaster.from16setting',
        path: '/addfrom16setting',
        component: lazy(()=>import('@/views/payrole-master/newForm16Setting'))
    },
    {
        key: 'payroleMaster.systemsetting',
        path: '/systemsetting',
        component: lazy(()=>import('@/views/payrole-master/systemSetting'))
    },
    {
        key: 'payroleMaster.systemsetting',
        path: '/addsystemsetting',
        component: lazy(()=>import('@/views/payrole-master/newSystemSetting'))
    },
    {
        key: 'payroleMaster.leavetype',
        path: '/leavetype',
        component: lazy(()=>import('@/views/payrole-master/leaveType'))
    },
    {
        key: 'payroleMaster.leavetype',
        path: '/addleavetype',
        component: lazy(()=>import('@/views/payrole-master/newLeaveType'))
    }
] 