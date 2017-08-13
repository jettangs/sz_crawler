exports.news = {
	body: `$('.lxs-list-content').html()`,
	title: `find('.headline').find('a').html()`,
	content: `$(".container-content").html()`,
	description: `find('.bodytext').html()`,
	link: `find('.headline').find('a').attr('href')`,
	cover: `.find('.lxs-list-pic').find('img').attr('src')`,
	author: `lanxess`,
	host: `https://www.lanxess.com`,
	linkPrefix: ``,
	coverPrefix: `https://www.lanxess.com`
}
