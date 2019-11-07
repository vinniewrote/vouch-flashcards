

export const shuffle = function (flashCardPack) {
    let currentIndex = flashCardPack.length;
    let temporaryValue;
    let randomIndex;

      while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex = currentIndex - 1;
          temporaryValue = flashCardPack[currentIndex];
      flashCardPack[currentIndex] = flashCardPack[randomIndex];
      flashCardPack[randomIndex] = temporaryValue;
      }
      return flashCardPack;
  };
