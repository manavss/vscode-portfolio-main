import dictionary from "../../assets/images/dictionary.jpg";
import rest from "../../assets/images/rest.jpg";
import vscode from "../../assets/images/vscode.jpg";
import pizza from "../../assets/images/pizzapic.jpg";
export const project = [
  {
    title: "Vs-Code Portfolio",
    description:
      "A Vscode themed developer portfolio website built with React.js and TailwindCSS.",
    image: vscode,
    tags: ["react", "tailwind", "axios"],
    sourceCode: "https://github.com/manavss/vscode-portfolio-main",
    demo: "https://vscode-portfolio-main.vercel.app/",
  },
  {
    title: "Fast React Pizza",
    description:
      " This pizza store prioritize UX and clean UI, making it easy for customers to order pizzas.",
    image: pizza,
    tags: ["react", "tailwind", "redux"],
    sourceCode: "https://github.com/manavss/fast-react-pizza",
    demo: "https://fast-reactredux-pizza.netlify.app/",
  },
  {
    title: "Rest Countries",
    description:
      "A webapp that allows you to search for countries an thier details .",
    image: rest,
    tags: ["react", "tailwind", "context-api"],
    sourceCode: "https://github.com/manavss/restCountries",
    demo: "https://restcountrydetails.netlify.app/",
  },
  {
    title: "Dictionary App",
    description:
      "A Dictionary app that lets you search words in and bookmark them for future reference.",
    image: dictionary,
    tags: ["react", "axios", "material-ui"],
    sourceCode: "https://github.com/manavss/dictionary",
    demo: "https://mydictionarysearch.netlify.app/",
  },
];
