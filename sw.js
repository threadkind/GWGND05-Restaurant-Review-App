// SERVICE WORKER

// Use fetch to see if there is a match in the users cache to use for the request, if not pull the requested item from the server
self.addEventListener('fetch',
event => {
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

// Install the service worker...
self.addEventListener('install', event => {
	event.waitUntil(
		// open the cache, if it is not available then it will be created
	    caches.open('restaurant_reviews').then(function(cache) {
	    	// add all the resources to the cache
		    return cache.addAll(
		        [ '/css/styles.css',
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
		          '/img/icons-192.png',
		          '/img/icons-512.png',
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


