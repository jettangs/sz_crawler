exports.news = {
	body: `$('.content')`,
	prefix: `https://press.covestro.com/news.nsf/id/`,
	content: `$(".container-content").html()`,
	title: `find('.headline').find('a').html()`,
	description: `find('.underline').html()`,
	link: `find('.headline').find('a').attr('href')`,
	cover: `.find('img').attr('src')`,
	author: `covestro`,
	host: `https://press.covestro.com`
}
