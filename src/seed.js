export function seedDatabase(firebase) {
  function getUUID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const piece = (Math.random() * 16) | 0;
      const elem = c === "x" ? piece : (piece & 0x3) | 0x8;
      return elem.toString(16);
    });
  }

  

  /*"Devices
    ============================================ */
  // Mac
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "Macbook Air",
    price:
      "999",
    modelno: "A1001",
    processor: "15",
    memory: "128gb",
    os: "MacOS",
  });
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "Macbook Pro 13",
    price:
      "1299",
    modelno: "A1010",
    processor: "15",
    memory: "256gb",
    os: "MacOS",
  });
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "Macbook Pro 14",
    price:
      "1999",
    modelno: "A1298",
    processor: "M1 pro",
    memory: "512gb",
    os: "MacOS",
  });
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "Macbook Pro 16",
    price:
      "2999",
    modelno: "A3965",
    processor: "M1 max",
    memory: "1Tb",
    os: "MacOS",
  });
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "Macbook pro ultra deluxe",
    price:
      "9999",
    modelno: "A7949",
    processor: "M1 ultra",
    memory: "900Tb",
    os: "MacOS",
  });

  // Windows
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "Lenovo Legion 5",
    price:
      "1299",
    modelno: "5amd3050",
    processor: "5800h",
    memory: "512gb",
    os: "windows 10",
  });
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "Lenovo Legion 5 pro",
    price:
      "1599",
    modelno: "5pamd3060",
    processor: "5800h",
    memory: "512gb",
    os: "windows 10",
  });
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "Lenovo Legion 7",
    price:
      "1899",
    modelno: "7amd3070",
    processor: "5900HX",
    memory: "1Tb",
    os: "windows 10",
  });
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "HP omen 17",
    price:
      "1199",
    modelno: "Hsucflimsy",
    processor: "i7-1180",
    memory: "256gb",
    os: "windows 10",
  });
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "Dell G15",
    price:
      "999",
    modelno: "DROC3060",
    processor: "i7-11800h",
    memory: "512gb",
    os: "windows 10",
  });

  // Iphone
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "Iphone 11",
    price:
      "599",
    modelno: "I11v3m",
    processor: "A12B",
    memory: "128gb",
    os: "IOS11",
    brand: "Apple",
  });
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "Iphone 12",
    price:
      "699",
    modelno: "I12v5m",
    processor: "A13B",
    memory: "512gb",
    os: "IOS11",
    brand: "Apple",
  });
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "Iphone 12 pro",
    price:
      "799",
    modelno: "I12p3m",
    processor: "A13B",
    memory: "512gb",
    os: "IOS11",
    brand: "Apple",
  });
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "Iphone 13 mini",
    price:
      "899",
    modelno: "I13m5m",
    processor: "A15B",
    memory: "126gb",
    os: "IOS11",
    brand: "Apple",
  });
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "Iphone 13",
    price:
      "999",
    modelno: "I137v3",
    processor: "A15B",
    memory: "256gb",
    os: "IOS11",
    brand: "Apple",
  });

  // Android
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "Fold 5G",
    price:
      "799",
    modelno: "F995G",
    processor: "Snapdragon 888",
    memory: "512gb",
    os: "Android",
    brand: "Samsung",
  });
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "S20",
    price:
      "699",
    modelno: "S20a4m",
    processor: "Snapdragon 878",
    memory: "256gb",
    os: "Android",
    brand: "Samsung",
  });
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "Oneplus 9",
    price:
      "699",
    modelno: "191268",
    processor: "Snapdragon 878",
    memory: "128gb",
    os: "Android",
    brand: "Oneplus",
  });
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "Xperia Pro",
    price:
      "1199",
    modelno: "EXHD989",
    processor: "Snapdragon 888",
    memory: "512gb",
    os: "Android",
    brand: "Sony",
  });
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "Pixel 6",
    price:
      "899",
    modelno: "GP6P8Z",
    processor: "Snapdragon 878",
    memory: "128gb",
    os: "Android",
    brand: "Google",
  });

  // Camera
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "Sony - ZV-1 20.1-Megapixel Digital Camera",
    description:
      "for Content Creators and Vloggers - Black",
    price: "749",
  });
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "Sony - Alpha ZV-E10 Mirrorless Vlog Camera",
    description:
      "The ZV-E10 features a large sensor with E-mount interchangeable lens options for a wide selection of lenses, flip-out vari-angle LCD, advanced audio options and features specifically designed for vlogging.",
    price: "699"
  });
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "Sony - Alpha a6400 Mirrorless Camera with E PZ 16-50mm f/3.5-5.6 OSS Lens - Black",
    description:
      "Capture high-quality photos and video with this Sony Alpha a6400 mirrorless camera, which boasts both automatic and manual focus options. The internal 4K Ultra HD movie recording function features fast, stable focusing for detailed picture quality, and the BIONZ X image processing engine captures clear action shots. This Sony Alpha a6400 mirrorless camera comes with a 16-50mm lens, so you can zero in on your subject without blurs and shadows.",
    price: "999",
  });
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "Sony - Alpha 6600 Mirrorless 4K Video Camera with E 18-135mm Lens - Black",
    description:
      "Preserve cherished moments in fabulously detailed photos and video with this Sony Alpha 6600 mirrorless digital camera kit. The 24.2MP APS-C Exmor CMOS sensor, 4D FOCUS system and Real-time Eye AF deliver stunning dynamic range, smooth image quality and incredible color. This Sony Alpha 6600 mirrorless digital camera kit comes with an 18-135mm f/3.5-5.6 lens so you can instantly get set up and shooting.",
    price: "1799",
  });
  firebase.firestore().collection("Devices").add({
    id: getUUID(),
    title: "Sony - Alpha a7 III Mirrorless 4K Video Camera (Body Only)",
    description:
      "Capture your subjects with beautiful results when you use the Sony a7 III full-frame mirrorless camera. A back-illuminated image sensor and evolved image processing system deliver high-quality images in a range of lighting conditions, while the five-axis stabilization technology provides steady shots for crisp, clear image capture. With 693 phase detection AF points, this Sony a7 III full-frame mirrorless camera allows for precise focusing, even during action shots.",
    price: "1799",
  });
}
