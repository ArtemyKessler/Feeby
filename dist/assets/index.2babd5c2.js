import{s as l,j as s,a as e,R as p,b as m,$ as u,A as f,L as x,c as g,r as h}from"./vendor.6542c000.js";const b=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}};b();const d=({label:o,id:n,type:a,placeholder:r})=>s(y,{children:[e("label",{htmlFor:n,children:o}),e(a==="textarea"?"textarea":"input",{id:n,name:n,type:a!=="textarea"?a:void 0,placeholder:r})]}),y=l.fieldset`
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
`,w=()=>{const[o,n]=p.useState(null);return s(S,{children:[e(v,{htmlFor:"images",children:"Choose images"}),e(m,{id:"images",name:"images",multiple:!0,value:o||void 0,onChange:r=>{console.log("newValue",r),n(r)}}),e(F,{children:o&&(o==null?void 0:o.map(r=>{const t=URL.createObjectURL(r);return e("img",{width:"100%",src:t||"",alt:"preview"},r.name)}))})]})},S=l.div`
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,F=l.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
`,v=l.label`
  color: #141c24;
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 8px;
`,k=()=>e(C,{type:"submit",children:"Submit"}),C=l.button`
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
`,z=({onSubmit:o})=>s(L,{onSubmit:a=>{a.preventDefault();const r=new FormData(a.currentTarget);o(r)},children:[s("header",{className:"form-header",children:[e("h1",{children:"Report an issue"}),e("button",{className:"close-button","aria-label":"Close form",children:e("img",{src:"https://cdn.builder.io/api/v1/image/assets/TEMP/8ec010c5c1de94aa5c29420619e3bd3926a552243202d57c32b533cec1c45d31?placeholderIfAbsent=true&apiKey=a552dda26a534b4199e019b86be48e11",alt:"Close"})})]}),s("main",{children:[e(d,{label:"First and last name",id:"name",type:"text",placeholder:"Name"}),e(d,{label:"Your phone number",id:"phone",type:"tel",placeholder:"Phone number"}),e(d,{label:"Feedback",id:"feedback",type:"textarea"}),e(w,{}),e(k,{})]})]}),L=l.form`
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
`,D=u`
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

  ${({theme:o})=>f`
    body {
      font-family: ${o.font.family};
      font-size: ${o.font.sizes.medium};
      background-color: #f7fafa;
    }
  `}
`;var O={grid:{container:"950px",gutter:"16px"},font:{family:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",regular:400,medium:500,semiBold:600,sizes:{xsmall:"12px",small:"14px",medium:"16px",large:"20px",xlarge:"24px",xxlarge:"32px",huge:"40px"}},colors:{black:"#000000",disable:"#DFDEDE",grey:"#707372",greyLight:"#F0ECFC",link:"#4D6EDB",white:"#FFFFFF"},spacings:{xxsmall:"4px",xsmall:"8px",small:"12px",medium:"16px",large:"24px",xlarge:"32px",xxlarge:"48px"},layers:{base:10,menu:20,overlay:30,modal:40,alwaysOnTop:50},transition:{default:"0.3s ease-in-out",fast:"0.1s ease-in-out"}};function E(){return s(x,{theme:O,children:[e(D,{}),e(z,{onSubmit:n=>{n.forEach(a=>{console.log(a)})}})]})}g.render(e(h.exports.StrictMode,{children:e(E,{})}),document.getElementById("root"));
