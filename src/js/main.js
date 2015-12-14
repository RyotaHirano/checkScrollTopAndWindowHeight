import $ from 'jquery';
import scrollAnimation from './lib/scroll-animation';

let domE;
let domB;

(function() {
  $(document).ready(() => {
    domE = document.documentElement;
    domB = document.body;

    scrollAnimation();
    resize();
  });

  $(window).on('scroll', e => {
    const js_ScrollTop = domE.scrollTop || domB.scrollTop;
    const jQuery_ScrollTop = $(e.target).scrollTop();
    renderScrollTop(js_ScrollTop, jQuery_ScrollTop);
    renderViewArea();
    changeFontColor(js_ScrollTop);
  });

  $(window).on('resize', () => {
    resize();
  });
})();

function resize() {
  const arrHeight = [];
  arrHeight.push(domE.clientHeight);
  arrHeight.push(screen.height);
  arrHeight.push(window.innerHeight);
  arrHeight.push(window.outerHeight);
  arrHeight.push($(window).height());
  arrHeight.push($(document).height());

  renderWindowHeight(arrHeight);
  renderViewArea();
}

function renderScrollTop(js_ScrollTop, jQuery_ScrollTop) {
  $('.js-render-js-scrollTop').text(js_ScrollTop);
  $('.js-render-jQuery-scrollTop').text(jQuery_ScrollTop);
}

function renderWindowHeight(arrHeight) {
  $('.js-render-js-documentClientHeight').text(arrHeight[0]);
  $('.js-render-js-screenHeight').text(arrHeight[1]);
  $('.js-render-js-windowInnerHeight').text(arrHeight[2]);
  $('.js-render-js-windowOuterHeight').text(arrHeight[3]);

  $('.js-render-jQuery-windowHeight').text(arrHeight[4]);
  $('.js-render-jQuery-documentHeight').text(arrHeight[5]);
}

function changeFontColor(scrollTop) {
  const pageTotalHeight = $(document).height();
  const currentPositionPer = Math.ceil((scrollTop / pageTotalHeight) * 100);

  const hsla = `hsla(0, 5%, ${currentPositionPer}%, 1)`;
  $('body').css('color', hsla);
}

function renderViewArea() {
  const js_ScrollTop = domE.scrollTop || domB.scrollTop;
  const js_viewArea = js_ScrollTop + window.innerHeight;
  const jQuery_viewArea = $(window).scrollTop() + $(window).height();

  $('.js-render-js-viewArea').text(js_viewArea);
  $('.js-render-jQuery-viewArea').text(jQuery_viewArea);
}
