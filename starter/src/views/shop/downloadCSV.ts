import Papa from "papaparse"
import {saveAs} from 'file-saver'

export const downloadCSV = (data: [], filename = 'data.csv') => {

  const csv = Papa.unparse(data);
  
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

  saveAs(blob, filename);
};
