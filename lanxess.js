exports.news = {
	body: `$('.lxs-list-content')`,
	title: `find('.headline').find('a').html()`,
	content: `$(".lxs-news-detail").html()`,
	description: `find('.bodytext').html()`,
	link: `find('.headline').find('a').attr('href')`,
	cover: `.find('.lxs-list-pic').find('img').attr('src')`,
	author: `lanxess`,
	host: `https://www.lanxess.com`,
	linkPrefix: ``,
	coverPrefix: `https://www.lanxess.com`
}
