export const onMouseHover = () => {
  const $bigBall = document.querySelector('.cursor__ball--big');
  const $smallBall = document.querySelector('.cursor__ball--small');
  $bigBall.classList.add('hovered');
  $smallBall.classList.add('hovered');
};

export const onMouseHoverOut = () => {
  const $bigBall = document.querySelector('.cursor__ball--big');
  const $smallBall = document.querySelector('.cursor__ball--small');
  $bigBall.classList.remove('hovered');
  $smallBall.classList.remove('hovered');
};

export const onClickCopy = () => {
  const $bigBall = document.querySelector('.cursor__ball--big');
  const $smallBall = document.querySelector('.cursor__ball--small');
  $bigBall.classList.add('copied');
  $smallBall.classList.add('copied');
};

export const onMouseHoverCopy = () => {
  const $bigBall = document.querySelector('.cursor__ball--big');
  const $smallBall = document.querySelector('.cursor__ball--small');
  $bigBall.classList.remove('copied');
  $smallBall.classList.remove('copied');
  $bigBall.classList.add('clicktocopy');
  $smallBall.classList.add('clicktocopy');
};

export const onMouseHoverOutForCopy = () => {
  const $bigBall = document.querySelector('.cursor__ball--big');
  const $smallBall = document.querySelector('.cursor__ball--small');
  $bigBall.classList.remove('copied');
  $smallBall.classList.remove('copied');
  $bigBall.classList.remove('clicktocopy');
  $smallBall.classList.remove('clicktocopy');
};
