const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/mapbox-gl-p_V5FMEB.js","assets/index-CifyumIO.js","assets/index-DSaCcCfO.css"])))=>i.map(i=>d[i]);
import{r as s,z as W,L as H,y as _,O as J,T as k}from"./index-CifyumIO.js";import{c as V,f as q,a as G,b as K,d as Y}from"./HomePage-4Be4adI7.js";const X=s.createContext(null);function $(t,e){const n=Array.isArray(t)?t[0]:t?t.x:0,o=Array.isArray(t)?t[1]:t?t.y:0,r=Array.isArray(e)?e[0]:e?e.x:0,i=Array.isArray(e)?e[1]:e?e.y:0;return n===r&&o===i}function E(t,e){if(t===e)return!0;if(!t||!e)return!1;if(Array.isArray(t)){if(!Array.isArray(e)||t.length!==e.length)return!1;for(let n=0;n<t.length;n++)if(!E(t[n],e[n]))return!1;return!0}else if(Array.isArray(e))return!1;if(typeof t=="object"&&typeof e=="object"){const n=Object.keys(t),o=Object.keys(e);if(n.length!==o.length)return!1;for(const r of n)if(!e.hasOwnProperty(r)||!E(t[r],e[r]))return!1;return!0}return!1}function Q(t){const e=t.clone();return e.pixelsToGLUnits=t.pixelsToGLUnits,e}function j(t,e){if(!t.getProjection)return;const n=t.getProjection(),o=e.getProjection();E(n,o)||e.setProjection(n)}function I(t){return{longitude:t.center.lng,latitude:t.center.lat,zoom:t.zoom,pitch:t.pitch,bearing:t.bearing,padding:t.padding}}function O(t,e){const n=e.viewState||e;let o=!1;if("longitude"in n&&"latitude"in n){const r=t.center;t.center=new r.constructor(n.longitude,n.latitude),o=o||r!==t.center}if("zoom"in n){const r=t.zoom;t.zoom=n.zoom,o=o||r!==t.zoom}if("bearing"in n){const r=t.bearing;t.bearing=n.bearing,o=o||r!==t.bearing}if("pitch"in n){const r=t.pitch;t.pitch=n.pitch,o=o||r!==t.pitch}return n.padding&&!t.isPaddingEqual(n.padding)&&(o=!0,t.padding=n.padding),o}const ee=["type","source","source-layer","minzoom","maxzoom","filter","layout"];function P(t){if(!t)return null;if(typeof t=="string"||("toJS"in t&&(t=t.toJS()),!t.layers))return t;const e={};for(const o of t.layers)e[o.id]=o;const n=t.layers.map(o=>{let r=null;"interactive"in o&&(r=Object.assign({},o),delete r.interactive);const i=e[o.ref];if(i){r=r||Object.assign({},o),delete r.ref;for(const a of ee)a in i&&(r[a]=i[a])}return r||o});return{...t,layers:n}}var N={VITE_MAPBOX_TOKEN:"pk.eyJ1Ijoic2dtaWxsczIiLCJhIjoiY200aGZyaGtmMDY2cTJtcHZ4dHhneWw4MCJ9.SpJb7wmp7jypA5KVhR3J9A",VITE_SUPABASE_URL:"https://ypafrhayqpygdnuyhadk.supabase.co",VITE_SUPABASE_ANON_KEY:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwYWZyaGF5cXB5Z2RudXloYWRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM3NzQ5NTEsImV4cCI6MjA0OTM1MDk1MX0.pOwhaTMkXlvvGewB_83LlDZ-nWt_Lfx5QK9UGhqcAaY"};const F={version:8,sources:{},layers:[]},B={mousedown:"onMouseDown",mouseup:"onMouseUp",mouseover:"onMouseOver",mousemove:"onMouseMove",click:"onClick",dblclick:"onDblClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave",mouseout:"onMouseOut",contextmenu:"onContextMenu",touchstart:"onTouchStart",touchend:"onTouchEnd",touchmove:"onTouchMove",touchcancel:"onTouchCancel"},A={movestart:"onMoveStart",move:"onMove",moveend:"onMoveEnd",dragstart:"onDragStart",drag:"onDrag",dragend:"onDragEnd",zoomstart:"onZoomStart",zoom:"onZoom",zoomend:"onZoomEnd",rotatestart:"onRotateStart",rotate:"onRotate",rotateend:"onRotateEnd",pitchstart:"onPitchStart",pitch:"onPitch",pitchend:"onPitchEnd"},U={wheel:"onWheel",boxzoomstart:"onBoxZoomStart",boxzoomend:"onBoxZoomEnd",boxzoomcancel:"onBoxZoomCancel",resize:"onResize",load:"onLoad",render:"onRender",idle:"onIdle",remove:"onRemove",data:"onData",styledata:"onStyleData",sourcedata:"onSourceData",error:"onError"},te=["minZoom","maxZoom","minPitch","maxPitch","maxBounds","projection","renderWorldCopies"],ne=["scrollZoom","boxZoom","dragRotate","dragPan","keyboard","doubleClickZoom","touchZoomRotate","touchPitch"];class x{constructor(e,n,o){this._map=null,this._internalUpdate=!1,this._inRender=!1,this._hoveredFeatures=null,this._deferredEvents={move:!1,zoom:!1,pitch:!1,rotate:!1},this._onEvent=r=>{const i=this.props[U[r.type]];i?i(r):r.type==="error"&&console.error(r.error)},this._onPointerEvent=r=>{(r.type==="mousemove"||r.type==="mouseout")&&this._updateHover(r);const i=this.props[B[r.type]];i&&(this.props.interactiveLayerIds&&r.type!=="mouseover"&&r.type!=="mouseout"&&(r.features=this._hoveredFeatures||this._queryRenderedFeatures(r.point)),i(r),delete r.features)},this._onCameraEvent=r=>{if(!this._internalUpdate){const i=this.props[A[r.type]];i&&i(r)}r.type in this._deferredEvents&&(this._deferredEvents[r.type]=!1)},this._MapClass=e,this.props=n,this._initialize(o)}get map(){return this._map}get transform(){return this._renderTransform}setProps(e){const n=this.props;this.props=e;const o=this._updateSettings(e,n);o&&this._createShadowTransform(this._map);const r=this._updateSize(e),i=this._updateViewState(e,!0);this._updateStyle(e,n),this._updateStyleComponents(e,n),this._updateHandlers(e,n),(o||r||i&&!this._map.isMoving())&&this.redraw()}static reuse(e,n){const o=x.savedMaps.pop();if(!o)return null;const r=o.map,i=r.getContainer();for(n.className=i.className;i.childNodes.length>0;)n.appendChild(i.childNodes[0]);r._container=n;const a=r._resizeObserver;a&&(a.disconnect(),a.observe(n)),o.setProps({...e,styleDiffing:!1}),r.resize();const{initialViewState:c}=e;return c&&(c.bounds?r.fitBounds(c.bounds,{...c.fitBoundsOptions,duration:0}):o._updateViewState(c,!1)),r.isStyleLoaded()?r.fire("load"):r.once("styledata",()=>r.fire("load")),r._update(),o}_initialize(e){const{props:n}=this,{mapStyle:o=F}=n,r={...n,...n.initialViewState,accessToken:n.mapboxAccessToken||oe()||null,container:e,style:P(o)},i=r.initialViewState||r.viewState||r;if(Object.assign(r,{center:[i.longitude||0,i.latitude||0],zoom:i.zoom||0,pitch:i.pitch||0,bearing:i.bearing||0}),n.gl){const d=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=()=>(HTMLCanvasElement.prototype.getContext=d,n.gl)}const a=new this._MapClass(r);i.padding&&a.setPadding(i.padding),n.cursor&&(a.getCanvas().style.cursor=n.cursor),this._createShadowTransform(a);const c=a._render;a._render=d=>{this._inRender=!0,c.call(a,d),this._inRender=!1};const u=a._renderTaskQueue.run;a._renderTaskQueue.run=d=>{u.call(a._renderTaskQueue,d),this._onBeforeRepaint()},a.on("render",()=>this._onAfterRepaint());const l=a.fire;a.fire=this._fireEvent.bind(this,l),a.on("resize",()=>{this._renderTransform.resize(a.transform.width,a.transform.height)}),a.on("styledata",()=>{this._updateStyleComponents(this.props,{}),j(a.transform,this._renderTransform)}),a.on("sourcedata",()=>this._updateStyleComponents(this.props,{}));for(const d in B)a.on(d,this._onPointerEvent);for(const d in A)a.on(d,this._onCameraEvent);for(const d in U)a.on(d,this._onEvent);this._map=a}recycle(){const n=this.map.getContainer().querySelector("[mapboxgl-children]");n==null||n.remove(),x.savedMaps.push(this)}destroy(){this._map.remove()}redraw(){const e=this._map;!this._inRender&&e.style&&(e._frame&&(e._frame.cancel(),e._frame=null),e._render())}_createShadowTransform(e){const n=Q(e.transform);e.painter.transform=n,this._renderTransform=n}_updateSize(e){const{viewState:n}=e;if(n){const o=this._map;if(n.width!==o.transform.width||n.height!==o.transform.height)return o.resize(),!0}return!1}_updateViewState(e,n){if(this._internalUpdate)return!1;const o=this._map,r=this._renderTransform,{zoom:i,pitch:a,bearing:c}=r,u=o.isMoving();u&&(r.cameraElevationReference="sea");const l=O(r,{...I(o.transform),...e});if(u&&(r.cameraElevationReference="ground"),l&&n){const d=this._deferredEvents;d.move=!0,d.zoom||(d.zoom=i!==r.zoom),d.rotate||(d.rotate=c!==r.bearing),d.pitch||(d.pitch=a!==r.pitch)}return u||O(o.transform,e),l}_updateSettings(e,n){const o=this._map;let r=!1;for(const i of te)if(i in e&&!E(e[i],n[i])){r=!0;const a=o[`set${i[0].toUpperCase()}${i.slice(1)}`];a==null||a.call(o,e[i])}return r}_updateStyle(e,n){if(e.cursor!==n.cursor&&(this._map.getCanvas().style.cursor=e.cursor||""),e.mapStyle!==n.mapStyle){const{mapStyle:o=F,styleDiffing:r=!0}=e,i={diff:r};return"localIdeographFontFamily"in e&&(i.localIdeographFontFamily=e.localIdeographFontFamily),this._map.setStyle(P(o),i),!0}return!1}_updateStyleComponents(e,n){const o=this._map;let r=!1;return o.isStyleLoaded()&&("light"in e&&o.setLight&&!E(e.light,n.light)&&(r=!0,o.setLight(e.light)),"fog"in e&&o.setFog&&!E(e.fog,n.fog)&&(r=!0,o.setFog(e.fog)),"terrain"in e&&o.setTerrain&&!E(e.terrain,n.terrain)&&(!e.terrain||o.getSource(e.terrain.source))&&(r=!0,o.setTerrain(e.terrain))),r}_updateHandlers(e,n){var o,r;const i=this._map;let a=!1;for(const c of ne){const u=(o=e[c])!==null&&o!==void 0?o:!0,l=(r=n[c])!==null&&r!==void 0?r:!0;E(u,l)||(a=!0,u?i[c].enable(u):i[c].disable())}return a}_queryRenderedFeatures(e){const n=this._map,o=n.transform,{interactiveLayerIds:r=[]}=this.props;try{return n.transform=this._renderTransform,n.queryRenderedFeatures(e,{layers:r.filter(n.getLayer.bind(n))})}catch{return[]}finally{n.transform=o}}_updateHover(e){var n;const{props:o}=this;if(o.interactiveLayerIds&&(o.onMouseMove||o.onMouseEnter||o.onMouseLeave)){const i=e.type,a=((n=this._hoveredFeatures)===null||n===void 0?void 0:n.length)>0,c=this._queryRenderedFeatures(e.point),u=c.length>0;!u&&a&&(e.type="mouseleave",this._onPointerEvent(e)),this._hoveredFeatures=c,u&&!a&&(e.type="mouseenter",this._onPointerEvent(e)),e.type=i}else this._hoveredFeatures=null}_fireEvent(e,n,o){const r=this._map,i=r.transform,a=typeof n=="string"?n:n.type;return a==="move"&&this._updateViewState(this.props,!1),a in A&&(typeof n=="object"&&(n.viewState=I(i)),this._map.isMoving())?(r.transform=this._renderTransform,e.call(r,n,o),r.transform=i,r):(e.call(r,n,o),r)}_onBeforeRepaint(){const e=this._map;this._internalUpdate=!0;for(const o in this._deferredEvents)this._deferredEvents[o]&&e.fire(o);this._internalUpdate=!1;const n=this._map.transform;e.transform=this._renderTransform,this._onAfterRepaint=()=>{j(this._renderTransform,n),e.transform=n}}}x.savedMaps=[];function oe(){let t=null;if(typeof location<"u"){const e=/access_token=([^&\/]*)/.exec(location.search);t=e&&e[1]}try{t=t||N.MapboxAccessToken}catch{}try{t=t||N.REACT_APP_MAPBOX_ACCESS_TOKEN}catch{}return t}const re=["setMaxBounds","setMinZoom","setMaxZoom","setMinPitch","setMaxPitch","setRenderWorldCopies","setProjection","setStyle","addSource","removeSource","addLayer","removeLayer","setLayerZoomRange","setFilter","setPaintProperty","setLayoutProperty","setLight","setTerrain","setFog","remove"];function ie(t){if(!t)return null;const e=t.map,n={getMap:()=>e,getCenter:()=>t.transform.center,getZoom:()=>t.transform.zoom,getBearing:()=>t.transform.bearing,getPitch:()=>t.transform.pitch,getPadding:()=>t.transform.padding,getBounds:()=>t.transform.getBounds(),project:o=>{const r=e.transform;e.transform=t.transform;const i=e.project(o);return e.transform=r,i},unproject:o=>{const r=e.transform;e.transform=t.transform;const i=e.unproject(o);return e.transform=r,i},queryTerrainElevation:(o,r)=>{const i=e.transform;e.transform=t.transform;const a=e.queryTerrainElevation(o,r);return e.transform=i,a},queryRenderedFeatures:(o,r)=>{const i=e.transform;e.transform=t.transform;const a=e.queryRenderedFeatures(o,r);return e.transform=i,a}};for(const o of ae(e))!(o in n)&&!re.includes(o)&&(n[o]=e[o].bind(e));return n}function ae(t){const e=new Set;let n=t;for(;n;){for(const o of Object.getOwnPropertyNames(n))o[0]!=="_"&&typeof t[o]=="function"&&o!=="fire"&&o!=="setEventedParent"&&e.add(o);n=Object.getPrototypeOf(n)}return Array.from(e)}const se=typeof document<"u"?s.useLayoutEffect:s.useEffect,ce=["baseApiUrl","maxParallelImageRequests","workerClass","workerCount","workerUrl"];function le(t,e){for(const o of ce)o in e&&(t[o]=e[o]);const{RTLTextPlugin:n="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js"}=e;n&&t.getRTLTextPluginStatus&&t.getRTLTextPluginStatus()==="unavailable"&&t.setRTLTextPlugin(n,o=>{o&&console.error(o)},!0)}const L=s.createContext(null);function ue(t,e,n){const o=s.useContext(X),[r,i]=s.useState(null),a=s.useRef(),{current:c}=s.useRef({mapLib:null,map:null});s.useEffect(()=>{const d=t.mapLib;let f=!0,m;return Promise.resolve(d||n).then(y=>{if(!f)return;if(!y)throw new Error("Invalid mapLib");const h="Map"in y?y:y.default;if(!h.Map)throw new Error("Invalid mapLib");if(le(h,t),!h.supported||h.supported(t))t.reuseMaps&&(m=x.reuse(t,a.current)),m||(m=new x(h.Map,t,a.current)),c.map=ie(m),c.mapLib=h,i(m),o==null||o.onMapMount(c.map,t.id);else throw new Error("Map is not supported by this browser")}).catch(y=>{const{onError:h}=t;h?h({type:"error",target:null,originalEvent:null,error:y}):console.error(y)}),()=>{f=!1,m&&(o==null||o.onMapUnmount(t.id),t.reuseMaps?m.recycle():m.destroy())}},[]),se(()=>{r&&r.setProps(t)}),s.useImperativeHandle(e,()=>c.map,[r]);const u=s.useMemo(()=>({position:"relative",width:"100%",height:"100%",...t.style}),[t.style]),l={height:"100%"};return s.createElement("div",{id:t.id,ref:a,style:u},r&&s.createElement(L.Provider,{value:c},s.createElement("div",{"mapboxgl-children":"",style:l},t.children)))}const de=/box|flex|grid|column|lineHeight|fontWeight|opacity|order|tabSize|zIndex/;function M(t,e){if(!t||!e)return;const n=t.style;for(const o in e){const r=e[o];Number.isFinite(r)&&!de.test(o)?n[o]=`${r}px`:n[o]=r}}function fe(t,e){const{map:n,mapLib:o}=s.useContext(L),r=s.useRef({props:t});r.current.props=t;const i=s.useMemo(()=>{let S=!1;s.Children.forEach(t.children,p=>{p&&(S=!0)});const R={...t,element:S?document.createElement("div"):null},b=new o.Marker(R);return b.setLngLat([t.longitude,t.latitude]),b.getElement().addEventListener("click",p=>{var v,g;(g=(v=r.current.props).onClick)===null||g===void 0||g.call(v,{type:"click",target:b,originalEvent:p})}),b.on("dragstart",p=>{var v,g;const C=p;C.lngLat=i.getLngLat(),(g=(v=r.current.props).onDragStart)===null||g===void 0||g.call(v,C)}),b.on("drag",p=>{var v,g;const C=p;C.lngLat=i.getLngLat(),(g=(v=r.current.props).onDrag)===null||g===void 0||g.call(v,C)}),b.on("dragend",p=>{var v,g;const C=p;C.lngLat=i.getLngLat(),(g=(v=r.current.props).onDragEnd)===null||g===void 0||g.call(v,C)}),b},[]);s.useEffect(()=>(i.addTo(n.getMap()),()=>{i.remove()}),[]);const{longitude:a,latitude:c,offset:u,style:l,draggable:d=!1,popup:f=null,rotation:m=0,rotationAlignment:y="auto",pitchAlignment:h="auto"}=t;return s.useEffect(()=>{M(i.getElement(),l)},[l]),s.useImperativeHandle(e,()=>i,[]),(i.getLngLat().lng!==a||i.getLngLat().lat!==c)&&i.setLngLat([a,c]),u&&!$(i.getOffset(),u)&&i.setOffset(u),i.isDraggable()!==d&&i.setDraggable(d),i.getRotation()!==m&&i.setRotation(m),i.getRotationAlignment()!==y&&i.setRotationAlignment(y),i.getPitchAlignment()!==h&&i.setPitchAlignment(h),i.getPopup()!==f&&i.setPopup(f),W.createPortal(t.children,i.getElement())}s.memo(s.forwardRef(fe));function Z(t){return new Set(t?t.trim().split(/\s+/):[])}function me(t,e){const{map:n,mapLib:o}=s.useContext(L),r=s.useMemo(()=>document.createElement("div"),[]),i=s.useRef({props:t});i.current.props=t;const a=s.useMemo(()=>{const c={...t},u=new o.Popup(c);return u.setLngLat([t.longitude,t.latitude]),u.once("open",l=>{var d,f;(f=(d=i.current.props).onOpen)===null||f===void 0||f.call(d,l)}),u},[]);if(s.useEffect(()=>{const c=u=>{var l,d;(d=(l=i.current.props).onClose)===null||d===void 0||d.call(l,u)};return a.on("close",c),a.setDOMContent(r).addTo(n.getMap()),()=>{a.off("close",c),a.isOpen()&&a.remove()}},[]),s.useEffect(()=>{M(a.getElement(),t.style)},[t.style]),s.useImperativeHandle(e,()=>a,[]),a.isOpen()&&((a.getLngLat().lng!==t.longitude||a.getLngLat().lat!==t.latitude)&&a.setLngLat([t.longitude,t.latitude]),t.offset&&!E(a.options.offset,t.offset)&&a.setOffset(t.offset),(a.options.anchor!==t.anchor||a.options.maxWidth!==t.maxWidth)&&(a.options.anchor=t.anchor,a.setMaxWidth(t.maxWidth)),a.options.className!==t.className)){const c=Z(a.options.className),u=Z(t.className);for(const l of c)u.has(l)||a.removeClassName(l);for(const l of u)c.has(l)||a.addClassName(l);a.options.className=t.className}return W.createPortal(t.children,r)}const he=s.memo(s.forwardRef(me));function w(t,e,n,o){const r=s.useContext(L),i=s.useMemo(()=>t(r),[]);return s.useEffect(()=>{const a=e,c=typeof e=="function"&&typeof n=="function"?e:null,u=typeof e=="function"?e:null,{map:l}=r;return l.hasControl(i)||(l.addControl(i,a==null?void 0:a.position),c&&c(r)),()=>{u&&u(r),l.hasControl(i)&&l.removeControl(i)}},[]),i}function ye(t){const e=w(({mapLib:n})=>new n.AttributionControl(t),{position:t.position});return s.useEffect(()=>{M(e._container,t.style)},[t.style]),null}s.memo(ye);function ge(t){const e=w(({mapLib:n})=>new n.FullscreenControl({container:t.containerId&&document.getElementById(t.containerId)}),{position:t.position});return s.useEffect(()=>{M(e._controlContainer,t.style)},[t.style]),null}s.memo(ge);function pe(t,e){const n=s.useRef({props:t}),o=w(({mapLib:r})=>{const i=new r.GeolocateControl(t),a=i._setupUI;return i._setupUI=c=>{i._container.hasChildNodes()||a(c)},i.on("geolocate",c=>{var u,l;(l=(u=n.current.props).onGeolocate)===null||l===void 0||l.call(u,c)}),i.on("error",c=>{var u,l;(l=(u=n.current.props).onError)===null||l===void 0||l.call(u,c)}),i.on("outofmaxbounds",c=>{var u,l;(l=(u=n.current.props).onOutOfMaxBounds)===null||l===void 0||l.call(u,c)}),i.on("trackuserlocationstart",c=>{var u,l;(l=(u=n.current.props).onTrackUserLocationStart)===null||l===void 0||l.call(u,c)}),i.on("trackuserlocationend",c=>{var u,l;(l=(u=n.current.props).onTrackUserLocationEnd)===null||l===void 0||l.call(u,c)}),i},{position:t.position});return n.current.props=t,s.useImperativeHandle(e,()=>o,[]),s.useEffect(()=>{M(o._container,t.style)},[t.style]),null}s.memo(s.forwardRef(pe));function ve(t){const e=w(({mapLib:n})=>new n.NavigationControl(t),{position:t.position});return s.useEffect(()=>{M(e._container,t.style)},[t.style]),null}s.memo(ve);function _e(t){const e=w(({mapLib:i})=>new i.ScaleControl(t),{position:t.position}),n=s.useRef(t),o=n.current;n.current=t;const{style:r}=t;return t.maxWidth!==void 0&&t.maxWidth!==o.maxWidth&&(e.options.maxWidth=t.maxWidth),t.unit!==void 0&&t.unit!==o.unit&&e.setUnit(t.unit),s.useEffect(()=>{M(e._container,r)},[r]),null}s.memo(_e);function z(t,e){if(!t)throw new Error(e)}function Ee(t,e,n,o){if(z(n.id===o.id,"layer id changed"),z(n.type===o.type,"layer type changed"),n.type==="custom"||o.type==="custom")return;const{layout:r={},paint:i={},filter:a,minzoom:c,maxzoom:u,beforeId:l}=n;if(l!==o.beforeId&&t.moveLayer(e,l),r!==o.layout){const d=o.layout||{};for(const f in r)E(r[f],d[f])||t.setLayoutProperty(e,f,r[f]);for(const f in d)r.hasOwnProperty(f)||t.setLayoutProperty(e,f,void 0)}if(i!==o.paint){const d=o.paint||{};for(const f in i)E(i[f],d[f])||t.setPaintProperty(e,f,i[f]);for(const f in d)i.hasOwnProperty(f)||t.setPaintProperty(e,f,void 0)}E(a,o.filter)||t.setFilter(e,a),(c!==o.minzoom||u!==o.maxzoom)&&t.setLayerZoomRange(e,c,u)}function be(t,e,n){if(t.style&&t.style._loaded&&(!("source"in n)||t.getSource(n.source))){const o={...n,id:e};delete o.beforeId,t.addLayer(o,n.beforeId)}}let Ce=0;function Se(t){const e=s.useContext(L).map.getMap(),n=s.useRef(t),[,o]=s.useState(0),r=s.useMemo(()=>t.id||`jsx-layer-${Ce++}`,[]);if(s.useEffect(()=>{if(e){const a=()=>o(c=>c+1);return e.on("styledata",a),a(),()=>{e.off("styledata",a),e.style&&e.style._loaded&&e.getLayer(r)&&e.removeLayer(r)}}},[e]),e&&e.style&&e.getLayer(r))try{Ee(e,r,t,n.current)}catch(a){console.warn(a)}else be(e,r,t);return n.current=t,null}let Me=0;function xe(t,e,n){if(t.style&&t.style._loaded){const o={...n};return delete o.id,delete o.children,t.addSource(e,o),t.getSource(e)}return null}function Le(t,e,n){z(e.id===n.id,"source id changed"),z(e.type===n.type,"source type changed");let o="",r=0;for(const a in e)a!=="children"&&a!=="id"&&!E(n[a],e[a])&&(o=a,r++);if(!r)return;const i=e.type;if(i==="geojson")t.setData(e.data);else if(i==="image")t.updateImage({url:e.url,coordinates:e.coordinates});else if("setCoordinates"in t&&r===1&&o==="coordinates")t.setCoordinates(e.coordinates);else if("setUrl"in t)switch(o){case"url":t.setUrl(e.url);break;case"tiles":t.setTiles(e.tiles);break}else console.warn(`Unable to update <Source> prop: ${o}`)}function Te(t){const e=s.useContext(L).map.getMap(),n=s.useRef(t),[,o]=s.useState(0),r=s.useMemo(()=>t.id||`jsx-source-${Me++}`,[]);s.useEffect(()=>{if(e){const a=()=>setTimeout(()=>o(c=>c+1),0);return e.on("styledata",a),a(),()=>{var c;if(e.off("styledata",a),e.style&&e.style._loaded&&e.getSource(r)){const u=(c=e.getStyle())===null||c===void 0?void 0:c.layers;if(u)for(const l of u)l.source===r&&e.removeLayer(l.id);e.removeSource(r)}}}},[e]);let i=e&&e.style&&e.getSource(r);return i?Le(i,t,n.current):i=xe(e,r,t),n.current=t,i&&s.Children.map(t.children,a=>a&&s.cloneElement(a,{source:r}))||null}const we=H(()=>import("./mapbox-gl-p_V5FMEB.js").then(t=>t.m),__vite__mapDeps([0,1,2])),Re=s.forwardRef(function(e,n){return ue(e,n,we)}),ze=he,T=Se,D=Te,ke={MAPBOX_TOKEN:"pk.eyJ1Ijoic2dtaWxsczIiLCJhIjoiY200aGZyaGtmMDY2cTJtcHZ4dHhneWw4MCJ9.SpJb7wmp7jypA5KVhR3J9A"},Ie=s.forwardRef(({listings:t=[],selectedListing:e,onListingClick:n,onViewportChange:o,selectedNeighborhood:r},i)=>{const[a,c]=s.useState(11),u=s.useMemo(()=>a>=16?30:a>=14?40:a>=12?50:70,[a]),l=m=>{if(c(m.viewState.zoom),i&&"current"in i&&i.current&&o){const y=i.current.getBounds();if(!y)return;const h=y.getSouthWest(),S=y.getNorthEast();o([[h.lng,h.lat],[S.lng,S.lat]],m.viewState.zoom)}},d=s.useMemo(()=>({type:"FeatureCollection",features:t.map(m=>({type:"Feature",geometry:{type:"Point",coordinates:[m.longitude,m.latitude]},properties:{id:m.id,title:m.title,price:m.price,bedrooms:m.bedrooms}}))}),[t]);s.useEffect(()=>{e&&i&&"current"in i&&i.current&&i.current.flyTo({center:[e.longitude,e.latitude],zoom:15,duration:2e3,padding:{top:50,bottom:50,left:50,right:50}})},[e,i]);const f=m=>{var R;const y=m.features;if(!y||y.length===0)return;const h=y[0],S=h.properties;if(S.cluster){const b=S.cluster_id,p=(R=i==null?void 0:i.current)==null?void 0:R.getSource("listings");p==null||p.getClusterExpansionZoom(b,(v,g)=>{var C;v||(C=i==null?void 0:i.current)==null||C.flyTo({center:h.geometry.coordinates,zoom:g,duration:500})})}else{const b=t.find(p=>p.id===h.properties.id);b&&n(b)}};return _.jsxs(Re,{ref:i,mapboxAccessToken:ke.MAPBOX_TOKEN,initialViewState:{latitude:41.8781,longitude:-87.6298,zoom:11},onMove:l,style:{width:"100%",height:"100%",cursor:"pointer"},mapStyle:"mapbox://styles/mapbox/streets-v11",interactiveLayerIds:["clusters","unclustered-point"],onClick:f,children:[_.jsx(D,{id:"neighborhoods",type:"geojson",data:V,children:_.jsx(T,{id:"neighborhood-fills",type:"fill",paint:{"fill-color":["case",["==",["get","community"],r||""],"rgba(195, 39, 43, 0.2)","rgba(0, 0, 0, 0)"],"fill-outline-color":["case",["==",["get","community"],r||""],"#C3272B","rgba(0, 0, 0, 0.1)"]}})}),_.jsxs(D,{id:"listings",type:"geojson",data:d,cluster:!0,clusterMaxZoom:14,clusterRadius:u,children:[_.jsx(T,{id:"clusters",type:"circle",filter:["has","point_count"],paint:{"circle-color":["step",["get","point_count"],"#74C2E1",10,"#74C2E1",25,"#C3272B",50,"#C3272B"],"circle-radius":["step",["get","point_count"],20,10,25,25,30,50,35]}}),_.jsx(T,{id:"cluster-count",type:"symbol",filter:["has","point_count"],layout:{"text-field":"{point_count_abbreviated}","text-font":["DIN Offc Pro Medium","Arial Unicode MS Bold"],"text-size":12},paint:{"text-color":"#ffffff"}}),_.jsx(T,{id:"unclustered-point",type:"circle",filter:["!",["has","point_count"]],paint:{"circle-color":"#74C2E1","circle-radius":12,"circle-stroke-width":2,"circle-stroke-color":"#fff"}}),_.jsx(T,{id:"unclustered-point-count",type:"symbol",filter:["!",["has","point_count"]],layout:{"text-field":"$","text-font":["DIN Offc Pro Medium","Arial Unicode MS Bold"],"text-size":12},paint:{"text-color":"#ffffff"}})]}),e&&_.jsx(ze,{longitude:e.longitude,latitude:e.latitude,anchor:"bottom",onClose:()=>n(null),children:_.jsxs(J,{sx:{p:1},children:[_.jsx(k,{level:"title-lg",children:q(e.price)}),_.jsxs(k,{level:"body-sm",children:[G(e.bedrooms,e.bathrooms)," • ",K(e.squareFeet)]}),_.jsx(k,{level:"body-sm",noWrap:!0,children:Y(e.address)})]})})]})});export{Ie as default};
