export const generatePortfolioPDF = async (projectsData, singleProject = null) => {
  const pdfUrl = encodeURI('/NexAllience portfolio.pdf');
  const filename = 'NexAllience portfolio.pdf';

  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


