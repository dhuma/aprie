$('#galaxymag-main-menu').menuify();$('#galaxymag-main-menu .widget').addClass('show-menu');$('.show-search').on('click',function(){$('#nav-search').fadeIn(170).find('input').focus()});$('.hide-search').on('click',function(){$('#nav-search').fadeOut(170).find('input').blur()});$('.blog-posts-headline,.related-title').each(function(){var $t=$(this),$m=$t.find('.more'),$mT=showMoreText;if($mT!=''){$m.text($mT)}});$('.follow-by-email-text').each(function(){var $t=$(this),$fbet=followByEmailText;if($fbet!=''){$t.text($fbet)}});$('#post-body').shortcode({ads:function(){if(this.options!=undefined){var i=this.options.id;switch(i){case'ads1':return'<div id="new-before-ad"/>';break;case'ads2':return'<div id="new-after-ad"/>';break;default:return'';break}}}});$('#new-before-ad').each(function(){var $t=$(this);if($t.length){$('#before-ad').appendTo($t)}});$('#new-after-ad').each(function(){var $t=$(this);if($t.length){$('#after-ad').appendTo($t)}});$('#main-before-ad .widget').each(function(){var $t=$(this);if($t.length){$t.appendTo($('#before-ad'))}});$('#main-after-ad .widget').each(function(){var $t=$(this);if($t.length){$t.appendTo($('#after-ad'))}});$('#social-counter ul.social-icons li a').each(function(){var $t=$(this),$a=$t.find('.count'),$d=$t.data('content').trim(),$s=$d.split('$'),$u=$s[0],$c=$s[1];$t.attr('href',$u);$a.text($c)});$('#sidebar-tabs').each(function(){$('#sidebar-tabs .widget').each(function(){var textTab=$(this).find('.widget-title > h3').text().trim();$(this).attr('tab-ify',textTab)});$('#sidebar-tabs').tabify();var wCount=$('#sidebar-tabs .widget').length;if(wCount>=1){$(this).addClass('tabs-'+wCount).show()}});$('.avatar-image-container img').attr('src',function($this,i){i=i.replace('//resources.blogblog.com/img/blank.gif','//1.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg');i=i.replace('//img1.blogblog.com/img/blank.gif','//1.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg');return i});$('.post-body a').each(function(){var $this=$(this),type=$this.text().trim(),sp=type.split('/'),txt=sp[0],ico=sp[1],color=sp.pop();if(type.match('button')){$this.addClass('button').text(txt);if(ico!='button'){$this.addClass(ico)}if(color!='button'){$this.addClass('colored-button').css({'background-color':color})}}});$('.post-body strike').each(function(){var $this=$(this),type=$this.text().trim(),html=$this.html();if(type.match('contact-form')){$this.replaceWith('<div class="contact-form"/>');$('.contact-form').append($('#ContactForm1'))}if(type.match('alert-success')){$this.replaceWith('<div class="alert-message alert-success short-b">'+html+'</div>')}if(type.match('alert-info')){$this.replaceWith('<div class="alert-message alert-info short-b">'+html+'</div>')}if(type.match('alert-warning')){$this.replaceWith('<div class="alert-message alert-warning short-b">'+html+'</div>')}if(type.match('alert-error')){$this.replaceWith('<div class="alert-message alert-error short-b">'+html+'</div>')}if(type.match('left-sidebar')){$this.replaceWith('<style>.item #main-wrapper{float:right}.item #sidebar-wrapper{float:left}</style>')}if(type.match('right-sidebar')){$this.replaceWith('<style>.item #main-wrapper{float:left}.item #sidebar-wrapper{float:right}</style>')}if(type.match('full-width')){$this.replaceWith('<style>.item #main-wrapper{width:100%}.item #sidebar-wrapper{display:none}</style>')}if(type.match('code-box')){$this.replaceWith('<pre class="code-box short-b">'+html+'</pre>')}var $sb=$('.post-body .short-b').find('b');$sb.each(function(){var $b=$(this),$t=$b.text().trim();if($t.match('alert-success')||$t.match('alert-info')||$t.match('alert-warning')||$t.match('alert-error')||$t.match('code-box')){$b.replaceWith("")}})});$('.share-links .window-ify').on('click',function(){var $this=$(this),url=$this.data('url'),wid=$this.data('width'),hei=$this.data('height'),wsw=window.screen.width,wsh=window.screen.height,mrl=Math.round(wsw/2-wid/2),mrt=Math.round(wsh/2-hei/2),win=window.open(url,'_blank','scrollbars=yes,resizable=yes,toolbar=no,location=yes,width='+wid+',height='+hei+',left='+mrl+',top='+mrt);win.focus()});$('.share-links').each(function(){var $t=$(this),$b=$t.find('.show-hid a');$b.on('click',function(){$t.toggleClass('show-hidden')})});$('.about-author .author-description span a').each(function(){var $this=$(this),cls=$this.text().trim(),url=$this.attr('href');$this.replaceWith('<li class="'+cls+'"><a href="'+url+'" title="'+cls+'" target="_blank"/></li>');$('.author-description').append($('.author-description span li'));$('.author-description').addClass('show-icons')});$('.footer-widgets-wrap').each(function(){var $t=$(this),$n=$t.find('.no-items').length;if($n==3){$('#footer-wrapper').addClass('compact-footer')}});$('#galaxymag-main-menu li').each(function(){var lc=$(this),ltx=lc.find('a'),am=ltx.attr('href'),st=am.toLowerCase(),$this=lc,li=$this,text=st;if(st.match('getmega')){$this.addClass('has-sub mega-menu').append('<div class="getMega">'+am+'</div>')}$this.find('.getMega').shortcode({getMega:function(){var label=this.options.label,type=this.options.type,num=5;ajaxMega($this,type,num,label,text);if(type=='mtabs'){if(label!=undefined){label=label.split('/')}megaTabs(li,type,label)}}})});function megaTabs(li,type,label){if(type=='mtabs'){if(label!=undefined){var lLen=label.length,code='<ul class="complex-tabs">';for(var i=0;i<lLen;i++){var tag=label[i];if(tag){code+='<div class="mega-tab" tab-ify="'+tag+'"/>'}}code+='</ul>';li.addClass('mega-tabs mtabs').append(code);li.find('a:first').attr('href','javascript:;');$('.mega-tab').each(function(){var $this=$(this),label=$this.attr('tab-ify');ajaxMega($this,'megatabs',4,label,'getmega')});li.find('ul.complex-tabs').tabify({onHover:true})}else{li.addClass('mega-tabs').append('<ul class="mega-widget">'+msgError()+'</ul>')}}}$('#breaking-sec .HTML .widget-content').each(function(){var $this=$(this),text=$this.text().trim().toLowerCase();$this.shortcode({getBreaking:function(){var num=this.options.results,label=this.options.label;ajaxBreaking($this,'breaking',num,label,text)}})});$('#featured-sec .HTML .widget-content').each(function(){var $this=$(this),text=$this.text().trim().toLowerCase();$this.shortcode({getFeatured:function(){var label=this.options.label,type=this.options.type;switch(type){case'featured1':var num=4;break;case'featured3':num=6;break;case'featured6':num=3;break;default:num=5;break}ajaxFeatured($this,type,num,label,text)}})});$('.block-posts .HTML .widget-content').each(function(){var $this=$(this),text=$this.text().trim().toLowerCase();$this.shortcode({getBlock:function(){var num=this.options.results,label=this.options.label,type=this.options.type;ajaxBlock($this,type,num,label,text)}})});$('.galaxymag-widget-ready .HTML .widget-content').each(function(){var $this=$(this),text=$this.text().trim().toLowerCase();$this.shortcode({getWidget:function(){var num=this.options.results,label=this.options.label,type=this.options.type;ajaxWidget($this,type,num,label,text)}})});$('.galaxymag-related-content').each(function(){var $this=$(this),label=$this.find('.related-tag').attr('data-label'),num=relatedPostsNum;if(num>=6){num=6}else{num=3}ajaxRelated($this,'related',num,label,'getrelated')});function msgError(){return'<span class="no-posts"><b>Error:</b> No Results Found</span>'}function msgServerError(){return'<div class="no-posts error-503"><b>Failed to load resource:</b> the server responded with a status of 503</div>'}function beforeLoader(){return'<div class="loader"/>'}function getFeedUrl(type,num,label){var furl='';switch(label){case'recent':furl='/feeds/posts/default?alt=json&max-results='+num;break;case'comments':if(type=='list'){furl='/feeds/comments/default?alt=json&max-results='+num}else{furl='/feeds/posts/default/-/'+label+'?alt=json&max-results='+num}break;default:furl='/feeds/posts/default/-/'+label+'?alt=json&max-results='+num;break}return furl}function getPostLink(feed,i){for(var x=0;x<feed[i].link.length;x++)if(feed[i].link[x].rel=='alternate'){var link=feed[i].link[x].href;break}return link}function getPostTitle(feed,i){var n=feed[i].title.$t;return n}function getFirstImage($c,img){var $h=$('<div>').html($c),$t=$h.find('img:first').attr('src'),$a=$t.lastIndexOf('/')||0,$b=$t.lastIndexOf('/',$a-1)||0,$p0=$t.substring(0,$b),$p1=$t.substring($b,$a),$p2=$t.substring($a);if($p1.match(/\/s[0-9]+/g)||$p1.match(/\/w[0-9]+/g)||$p1=='/d'){$p1='/w72-h72-p-k-no-nu'}img=$p0+$p1+$p2;return img}function getPostImage(feed,i,img){var $c=feed[i].content.$t;if(feed[i].media$thumbnail){var src=feed[i].media$thumbnail.url}else{src='https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png'}if($c.indexOf($c.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))>-1){if($c.indexOf('<img')>-1){if($c.indexOf($c.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g))<$c.indexOf('<img')){img=src.replace('/default.','/0.')}else{img=getFirstImage($c)}}else{img=src.replace('/default.','/0.')}}else if($c.indexOf('<img')>-1){img=getFirstImage($c)}else{img='https://4.bp.blogspot.com/-eALXtf-Ljts/WrQYAbzcPUI/AAAAAAAABjY/vptx-N2H46oFbiCqbSe2JgVSlHhyl0MwQCK4BGAYYCw/s72-c/nth-ify.png'}return img}function getPostAuthor(feed,i){var n=feed[i].author[0].name.$t,by=messages.postedBy,em='';if(by!=''){em='<em>'+by+'</em>'}else{em=''}var code='<span class="entry-author">'+em+'<span class="by">'+n+'</span></span>';return code}function getPostDate(feed,i){var c=feed[i].published.$t,d=c.substring(0,4),f=c.substring(5,7),m=c.substring(8,10),h=monthFormat[parseInt(f,10)-1]+' '+m+', '+d;var on=messages.postedOn,em='';if(on!=''){em='<em>'+on+'</em>'}else{em=''}var code=['<span class="entry-time">'+em+'<time class="published" datetime="'+c+'">'+h+'</time></span>','<span class="entry-time"><time class="published" datetime="'+c+'">'+h+'</time></span>'];return code}function getPostLabel(feed,i){if(feed[i].category!=undefined){var tag=feed[i].category[0].term,code='<span class="entry-category">'+tag+'</span>'}else{code=''}return code}function getPostComments(feed,i,link){var n=feed[i].author[0].name.$t,e=feed[i].author[0].gd$image.src.replace('/s113','/w55-h55-p-k-no-nu'),h=feed[i].title.$t;if(e.match('//img1.blogblog.com/img/blank.gif')){var img='//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w55-h55-p-k-no-nu/avatar.jpg'}else{var img=e}var code='<article class="custom-item item-'+i+'"><a class="entry-image-link cmm-avatar" href="'+link+'" itemprop="url"><span class="entry-thumb" data-image="'+img+'"/></a><h2 class="entry-title"><a href="'+link+'" itemprop="url">'+n+'</a></h2><span class="cmm-snippet excerpt">'+h+'</span></article>';return code}function getFeatMeta(type,i,author,date){var code='<div class="entry-meta">'+date[1]+'</div>';switch(type){case'featured1':case'featured2':case'featured3':case'featured4':case'featured5':case'featured6':switch(i){case 0:switch(type){case'featured1':case'featured2':case'featured4':code='<div class="entry-meta">'+author+date[0]+'</div>';break}break;case 1:switch(type){case'featured4':code='<div class="entry-meta">'+author+date[0]+'</div>';break}break}break}return code}function getAjax($this,type,num,label){switch(type){case'msimple':case'megatabs':case'breaking':case'featured1':case'featured2':case'featured3':case'featured4':case'featured5':case'featured6':case'block1':case'block2':case'col-left':case'col-right':case'grid1':case'grid2':case'carousel':case'videos':case'list':case'related':if(label==undefined){label='geterror404'}var furl=getFeedUrl(type,num,label);$.ajax({url:furl,type:'GET',dataType:'json',cache:true,beforeSend:function(data){switch(type){case'featured1':case'featured2':case'featured3':case'featured4':case'featured5':case'featured6':$this.html(beforeLoader()).parent().addClass('show-ify show-'+type+'');break;case'block1':case'block2':case'grid1':case'grid2':case'videos':case'carousel':case'related':$this.html(beforeLoader()).parent().addClass('show-ify');break;case'col-left':$this.html(beforeLoader()).parent().addClass('column-left block-column show-ify');break;case'col-right':$this.html(beforeLoader()).parent().addClass('column-right block-column show-ify');break;case'list':$this.html(beforeLoader());break}},success:function(data){var html='';switch(type){case'msimple':case'megatabs':html='<ul class="mega-widget">';break;case'breaking':html='<div class="breaking-news">';break;case'featured1':case'featured2':case'featured3':case'featured4':case'featured5':case'featured6':html='<div class="featured-grid '+type+'">';break;case'block1':html='<div class="block-posts-1">';break;case'block2':html='<div class="block-posts-2 total-'+num+'">';break;case'col-left':case'col-right':html='<div class="column-posts">';break;case'grid1':html='<div class="grid-posts-1 total-'+num+'">';break;case'grid2':html='<div class="grid-posts-2">';break;case'carousel':html='<div class="block-carousel">';break;case'videos':html='<div class="block-videos total-'+num+'">';break;case'list':html='<div class="custom-widget">';break;case'related':html='<div class="related-posts total-'+num+'">';break}var entry=data.feed.entry;if(entry!=undefined){for(var i=0,feed=entry;i<feed.length;i++){var link=getPostLink(feed,i),title=getPostTitle(feed,i,link),image=getPostImage(feed,i,link),author=getPostAuthor(feed,i),date=getPostDate(feed,i),tag=getPostLabel(feed,i),feat_meta=getFeatMeta(type,i,author,date);var content='';switch(type){case'msimple':case'megatabs':content+='<article class="mega-item"><div class="mega-content"><a class="entry-image-link" href="'+link+'" itemprop="url"><span class="entry-thumb" data-image="'+image+'"/></a><h2 class="entry-title"><a href="'+link+'" itemprop="url">'+title+'</a></h2><div class="entry-meta">'+date[1]+'</div></div></article>';break;case'breaking':content+='<article class="breaking-item"><h2 class="entry-title"><a href="'+link+'" itemprop="url">'+title+'</a></h2></article>';break;case'featured1':case'featured2':case'featured3':case'featured4':case'featured5':case'featured6':switch(i){case 0:content+='<article class="featured-item item-'+i+'"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="'+link+'" itemprop="url"><span class="entry-thumb" data-image="'+image+'"/></a><div class="entry-info">'+tag+'<h2 class="entry-title"><a href="'+link+'" itemprop="url">'+title+'</a></h2>'+feat_meta+'</div></div></article><div class="featured-scroll">';break;default:content+='<article class="featured-item item-'+i+'"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="'+link+'" itemprop="url"><span class="entry-thumb" data-image="'+image+'"/></a><div class="entry-info">'+tag+'<h2 class="entry-title"><a href="'+link+'" itemprop="url">'+title+'</a></h2>'+feat_meta+'</div></div></article>';break}break;case'block1':switch(i){case 0:content+='<article class="block-item item-'+i+'"><div class="block-inner"><a class="entry-image-link before-mask" href="'+link+'" itemprop="url"><span class="entry-thumb" data-image="'+image+'"/></a><div class="entry-info">'+tag+'<h2 class="entry-title"><a href="'+link+'" itemprop="url">'+title+'</a></h2><div class="entry-meta">'+author+date[0]+'</div></div></div></article>';break;default:content+='<article class="block-item item-'+i+'"><a class="entry-image-link" href="'+link+'" itemprop="url"><span class="entry-thumb" data-image="'+image+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+link+'" itemprop="url">'+title+'</a></h2><div class="entry-meta">'+date[1]+'</div></div></article>';break}break;case'block2':switch(i){case 0:content+='<article class="block-item item-'+i+'"><div class="block-inner"><a class="entry-image-link before-mask" href="'+link+'" itemprop="url"><span class="entry-thumb" data-image="'+image+'"/></a><div class="entry-info">'+tag+'<h2 class="entry-title"><a href="'+link+'" itemprop="url">'+title+'</a></h2><div class="entry-meta">'+author+date[0]+'</div></div></div></article><div class="block-grid">';break;default:content+='<article class="block-item item-'+i+'"><div class="entry-image"><a class="entry-image-link" href="'+link+'" itemprop="url"><span class="entry-thumb" data-image="'+image+'"/></a></div><h2 class="entry-title"><a href="'+link+'" itemprop="url">'+title+'</a></h2><div class="entry-meta">'+date[1]+'</div></article>';break}break;case'col-left':case'col-right':switch(i){case 0:content+='<article class="column-item item-'+i+'"><div class="column-inner"><a class="entry-image-link before-mask" href="'+link+'" itemprop="url"><span class="entry-thumb" data-image="'+image+'"/></a><div class="entry-info">'+tag+'<h2 class="entry-title"><a href="'+link+'" itemprop="url">'+title+'</a></h2><div class="entry-meta">'+author+date[0]+'</div></div></div></article>';break;default:content+='<article class="column-item item-'+i+'"><a class="entry-image-link" href="'+link+'" itemprop="url"><span class="entry-thumb" data-image="'+image+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+link+'" itemprop="url">'+title+'</a></h2><div class="entry-meta">'+date[1]+'</div></div></article>';break}break;case'grid1':content+='<article class="grid-item item-'+i+'"><div class="entry-image"><a class="entry-image-link" href="'+link+'" itemprop="url"><span class="entry-thumb" data-image="'+image+'"/></a></div><h2 class="entry-title"><a href="'+link+'" itemprop="url">'+title+'</a></h2><div class="entry-meta">'+date[1]+'</div></article>';break;case'grid2':content+='<article class="grid-item item-'+i+'"><div class="entry-image"><a class="entry-image-link" href="'+link+'" itemprop="url"><span class="entry-thumb" data-image="'+image+'"/></a>'+tag+'</div><h2 class="entry-title"><a href="'+link+'" itemprop="url">'+title+'</a></h2><div class="entry-meta">'+author+date[0]+'</div></article>';break;case'carousel':content+='<article class="carousel-item item-'+i+'"><div class="entry-image"><a class="entry-image-link" href="'+link+'" itemprop="url"><span class="entry-thumb" data-image="'+image+'"/></a></div><h2 class="entry-title"><a href="'+link+'" itemprop="url">'+title+'</a></h2><div class="entry-meta">'+date[1]+'</div></article>';break;case'videos':content+='<article class="videos-item item-'+i+'"><div class="entry-image"><a class="entry-image-link" href="'+link+'" itemprop="url"><span class="entry-thumb" data-image="'+image+'"/><span class="video-icon"/></a></div><h2 class="entry-title"><a href="'+link+'" itemprop="url">'+title+'</a></h2><div class="entry-meta">'+date[1]+'</div></article>';break;case'list':switch(label){case'comments':var code=getPostComments(feed,i,link);content+=code;break;default:content+='<article class="custom-item item-'+i+'"><a class="entry-image-link" href="'+link+'" itemprop="url"><span class="entry-thumb" data-image="'+image+'"/></a><div class="entry-header"><h2 class="entry-title"><a href="'+link+'" itemprop="url">'+title+'</a></h2><div class="entry-meta">'+date[1]+'</div></div></article>';break}break;case'related':content+='<article class="related-item item-'+i+'"><div class="related-item-inner"><div class="entry-image"><a class="entry-image-link" href="'+link+'" itemprop="url"><span class="entry-thumb" data-image="'+image+'"/></a></div><h2 class="entry-title"><a href="'+link+'" itemprop="url">'+title+'</a></h2><div class="entry-meta">'+date[1]+'</div></div></article>';break}html+=content}}else{switch(type){case'msimple':case'megatabs':html='<ul class="mega-widget">'+msgError()+'</ul>';break;default:html=msgError();break}}switch(type){case'msimple':html+='</ul>';$this.append(html).addClass('msimple');$this.find('a:first').attr('href',function($this,href){switch(label){case'recent':href=href.replace(href,'/search');break;default:href=href.replace(href,'/search/label/'+label);break}return href});break;case'breaking':html+='</div></ul>';$this.html(html).parent().addClass('show-ify');var $slider=$this.find('.breaking-news');$slider.owlCarousel({items:1,animateOut:'fadeOutRight',animateIn:'fadeInRight',smartSpeed:0,rtl:slideRTL,nav:true,navText:['',''],loop:true,autoplay:true,autoplayHoverPause:true,dots:false,mouseDrag:false,touchDrag:false,freeDrag:false,pullDrag:false});break;case'featured1':case'featured2':case'featured3':case'featured4':case'featured5':case'featured6':html+='</div></div>';$this.html(html);break;case'block1':case'grid1':case'grid2':case'col-left':case'col-right':case'videos':html+='</div>';$this.html(html);break;case'block2':html+='</div></div>';$this.html(html);break;case'carousel':html+='</div>';$this.html(html);var $slider=$this.find('.block-carousel');$slider.owlCarousel({items:3,slideBy:3,margin:20,smartSpeed:150,rtl:slideRTL,nav:true,navText:['',''],loop:true,autoHeight:true,autoplay:false,dots:false,responsive:{0:{items:1},541:{items:2},681:{items:3}}});break;default:html+='</div>';$this.html(html);break}$this.find('span.entry-thumb').lazyify()},error:function(){switch(type){case'msimple':$this.append('<ul>'+msgServerError()+'</ul>');break;case'breaking':$this.html(msgServerError()).parent().addClass('show-ify');break;default:$this.html(msgServerError());break}}})}}function ajaxMega($this,type,num,label,text){if(text.match('getmega')){if(type=='msimple'||type=='megatabs'||type=='mtabs'){return getAjax($this,type,num,label)}else{$this.addClass('has-sub mega-menu').append('<ul class="mega-widget">'+msgError()+'</ul>')}}}function ajaxBreaking($this,type,num,label,text){if(text.match('getbreaking')){if(type=='breaking'){return getAjax($this,type,num,label)}else{$this.html(msgError()).parent().addClass('show-ify')}}}function ajaxFeatured($this,type,num,label,text){if(text.match('getfeatured')){if(type=='featured1'||type=='featured2'||type=='featured3'||type=='featured4'||type=='featured5'||type=='featured6'){return getAjax($this,type,num,label)}else{$this.html(beforeLoader()).parent().addClass('show-ify');setTimeout(function(){$this.html(msgError())},500)}}}function ajaxBlock($this,type,num,label,text){if(text.match('getblock')){if(type=='block1'||type=='block2'||type=='col-left'||type=='col-right'||type=='grid1'||type=='grid2'||type=='carousel'||type=='videos'){var moreText=showMoreText,text='';if(moreText!=''){text=moreText}else{text=messages.showMore}$this.parent().find('.widget-title').append('<a class="more" href="/search/label/'+label+'">'+text+'</a>');return getAjax($this,type,num,label)}else{$this.html(msgError()).parent().addClass('show-ify')}}}function ajaxWidget($this,type,num,label,text){if(text.match('getwidget')){if(type=='list'){return getAjax($this,type,num,label)}else{$this.html(msgError())}}}function ajaxRelated($this,type,num,label,text){if(text.match('getrelated')){return getAjax($this,type,num,label)}}$('.comments-title h3.title').each(function(){var $t=$(this),$tx=$t.text().trim(),$c=$t.attr('count').trim(),$m=$t.attr('message').trim(),$sp=$tx.split('/'),$r='';if($c==0){$r=$sp[1]}else{if($sp[2]==undefined){$r=$sp[0]+' '+$m}else{$r=$sp[0]+' '+$sp[2]}}$t.text($r)});$('.galaxymag-blog-post-comments').each(function(){var $this=$(this),system=commentsSystem,facebook='<div class="fb-comments" data-width="100%" data-href="'+disqus_blogger_current_url+'" order_by="time" data-numposts="5"></div>',sClass='comments-system-'+system;switch(system){case'blogger':$this.addClass(sClass).show();$('.entry-meta .entry-comments-link').addClass('show');break;case'disqus':$this.addClass(sClass).show();break;case'facebook':$this.addClass(sClass).show().find('#comments').replaceWith(facebook);break;case'hide':$this.hide();break;default:$this.addClass('comments-system-default').show();$('.entry-meta .entry-comments-link').addClass('show');break}var $r=$this.find('.comments .toplevel-thread > ol > .comment .comment-actions .comment-reply'),$c=$this.find('.comments .toplevel-thread > #top-continue');$r.on('click',function(){$c.show()});$c.on('click',function(){$c.hide()})});$(function(){$('.index-post .entry-image-link .entry-thumb, .PopularPosts .entry-image-link .entry-thumb, .FeaturedPost .entry-image-link .entry-thumb,.about-author .author-avatar').lazyify();$('.mobile-logo').each(function(){var $t=$(this),$l=$('#main-logo .header-widget a').clone();$l.find('#h1-tag').remove();$l.appendTo($t)});$('#mobile-menu').each(function(){var $t=$(this),$m=$('#galaxymag-main-menu-nav').clone();$m.attr('id','main-mobile-nav');$m.find('.getMega, .mega-widget, .mega-tab').remove();$m.find('li.mega-tabs .complex-tabs').each(function(){var $eq=$(this);$eq.replaceWith($eq.find('> ul.select-tab').attr('class','sub-menu m-sub'))});$m.find('.mega-menu:not(.mega-tabs) > a').each(function(){var $t=$(this),$h=$t.attr('href').trim(),$tlc=$h.toLowerCase();if($tlc.match('getmega')){$t.append('<div class="getMega">'+$h+'</div>');$t.find('.getMega').shortcode({getMega:function($u,$l){$l=this.options.label;$l=='recent'?$u='/search':$u='/search/label/'+$l;$t.attr('href',$u)}})}});$m.find('.mega-tabs ul li > a').each(function(){var $a=$(this),$l=$a.text().trim();$a.attr('href','/search/label/'+$l)});$m.appendTo($t);$('.show-mobile-menu, .hide-mobile-menu, .overlay').on('click',function(){$('body').toggleClass('nav-active')});$('.mobile-menu .has-sub').append('<div class="submenu-toggle"/>');$('.mobile-menu .mega-menu').find('.submenu-toggle').remove();$('.mobile-menu .mega-tabs').append('<div class="submenu-toggle"/>');$('.mobile-menu ul li .submenu-toggle').on('click',function($this){if($(this).parent().hasClass('has-sub')){$this.preventDefault();if(!$(this).parent().hasClass('show')){$(this).parent().addClass('show').children('.m-sub').slideToggle(170)}else{$(this).parent().removeClass('show').find('> .m-sub').slideToggle(170)}}})});$('.social-mobile').each(function(){var $t=$(this),$l=$('#about-section .social-footer').clone();$l.removeClass('social-color');$l.appendTo($t)});

/*
$('.navbar-wrap').each(function(){var $this=$(this);if(fixedMenu==true){if($this.length>0){var t=$(document).scrollTop(),w=$this.offset().top,s=$this.height(),h=(w+s);$(window).scroll(function(){var n=$(document).scrollTop(),f=$('#footer-wrapper').offset().top,m=(f-s);if(n<m){if(n>h){$this.addClass('is-fixed')}else if(n<=0){$this.removeClass('is-fixed')}if(n>t){$this.removeClass('show')}else{$this.addClass('show')}t=$(document).scrollTop()}})}}});
*/

$('#main-wrapper, #sidebar-wrapper').each(function(){if(fixedSidebar==true){$(this).theiaStickySidebar({additionalMarginTop:30,additionalMarginBottom:30})}});


$('.back-top').each(function(){var $this=$(this);$(window).on('scroll',function(){$(this).scrollTop()>=100?$this.fadeIn(250):$this.fadeOut(250)}),$this.click(function(){$('html, body').animate({scrollTop:0},500)})});$('#post-body iframe').each(function(){var $t=$(this),$mtc=$t.attr('src');if($mtc.match('www.youtube.com')){$t.wrap('<div class="responsive-video-wrap"/>')}});$('p.comment-content').each(function(){var $t=$(this);$t.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g,'<img src="$1"/>');$t.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g,'<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')});$('#load-more-link').each(function(){var $this=$(this),$loadLink=$this.data('load');if($loadLink){$('#load-more-link').show()}$('#load-more-link').on('click',function(a){$('#load-more-link').hide();$.ajax({url:$loadLink,success:function(data){var $p=$(data).find('.blog-posts');$p.find('.index-post').addClass('post-animated post-fadeInUp');$('.blog-posts').append($p.html());$loadLink=$(data).find('#load-more-link').data('load');if($loadLink){$('#load-more-link').show()}else{$('#load-more-link').hide();$('#blog-pager .no-more').addClass('show')}$('.index-post .entry-image-link .entry-thumb').lazyify()},beforeSend:function(){$('#blog-pager .loading').show()},complete:function(){$('#blog-pager .loading').hide()}});a.preventDefault()})})});
$("[href*='https://www.aprie.net/'], [src*='https://www.aprie.net/'], [content*='https://www.aprie.net/']").each(function(){

          var element = $(this);

	      var href    = (element.attr("href")    || "").replace("https://www.aprie.net/", "https://www.aprie.my.id/");
          var src     = (element.attr("src")     || "").replace("https://www.aprie.net/", "https://www.aprie.my.id/");
          var content = (element.attr("content") || "").replace("https://www.aprie.net/", "https://www.aprie.my.id/");

          element.attr("href"   , href);
          element.attr("src"    , src);
          element.attr("content", content);

});
