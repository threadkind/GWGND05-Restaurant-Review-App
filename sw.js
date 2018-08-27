self.addEventListener('install',
event => {
	console.log(`Successful`);
}
);

self.addEventListener('activate',
	event => {
		console.log('Active');
	})
