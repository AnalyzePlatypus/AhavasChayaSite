const seo = require('./seo.js')

module.exports = {
	// Site
	
	site: {
		name: seo.siteTitle,
		description: seo.siteDescription,
		url: seo.rootUrl,
		logo: {
			src: "/favicons/512x512.png",
			width: 512,
			height: 512
		}
	},
	
	// Page
	
	language: "en-US",
	image: {
		src: seo.rootUrl + seo.imagePath
	},
	
	// Organization
	
	organization: {
		name: "Ahavas Chaya",
		legalName: "Ahavas Chaya, Inc",
		url: seo.rootUrl,
		logo: seo.rootUrl + "/images/logos/Ahavas Chaya Logo_Blue.svg",
		description: seo.siteDescription,
		foundingDate: '2019'
	},
	// 	founders:
	// 	- name: Patrick Coombe
	// 	- name: ''
		address: {
			streetAddress: "3512 Quentin Road Suite LL100-2",
			addressLocality: "Brooklyn",
			addressRegion: "NY",
			postalCode: '11234',
			addressCountry: "USA"
		}
	// 	contactPoint:
	// 	- telephone: "+1-888-888-9999"
	// 		contactType: customer service
	// 		contactOption: TollFree
	// 		areaServed: US
	// 	- telephone: "+1-888-888-9998"
	// 		contactType: Sales
	// 	- telephone: "+1-888-888-9997"
	// 		contactType: technical support
	// 		contactOption: TollFree
	// 		areaServed: US
	// 		availableLanguage:
	// 		- English
	// 		- French
	// 	- telephone: "+1-888-888-9997"
	// 		contactType: bill payment
	// 		contactOption: TollFree
	// 		areaServed:
	// 		- US
	// 		- GB
// 

// organization:
// 	name: Elite Strategies
// 	legalName: Elite Strategies Llc
// 	url: http://www.elite-strategies.com
// 	logo: http://cdn.elite-strategies.com/wp-content/uploads/2013/04/elitestrategies.png
// 	description: Mailjet SAS is an all-in-one Email Services Provider
// 	foundingDate: '2009'
// 	founders:
// 	- name: Patrick Coombe
// 	- name: ''
// 	address:
// 		streetAddress: 900 Linton Blvd Suite 104
// 		addressLocality: Delray Beach
// 		addressRegion: FL
// 		postalCode: '33444'
// 		addressCountry: USA
// 	contactPoint:
// 	- telephone: "+1-888-888-9999"
// 		contactType: customer service
// 		contactOption: TollFree
// 		areaServed: US
// 	- telephone: "+1-888-888-9998"
// 		contactType: Sales
// 	- telephone: "+1-888-888-9997"
// 		contactType: technical support
// 		contactOption: TollFree
// 		areaServed: US
// 		availableLanguage:
// 		- English
// 		- French
// 	- telephone: "+1-888-888-9997"
// 		contactType: bill payment
// 		contactOption: TollFree
// 		areaServed:
// 		- US
// 		- GB
// 	sameAs:
// 	- http://www.freebase.com/m/0_h96pq
// 	- http://www.facebook.com/elitestrategies
// 	- http://www.twitter.com/delraybeachseo
// 	- http://pinterest.com/elitestrategies/
// 	- http://elitestrategies.tumblr.com/
// 	- http://www.linkedin.com/company/elite-strategies
// 	- https://plus.google.com/106661773120082093538
};