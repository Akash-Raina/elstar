import { apiImportExcelCategory } from "@/services/ShopService";

export const importXLSX = async(file:File | null, type: string)=>{

    if (file) {
      try {
        const formData = new FormData();
        formData.append('file', file);
        if(type === 'category') formData.append('type', "category");
        if(type === 'subcategory') formData.append('type', "subcategory");
        if(type === 'product') formData.append('type', "product");
        const response = await apiImportExcelCategory(formData);
        if(response) return true;
      } catch (error) {
        console.error('Error importing data:', error);
      }
    }
}