module.exports = [
	{
		"label": "About",
		"url": "/about",
		"cssClasses": ""
	},
	{
		"label": "Eligibility",
		"url": "/eligibility",
		"cssClasses": ""
	},
	{
		"label": "FAQ",
		"url": "/#faq",
		"cssClasses": ""
	},
	{
		"label": "Contact",
		"url": "/contact",
		"cssClasses": "border-none"
	},
	{
		"label": "Apply online",
		"url": "/apply",
		"cssClasses": "button tertiary large w-full text-center mb-2 border-b-2"
	}, 
	{
		"label": "Donate today",
		"openInNewTab": false,
		"url": "/donate",
		"cssClasses": "button primary large w-full text-center mb-3 mt-3"
	},
].map(item => {
	return {
		...item,
		cssClasses: `text-black opacity-90 hover:opacity-100 bg-white bg-opacity-0 hover:bg-opacity-5 py-3 text-xl pl-3 border-b border-slate-500 border-opacity-20 font-semibold hover:underline ${item.cssClasses}`,
		attributes: ""
	}
})