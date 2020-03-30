interface I_SquareSignature {
  color?: string;
  width?: number;
}

interface I_Square {
  color: string;
  area: number;
}

function createSquare(config: I_SquareSignature): I_Square {
  let resultSquare = {
    color: "white",
    area: 100
  };
  
  if (config.color) {
    resultSquare.color = config.color
  }

  if (config.width) {
    resultSquare.area = Math.pow(config.width, 2)
  }

  return resultSquare;
}

console.log(createSquare({color: "black"}));