import jsPDF from 'jspdf'
export function gerarPdfAgenda(){
  const doc = new jsPDF()
  doc.text('Relatório da Agenda', 10, 10)
  doc.save('agenda.pdf')
}