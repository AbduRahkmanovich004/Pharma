



const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const YangilanishiCounter = () => {
    const son = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const reduson = son / 10;
    if (c < son) {
      counter.innerText = `${Math.ceil(c + reduson)}`;
      setTimeout(YangilanishiCounter, 100);
    } else {
      counter.innerText = son;
    }
  };
  YangilanishiCounter();
});
