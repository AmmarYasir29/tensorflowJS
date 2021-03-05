// let model;
const handleChange = async (e) => {
  e = e || window.event;
  if (e.target.files.length) {
    document.getElementById("userImg").src = URL.createObjectURL(
      e.target.files[0]
    );
  }
};

(async function () {
  console.log("wating form model load!");
  // model = await tf.loadModel("http://localhost:3000/simple/model.json");
  const model = await tf.loadLayersModel(
    "http://localhost:3000/simple/model.json"
  );
  console.log("model: ", model);
})();

async function SavePhoto(e) {
  e = e || window.event;
  let image = document.getElementById("userImg");

  const example = tf.fromPixels(image);

  const prediction = model.predict(example);

  console.log(prediction);
  // let tensor = tf
  //   .fromPixels(image)
  //   .resizeNearestneighbor([224, 224])
  //   .toFloat()
  //   .expandDims();

  // let predictions = await model.predict(tensor).data();
  // let top5 = Array.from(predictions)
  //   .map(function (p, i) {
  //     return {
  //       probability: p,
  //       className: img_class[i],
  //     };
  //   })
  //   .sort(function (a, b) {
  //     return b.probability - a.probability;
  //   })
  //   .slice(0, 5);

  // let h = document.getElementById("result");
  // h.innerText = `${(<h1>${p.probability}</h1>)}`
}
