const logLabel = 'matoruru/chrome-extension_spin-twitter-dog: '

const appLog = (...args: (string | number)[]) => console.log(`${logLabel} `, ...args)

const getDog = (): Promise<Element> => (
  new Promise((resolve) => {
    const timerId = setInterval(() => {
      const svg = document.querySelector('header svg')
      if (svg) {
        appLog("Dog found! 🐶")
        clearInterval(timerId)
        resolve(svg)
      }
    }, 1000)
  })
)

const spin = (elem: Element): void => {
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

const main = async (): Promise<void> => {
  const dog = await getDog()
  appLog("Let's spin the Twitter dog...")
  spin(dog)
  appLog("Look at the top left of the screen! The dog is spinning!")
};

window.addEventListener("load", main, false);
