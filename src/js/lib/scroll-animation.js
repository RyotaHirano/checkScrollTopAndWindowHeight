import $ from 'jquery';

export default function scrollAnimation() {
  $('.animation-contents').scrollTop(0);
  $('.animation-contents').scroll(e => {
    const targetScrollTop = $(e.target).scrollTop();
    console.log(targetScrollTop);
    if (targetScrollTop >= 1000) {
      $('.a-item--1').stop().fadeTo('slow', 1);
    } else {
      $('.a-item--1').stop().animate({ opacity: '0' }, 200);
    }
  });
}
