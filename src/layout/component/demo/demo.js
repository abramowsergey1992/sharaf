function demo() {
	let play = false;
	let playContent = false;
	let playContentTimeDef = 5000;
	let playContentTime = playContentTimeDef;
	let refreshTime = 1000;
	let layers = [];
	let yearIndex = 0;
	let layerIndex = 0;
	let elementIndex = 0;
	$(".type-map__item").each(function () {
		let l = $(this).attr("id");
		$(".timeline__year").each(function () {
			layers.push(`#${l}-${$(this).data("year")}`);
		});
	});

	setInterval(function () {
		if (!play) {
			console.log("sss");
			if (!playContent) {
				console.log(layers[layerIndex]);
				let elements = $(layers[layerIndex]).find(
					".map__element._popup-label"
				);
				if (elements.length != elementIndex + 1) {
					elementIndex++;
				} else {
					if (layers.length == layerIndex + 1) {
						layerIndex = 0;
					} else {
						layerIndex++;
						elements = $(layers[layerIndex]).find(
							".map__element._popup-label"
						);
					}
				}
				$(
					'[data-year="' + layers[layerIndex].split("-")[1] + '"]'
				).trigger("click");

				console.log(elements, elements.eq(elementIndex));
				elements.eq(elementIndex).trigger("click");
			}
		}
	}, refreshTime);
}
