mybanners=new Array('engineering_banner1.jpg')
mybannerslinks=new Array('#','#','#')
banner=0
function showLinks(){
	document.location.href="https://www."+mybannerslinks[banner]
}
function ShowBanners(){
	if (document.images) {
	banner++
	if (banner==mybanners.length) {
		banner=0
	}
	document.ChangeBanner.src=mybanners[banner]
	setTimeout("ShowBanners()",5000)
}
}