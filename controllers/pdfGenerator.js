const { PDFDocument, rgb } = require('pdf-lib');

async function generatePDF(eleicao, dataHoraAbertura, totalEleitores, totalVotos) {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);

    page.drawText('Relatório de Inicialização da Eleição', {
        x: 50,
        y: 750,
        size: 20,
        color: rgb(0, 0, 0)
    });

    page.drawText(`Eleição: ${eleicao}`, { x: 50, y: 700, size: 15 });
    page.drawText(`Data e Hora de Abertura: ${dataHoraAbertura}`, { x: 50, y: 650, size: 15 });
    page.drawText(`Total de Eleitores: ${totalEleitores}`, { x: 50, y: 600, size: 15 });
    page.drawText(`Total de Votos: ${totalVotos}`, { x: 50, y: 550, size: 15 });

    const pdfBytes = await pdfDoc.save();
    console.log(`PDF gerado com ${pdfBytes.length} bytes`);
    return pdfBytes;
}

module.exports = { generatePDF };