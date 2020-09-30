/**
 *  Main Menu Json
 */
export default [

    {
        "menu_title": "About ",
       
        "path": "/aboutus",
       
      },
  {
    "menu_title": "Contact",
    
    "path": "/contact",
   
  },
  {
    menu_title: "Services",
    type: "subMenu",
    path: "/",
    child_routes: [
      {
        path: "/handshakedeal",
        menu_title: "Hand Shake Deal",
        icon: "arrow_right_alt",
        child_routes: null
        
      },
      {
          path: "/jumpin",
          menu_title: "Existing Project Help",
          icon: "arrow_right_alt",
          child_routes: null,
        },
        {
                                
            path: "/fullproject",
            menu_title: "Full Project Help",
            icon: "arrow_right_alt",
            child_routes: null,
          },                 
      {
        path: "/digitalcontent",
        menu_title: "Content Creation",
        icon: "arrow_right_alt",
        child_routes: null,
      },
      {
        path: "/projectmanagement",
        menu_title: "Project Management",
        icon: "arrow_right_alt",
        child_routes: null,
      },
     
    ],
    
  },
];
