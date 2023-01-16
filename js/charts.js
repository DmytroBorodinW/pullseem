let wrap = document.querySelector('.wrap');
let pieChartsBlock = document.querySelector('.charts__block');
let pieChartTotalText = [...document.querySelectorAll('.total__val')];
let pieChart1 = am4core.create("pie__chart__1", am4charts.PieChart);
let series = pieChart1.series.push(new am4charts.PieSeries());
series.dataFields.value = "value";
series.dataFields.category = "type";
if (wrap.classList.contains('rtl')) {
	series.dataFields.category = "type_he";
	pieChart1.legend.reverseOrder = true;
}

pieChart1.data = [{
  "type": "Active",
  "type_he": "פעילים",
  "value": 8
}, {
  "type": "Error",
  "type_he": "שגויים",
  "value": 5
},{
  "type": "Removed",
  "type_he": "מוסרים",
  "value": 23
}];


pieChart1.innerRadius = am4core.percent(55.55);
pieChart1.radius = am4core.percent(100);


let pieChart2 = am4core.create("pie__chart__2", am4charts.PieChart);

// Add data
pieChart2.data = [{
  "type": "Active",
  "type_he": "פעילים",
  "value": 5
}, {
  "type": "Error",
  "type_he": "שגויים",
  "value": 230
},{
  "type": "Removed",
  "type_he": "מוסרים",
  "value": 105
}];

// Add and configure Series
var series2 = pieChart2.series.push(new am4charts.PieSeries());
series2.dataFields.value = "value";
series2.dataFields.category = "type";
pieChart2.innerRadius = am4core.percent(55.55);
pieChart2.radius = am4core.percent(100);


let pieChart3 = am4core.create("pie__chart__3", am4charts.PieChart);
let series3 = pieChart3.series.push(new am4charts.PieSeries());
series3.dataFields.value = "value";

let val1 = 60;
let val2 = 100 - val1;

pieChart3.data = [{
  "value": val1,
  "color": am4core.color("#6DE600"),
},{
  "value": val2,
  "color": am4core.color("#E0FAC6"),
}];

series3.slices.template.propertyFields.fill = "color";
pieChart3.innerRadius = am4core.percent(95);
pieChart3.radius = am4core.percent(100);


let xyChart1 = am4core.create("xy__chart__1", am4charts.XYChart);
xyChart1.rtl = true;
xyChart1.paddingBottom = -10;

xyChart1.data = [
	{
		"action": "Opens",
		"value": 90,
	},
	{
		"action": "Clicks",
		"value": 48,
	},
	{
		"action": "Errors",
		"value": 12,
	},
	{
		"action": "Removed",
		"value": 39,
	},
]

if (wrap.classList.contains('rtl')) {
	xyChart1.data = [
		{
			"action": "הסרות",
			"value": 90,
		},
		{
			"action": "שגיאות",
			"value": 48,
		},
		{
			"action": "הקלקות",
			"value": 12,
		},
		{
			"action": "פתיחות",
			"value": 39,
		},
	]
}

let categoryAxis = xyChart1.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "action";
let valueAxis = xyChart1.yAxes.push(new am4charts.ValueAxis());
let xySeries = xyChart1.series.push(new am4charts.ColumnSeries());
categoryAxis.renderer.grid.template.strokeWidth = 0;
categoryAxis.renderer.minGridDistance = 50;

valueAxis.renderer.grid.template.disabled = true;
valueAxis.renderer.labels.template.disabled = true;
function createGrid(value) {
  let range = valueAxis.axisRanges.create();
  range.value = value;
  range.label.text = "{value}%";
}

xySeries.dataFields.valueY = "value";
xySeries.dataFields.categoryX = "action";
xySeries.columns.template.fill = am4core.color("#0371AD");
xySeries.columns.template.width = am4core.percent(10);
xySeries.columns.template.column.cornerRadiusTopLeft = 3;
xySeries.columns.template.column.cornerRadiusTopRight = 3;
xySeries.columns.template.tooltipText = "{value}%";
xySeries.tooltip.getFillFromObject = false;
xySeries.tooltip.background.fill =am4core.color("#000");
xySeries.tooltip.pointerOrientation = 'left';
console.log(xySeries.tooltip.pointerOrientation);
createGrid(0);
createGrid(25);
createGrid(50);
createGrid(75);
createGrid(100);


let xyChart2 = am4core.create("xy__chart__2", am4charts.XYChart);
xyChart2.rtl = true;
xyChart2.paddingBottom = -10;

xyChart2.data = [
	{
		"action": "Sent",
		"value": 90
	},
	{
		"action": "Clicks",
		"value": 48
	},
	{
		"action": "Errors",
		"value": 12
	},
	{
		"action": "DLR",
		"value": 39
	},
]

if (wrap.classList.contains('rtl')) {
	xyChart2.data = [
		{
			"action": "פתיחות",
			"value": 90,
		},
		{
			"action": "הקלקות",
			"value": 48,
		},
		{
			"action": "שגיאות",
			"value": 12,
		},
		{
			"action": "DLR",
			"value": 39,
		},
	]
}

let categoryAxis2 = xyChart2.xAxes.push(new am4charts.CategoryAxis());
categoryAxis2.dataFields.category = "action";
let valueAxis2 = xyChart2.yAxes.push(new am4charts.ValueAxis());
let xySeries2 = xyChart2.series.push(new am4charts.ColumnSeries());
categoryAxis2.renderer.grid.template.strokeWidth = 0;
categoryAxis2.renderer.minGridDistance = 50;

valueAxis2.renderer.grid.template.disabled = true;
valueAxis2.renderer.labels.template.disabled = true;
function createGrid2(value) {
  let range = valueAxis2.axisRanges.create();
  range.value = value;
  range.label.text = "{value}%";
}

xySeries2.dataFields.valueY = "value";
xySeries2.dataFields.categoryX = "action";
xySeries2.columns.template.width = am4core.percent(10);
xySeries2.columns.template.fill = am4core.color("#0371AD");
xySeries2.columns.template.column.cornerRadiusTopLeft = 3;
xySeries2.columns.template.column.cornerRadiusTopRight = 3;
xySeries2.columns.template.tooltipText = "{value}%";
xySeries2.tooltip.getFillFromObject = false;
xySeries2.tooltip.background.fill =am4core.color("#000");
xySeries2.tooltip.pointerOrientation = 'left';

createGrid2(0);
createGrid2(25);
createGrid2(50);
createGrid2(75);
createGrid2(100);




let setElement = (elName, elClass, elCont) => {
	let newElement = document.createElement(elName);
	newElement.classList.add(elClass);
	newElement.innerText = elCont;
	return newElement;
}

let pieChartsArr = [pieChart1, pieChart2];
let pieChartsBlocksArr = [...pieChartsBlock.querySelectorAll('.pie__chart')];



let pieChartLabelsCreator = () => {
	pieChartsArr.forEach(chart => {
		let chartIndex = pieChartsArr.indexOf(chart);

		let labelsBlock = pieChartsBlocksArr[chartIndex].querySelector('.labels__block__inner');;

		coordinatesArr = [];
		let total = 0;

		for (let i = 0; i < chart.data.length; i ++) {
			let chartLabel = setElement('div', 'chart__label', '');
			let labelVal = setElement('span', 'span', `${chart.data[i].value}`);
			let labelName = setElement('span', 'span', `${chart.data[i].type}`);
			if (wrap.classList.contains('rtl')) {
				labelName = setElement('span', 'span', `${chart.data[i].type_he}`);
			}
			chartLabel.append(labelVal);
			chartLabel.append(labelName);
			labelsBlock.append(chartLabel);
			total += chart.data[i].value;
		}

		pieChartTotalText[chartIndex].innerText = total;

		let minSector = 360/total;
		let chartRadius = labelsBlock.offsetWidth/2;
		let labelsArr = [...pieChartsBlocksArr[chartIndex].querySelectorAll('.chart__label ')];
		let sum = 0;

		for (let i = 0; i < chart.data.length; i++) {
			sum += chart.data[i].value;
			let angel = (sum*minSector - 120)*Math.PI/180;
			let sectorAngel = (chart.data[i].value*minSector/2)*Math.PI/180;
			let x = Math.cos(angel - sectorAngel);
			let y = Math.sin(angel - sectorAngel);
			
			let coordinates = {};
			coordinates.x = x*chartRadius + chartRadius;
			coordinates.y = y*chartRadius + chartRadius;
			coordinatesArr.push(coordinates);
		}

		labelsArr.forEach(item => {
			let index = labelsArr.indexOf(item);
			item.style.top = `${coordinatesArr[index].y}px`;
			item.style.left = `${coordinatesArr[index].x}px`;
		})
	})
}


pieChartLabelsCreator();

/*window.addEventListener('resize', pieChartLabelsCreator);*/


/*let coordinatesArr = [];

let total = 0;

for (let i = 0; i < pieChart1.data.length; i ++) {
	let chartLabel = setElement('div', 'chart__label', '');
	let labelVal = setElement('span', 'span', `${pieChart1.data[i].value}`);
	let labelName = setElement('span', 'span', `${pieChart1.data[i].type}`);
	chartLabel.append(labelVal);
	chartLabel.append(labelName);
	labelsBlock.append(chartLabel);
	total += pieChart1.data[i].value;
}


let minSector = 360/total;
let chartRadius = labelsBlock.offsetWidth/2;

let labelsArr = [...document.querySelectorAll('.chart__label ')];
let sum = 0;

for (let i = 0; i < pieChart1.data.length; i++) {
	sum += pieChart1.data[i].value;
	let angel = (sum*minSector - 120)*Math.PI/180;
	let sectorAngel = (pieChart1.data[i].value*minSector/2)*Math.PI/180;
	console.log(angel);
	let x = Math.cos(angel - sectorAngel);
	let y = Math.sin(angel - sectorAngel);
	if (angel <= 90) {
		x = Math.cos(angel - sectorAngel);
		y = Math.sin(angel - sectorAngel);
		console.log(x, y);
	}
	if (angel >= 270 && sum <= 360) {
		x = Math.cos(angel - sectorAngel);
		y = -Math.sin(angel - sectorAngel);
	}
	
	let coordinates = {};
	coordinates.x = x*chartRadius + chartRadius;
	coordinates.y = y*chartRadius + chartRadius;
	coordinatesArr.push(coordinates);
}

console.log(coordinatesArr);

labelsArr.forEach(item => {
	let index = labelsArr.indexOf(item);
	item.style.top = `${coordinatesArr[index].y}px`;
	item.style.left = `${coordinatesArr[index].x}px`;
})
*/