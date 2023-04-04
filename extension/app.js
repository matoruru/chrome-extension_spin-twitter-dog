const getDog = () => document.querySelector('svg')

const spin = (elem) => {
  elem.animate(
    [
      {
        transform: "rotate(360deg)",
      }
    ],
    {
      duration: 1000,
      easing: 'linear',
      iterations: Infinity
    }
  )
}

const main = (e) => {
  const dog = getDog()
  spin(dog)
};

window.addEventListener("load", main, false);
