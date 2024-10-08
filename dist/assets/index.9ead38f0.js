import{s,j as c,a as o,r as d,R as m,b as f,$ as x,A as g,L as h,c as b}from"./vendor.c91843c6.js";const y=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};y();const p=({label:a,id:n,type:r,placeholder:i})=>c(w,{children:[o("label",{htmlFor:n,children:a}),o(r==="textarea"?"textarea":"input",{id:n,name:n,type:r!=="textarea"?r:void 0,placeholder:i})]}),w=s.fieldset`
  border: none;
  padding: 12px 0;
  margin: 0;
  display: flex;
  flex-direction: column;

  label {
    color: #141c24;
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 8px;
  }

  input,
  textarea {
    border-radius: 12px;
    background-color: #f7fafa;
    border: 1px solid #d4dbe8;
    padding: 16px 15px;
    font-size: 16px;
    color: #405473;
    width: 100%;
  }

  textarea {
    min-height: 144px;
    resize: vertical;
  }
`,S=d.exports.forwardRef((a,n)=>{const[r,i]=m.useState(null);return d.exports.useImperativeHandle(n,()=>({reset(){console.log("RESET IMAGE"),i(null)}})),c(F,{children:[o(k,{htmlFor:"images",children:"Choose images"}),o(f,{id:"images",name:"images",multiple:!0,value:r||void 0,onChange:t=>{console.log("newValue",t),i(t)}}),o(v,{children:r&&(r==null?void 0:r.map(t=>{const l=URL.createObjectURL(t);return o("img",{width:"100%",src:l||"",alt:"preview"},t.name)}))})]})}),F=s.div`
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,v=s.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`,k=s.label`
  color: #141c24;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 8px;
`,R=()=>o(C,{type:"submit",children:"Submit"}),C=s.button`
  background-color: #f5c754;
  border: none;
  border-radius: 12px;
  color: #141c24;
  font-weight: 700;
  font-size: 16px;
  padding: 16px;
  width: 100%;
  margin-top: 17px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f3bd3a;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #141c24;
  }
`,z=({onSubmit:a})=>{const n=d.exports.useRef(null),r=d.exports.useRef();return c(E,{ref:n,onSubmit:e=>{var l,u;e.preventDefault();const t=new FormData(e.currentTarget);a(t),(l=n.current)==null||l.reset(),(u=r.current)==null||u.reset()},children:[c("header",{className:"form-header",children:[o("h1",{children:"Report an issue"}),o("button",{className:"close-button","aria-label":"Close form",children:o("img",{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/8ec010c5c1de94aa5c29420619e3bd3926a552243202d57c32b533cec1c45d31?placeholderIfAbsent=true&apiKey=a552dda26a534b4199e019b86be48e11",alt:"Close"})})]}),c("main",{children:[o(p,{label:"First and last name",id:"name",type:"text",placeholder:"Name"}),o(p,{label:"Your phone number",id:"phone",type:"tel",placeholder:"Phone number"}),o(p,{label:"Feedback",id:"feedback",type:"textarea"}),o(S,{ref:r}),o(R,{})]})]})},E=s.form`
  background-color: #f7fafa;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 844px;
  justify-content: space-between;

  .form-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 16px 8px;

    h1 {
      flex: 1;
      text-align: center;
      font: 700 18px/1 'Public Sans', sans-serif;
      color: #141c24;
    }

    .close-button {
      background: none;
      border: none;
      padding: 0;
      width: 24px;
      height: 24px;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 16px 16px;
  }
`,L=x`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({theme:a})=>g`
    body {
      font-family: ${a.font.family};
      font-size: ${a.font.sizes.medium};
      background-color: #f7fafa;
    }
  `}
`;var I={grid:{container:"950px",gutter:"16px"},font:{family:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",regular:400,medium:500,semiBold:600,sizes:{xsmall:"12px",small:"14px",medium:"16px",large:"20px",xlarge:"24px",xxlarge:"32px",huge:"40px"}},colors:{black:"#000000",disable:"#DFDEDE",grey:"#707372",greyLight:"#F0ECFC",link:"#4D6EDB",white:"#FFFFFF"},spacings:{xxsmall:"4px",xsmall:"8px",small:"12px",medium:"16px",large:"24px",xlarge:"32px",xxlarge:"48px"},layers:{base:10,menu:20,overlay:30,modal:40,alwaysOnTop:50},transition:{default:"0.3s ease-in-out",fast:"0.1s ease-in-out"}};function D(){return c(h,{theme:I,children:[o(L,{}),o(z,{onSubmit:n=>{n.forEach(r=>{console.log(r)})}})]})}b.render(o(d.exports.StrictMode,{children:o(D,{})}),document.getElementById("root"));
