import { saveAs } from "file-saver";
import { sendList } from "./CategoryList/store";

type DataType = {
  data: string[];
  type: string
}

export const downloadCSV = async(data: DataType) => {

  try {
    const type = data.type
    const filename = `${type}list.csv`
    const response:any = await sendList(data);
    const csvText = await response; // Read response as text

    const blob = new Blob([csvText], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, filename)

} catch (error) {
    console.error('Error downloading CSV:', error);
}

};
