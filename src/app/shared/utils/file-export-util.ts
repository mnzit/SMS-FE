export const exportExcel = (data:any, fileName:any) => {
  let file = new Blob([data], {
    type: 'application/vnd.ms-excel'
  });
  let fileURL = URL.createObjectURL(file);
  let a = document.createElement('a');
  a.href = fileURL;
  a.target = '_blank';
  a.download = fileName + new Date() + '.xls';
  document.body.appendChild(a);
  a.click();
}
