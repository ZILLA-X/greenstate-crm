self.addEventListener("install", event => {
  console.log("GreenState CRM installed");
});

self.addEventListener("fetch", event => {
  event.respondWith(fetch(event.request));
});