(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{84:function(e,t,n){"use strict";n.r(t);var r,i=n(19),o=n.n(i),a=(n(73),n(25)),s=n(1),c=n(20),u=n(74),l=((r={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',r["only-available-in-window"]="This method is available in a Window context.",r["only-available-in-sw"]="This method is available in a service worker context.",r["permission-default"]="The notification permission was not granted and dismissed instead.",r["permission-blocked"]="The notification permission was not granted and blocked instead.",r["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",r["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",r["token-subscribe-failed"]="A problem occured while subscribing the user to FCM: {$errorInfo}",r["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",r["token-unsubscribe-failed"]="A problem occured while unsubscribing the user from FCM: {$errorInfo}",r["token-update-failed"]="A problem occured while updating the user from FCM: {$errorInfo}",r["token-update-no-token"]="FCM returned no token when updating the user to push.",r["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",r["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",r["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",r["invalid-vapid-key"]="The public VAPID key must be a string.",r["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",r),d=new c.ErrorFactory("messaging","Messaging",l);function p(e){return d.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var f,h="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function b(e){var t=new Uint8Array(e);return btoa(String.fromCharCode.apply(String,Object(s.__spread)(t))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function g(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length),i=0;i<n.length;++i)r[i]=n.charCodeAt(i);return r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(f||(f={}));function v(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r=this;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2];case 1:if(t=i.sent(),!t.map((function(e){return e.name})).includes("fcm_token_details_db"))return[2,null];i.label=2;case 2:return n=null,[4,Object(u.openDb)("fcm_token_details_db",5,(function(t){return Object(s.__awaiter)(r,void 0,void 0,(function(){var r,i,o,a;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return t.oldVersion<2?[2]:t.objectStoreNames.contains("fcm_token_object_Store")?[4,(r=t.transaction.objectStore("fcm_token_object_Store")).index("fcmSenderId").get(e)]:[2];case 1:return i=s.sent(),[4,r.clear()];case 2:if(s.sent(),!i)return[2];if(2===t.oldVersion){if(!(o=i).auth||!o.p256dh||!o.endpoint)return[2];n={token:o.fcmToken,createTime:null!==(a=o.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:o.auth,p256dh:o.p256dh,endpoint:o.endpoint,swScope:o.swScope,vapidKey:"string"==typeof o.vapidKey?o.vapidKey:b(o.vapidKey)}}}else(3===t.oldVersion||4===t.oldVersion)&&(n={token:(o=i).fcmToken,createTime:o.createTime,subscriptionOptions:{auth:b(o.auth),p256dh:b(o.p256dh),endpoint:o.endpoint,swScope:o.swScope,vapidKey:b(o.vapidKey)}});return[2]}}))}))}))];case 3:return i.sent().close(),[4,Object(u.deleteDb)("fcm_token_details_db")];case 4:return i.sent(),[4,Object(u.deleteDb)("fcm_vapid_details_db")];case 5:return i.sent(),[4,Object(u.deleteDb)("undefined")];case 6:return i.sent(),[2,w(n)?n:null]}}))}))}function w(e){if(!e||!e.subscriptionOptions)return!1;var t=e.subscriptionOptions;return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _="firebase-messaging-store",y=null;function m(){return y||(y=Object(u.openDb)("firebase-messaging-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(_)}}))),y}function k(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return t=S(e),[4,m()];case 1:return[4,i.sent().transaction(_).objectStore(_).get(t)];case 2:return(n=i.sent())?[2,n]:[3,3];case 3:return[4,v(e.appConfig.senderId)];case 4:return(r=i.sent())?[4,O(e,r)]:[3,6];case 5:return i.sent(),[2,r];case 6:return[2]}}))}))}function O(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i;return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return n=S(e),[4,m()];case 1:return r=o.sent(),[4,(i=r.transaction(_,"readwrite")).objectStore(_).put(t,n)];case 2:return o.sent(),[4,i.complete];case 3:return o.sent(),[2,t]}}))}))}function j(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return t=S(e),[4,m()];case 1:return n=i.sent(),[4,(r=n.transaction(_,"readwrite")).objectStore(_).delete(t)];case 2:return i.sent(),[4,r.complete];case 3:return i.sent(),[2]}}))}))}function S(e){return e.appConfig.appId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i,o,a,c;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return[4,D(e)];case 1:n=s.sent(),r=K(t),i={method:"POST",headers:n,body:JSON.stringify(r)},s.label=2;case 2:return s.trys.push([2,5,,6]),[4,fetch(M(e.appConfig),i)];case 3:return[4,s.sent().json()];case 4:return o=s.sent(),[3,6];case 5:throw a=s.sent(),d.create("token-subscribe-failed",{errorInfo:a});case 6:if(o.error)throw c=o.error.message,d.create("token-subscribe-failed",{errorInfo:c});if(!o.token)throw d.create("token-subscribe-no-token");return[2,o.token]}}))}))}function C(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i,o,a,c;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return[4,D(e)];case 1:n=s.sent(),r=K(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)},s.label=2;case 2:return s.trys.push([2,5,,6]),[4,fetch(M(e.appConfig)+"/"+t.token,i)];case 3:return[4,s.sent().json()];case 4:return o=s.sent(),[3,6];case 5:throw a=s.sent(),d.create("token-update-failed",{errorInfo:a});case 6:if(o.error)throw c=o.error.message,d.create("token-update-failed",{errorInfo:c});if(!o.token)throw d.create("token-update-no-token");return[2,o.token]}}))}))}function T(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i,o,a;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return[4,D(e)];case 1:n=s.sent(),r={method:"DELETE",headers:n},s.label=2;case 2:return s.trys.push([2,5,,6]),[4,fetch(M(e.appConfig)+"/"+t,r)];case 3:return[4,s.sent().json()];case 4:if((i=s.sent()).error)throw o=i.error.message,d.create("token-unsubscribe-failed",{errorInfo:o});return[3,6];case 5:throw a=s.sent(),d.create("token-unsubscribe-failed",{errorInfo:a});case 6:return[2]}}))}))}function M(e){return"https://fcmregistrations.googleapis.com/v1/projects/"+e.projectId+"/registrations"}function D(e){var t=e.appConfig,n=e.installations;return Object(s.__awaiter)(this,void 0,void 0,(function(){var e;return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return[4,n.getToken()];case 1:return e=r.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS "+e})]}}))}))}function K(e){var t=e.p256dh,n=e.auth,r=e.endpoint,i=e.vapidKey,o={web:{endpoint:r,auth:n,p256dh:t}};return i!==h&&(o.web.applicationPubKey=i),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t,n){return Object(s.__awaiter)(this,void 0,void 0,(function(){var r,i,o,a;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:if("granted"!==Notification.permission)throw d.create("permission-blocked");return[4,x(t,n)];case 1:return r=s.sent(),[4,k(e)];case 2:return i=s.sent(),o={vapidKey:n,swScope:t.scope,endpoint:r.endpoint,auth:b(r.getKey("auth")),p256dh:b(r.getKey("p256dh"))},i?[3,3]:[2,R(e,o)];case 3:if(c=i.subscriptionOptions,l=(u=o).vapidKey===c.vapidKey,p=u.endpoint===c.endpoint,f=u.auth===c.auth,h=u.p256dh===c.p256dh,l&&p&&f&&h)return[3,8];s.label=4;case 4:return s.trys.push([4,6,,7]),[4,T(e,i.token)];case 5:return s.sent(),[3,7];case 6:return a=s.sent(),console.warn(a),[3,7];case 7:return[2,R(e,o)];case 8:return Date.now()>=i.createTime+6048e5?[2,N({token:i.token,createTime:Date.now(),subscriptionOptions:o},e,t)]:[2,i.token];case 9:return[2]}var c,u,l,p,f,h;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}))}function E(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return[4,k(e)];case 1:return(n=i.sent())?[4,T(e,n.token)]:[3,4];case 2:return i.sent(),[4,j(e)];case 3:i.sent(),i.label=4;case 4:return[4,t.pushManager.getSubscription()];case 5:return(r=i.sent())?[2,r.unsubscribe()]:[2,!0]}}))}))}function N(e,t,n){return Object(s.__awaiter)(this,void 0,void 0,(function(){var r,i,o;return Object(s.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,5]),[4,C(t,e)];case 1:return r=a.sent(),i=Object(s.__assign)(Object(s.__assign)({},e),{token:r,createTime:Date.now()}),[4,O(t,i)];case 2:return a.sent(),[2,r];case 3:return o=a.sent(),[4,E(t,n)];case 4:throw a.sent(),o;case 5:return[2]}}))}))}function R(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return[4,I(e,t)];case 1:return n=i.sent(),r={token:n,createTime:Date.now(),subscriptionOptions:t},[4,O(e,r)];case 2:return i.sent(),[2,r.token]}}))}))}function x(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n;return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return[4,e.pushManager.getSubscription()];case 1:return(n=r.sent())?[2,n]:[2,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:g(t)})]}}))}))}function A(e){return"object"==typeof e&&!!e&&"google.c.a.c_id"in e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W=function(){function e(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.onMessageCallback=null,navigator.serviceWorker.addEventListener("message",(function(e){return t.messageEventListener(e)}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.getToken=function(){return Object(s.__awaiter)(this,void 0,void 0,(function(){var e;return Object(s.__generator)(this,(function(t){switch(t.label){case 0:return this.vapidKey||(this.vapidKey=h),[4,this.getServiceWorkerRegistration()];case 1:return e=t.sent(),"default"!==Notification.permission?[3,3]:[4,Notification.requestPermission()];case 2:t.sent(),t.label=3;case 3:if("granted"!==Notification.permission)throw d.create("permission-blocked");return[2,P(this.firebaseDependencies,e,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return Object(s.__awaiter)(this,void 0,void 0,(function(){var e;return Object(s.__generator)(this,(function(t){switch(t.label){case 0:return[4,this.getServiceWorkerRegistration()];case 1:return e=t.sent(),[2,E(this.firebaseDependencies,e)]}}))}))},e.prototype.requestPermission=function(){return Object(s.__awaiter)(this,void 0,void 0,(function(){var e;return Object(s.__generator)(this,(function(t){switch(t.label){case 0:return"granted"===Notification.permission?[2]:[4,Notification.requestPermission()];case 1:if("granted"===(e=t.sent()))return[2];throw"denied"===e?d.create("permission-blocked"):d.create("permission-default")}}))}))},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw d.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw d.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw d.create("invalid-sw-registration");if(this.swRegistration)throw d.create("use-sw-after-get-token");this.swRegistration=e},e.prototype.onMessage=function(e){var t=this;return this.onMessageCallback=e,function(){t.onMessageCallback=null}},e.prototype.setBackgroundMessageHandler=function(){throw d.create("only-available-in-sw")},e.prototype.onTokenRefresh=function(){return function(){}},e.prototype.getServiceWorkerRegistration=function(){return Object(s.__awaiter)(this,void 0,void 0,(function(){var e,t;return Object(s.__generator)(this,(function(n){switch(n.label){case 0:if(this.swRegistration)return[3,4];n.label=1;case 1:return n.trys.push([1,3,,4]),e=this,[4,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"})];case 2:return e.swRegistration=n.sent(),this.swRegistration.update().catch((function(){})),[3,4];case 3:throw t=n.sent(),d.create("failed-service-worker-registration",{browserErrorMessage:t.message});case 4:return[2,this.swRegistration]}}))}))},e.prototype.messageEventListener=function(e){var t;return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i,o;return Object(s.__generator)(this,(function(a){switch(a.label){case 0:return(null===(t=e.data)||void 0===t?void 0:t.firebaseMessaging)?(n=e.data.firebaseMessaging,r=n.type,i=n.payload,this.onMessageCallback&&r===f.PUSH_RECEIVED&&("function"==typeof this.onMessageCallback?this.onMessageCallback(i):this.onMessageCallback.next(i)),A(o=i.data)&&"1"===o["google.c.a.e"]?[4,this.logEvent(r,o)]:[3,2]):[2];case 1:a.sent(),a.label=2;case 2:return[2]}}))}))},e.prototype.logEvent=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n;return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return n=function(e){switch(e){case f.NOTIFICATION_CLICKED:return"notification_open";case f.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),[4,this.firebaseDependencies.analyticsProvider.get()];case 1:return r.sent().logEvent(n,{message_id:t["google.c.a.c_id"],message_name:t["google.c.a.c_l"],message_time:t["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)}),[2]}}))}))},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var H=function(){function e(e){var t=this;this.firebaseDependencies=e,this.vapidKey=null,this.bgMessageHandler=null,self.addEventListener("push",(function(e){e.waitUntil(t.onPush(e))})),self.addEventListener("pushsubscriptionchange",(function(e){e.waitUntil(t.onSubChange(e))})),self.addEventListener("notificationclick",(function(e){e.waitUntil(t.onNotificationClick(e))}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.setBackgroundMessageHandler=function(e){if(!e||"function"!=typeof e)throw d.create("invalid-bg-handler");this.bgMessageHandler=e},e.prototype.getToken=function(){var e,t;return Object(s.__awaiter)(this,void 0,void 0,(function(){var n;return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return this.vapidKey?[3,2]:[4,k(this.firebaseDependencies)];case 1:n=r.sent(),this.vapidKey=null!==(t=null===(e=null==n?void 0:n.subscriptionOptions)||void 0===e?void 0:e.vapidKey)&&void 0!==t?t:h,r.label=2;case 2:return[2,P(this.firebaseDependencies,self.registration,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return E(this.firebaseDependencies,self.registration)},e.prototype.requestPermission=function(){throw d.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw d.create("use-vapid-key-after-get-token");if("string"!=typeof e||0===e.length)throw d.create("invalid-vapid-key");this.vapidKey=e},e.prototype.useServiceWorker=function(){throw d.create("only-available-in-window")},e.prototype.onMessage=function(){throw d.create("only-available-in-window")},e.prototype.onTokenRefresh=function(){throw d.create("only-available-in-window")},e.prototype.onPush=function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return(t=function(e){var t=e.data;if(!t)return null;try{return t.json()}catch(e){return null}}(e))?[4,U()]:[2];case 1:return function(e){return e.some((function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")}))}(n=i.sent())?[2,V(n,t)]:(r=function(e){var t;if(!e||"object"!=typeof e.notification)return;var n=Object(s.__assign)({},e.notification);return n.data=Object(s.__assign)(Object(s.__assign)({},e.notification.data),((t={}).FCM_MSG=e,t)),n}(t))?[4,B(r)]:[3,3];case 2:return i.sent(),[3,5];case 3:return this.bgMessageHandler?[4,this.bgMessageHandler(t)]:[3,5];case 4:i.sent(),i.label=5;case 5:return[2]}}))}))},e.prototype.onSubChange=function(e){var t,n;return Object(s.__awaiter)(this,void 0,void 0,(function(){var r;return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return e.newSubscription?[3,2]:[4,E(this.firebaseDependencies,self.registration)];case 1:return i.sent(),[2];case 2:return[4,k(this.firebaseDependencies)];case 3:return r=i.sent(),[4,E(this.firebaseDependencies,self.registration)];case 4:return i.sent(),[4,P(this.firebaseDependencies,self.registration,null!==(n=null===(t=null==r?void 0:r.subscriptionOptions)||void 0===t?void 0:t.vapidKey)&&void 0!==n?n:h)];case 5:return i.sent(),[2]}}))}))},e.prototype.onNotificationClick=function(e){var t,n;return Object(s.__awaiter)(this,void 0,void 0,(function(){var r,i,o,a;return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return(r=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n.FCM_MSG)?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),(i=function(e){var t,n,r,i=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(r=e.notification)||void 0===r?void 0:r.click_action;if(i)return i;return A(e.data)?self.location.origin:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r))?[4,L(i)]:[2]):[2];case 1:return(o=s.sent())?[3,4]:[4,self.clients.openWindow(i)];case 2:return o=s.sent(),[4,(c=3e3,new Promise((function(e){setTimeout(e,c)})))];case 3:return s.sent(),[3,6];case 4:return[4,o.focus()];case 5:o=s.sent(),s.label=6;case 6:return o?(a=F(f.NOTIFICATION_CLICKED,r),[2,o.postMessage(a)]):[2]}var c}))}))},e}();function L(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r,i,o,a,c;return Object(s.__generator)(this,(function(u){switch(u.label){case 0:return t=new URL(e,self.location.href),[4,U()];case 1:n=u.sent();try{for(r=Object(s.__values)(n),i=r.next();!i.done;i=r.next())if(o=i.value,new URL(o.url,self.location.href).host===t.host)return[2,o]}catch(e){a={error:e}}finally{try{i&&!i.done&&(c=r.return)&&c.call(r)}finally{if(a)throw a.error}}return[2,null]}}))}))}function V(e,t){var n,r,i=F(f.PUSH_RECEIVED,t);try{for(var o=Object(s.__values)(e),a=o.next();!a.done;a=o.next()){a.value.postMessage(i)}}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}function U(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function F(e,t){return{firebaseMessaging:{type:e,payload:t}}}function B(e){var t,n=null!==(t=e.title)&&void 0!==t?t:"",r=e.actions,i=Notification.maxActions;return r&&i&&r.length>i&&console.warn("This browser only supports "+i+" actions. The remaining actions will not be displayed."),self.registration.showNotification(n,e)}var q={isSupported:G};function G(){return self&&"ServiceWorkerGlobalScope"in self?"indexedDB"in self&&null!==indexedDB&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"indexedDB"in window&&null!==indexedDB&&navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}o.a.INTERNAL.registerComponent(new a.Component("messaging",(function(e){var t=e.getProvider("app").getImmediate(),n={app:t,appConfig:
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){var t,n;if(!e||!e.options)throw p("App Configuration Object");if(!e.name)throw p("App Name");var r=e.options;try{for(var i=Object(s.__values)(["projectId","apiKey","appId","messagingSenderId"]),o=i.next();!o.done;o=i.next()){var a=o.value;if(!r[a])throw p(a)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return{appName:e.name,projectId:r.projectId,apiKey:r.apiKey,appId:r.appId,senderId:r.messagingSenderId}}(t),installations:e.getProvider("installations").getImmediate(),analyticsProvider:e.getProvider("analytics-internal")};if(!G())throw d.create("unsupported-browser");return self&&"ServiceWorkerGlobalScope"in self?new H(n):new W(n)}),"PUBLIC").setServiceProps(q))}}]);