$(document).ready(function () {

	const portfolioItems = {
		1: {
			id: '01',
			title: 'BOOM!',
			client: 'TransWorld Manufacturing',
			date: 'July 2017',
			description: 'Social Media and Print Promotion',
			mainImage: 'img/gd-portfolio/TWM-Boom.jpg',
			image1: 'img/gd-portfolio/TWM-Boom-Square.jpg',
			tags: '',
		},
		2: {
			id: '02',
			title: 'Spring is Coming',
			client: 'Transworld Manufacturing',
			date: 'April 2017',
			description: 'Social Media and Print Promotion',
			mainImage: 'img/gd-portfolio/TWM-Spring/TWM-Spring.jpg',
			image1: 'img/gd-portfolio/TWM-Spring/TWM-Spring2.jpg',
			tags: '',
		},
		3: {
			id: '03',
			title: 'Game Changer',
			client: 'Pile Driving Solutions',
			date: 'July 2017',
			description: 'Half Page Magazine Ad Published in American Cranes & Transportation and International Cranes & Specialized Transport Magazine',
			mainImage: 'img/gd-portfolio/PDS-Game-Changer.jpg',
			tags: '',
		},
		4: {
			id: '04',
			title: "International Women's Day",
			client: 'Crane Network',
			date: 'March 2018',
			description: 'Web and Social Media Promotion',
			mainImage: 'img/gd-portfolio/CN-International-Womens-Day.jpg',
			image1: 'img/gd-portfolio/CN-International-Womens-Day-Square.jpg',
			tags: '',
		},
		5: {
			id: '05',
			title: "Crane Snapshot",
			client: 'Crane Network',
			date: 'August 2018',
			description: 'Full Page Print Advertisement Published in International Cranes & Specialized Transport Magazine',
			mainImage: 'img/gd-portfolio/IC&ST-August-Full-Page-airbnb-snapshot-photo (2018_02_10 19_15_37 UTC).jpg',
			tags: '',
		},
		6: {
			id: '06',
			title: "Ace in the Hole",
			client: 'Crane Network',
			date: 'March 2017',
			description: 'Half Page Print Advertisement Published in American Cranes & Transport Magazine for CONEXPO 2017',
			mainImage: 'img/gd-portfolio/ACT-CN-CONEXPO (2018_02_10 20_30_25 UTC).jpg',
			tags: '',
		},
		7: {
			id: '07',
			title: "Imperial Mosiac",
			client: 'Imperial Crane',
			date: 'March 2017',
			description: 'Full Page Print Advertisement Published in American Cranes & Transport Magazine',
			mainImage: 'img/gd-portfolio/ACT-Imperial-ConExpo-Ad (2018_02_10 20_30_25 UTC).jpg',
			tags: '',
		},
		8: {
			id: '08',
			title: 'Fabulous Boom Dollies',
			client: 'Transworld Manufacturing',
			date: 'March 2017',
			description: 'Social Media and Print Promotion for CONEXPO 2017',
			mainImage: 'img/gd-portfolio/TWM-Conexpo.jpg',
			image1: 'img/gd-portfolio/TWM-Conexpo-Square.jpg',
			tags: '',
		},
		9: {
			id: '09',
			title: 'Custom Websites',
			client: 'Crane Network',
			date: 'June 2017',
			description: 'Web and Social Media Promotion',
			mainImage: 'img/gd-portfolio/Website-Linkedin-Promo (2018_02_10 18_36_35 UTC).png',
			tags: '',
		},
		10: {
			id: '10',
			title: 'Custom Websites Flyer',
			client: 'Crane Network',
			date: 'June 2017',
			description: 'Printed Flyer Promotion',
			mainImage: 'img/gd-portfolio/Website-Flyer (2018_02_10 19_15_37 UTC).jpg',
			tags: '',
		},
		11: {
			id: '11',
			title: 'Peace, Joy & Cranes',
			client: 'Crane Network',
			date: 'December 2017',
			description: 'Web and Social Media Promotion for Christmas',
			mainImage: 'img/gd-portfolio/Peace-Joy-and-Cranes---New-Customers (2018_02_10 18_36_35 UTC).jpg',
			tags: '',
		},
		12: {
			id: '12',
			title: 'Back to the Grind',
			client: 'Crane Network',
			date: 'August 2017',
			description: 'Web and Social Media Promotion for Back to School Season',
			mainImage: 'img/gd-portfolio/back-to-the-grind.jpg',
			image1: 'img/gd-portfolio/back-to-the-grind-long.jpg',
			tags: '',
		},
		13: {
			id: '13',
			title: 'Open House Invitation',
			client: 'Montgomery Cranes',
			date: 'November 2016',
			description: 'Open House Event Invitation',
			mainImage: 'img/gd-portfolio/Merlo-Montgomery-Open-House-Invite (2018_02_10 18_36_35 UTC).jpg',
			tags: '',
		},
		14: {
			id: '14',
			title: 'Merry Boom Dolly',
			client: 'TransWorld Manufacturing',
			date: 'December 2017',
			description: 'Christmas Social Media and Web Promotion',
			mainImage: 'img/gd-portfolio/Merry-Boom-Dollies-Sweater-TWM (2018_06_05 20_43_50 UTC).jpg',
			tags: '',
		},
		15: {
			id: '15',
			title: 'Wine Fusion Happy Hour',
			client: 'Grapevine Wine Tours',
			date: 'May 2018',
			description: 'Web and Social Media Promotion',
			mainImage: 'img/gd-portfolio/GWT-Wine-Fusion-Happy-Hour-Invitation (2018_06_06 21_47_54 UTC).jpg',
			tags: '',
		},
		16: {
			id: '16',
			title: 'One Solution.',
			client: 'AMS Merlo',
			date: 'May 2018',
			description: 'Full Page Print Advertisement Published in <i>American Cranes & Transport</i> Magazine',
			mainImage: 'img/gd-portfolio/Merlo-Full-Page-Ad-ACT-Sept-2016-(2018_06_05-20_43_50-UTC).jpg',
			tags: '',
		},
		19: {
			id: '19',
			title: 'Things are Heating Up',
			client: 'Crane Network',
			date: 'June 2017',
			description: 'Web and Social Media Promotion',
			mainImage: 'img/gd-portfolio/heating-up-pool--jpg (2018_02_10 18_36_35 UTC).jpg',
			tags: '',
		},
		20: {
			id: '20',
			title: 'Black Friday / Cyber Monday',
			client: 'Crane Network',
			date: 'June 2017',
			description: 'Web and Social Media Promotion',
			mainImage: 'img/gd-portfolio/CN-Black-Friday/black-friday-special-orange (2018_02_10 20_30_25 UTC).jpg',
			image1: 'img/gd-portfolio/CN-Black-Friday/Cyber-Week-Special (2018_02_10 20_30_25 UTC).jpg',
			tags: '',
		},
		21: {
			id: '21',
			title: 'Kick Off Football Season',
			client: 'Crane Network',
			date: 'September 2017',
			description: 'Web and Social Media Promotion',
			mainImage: 'img/gd-portfolio/Kick-Off-Football-Season (2018_02_10 20_30_25 UTC).jpg',
			tags: '',
		},
		22: {
			id: '22',
			title: 'Corporate Excursions Flyer',
			client: 'Grapevine Wine Tours',
			date: 'October 2018',
			description: 'One Page Print Flyer Promotion',
			mainImage: 'img/gd-portfolio/Corporate-Excursions/Corporate-Excursions-One-Page-Flyer.jpg',
			image1: 'img/gd-portfolio/Corporate-Excursions/Corporate-Excursions-One-Page-Flyer-Back.jpg',
			tags: '',
		},
		23: {
			id: '23',
			title: 'Corporate Excursions',
			client: 'Grapevine Wine Tours',
			date: 'October 2018',
			description: 'Tri-fold Brochure Print Promotion',
			mainImage: 'img/gd-portfolio/Corporate-Excursions/GWT-Corporate-Excursion-Trifold-Brochure-1.jpg',
			image1: 'img/gd-portfolio/Corporate-Excursions/GWT-Corporate-Excursion-Trifold-Brochure-2.jpg',
			tags: '',
		},
		24: {
			id: '24',
			title: 'Valentines Getaway',
			client: 'Grapevine Wine Tours',
			date: 'February 2019',
			description: 'Weba and Social Media Promotion',
			mainImage: 'img/gd-portfolio/Valentines-Getaway-Giveaway.jpg',
			tags: '',
		},
		25: {
			id: '25',
			title: 'Eat, Drink, and Be Merry',
			client: 'Crane Network',
			date: 'December 2018',
			description: 'Christmas Card',
			mainImage: 'img/gd-portfolio/eat-drink-and-be-merry-christmas-card.jpg',
			tags: '',
		},
		27: {
			id: '27',
			title: 'Eat, Drink, and Be Thankful',
			client: 'Grapevine Wine Tours',
			date: 'November 2018',
			description: 'Web and Social Media Promotion',
			mainImage: 'img/gd-portfolio/thanksgiving-eat-drink-and-be-thankful-v2.jpg',
			tags: '',
		},
		28: {
			id: '28',
			title: 'Secure Your Future',
			client: 'DKM Insurance',
			date: 'March 2017',
			description: 'Full Page Print and Flyer Advertisement',
			mainImage: 'img/gd-portfolio/dkm-insurance-flyer.jpg',
			tags: '',
		},
		29: {
			id: '29',
			title: 'A World of Equipment at Your Fingertips',
			client: 'Crane Network',
			date: 'March 2016',
			description: 'Full Page Print Advertisement Published in International Cranes & Specialized Transportation Magazine',
			mainImage: 'img/gd-portfolio/Full-Page-Equipment-Globe-Fingertips-Ad-ICST-March-PSD (2018_02_10 20_30_25 UTC).jpg',
			tags: '',
		},
		30: {
			id: '30',
			title: 'Enter to Win',
			client: 'Crane Network',
			date: 'March 2018',
			description: 'Web and Social Media Contest Promotion',
			mainImage: 'img/gd-portfolio/Crane-Network-Enter-to-Win (2018_06_06 20_47_35 UTC).jpg',
			tags: '',
		},
	}

	for (prop in portfolioItems) {

		let id = portfolioItems[prop].id;
		let title = portfolioItems[prop].title;
		let client = portfolioItems[prop].client;
		let date = portfolioItems[prop].date;
		let description = portfolioItems[prop].description;
		let image = portfolioItems[prop].mainImage;

		let cardImage = '<img class="card-img" src="' + image + '" alt="' + title + '">';
		let bodyImage = '<img class="folio-img" src="' + image + '" alt="' + title + '">';

		let card = $('<div class="card" data-toggle="modal" data-target="#modalName' + id + '">' + cardImage + '</div>')

		let modalBodyContent = '<p>' + description + '</p><p>' + date + '</p><p>' + client + '</p><div>' + bodyImage + '</div>';

		let modalCloseTop = '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
		let modalHeader = '<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel">' + title + '</h5>' + modalCloseTop + '</div>';
		let modalBody = '<div class="modal-body">' + modalBodyContent + '</div>';
		let modalCloseButton = '<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>';
		let modalFooter = '<div class="modal-footer">' + modalCloseButton + '</div>';
		let modalContent = '<div class="modal-content">' + modalHeader + modalBody + modalFooter + '</div>';

		let modalDialog = '<div class="modal-dialog modal-lg" role="document">' + modalContent + '</div>'

		let modal = $('<div class="modal fade" id="modalName' + id + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' + modalDialog + '</div>');

		$("#portfolio-content").append(card);

		$("#portfolio-content").append(modal);


	}



});