export const headerTitle = 'headerTitle';

export const intro_msg = `This web application aims to provide some tools that we would be useful 
in data processing for keno game of OPAP (Greek lottery). Data are being retrieved live from OPAP 
REST API points.

Basic usage is that you can enter the specific time frame of the dates that you want to calculate 
data for and then the values will be ordered due to occurences. Also you can select the number of 
draws to be used in the selected time frame.Further more, graphs that are displaying the number of 
occurences of each number are generated. Finally, you can watch live results of keno game live. 
The results are being refreshed every 1 minute.

More information about OPAP Web services can be found in the next link: OPAP web services`;

export const intro_subtitle = 'Introduction';
export const intro_section_footer = 'Happy browsing';

export const graphs_msg = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type 
specimen book.It has survived not only five centuries, but also the leap into electronic 
typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release 
of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
software like Aldus PageMaker including versions of Lorem Ipsum`;

export const graphs_subtitle = 'Graphs';
export const graphs_section_footer = 'graphs_section_footer';

export const links_msg = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type 
specimen book.It has survived not only five centuries, but also the leap into electronic 
typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release 
of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
software like Aldus PageMaker including versions of Lorem Ipsum`;

export const links_subtitle = 'Links';
export const links_section_footer = 'links_section_footer';

export const about_msg = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type 
specimen book.It has survived not only five centuries, but also the leap into electronic 
typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release 
of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
software like Aldus PageMaker including versions of Lorem Ipsum`;

export const about_subtitle = 'About';
export const about_section_footer = 'about_section_footer';

export const mapGoToElement = {
  'Graphs': 'Graphs',
  'Introduction': 'Introduction',
  'Links': 'Links',
  'About': 'About',
};

export const localServerApi = 'http://localhost:2345/getKinos';

export const availableSelectValues = {
  generateValues: length => {
    const available = [];
    available.push({
      'value': 'ALL',
      'label': 'ALL',
    });
    const limit = 200;

    for (let i = 5; i <= length; i = i + 5) {
      // console.log('i:', i);
      available.push({
        'value': i,
        'label': i,
      });
    }
    return available;
  },
};

export const widthPlot = 600;
export const heightPlot = 300;
