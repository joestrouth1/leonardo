parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"vcci":[function(require,module,exports) {

},{}],"Focm":[function(require,module,exports) {
"use strict";function e(e){return r(e)||o(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function o(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function r(e){if(Array.isArray(e)){for(var t=0,o=new Array(e.length);t<e.length;t++)o[t]=e[t];return o}}require("./scss/colorinputs.scss"),require("./scss/charts.scss"),require("./scss/style.scss");var n,a,l=document.getElementById("bgField").value,c=document.getElementById("demoHeading"),d=document.getElementById("demoWrapper"),s=document.getElementById("userColor"),i=document.getElementById("userBg"),u=document.getElementById("ratio"),m=document.getElementById("colorOutput"),p=document.getElementById("mode"),g=document.getElementsByClassName("ratio-Field");function v(){w();var e=new URL(window.location),t=new URLSearchParams(e.search.slice(1));if(a=e.pathname,t.has("colorKeys")){var o=t.get("colorKeys").split(",");0==o[0]&&(o=["#707070"]);for(var r=0;r<o.length;r++)f(o[r])}if(t.has("base")&&(document.getElementById("bgField").value="#"+t.get("base")),t.has("ratios")){var n=t.get("ratios").split(",");0==(n=n.map(Number))[0]&&(n=[3,4.5]);for(var l=0;l<n.length;l++)y(n[l])}t.has("mode")?document.querySelector('select[name="mode"]').value=t.get("mode"):(y(3),y(4.5)),L()}function y(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#cacaca";if(null==t){var r=Math.max.apply(Math,e(ratioInputs));Math.min.apply(Math,e(ratioInputs));r<20&&(t=Number(r+1).toFixed(2)),21==r&&(t=Number(r-1).toFixed(2))}var n=document.getElementById("ratioInput-wrapper"),a=document.createElement("div"),l=document.getElementById("colorSlider-wrapper"),c=document.createElement("input"),d=B();a.className="ratio-Item",a.id=d+"-item";var s=document.createElement("span");s.className="ratio-Swatch",s.id=d+"-sw",s.style.backgroundColor=o;var i=document.createElement("input");i.className="spectrum-Textfield ratio-Field",i.type="number",i.min="-10",i.max="21",i.step=".01",i.placeholder=4.5,i.id=d,i.value=t,i.oninput=L;var u=document.createElement("button");u.className="spectrum-ActionButton spectrum-ActionButton--quiet",u.innerHTML='\n  <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Delete">\n    <use xlink:href="#spectrum-icon-18-Delete" />\n  </svg>',c.type="range",c.min="0",c.max="100",c.value=t,c.step=".01",c.className="colorSlider",c.id=d+"-sl",c.disabled=!0,l.appendChild(c),u.onclick=b,a.appendChild(s),a.appendChild(i),a.appendChild(u),n.appendChild(a)}function C(e){var t=e.target.parentNode.id,o=t.replace("-item",""),r=document.getElementById(o),n=r.value,a=t.replace("-item","-sw"),l=document.getElementById(a);!0!==n.startsWith("#")&&6==n.length&&(h="#",n=h.concat(n),r.value=n),l.value=n,L()}function f(e){var t=document.getElementById("keyColor-wrapper"),o=document.createElement("div"),r=B();o.className="keyColor",o.id=r+"-item";var n=document.createElement("input");n.type="color",n.value=e,n.oninput=L,n.className="keyColor-Item",n.id=r+"-sw",n.style.backgroundColor=e;var a=document.createElement("button");a.className="spectrum-ActionButton",a.innerHTML='\n  <svg class="spectrum-Icon spectrum-Icon--sizeS" focusable="false" aria-hidden="true" aria-label="Delete">\n    <use xlink:href="#spectrum-icon-18-Delete" />\n  </svg>',a.onclick=I,o.appendChild(n),o.appendChild(a),t.appendChild(o)}function b(e){var t=e.target.parentNode.id,o=document.getElementById(t),r=t.replace("-item","")+"-sl",n=document.getElementById(r);o.remove(),n.remove(),L()}function I(e){var t=e.target.parentNode.id;document.getElementById(t).remove(),L()}function B(){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(2,10)}function E(e,t){var o=document.getElementById("demoWrapper"),r=document.createElement("div");r.className="demoItem";var n=document.createElement("div");n.className="spectrum-Typography demo";var a=document.createElement("h4");a.className="spectrum-Heading2 demoHeading";var l=document.createTextNode("Large text"),c=document.createElement("p");c.className="spectrum-Body3 demoText";var s=document.createTextNode("Small text demo"),i=document.createElement("button");i.className="spectrum-Button demoButton";var u=document.createElement("button");u.className="spectrum-Button demoButton";var m=document.createTextNode("Button"),p=document.createTextNode("Button");a.appendChild(l),c.appendChild(s),i.appendChild(m),u.appendChild(p),n.appendChild(a),n.appendChild(c),n.appendChild(i),n.appendChild(u);var g=document.createElement("div");g.className="spectrum-Typography demoInverted";var h=document.createElement("h4");h.className="spectrum-Heading2 demoHeading";var v=document.createElement("p");v.className="spectrum-Body3 demoText";var y=document.createElement("button");y.className="spectrum-Button demoButton";var C=document.createElement("button");C.className="spectrum-Button demoButton";var f=document.createTextNode("Large text"),b=document.createTextNode("Small text demo"),I=document.createTextNode("Button"),B=document.createTextNode("Button");h.appendChild(f),v.appendChild(b),y.appendChild(I),C.appendChild(B),g.appendChild(h),g.appendChild(v),g.appendChild(y),g.appendChild(C),r.appendChild(n),r.appendChild(g),o.appendChild(r),g.style.backgroundColor=e,g.style.color=t,n.style.color=e,c.style.color=e,a.style.color=e,i.style.color=e,u.style.backgroundColor=e,u.style.borderColor=e,u.style.color=t,C.style.color=e,C.style.backgroundColor=t,C.style.borderColor=t,i.style.borderColor=e,v.style.color=t,h.style.color=t,y.style.color=t,y.style.borderColor=t,d.style.backgroundColor=t}function w(){p.options.length=0,chart3dColorspace.options.length=0,chart2dColorspace.options.length=0;var e={CAM02:"CIECAM02",LCH:"Lch",LAB:"Lab",HSL:"HSL",HSLuv:"HSLuv",HSV:"HSV",RGB:"RGB"},t={CAM02:"CIECAM02 (recommended)",LCH:"Lch",LAB:"Lab",HSL:"HSL",HSLuv:"HSLuv",HSV:"HSV",RGB:"RGB"};for(var o in e)p.options[p.options.length]=new Option(e[o],o),chart3dColorspace.options[chart3dColorspace.options.length]=new Option(t[o],o),chart2dColorspace.options[chart2dColorspace.options.length]=new Option(t[o],o);chart3dColorspace.value="CAM02",chart2dColorspace.value="CAM02"}function L(){document.getElementById("colorScale").innerHTML="";document.getElementById("chart3dColorspace").value;for(var e=document.getElementsByClassName("keyColor-Item"),t=document.getElementById("bgField").value,o=document.querySelector('select[name="mode"]').value,r=0;r<g.length;r++)(C=g[r].value)<1&&C>-1&&(g[r].value=-1*(10/(10*C)).toFixed(2));for(var a=[],l=0;l<g.length;l++)a.push(g[l].id);ratioInputs=[];for(var c=[],d=0;d<g.length;d++)ratioInputs.push(g[d].value);for(var s=0;s<e.length;s++)c.push(e[s].value);var i=[];i.push(c),colorArgs=i.join("").split(",").filter(String);document.getElementById("sequentialClamp").checked;var u=contrastColors.createScale({swatches:3e3,colorKeys:colorArgs,colorspace:o,shift:1});n=contrastColors.generateContrastColors({colorKeys:colorArgs,base:t,ratios:ratioInputs,colorspace:o,shift:1});for(var m=[],p=0;p<n.length;p++)m.push(d3.hsluv(n[p]).v/100*100);var h=[];(h=h.concat(0,m,100)).sort(function(e,t){return e+t});var v=d3.scalePow().exponent(1).domain([1,100]).range([1,100]);v=h.map(function(e){return v(e)<0?0:v(e)});for(var y=0;y<n.length;y++){var C=d3.hsluv(n[y]).v;C=v[y+1],document.getElementById(a[y]+"-sl").value=C,document.getElementById(a[y]+"-sw").style.backgroundColor=n[y]}for(var f=0;f<u.colors.length;f++){var b=document.getElementById("colorScale"),I=document.createElement("div");I.className="colorScale-Item",I.style.backgroundColor=u.colors[f],b.appendChild(I)}d3.rgb(t).r,d3.rgb(t).g,d3.rgb(t).b;var B=document.getElementById("colorOutputs");B.innerHTML="",document.getElementById("demoWrapper").innerHTML="";for(var w=0;w<n.length;w++){var L=document.createElement("div"),A=n[w],k=document.createTextNode(d3.rgb(A).hex()),x=d3.color(t).rgb(),M=contrastColors.contrast([d3.rgb(n[w]).r,d3.rgb(n[w]).g,d3.rgb(n[w]).b],[x.r,x.g,x.b]),H=document.createTextNode(M.toFixed(2)),T=document.createElement("span"),F=document.createElement("span");B.appendChild(L),L.className="colorOutputBlock",L.style.backgroundColor=A,L.setAttribute("data-clipboard-text",A),T.appendChild(k),T.className="colorOutputValue",F.appendChild(H),L.appendChild(T),L.appendChild(F),contrastColors.luminance(d3.rgb(n[w]).r,d3.rgb(n[w]).g,d3.rgb(n[w]).b)<.275?L.style.color="#ffffff":L.style.color="#000000",E(n[w],t)}document.getElementById("copyAllColors").setAttribute("data-clipboard-text",n),N(c,t.substr(1),ratioInputs,o),chartData.createData(u.colors),charts.showCharts("CAM02"),S("CAM02")}function N(e,t,o,r){var n=new URL(window.location),l=new URLSearchParams(n.search.slice(1));l.set("colorKeys",e),l.set("base",t),l.set("ratios",o),l.set("mode",r);var c=e.toString().replace(/[#\/]/g,'"#').replace(/[,\/]/g,'",');c+='"',"/"==a?window.history.replaceState({},"","/?"+l):window.history.replaceState({},"",a+"/?"+l);var d=document.getElementById("params");d.innerHTML=" ";var s="colorKeys: ["+c+"], ",i='base: "#'+t+'", ',u="ratios: ["+o+"], ",m=' colorspace: "'+r+'"});',p=document.createTextNode("generateContrastColors({ "),g=document.createTextNode(s),h=document.createTextNode(i),v=document.createTextNode(u),y=document.createTextNode(m);d.appendChild(p),d.appendChild(g),d.appendChild(h),d.appendChild(v),d.appendChild(y)}function A(){ratioInputs.sort(function(e,t){return e-t});for(var e=0;e<ratioInputs.length;e++)g[e].value=ratioInputs[e]}function k(e){var t=-1*(e/100)/1.45+.7375,o=20*(2.5*Math.pow(t,3))+1;return o>1?o:o<1&&o>=0?1:void 0}function x(){for(var e=[],t=0;t<n.length;t++)e.push(d3.hsluv(n[t]).v);for(var o=Math.min.apply(Math,e),r=Math.max.apply(Math,e),a=d3.interpolateNumber(o,r),l=1;l<e.length-1;l++)e[l]=a(l/e.length);return e.sort(function(e,t){return t-e}),e}function S(e){var t=document.getElementById("chart3dAlert");t.innerHTML=" ";var o=document.createElement("div");o.className="spectrum-Alert","CAM02"==e&&(o.classList.add("spectrum-Alert--info"),o.innerHTML='\n      <svg class="spectrum-Icon spectrum-UIIcon-InfoMedium spectrum-Alert-icon" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-InfoMedium" />\n      </svg>\n      <div class="spectrum-Alert-header">Recommended color space for color evaluation</div>\n      <div class="spectrum-Alert-content">CIECAM02 is a perceptually uniform model of color. Irregularities seen in this space reflect perceived irregularities in color.\n        <a href="https://en.wikipedia.org/wiki/CIECAM02" target="_blank" class="spectrum-Link">Learn more about CIECAM02</a>\n      </div>'),"LAB"!=e&&"LCH"!=e||(o.classList.add("spectrum-Alert--info"),o.innerHTML='\n      <svg class="spectrum-Icon spectrum-UIIcon-InfoMedium spectrum-Alert-icon" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-InfoMedium" />\n      </svg>\n      <div class="spectrum-Alert-header">Acceptable color space for color evaluation</div>\n      <div class="spectrum-Alert-content">Lab (Lch in cylindrical form) is a well-known and used color space based on human perception of color.\n        <a href="https://en.wikipedia.org/wiki/CIELAB_color_space" target="_blank" class="spectrum-Link">Learn more about LAB & LCH </a>\n      </div>'),"HSL"!=e&&"HSV"!=e&&"HSLuv"!=e&&"RGB"!=e||(o.classList.add("spectrum-Alert--warning"),o.innerHTML='\n      <svg class="spectrum-Icon spectrum-UIIcon-InfoMedium spectrum-Alert-icon" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-InfoMedium" />\n      </svg>\n      <div class="spectrum-Alert-header">This color space not recommended for evaluating color models</div>\n      <div class="spectrum-Alert-content">Irregularities seen in this color space do not accurately represent perceptual irregularities in the color scale itself.\n        <a href="https://en.wikipedia.org/wiki/HSL_and_HSV" target="_blank" class="spectrum-Link">Learn more about RGB color spaces</a>\n      </div>'),t.appendChild(o)}function M(e){var t=e.value;charts.init3dChart(),charts.showCharts(t),S(t)}window.ratioInputs=[],window.colorArgs=null,v(),window.addNewRatio=function(){y(),L()},window.addNewColor=function(){f(),L()},window.addBulk=function(){document.getElementById("addBulkColorDialog").classList.add("is-open"),document.getElementById("dialogOverlay").style.display="block";var e=document.getElementById("bgField_2"),t=document.getElementById("bgField");e.value=t.value},window.cancelBulk=function(){document.getElementById("addBulkColorDialog").classList.remove("is-open"),document.getElementById("dialogOverlay").style.display="none"},window.bulkColorInput=function(){for(var e=document.getElementById("bulkColors"),t=e.value.replace(/\r\n/g,"\n").replace(/[,\/]/g,"\n").replace(" ","").replace(/['\/]/g,"").replace(/["\/]/g,"").split("\n"),o=document.getElementById("importAsSwatch").checked,r=document.getElementById("bgField_2").value,n=document.getElementById("bgField"),a=0;a<t.length;a++)f(d3.color(t[a]).formatHex());if(o){for(var l=0;l<t.length;l++){y(contrastColors.contrast([d3.rgb(t[l]).r,d3.rgb(t[l]).g,d3.rgb(t[l]).b],[d3.rgb(r).r,d3.rgb(r).g,d3.rgb(r).b]).toFixed(2))}n.value=r}cancelBulk(),L(),e.value=" "},window.clearAllColors=function(){document.getElementById("keyColor-wrapper").innerHTML=" ",L()},window.openTab=function(e,t){var o,r;o=document.getElementsByClassName("tabcontent");for(var n=0;n<o.length;n++)o[n].style.display="none";r=document.getElementsByClassName("main-Tabs-item");for(var a=0;a<r.length;a++)r[a].className=r[a].className.replace(" is-selected","");document.getElementById(t).style.display="flex",e.currentTarget.className+=" is-selected"},document.getElementById("tabDemo").click(),window.colorInput=L,window.onresize=L,window.sortRatios=function(){A(),L()},window.distributeCube=function(){A(),setTimeout(function(){for(var e=x(),t=1;t<e.length-1;t++)g[t].value=k(e[t]).toFixed(2)},300),setTimeout(function(){L()},450)},window.distributeLum=function(){for(var e=x(),t=[],o=1;o<n.length-1;o++){var r=d3.hsluv(n[o]).l,a=d3.hsluv(n[o]).u,c=e[o],d=d3.hsluv(r,a,c),s=[d3.rgb(d).r,d3.rgb(d).g,d3.rgb(d).b],i=[d3.rgb(l).r,d3.rgb(l).g,d3.rgb(l).b];t.push(contrastColors.contrast(s,i).toFixed(2))}var u=[];u=u.concat(ratioInputs[0],t,ratioInputs[ratioInputs.length-1]);for(var m=document.getElementsByClassName("ratio-Item");m.length>0;)m[0].parentNode.removeChild(m[0]);document.getElementById("colorSlider-wrapper").innerHTML=" ";for(var p=0;p<u.length;p++)y(u[p]);L()},exports.colorSpaceFeedback=S,window.colorSpaceFeedback=S,window.updateCharts=M;
},{"./scss/colorinputs.scss":"vcci","./scss/charts.scss":"vcci","./scss/style.scss":"vcci"}]},{},["Focm"], null)
//# sourceMappingURL=/src.3b9e09c6.js.map