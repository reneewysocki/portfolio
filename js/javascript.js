$(document).ready(function () {

	const portfolioItems = {
		'unwind': {
			id: 'unwind',
			title: 'Unwind',
			client: 'Grapevine Wine Tours',
			date: 'April 2019',
			description: "Social Media Promotion",
			mainImage: 'img/gd-portfolio/unwind.png',
			tags: ['graphic design', 'social media']
		},
		'crane-life': {
			id: 'crane-life',
			title: 'CraneLife Trade Show Backdrop',
			client: 'CraneLife, LLC.',
			date: 'March 2019',
			description: "Trade Show Backdrop",
			mainImage: 'img/gd-portfolio/CraneLife/CraneLife-Finished-Product.jpg',
			image1: 'img/gd-portfolio/CraneLife/Crane-Life-Trade-Show-Backdrop-no-watermark.jpg',
			tags: ['3d media', 'backdrop']
		},
		'up-chiro': {
			id: 'up-chiro',
			title: 'Upstate Chiropractic and Wellness',
			client: 'Upstate Chiropractic and Wellness',
			date: 'January 2019',
			description: "Logo and Corporate Website",
			link1: 'http://upstatechiropractic.net/',
			mainImage: 'img/web-portfolio/upstate-chiropractic/upstate-chiropractic-full.jpg',
			image1: 'img/web-portfolio/upstate-chiropractic/logo.png',
			image2: 'img/web-portfolio/upstate-chiropractic/upstate-chiropractic-services.jpg',
			tags: ['web development', 'logo']
		},
		'murder': {
			id: 'murder',
			title: 'Murder Mystery',
			client: 'SMU Web Development Bootcamp',
			date: 'December 2018',
			description: "Creepy Choose Your Own Adventure game built with Node JS where users are guided through a series of choices to determine the story's outcome. The users are awarded badges for the completion of each ending and the Passport login feature makes it easy to keep your place.",
			link1: 'https://cyoa-murder-mystery.herokuapp.com',
			link2: 'https://github.com/reneewysocki/murder-mystery',
			mainImage: 'img/web-portfolio/murder-mystery/murder-mystery.PNG',
			image1: 'img/web-portfolio/murder-mystery/murder-dashboard.png',
			image2: 'img/web-portfolio/murder-mystery/murder-mystery-play.png',
			tags: ['web development']
		},
		'scraper': {
			id: 'scraper',
			title: 'Bench Scraper',
			client: 'SMU Web Development Bootcamp',
			date: 'December 2018',
			description: "Scrapes recipes from top websites and allows you to take persistent notes.",
			link1: 'https://benchscraper.herokuapp.com/',
			link2: 'https://github.com/reneewysocki/benchscraper',
			mainImage: 'img/web-portfolio/benchscraper.PNG',
			tags: ['web development']
		},
		'fork': {
			id: 'fork',
			title: 'Fork❤️Spoon',
			client: 'SMU Web Development Bootcamp',
			date: 'November 2018',
			description: "Find someone who shares your love for food! This dating app bases it's matches on your eating preferences.",
			link1: 'https://forkandspoon.herokuapp.com/',
			link2: 'https://github.com/reneewysocki/fork-and-spoon',
			mainImage: 'img/web-portfolio/fork-spoon.PNG',
			image1: 'img/web-portfolio/fork-spoon2.png',
			tags: ['web development']
		},
		'paul-coroneos': {
			id: 'paul-coroneos',
			title: 'Paul Coroneos Business Card',
			client: 'Paul Coroneos',
			date: 'October 2018',
			description: "Business Card Design",
			mainImage: 'img/gd-portfolio/PaulCoroneosCards/paul-coroneos-card.png',
			image1: 'img/gd-portfolio/PaulCoroneosCards/paul-coroneos-front.jpg',
			image2: 'img/gd-portfolio/PaulCoroneosCards/paul-coroneos-back.jpg',
			tags: ['graphic design', 'business cards']
		},
		'out-advent': {
			id: 'out-advent',
			title: 'Outdoor Adventures',
			client: 'SMU Web Development Bootcamp',
			date: 'October 2018',
			description: "Finding free outdoor activities can be difficult and time consuming, checking multiple websites for pieces of information. This application focuses on motivating the population to explore nature in their own town or connecting them to adventures in a new city. Use the geolocation feature for your location to be pin-pointed on the map, or enter any city in the world to find free outdoor adventures within a set radius.",
			link1: 'https://reneewysocki.github.io/outdoor-adventure/',
			link2: 'https://github.com/reneewysocki/outdoor-adventure',
			mainImage: 'img/web-portfolio/outdoor-adventure2.png',
			image1: 'img/web-portfolio/outdoor-adventure.PNG',
			tags: ['web development']
		},
		'gvwt-val': {
			id: 'gvwt-val',
			title: 'Valentines Getaway',
			client: 'Grapevine Wine Tours',
			date: 'February 2019',
			description: 'Web and Social Media Promotion',
			mainImage: 'img/gd-portfolio/Valentines-Getaway-Giveaway.jpg',
			tags: ['social media'],
		},
		'gvwt-merry': {
			id: 'gvwt-merry',
			title: 'Eat, Drink, and Be Merry',
			client: 'Grapevine Wine Tours',
			date: 'December 2018',
			description: 'Christmas Card',
			mainImage: 'img/gd-portfolio/eat-drink-and-be-merry-christmas-card.jpg',
			image1: 'img/gd-portfolio/facebook-christmas-card.jpg',
			tags: ['print media'],
		},
		'gvwt-tree': {
			id: 'gvwt-tree',
			title: "The Wine is So Delightful",
			client: 'Grapevine Wine Tours',
			date: 'December 2018',
			description: 'Web and Social Media Promotion',
			mainImage: 'img/gd-portfolio/wine-so-delightful-christmas-tree-promo.jpg',
			tags: ['social media'],
		},
		'gvwt-thankful': {
			id: 'gvwt-thankful',
			title: 'Eat, Drink, and Be Thankful',
			client: 'Grapevine Wine Tours',
			date: 'November 2018',
			description: 'Web and Social Media Promotion',
			mainImage: 'img/gd-portfolio/thanksgiving-eat-drink-and-be-thankful-v2.jpg',
			tags: ['social media'],
		},
		'gwt-vets': {
			id: 'gvwt-vets',
			title: "Veteran's Day",
			client: 'Grapevine Wine Tours',
			date: 'November 2018',
			description: 'Web and Social Media Promotion',
			mainImage: 'img/gd-portfolio/veterans-day.jpg',
			tags: ['social media'],
		},
		'gvwt-corp-fly': {
			id: 'gvwt-corp-fly',
			title: 'Corporate Excursions Flyer',
			client: 'Grapevine Wine Tours',
			date: 'October 2018',
			description: 'One Page Print Flyer Promotion',
			mainImage: 'img/gd-portfolio/Corporate-Excursions/Corporate-Excursions-One-Page-Flyer.jpg',
			image1: 'img/gd-portfolio/Corporate-Excursions/Corporate-Excursions-One-Page-Flyer-Back.jpg',
			tags: ['print media'],
		},
		'gvwt-corp-broch': {
			id: 'gvwt-corp-broch',
			title: 'Corporate Excursions',
			client: 'Grapevine Wine Tours',
			date: 'October 2018',
			description: 'Tri-fold Brochure Print Promotion',
			mainImage: 'img/gd-portfolio/Corporate-Excursions/GWT-Corporate-Excursion-Trifold-Brochure-1.jpg',
			image1: 'img/gd-portfolio/Corporate-Excursions/GWT-Corporate-Excursion-Trifold-Brochure-2.jpg',
			tags: ['print media'],
		},
		'cn-snap': {
			id: 'cn-snap',
			title: "Crane Snapshot",
			client: 'Crane Network',
			date: 'August 2018',
			description: 'Full Page Print Advertisement Published in International Cranes & Specialized Transport Magazine',
			mainImage: 'img/gd-portfolio/IC&ST-August-Full-Page-airbnb-snapshot-photo (2018_02_10 19_15_37 UTC).jpg',
			tags: ['print media', 'IC&ST'],
		},
		'epic': {
			id: 'epic',
			title: "EPIC One Page Flyer",
			client: 'Employment Practice Consultants, LLC',
			date: 'June 2018',
			description: 'One Page Print Flyer',
			mainImage: 'img/gd-portfolio/EPIC/EPIC-One-Page-Elevator-Pitch-Flyer.jpg',
			tags: ['print media'],
		},
		'gvwt-invi': {
			id: 'gwt-invi',
			title: 'Wine Fusion Happy Hour',
			client: 'Grapevine Wine Tours',
			date: 'May 2018',
			description: 'Web and Social Media Promotion',
			mainImage: 'img/gd-portfolio/GWT-Wine-Fusion-Happy-Hour-Invitation (2018_06_06 21_47_54 UTC).jpg',
			tags: ['social media'],
		},
		'cn-enter': {
			id: 'enter',
			title: 'Enter to Win',
			client: 'Crane Network',
			date: 'March 2018',
			description: 'Web and Social Media Contest Promotion',
			mainImage: 'img/gd-portfolio/Crane-Network-Enter-to-Win (2018_06_06 20_47_35 UTC).jpg',
			tags: ['social media'],
		},
		'cn-women': {
			id: 'cn-women',
			title: "International Women's Day",
			client: 'Crane Network',
			date: 'March 2018',
			description: 'Web and Social Media Promotion',
			mainImage: 'img/gd-portfolio/CN-International-Womens-Day.jpg',
			image1: 'img/gd-portfolio/CN-International-Womens-Day-Square.jpg',
			tags: ['social media'],
		},
		'cn-3dlap': {
			id: 'cn-3dlap',
			title: "Blast Your Cranes",
			client: 'Crane Network',
			date: 'February 2018',
			description: 'Web and Email Promotion',
			mainImage: 'img/gd-portfolio/Crane-Laptop-Email-Blast-Shadow (2018_02_10 20_30_25 UTC).jpg',
			tags: [],
		},
		'cn-20': {
			id: 'cn-20',
			title: "Anniversary Badges",
			client: 'Crane Network',
			date: 'January 2018',
			description: 'T-Shirt Design',
			mainImage: 'img/gd-portfolio/CN-20/20-year-logo-badge.png',
			image1: 'img/gd-portfolio/CN-20/20-year-ribbon-banner-years.png',
			tags: ['social media'],
		},
		'cn-peace': {
			id: 'cn-peace',
			title: 'Peace, Joy & Cranes',
			client: 'Crane Network',
			date: 'December 2017',
			description: 'Web and Social Media Promotion for Christmas',
			mainImage: 'img/gd-portfolio/Peace-Joy-and-Cranes---New-Customers (2018_02_10 18_36_35 UTC).jpg',
			tags: ['social media'],
		},
		'twn-merry': {
			id: 'twm-merry',
			title: 'Merry Boom Dolly',
			client: 'TransWorld Manufacturing',
			date: 'December 2017',
			description: 'Christmas Social Media and Web Promotion',
			mainImage: 'img/gd-portfolio/Merry-Boom-Dollies-Sweater-TWM (2018_06_05 20_43_50 UTC).jpg',
			tags: ['social media'],
		},
		'gwt-cert': {
			id: 'gwt-cert',
			title: 'Lunch/Dinner Gift Certificate',
			client: 'Grapevine Wine Tours',
			date: 'November 2017',
			description: 'Gift Certificates',
			mainImage: 'img/gd-portfolio/GWT-Gift-Cert/GWT-Dinner-Gift-Certificate (2018_02_10 18_36_35 UTC).jpg',
			image1: 'img/gd-portfolio/GWT-Gift-Cert/GWT-Lunchr-Gift-Certificate (2018_02_10 19_15_37 UTC).jpg',
			tags: ['print media'],
		},
		'cn-all': {
			id: 'cn-all',
			title: "Dealer Special",
			client: 'Crane Network',
			date: 'September 2017',
			description: 'Printed Promotional Flyer',
			mainImage: 'img/gd-portfolio/Dealer-Special.jpg',
			tags: ['print media'],
		},
		'cn-fball': {
			id: 'cn-fball',
			title: 'Kick Off Football Season',
			client: 'Crane Network',
			date: 'September 2017',
			description: 'Web and Social Media Promotion',
			mainImage: 'img/gd-portfolio/Kick-Off-Football-Season (2018_02_10 20_30_25 UTC).jpg',
			tags: ['social media'],
		},
		'cn-tri-trade': {
			id: 'cn-tri-trade',
			title: "Crane Network Trade Show Backdrop",
			client: 'Grapevine Wine Tours',
			date: 'August 2017',
			description: 'Trade Show Backdrop',
			mainImage: 'img/gd-portfolio/Trade-Show-Banner-Backdrop-copy (2018_02_10 19_15_37 UTC).jpg',
			tags: ['3D media', 'backdrop'],
		},
		'cn-grind': {
			id: '12',
			title: 'cn-grind',
			client: 'Crane Network',
			date: 'August 2017',
			description: 'Web and Social Media Promotion for Back to School Season',
			mainImage: 'img/gd-portfolio/back-to-the-grind.jpg',
			image1: 'img/gd-portfolio/back-to-the-grind-long.jpg',
			tags: ['social media'],
		},
		'twm-boom': {
			id: 'twm-boom',
			title: 'BOOM!',
			client: 'TransWorld Manufacturing',
			date: 'July 2017',
			description: 'Social Media and Print Promotion',
			mainImage: 'img/gd-portfolio/TWM-Boom.jpg',
			image1: 'img/gd-portfolio/TWM-Boom-Square.jpg',
			tags: ['graphic design', 'social media', 'print media']
		},
		'cn-relax': {
			id: 'cn-relax',
			title: "Relax and Enjoy",
			client: 'Crane Network',
			date: 'July 2017',
			description: 'Web and Social Media Promotion',
			mainImage: 'img/gd-portfolio/relax-and-enjoy (2018_02_10 18_36_35 UTC).jpg',
			image1: 'img/gd-portfolio/Relax-and-Enjoy-Your-Vacation-Square (2018_02_10 19_15_37 UTC).jpg',
			tags: ['3D media', 'backdrop'],
		},
		'cn-build': {
			id: 'cn-build',
			title: "Build Your Network",
			client: 'Crane Network',
			date: 'July 2017',
			description: 'Web and Social Media Promotion',
			mainImage: 'img/gd-portfolio/BuildYourNetwork--Generic (2018_02_10 20_30_25 UTC).jpg',
			tags: ['social media'],
		},
		'cn-plooz': {
			id: 'cn-plooz',
			title: "Rentapalooza",
			client: 'Crane Network',
			date: 'July 2017',
			description: 'Web and Social Media Promotion',
			mainImage: 'img/gd-portfolio/rentapalooza-instagram (2018_02_10 19_15_37 UTC).jpg',
			tags: ['social media'],
		},
		'cn-heat': {
			id: 'cn-heat',
			title: 'Things are Heating Up',
			client: 'Crane Network',
			date: 'June 2017',
			description: 'Web and Social Media Promotion',
			mainImage: 'img/gd-portfolio/heating-up-pool--jpg (2018_02_10 18_36_35 UTC).jpg',
			tags: ['social media'],
		},
		'cn-biker': {
			id: 'cn-biker',
			title: "Biker T-Shirts",
			client: 'Crane Network',
			date: 'June 2017',
			description: 'T-Shirt Design',
			mainImage: 'img/gd-portfolio/CN-Biker-Shirt/crane-network-biker-tshirt-wings (2018_02_10 20_30_25 UTC).jpg',
			image1: 'img/gd-portfolio/CN-Biker-Shirt/black-crane-network-wings-shirt.png',
			tags: ['3D media', 'print media'],
		},
		'cn-dad': {
			id: 'cn-dad',
			title: "Happy Father's Day",
			client: 'Crane Network',
			date: 'June 2017',
			description: 'Web and Social Media Promotion',
			mainImage: 'img/gd-portfolio/Kristina-Fathers-Day-Sale (2018_02_10 20_30_25 UTC).jpg',
			tags: ['social media'],
		},
		'cn-blac': {
			id: 'cn-blac',
			title: 'Black Friday / Cyber Monday',
			client: 'Crane Network',
			date: 'June 2017',
			description: 'Web and Social Media Promotion',
			mainImage: 'img/gd-portfolio/CN-Black-Friday/black-friday-special-orange (2018_02_10 20_30_25 UTC).jpg',
			image1: 'img/gd-portfolio/CN-Black-Friday/Cyber-Week-Special (2018_02_10 20_30_25 UTC).jpg',
			tags: ['social media'],
		},
		'cn-custweb': {
			id: 'cn-custweb',
			title: 'Custom Websites',
			client: 'Crane Network',
			date: 'June 2017',
			description: 'Web and Social Media Promotion',
			mainImage: 'img/gd-portfolio/Website-Linkedin-Promo (2018_02_10 18_36_35 UTC).png',
			tags: ['social media'],
		},
		'cn-custweb-fly': {
			id: 'cn-custweb-fly',
			title: 'Custom Websites Flyer',
			client: 'Crane Network',
			date: 'June 2017',
			description: 'Printed Flyer Promotion',
			mainImage: 'img/gd-portfolio/Website-Flyer (2018_02_10 19_15_37 UTC).jpg',
			tags: ['print media'],
		},
		'twm-spring': {
			id: 'twm-spring',
			title: 'Spring is Coming',
			client: 'Transworld Manufacturing',
			date: 'April 2017',
			description: 'Social Media and Print Promotion',
			mainImage: 'img/gd-portfolio/TWM-Spring/TWM-Spring.jpg',
			image1: 'img/gd-portfolio/TWM-Spring/TWM-Spring2.jpg',
			tags: ['graphic design', 'social media', 'print media']
		},
		'cn-ace': {
			id: 'cn-ace',
			title: "Ace in the Hole",
			client: 'Crane Network',
			date: 'March 2017',
			description: 'Half Page Print Advertisement Published in American Cranes & Transport Magazine for CONEXPO 2017',
			mainImage: 'img/gd-portfolio/ACT-CN-CONEXPO (2018_02_10 20_30_25 UTC).jpg',
			tags: ['print media', 'AC&T'],
		},
		'imp-mo': {
			id: 'imp-mo',
			title: "Imperial Mosiac",
			client: 'Imperial Crane',
			date: 'March 2017',
			description: 'Full Page Print Advertisement Published in American Cranes & Transport Magazine',
			mainImage: 'img/gd-portfolio/ACT-Imperial-ConExpo-Ad (2018_02_10 20_30_25 UTC).jpg',
			tags: ['print media', 'AC&T'],
		},
		'twm-ce': {
			id: 'twm-ce',
			title: 'Fabulous Boom Dollies',
			client: 'Transworld Manufacturing',
			date: 'March 2017',
			description: 'Social Media and Print Promotion for CONEXPO 2017',
			mainImage: 'img/gd-portfolio/TWM-Conexpo.jpg',
			image1: 'img/gd-portfolio/TWM-Conexpo-Square.jpg',
			tags: ['social media', 'print media'],
		},
		'dkm-fly': {
			id: 'dkm-fly',
			title: 'Secure Your Future',
			client: 'DKM Insurance',
			date: 'March 2017',
			description: 'Full Page Print and Flyer Advertisement',
			mainImage: 'img/gd-portfolio/dkm-insurance-flyer.jpg',
			tags: ['print media'],
		},
		'cn-math': {
			id: 'cn-math',
			title: "Simple Solutions to Complicated Problems",
			client: 'Crane Network',
			date: 'February 2017',
			description: 'Web and Social Media Promotion',
			mainImage: 'img/gd-portfolio/International-Cranes-February-Half-Page (2018_02_10 20_30_25 UTC).jpg',
			tags: ['social media'],
		},
		'cn-world': {
			id: 'cn-world',
			title: 'A World of Equipment at Your Fingertips',
			client: 'Crane Network',
			date: 'March 2016',
			description: 'Full Page Print Advertisement Published in International Cranes & Specialized Transportation Magazine',
			mainImage: 'img/gd-portfolio/Full-Page-Equipment-Globe-Fingertips-Ad-ICST-March-PSD (2018_02_10 20_30_25 UTC).jpg',
			tags: ['print media', 'IC&ST'],
		},
		'merlo-grid': {
			id: 'merlo-grid',
			title: 'One Solution.',
			client: 'AMS Merlo',
			date: 'September 2016',
			description: 'Full Page Print Advertisement Published in American Cranes & Transport Magazine',
			mainImage: 'img/gd-portfolio/Merlo-Full-Page-Ad-ACT-Sept-2016-(2018_06_05-20_43_50-UTC).jpg',
			tags: ['print media', 'AC&T'],
		},
		'mont-inv': {
			id: 'mont-inv',
			title: 'Open House Invitation',
			client: 'Montgomery Cranes',
			date: 'November 2016',
			description: 'Open House Event Invitation',
			mainImage: 'img/gd-portfolio/Merlo-Montgomery-Open-House-Invite (2018_02_10 18_36_35 UTC).jpg',
			tags: ['print media'],
		},
		'cn-coupon': {
			id: 'cn-coupon',
			title: "10% Off Coupon",
			client: 'Crane Network',
			date: 'August 2016',
			description: 'Printed Coupons',
			mainImage: 'img/gd-portfolio/CNCoupon/coupon-front (2018_02_10 20_30_25 UTC).jpg',
			image1: 'img/gd-portfolio/CNCoupon/coupon-back (2018_02_10 20_30_25 UTC).jpg',
			tags: ['print media'],
		},
	}

	for (prop in portfolioItems) {

		let id = portfolioItems[prop].id;
		let title = portfolioItems[prop].title;
		let client = portfolioItems[prop].client;
		let date = portfolioItems[prop].date;
		let description = portfolioItems[prop].description;
		let link1 = portfolioItems[prop].link1;
		let link2 = portfolioItems[prop].link2;
		let image = portfolioItems[prop].mainImage;
		let image1 = portfolioItems[prop].image1;
		let image2 = portfolioItems[prop].image2;
		let tags = portfolioItems[prop].tags.join(',  ');

		let cardImage = '<img class="card-img" src="' + image + '" alt="' + title + '">';
		let card = $('<div class="card" data-toggle="modal" data-target="#modal' + id + '">' + cardImage + '</div>')

		if (image1) {
			let secImg = '<img class="folio-img-sec" src="' + image1 + '" alt="' + title + '">';
			var bodyImage = '<img class="folio-img" src="' + image + '" alt="' + title + '">' + secImg;
			if (image2) {
				let thirdImg = '<img class="folio-img-sec" src="' + image2 + '" alt="' + title + '">';
				var bodyImage = '<img class="folio-img" src="' + image + '" alt="' + title + '">' + secImg + thirdImg;
			}

		} else {
			var bodyImage = '<img class="folio-img" src="' + image + '" alt="' + title + '">';
		}

		if (link1) {
			var modalBodyContent = '<p>' + description + '</p><p><a href="' + link1 + '" target="_blank" >Click Here for Live Demo</a>&nbsp&nbsp | &nbsp&nbsp<a href="' + link2 + '">Click Here to View GitHub Repo</a></p><p>' + date + '</p><p>' + client + '</p><div>' + bodyImage + '</div><div class="tags">Tags: ' + tags + '</div>';
			if (!link2) {
				var modalBodyContent = '<p>' + description + '</p><p><a href="' + link1 + '" target="_blank">Click Here for Live Demo</a></p><p>' + date + '</p><p>' + client + '</p><div>' + bodyImage + '</div><div class="tags">Tags: ' + tags + '</div>';
			}
		} else {
			var modalBodyContent = '<p>' + description + '</p><p>' + date + '</p><p>' + client + '</p><div>' + bodyImage + '</div><div class="tags">Tags: ' + tags + '</div>';
		}

		let modalCloseTop = '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		let modalHeader = '<div class="modal-header"><h5 class="modal-title" id="modal' + id + 'Label">' + title + '</h5>' + modalCloseTop + '</div>';
		let modalBody = '<div class="modal-body">' + modalBodyContent + '</div>';
		let modalCloseButton = '<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>';
		let modalFooter = '<div class="modal-footer">' + modalCloseButton + '</div>';
		let modalContent = '<div class="modal-content">' + modalHeader + modalBody + modalFooter + '</div>';

		let modalDialog = '<div class="modal-dialog modal-lg" role="document">' + modalContent + '</div>'

		let modal = $('<div class="modal fade" id="modal' + id + '" tabindex="-1" role="dialog" aria-labelledby=modal' + id + 'Label" aria-hidden="true">' + modalDialog + '</div>');

		$("#portfolio-content").append(card);

		$("#portfolio-content").append(modal);

	}

});