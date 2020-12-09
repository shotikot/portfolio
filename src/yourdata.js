// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import me from "./images/me.jpg";

// Social Icon
import githubIcon from "./images/github.svg"
import dribbbleIcon from "./images/stack.png"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Shotiko",
  headerTagline: [
    //Line 1 For Header
    "Building digital",
    //Line 2 For Header
    "products, brands,",
    //Line 3 For Header
    "and experience",
  ],
  //   Header Paragraph
  headerParagraph:
    "I'm Full-Stack MERN developer from Georgia (country in europe). I've been crafting spectacular websites for three years.",

  //Contact Email
  contactEmail: "shotikotopchishvili0@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Hirest", //Project Title - Add Your Project Title Here
      para:
        "Hirest is a innovative job platform with some amazing features. One of them is online interview and CV bank.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://hirest.ge/",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Gold", //Project Title - Add Your Project Title Here
      para:
        "This is a B2B website with B2C support. It has management system and user-to-business side same time.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://goldi.ge/",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Pink Travel", //Project Title - Add Your Project Title Here
      para: "This is catalogue type tourism oritented company website.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://pinktravel.herokuapp.com/",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Beauty MS", //Project Title - Add Your Project Title Here
      para:
        "Beauty MS is a management system for beauty salons. It has some great features: salaries, records, history and etc. Username is demo, password is so too.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://demo-salon.herokuapp.com/",
    },
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "Portal", //Project Title - Add Your Project Title Here
      para: "Portal is a chatting platform which randomly matches two users", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://portalchat.herokuapp.com/",
    },
    {
      id: 6, //DO NOT CHANGE THIS (Please)😅
      title: "Slick", //Project Title - Add Your Project Title Here
      para: "This is a local business portfolio type website.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "https://shotikot.github.io/slick",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne: `Solution - driven Web Developer adept at
  contributing to highly collaborative work
  environment, finding solutions and determining
  customer satisfaction. Proven experience
  developing consumer-focused websites using
  HTML, CSS, NODEJS and REACTJS . Built products for
  desktop and mobile device users over 3+ years,
  meeting highest standards for web design, user
  experience, best practices and speed. Designed
  and developed web applications across multiple
  APIs, third-party integrations and databases.`,
  aboutImage:
    me,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: htmlIcon,
      para:
        "HTML5 is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard.",
    },
    {
      id: 2,
      img: cssIcon,
      para:
        "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
    },
    {
      id: 3,
      img: jsIcon,
      para:
        "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
    },
    {
      id: 4,
      img: reactIcon,
      para:
        "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
    },
    {
      id: 5,
      img: designIcon,
      para:
        "User interface design or user interface engineering is the design of user interfaces for machines and software, such as computers, home appliances, mobile devices, and other electronic devices, with the focus on maximizing usability and the user experience.",
    },
    {
      id: 6,
      img: codeIcon,
      para:
        "Web development is the work involved in developing a Web site for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications, electronic businesses, and social network services.",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  // promotionHeading: "Heading",
  // promotionPara: `Solution - driven Web Developer adept at
  //   contributing to highly collaborative work
  //   environment, finding solutions and determining
  //   customer satisfaction. Proven experience
  //   developing consumer-focused websites using
  //   HTML, CSS, NODEJS and REACTJS . Built products for
  //   desktop and mobile device users over 3+ years,
  //   meeting highest standards for web design, user
  //   experience, best practices and speed. Designed
  //   and developed web applications across multiple
  //   APIs, third-party integrations and databases.`,
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/shotikot" },
    {
      img: dribbbleIcon,
      url: "https://stackoverflow.com/users/12597041/shotiko-topchishvili",
    },
  ],

  // End Contact Section ---------------
}