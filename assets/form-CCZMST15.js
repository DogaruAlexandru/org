import{r as a,j as e}from"./index-5xEGA0g2.js";function h(){const[s,t]=a.useState("no"),[c,m]=a.useState("no"),[o,i]=a.useState("no"),r=n=>{t(n.target.value)},l=n=>{m(n.target.value)},d=n=>{i(n.target.value)};return e.jsx("div",{className:`my-bg-band1 shadow-lg px-4 py-8 rounded-lg border border-my_dark \r
      font-dancing-script text-my_dark text-center font-bold text-3xl`,children:e.jsxs("form",{action:"#",method:"POST",className:"flex flex-col place-content-center text-center",children:[e.jsxs("div",{className:"flex flex-col items-center mb-4",children:[e.jsx("label",{htmlFor:"name",className:"w-full",children:"Full Name"}),e.jsx("input",{id:"name",name:"name",type:"text",autoComplete:"name",required:!0,className:`border-my_dark rounded-lg shadow-sm p-1.5 w-1/2 hover:scale-110 duration-100\r
            focus:outline-none focus:border-accent focus:ring focus:ring-accent\r
            text-2xl`})]}),e.jsxs("div",{className:"flex flex-col items-center mb-4",children:[e.jsx("label",{htmlFor:"coming",className:"w-full",children:"Coming"}),e.jsxs("div",{className:"flex justify-center w-full",children:[e.jsxs("div",{className:"me-4 hover:scale-125 duration-100",children:[e.jsx("label",{htmlFor:"comingYes",className:"mr-2",children:"Yes"}),e.jsx("input",{id:"comingYes",name:"coming",type:"radio",value:"yes",checked:s==="yes",onChange:r,className:`border-my_dark text-accent rounded-md w-6 h-6 shadow-sm \r
                focus:outline-none focus:border-accent focus:ring focus:ring-accent`})]}),e.jsxs("div",{className:"hover:scale-125 duration-100",children:[e.jsx("label",{htmlFor:"comingNo",className:"mr-2",children:"No"}),e.jsx("input",{id:"comingNo",name:"coming",type:"radio",value:"no",checked:s==="no",onChange:r,className:`border-my_dark text-accent rounded-md w-6 h-6 shadow-sm \r
                focus:outline-none focus:border-accent focus:ring focus:ring-accent`})]})]})]}),s==="yes"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col items-center mb-4",children:[e.jsx("label",{htmlFor:"accompanied",className:"w-full",children:"Accompanied"}),e.jsxs("div",{className:"flex justify-center w-full",children:[e.jsxs("div",{className:"me-4 hover:scale-125 duration-100",children:[e.jsx("label",{htmlFor:"accompaniedYes",className:"mr-2",children:"Yes"}),e.jsx("input",{id:"accompaniedYes",name:"accompanied",type:"radio",value:"yes",checked:c==="yes",onChange:l,className:`border-my_dark text-accent rounded-md w-6 h-6 shadow-sm \r
                    focus:outline-none focus:border-accent focus:ring focus:ring-accent`})]}),e.jsxs("div",{className:"hover:scale-125 duration-100",children:[e.jsx("label",{htmlFor:"accompaniedNo",className:"mr-2",children:"No"}),e.jsx("input",{id:"accompaniedNo",name:"accompanied",type:"radio",value:"no",checked:c==="no",onChange:l,className:`border-my_dark text-accent rounded-md w-6 h-6 shadow-sm \r
                    focus:outline-none focus:border-accent focus:ring focus:ring-accent`})]})]})]}),e.jsxs("div",{className:"flex flex-col items-center mb-4",children:[e.jsx("label",{htmlFor:"menu",className:"w-full",children:"Vegan menu"}),e.jsxs("div",{className:"flex justify-center w-full",children:[e.jsxs("div",{className:"me-4 hover:scale-125 duration-100",children:[e.jsx("label",{htmlFor:"menuYes",className:"mr-2",children:"Yes"}),e.jsx("input",{id:"menuYes",name:"menu",type:"radio",value:"yes",checked:o==="yes",onChange:d,className:`border-my_dark text-accent rounded-md w-6 h-6 shadow-sm \r
                    focus:outline-none focus:border-accent focus:ring focus:ring-accent`})]}),e.jsxs("div",{className:"hover:scale-125 duration-100",children:[e.jsx("label",{htmlFor:"menuNo",className:"mr-2",children:"No"}),e.jsx("input",{id:"menuNo",name:"menu",type:"radio",value:"no",checked:o==="no",onChange:d,className:`border-my_dark text-accent rounded-md w-6 h-6 shadow-sm \r
                    focus:outline-none focus:border-accent focus:ring focus:ring-accent`})]})]})]})]}),e.jsx("div",{className:"flex justify-center mt-6",children:e.jsx("button",{type:"submit",className:`my-bg-band2 px-10 py-1 rounded-xl border border-my_dark shadow-lg\r
            hover-bg-band2 hover:text-white hover:scale-110 duration-100`,children:"Send"})})]})})}export{h as default};
