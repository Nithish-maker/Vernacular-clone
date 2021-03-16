//for mobile navigation menu 

document.addEventListener('DOMContentLoaded', slideNav); 

function slideNav() {
    let sideNavEle = document.querySelectorAll('.sidenav');
    let instances = M.Sidenav.init(sideNavEle, {});
 }

//for tabs section 

document.addEventListener('DOMContentLoaded',tabSlide);

function tabSlide() {
	let tabMenus = document.querySelectorAll('.tabs');
	let inst = M.Tabs.init(tabMenus, {
		swipeable:false,
		duration:300
	});
}
