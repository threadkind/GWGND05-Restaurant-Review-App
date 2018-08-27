let staticCache = restaurant_reviews_v1

self.addEventListener('fetch',
event => {
	console.log(event.request.url);
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;}
			else {
				return fetch(event.request);
			}

		})
		);
}
);

self.addEventListener('install',
event => {
	console.log(`Successful`);
	event.waitUntil(
    caches.open(staticCache).then(function(cache) {
      return cache.addAll(
        [
          '/css/styles.css',
          '/data/restaurants.json',
          '/img/1.jpg',
          '/img/2.jpg',
          '/img/3.jpg',
          '/img/4.jpg',
          '/img/5.jpg',
          '/img/6.jpg',
          '/img/7.jpg',
          '/img/8.jpg',
          '/img/9.jpg',
          '/img/10.jpg',
          '/js/dbhelper.js',
          '/js/main.js',
          '/js/restaurant_info.js',
          '/index.html',
          '/restaurant.html',
          '/sw.js'
        ]
      );
    })
  );
}
);


