import jsPDF from 'jspdf'
export function gerarPdfCliente(nome){
  const doc = new jsPDF()
  doc.text(`Relatório do Cliente: ${nome}`, 10, 10)
  doc.save(`cliente-${nome}.pdf`)
}