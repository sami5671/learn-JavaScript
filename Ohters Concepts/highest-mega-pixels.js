function cheapestPhone(cameras) {
  var highPixel = cameras[0];
  for (let i = 0; i < cameras.length; i++) {
    const camera = cameras[i];
    if (camera.camera > highPixel.camera) {
      highPixel = camera;
    }
  }
  return highPixel;
}

// Main function section
const cameras = [
  {
    name: "samsung",
    camera: 12,
    Storage: "32gb",
    price: 36000,
    color: "silver",
  },
  {
    name: "walton",
    camera: 14,
    Storage: "32gb",
    price: 32000,
    color: "silver",
  },
  {
    name: "iphone",
    camera: 19,
    Storage: "32gb",
    price: 300000,
    color: "silver",
  },
  { name: "oppo", camera: 12, Storage: "32gb", price: 123000, color: "silver" },
  {
    name: "xaomi",
    camera: 10,
    Storage: "32gb",
    price: 2000,
    color: "silver",
  },
  { name: "nokia", camera: 2, Storage: "32gb", price: 26000, color: "silver" },
  { name: "HTC", camera: 50, Storage: "32gb", price: 16000, color: "silver" },
];

const camera = cheapestPhone(cameras);
console.log(camera);
