console.log('Added queryparameter to all AnchorTags');
var anchors = document.querySelectorAll('a[href]');
for (var i = 0; i < anchors.length ; i++) {
	anchors[i].href += (anchors[i].href.indexOf('?')>-1) ? '&timer=all': '?timer=all';
}
document.querySelector('body').style.color = "white";