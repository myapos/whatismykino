export const headerTitle = "headerTitle";

export const intro_msg = `This web application aims to provide some tools that we would be useful in data processing for keno game of OPAP 
(Greek lottery). Data are being retrieved live from OPAP REST API points. Basic usage is that you can enter the specific time frame of the 
dates that you want to calculate data for and then the values will be ordered due to occurences. Also you can select the number of draws 
to be used in the selected time frame.Further more, graphs that are displaying the number of occurences of each number are generated. More 
information about OPAP Web services can be found in the links section.

Happy browsing`;

export const intro_subtitle = "Introduction";
export const intro_section_footer = "Happy browsing";

export const graphs_msg = `Below you can find graphs about the kino occurences and the trend of kino lottery`;

export const graphs_subtitle = "Graphs";
export const graphs_section_footer = "Kino statistics";

export const links_subtitle = "Links";
export const links_msg =
  "Below you can find some interesting links that were used during the development of this project";
export const links_section_footer = "links_section_footer";
export const links = [
  {
    descr: "OPAP web services",
    link: "https://www.opap.gr/web-services",
    id: 1
  },
  {
    descr: "OPAP web services",
    link: "https://www.opap.gr/web-services",
    id: 2
  },
  {
    descr: "OPAP web services",
    link: "https://www.opap.gr/web-services",
    id: 3
  }
];

export const about_msg = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, `;

export const about_subtitle = "About";
export const about_section_footer = "about_section_footer";

export const mapGoToElement = {
  Graphs: "Graphs",
  Introduction: "Introduction",
  Links: "Links"
  // About: "About"
};

let point = "";

console.log("USAGE:", process.env.USAGE);

if (process.env.USAGE === "dev") {
  point = "http://localhost:2345/getKinos";
} else if (process.env.USAGE === "prod") {
  point = "https://serene-dusk-60425.herokuapp.com/getKinos"; // url of online server in kinoproxy heroku app
}

export const localServerApi = point;

export const availableSelectValues = {
  generateValues: length => {
    const available = [];
    available.push({
      value: "ALL",
      label: "ALL"
    });
    const limit = 200;

    for (let i = 5; i <= length; i = i + 5) {
      // console.log('i:', i);
      available.push({
        value: i,
        label: i
      });
    }
    return available;
  }
};

export const widthPlot = 600;
export const heightPlot = 300;
