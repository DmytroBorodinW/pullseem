let setEl = (elName, elClass, elCont) => {
	let newElement = document.createElement(elName);
	newElement.classList.add(elClass);
	newElement.innerText = elCont;
	return newElement;
}


//Create piechart3

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
pieChart3.radius = am4core.percent(98);
series3.labels.template.disabled = true;
series3.ticks.template.disabled = true;

//Create piechart4

let pieChart4 = am4core.create('pie__chart__4', am4charts.PieChart);
let series4 = pieChart4.series.push(new am4charts.PieSeries());
series4.dataFields.value = "value";

let pc4data = [{
    "category": 'לא נפתחו',
    "value": 132,
    "color": am4core.color("#6CACDC"),
},{
	"category": 'נפתחו',
    "value": 560,
    "color": am4core.color("#6CA0DC"),
},];


pieChart4.data = pc4data;
pieChart4.rtl = true;
pieChart4.radius = am4core.percent(97);

series4.tooltip.disabled = true;
series4.slices.template.propertyFields.fill = "color";
series4.ticks.template.disabled = true;
series4.alignLabels = false;
series4.labels.template.text = "{value.percent.formatNumber('#.0')}%";
series4.labels.template.radius = am4core.percent(-50);
series4.labels.template.fill = am4core.color("white");
series4.labels.template.fontSize = '1.8rem';

let slice4 = series4.slices.template;
slice4.states.getKey("hover").properties.scale = 1;
slice4.states.getKey("active").properties.shiftRadius = 0;

// Create legend for pieChart4

let chartPC4Legend = document.getElementById('pc4__legend');

pc4data.forEach(obj => {
	let legendBlock = setEl('div', 'legend__block', '');
	let legendIcon = setEl('span', 'legend__icon', '');
	let legendText = setEl('p', 'legend__text', '');
	let valTitle = setEl('span', 'val__title', `${obj.category} -`);
	let val = setEl('span', 'val', `${obj.value}`);
	legendIcon.style.backgroundColor = obj.color;
	legendText.appendChild(valTitle);
	legendText.appendChild(val);
	legendBlock.appendChild(legendIcon);
	legendBlock.appendChild(legendText);
	chartPC4Legend.appendChild(legendBlock);
})

//Create XYchart1

let xyChart1 = document.getElementById('xy__chart_1');
let columsBlock = xyChart1.querySelector('.columns__block');

let xyChart1Data = [{
    "category": 'לא נפתחו',
    "value": 132,
    "color": "#6CACDC",
},{
	"category": 'נפתחו',
    "value": 560,
    "color": "#6CA0DC",
},];

let totalVal = 0;

for (let i = 0; i < xyChart1Data.length; i++) {
	totalVal += xyChart1Data[i].value;
}



xyChart1Data.forEach(col => {
	let columnBlock = setEl('div', 'column__block', '');
	let column = setEl('div', 'column', '');
	let colValue = col.value*100/totalVal;
	let labelText = setEl('span', 'label__text', `${colValue.toFixed(2)}%`);
	column.style.backgroundColor = col.color;
	column.style.height = `${colValue}%`;
	column.appendChild(labelText);
	columnBlock.appendChild(column);
	columsBlock.appendChild(columnBlock);
});

// Create legend for XYchart1;

let charXY1Legend = document.getElementById('xy1__legend');

xyChart1Data.forEach(obj => {
	let legendBlock = setEl('div', 'legend__block', '');
	let legendIcon = setEl('span', 'legend__icon', '');
	let legendText = setEl('p', 'legend__text', '');
	let valTitle = setEl('span', 'val__title', `${obj.category} -`);
	let val = setEl('span', 'val', `${obj.value}`);
	legendIcon.style.backgroundColor = obj.color;
	legendText.appendChild(valTitle);
	legendText.appendChild(val);
	legendBlock.appendChild(legendIcon);
	legendBlock.appendChild(legendText);
	charXY1Legend.appendChild(legendBlock);
});

// Create XYchart2

let xyChart2 = am4core.create("xy__chart_2", am4charts.XYChart);
xyChart2.rtl = true;

let xyChart2Data = [
	{
		"category": "נמענים חדשים פברואר",
		"value_1": 7,
		"value_2": 5,
	},
	{
		"category": "כנס משתחררים אוקטובר 17",
		"value_1": 7,
		"value_2": 5,
	},
	{
		"category": "לא קיבלו משוב סמס",
		"value_1": 7,
		"value_2": 5,
	},
	
]

xyChart2.data = xyChart2Data;

let xAxes2 = xyChart2.xAxes.push(new am4charts.CategoryAxis());
let yAxes2 = xyChart2.yAxes.push(new am4charts.ValueAxis());

xAxes2.renderer.grid.template.strokeOpacity = 0;
xAxes2.renderer.grid.template.location = 0;
xAxes2.dataFields.category = "category";
xAxes2.renderer.cellStartLocation = 0.15;
xAxes2.renderer.cellEndLocation = 0.85;
xAxes2.dy = 10;


yAxes2.min = 0;
let yLabel2 = yAxes2.renderer.labels.template;
yLabel2.fontSize = '1.3rem';
yLabel2.fill = am4core.color("#333333");

let xLabel2 = xAxes2.renderer.labels.template;
xLabel2.fontSize = '1.8rem';
xLabel2.fontWeight = 700;
xLabel2.fill = am4core.color("#333333");

function createSeries(field, name, chart) {
	let series = chart.series.push(new am4charts.ColumnSeries());
	series.dataFields.valueY = field;
  	series.dataFields.categoryX = "category";
  	series.name = name;
  	series.columns.template.width = am4core.percent(75);
  	let tooltipText = '{' + field + '}';
  	series.columns.template.tooltipText = tooltipText;
	series.tooltip.getFillFromObject = false;
	series.tooltip.background.fill = am4core.color("#000");
	series.tooltip.pointerOrientation = 'left';

  	let bullet = series.bullets.push(new am4charts.LabelBullet);
  	bullet.label.text = "{name}";
  	bullet.label.fontSize = '1.5rem';
  	bullet.label.fill = am4core.color("#333333");
  	bullet.horizontalCenter = "middle";
  	bullet.locationY = 1;
  	bullet.dy = 10;
}

xyChart2.maskBullets = false; // let bullet shows out of the chart

createSeries("value_1", "פתיחות", xyChart2);
createSeries("value_2", "הקלקות", xyChart2);


// Create XYchart21

let xyChart21 = am4core.create("xy__chart_21", am4charts.XYChart);
xyChart21.rtl = true;

let xyChart21Data = [
	{
		"category": "נמענים חדשים פברואר",
		"value_1": 8,
		"value_2": 3,
	},
	{
		"category": "כנס משתחררים אוקטובר 17",
		"value_1": 2,
		"value_2": 5,
	},
	{
		"category": "לא קיבלו משוב סמס",
		"value_1": 4,
		"value_2": 6,
	},
	
]

xyChart21.data = xyChart21Data;

let xAxes21 = xyChart21.xAxes.push(new am4charts.CategoryAxis());
let yAxes21 = xyChart21.yAxes.push(new am4charts.ValueAxis());

xAxes21.renderer.grid.template.strokeOpacity = 0;
xAxes21.renderer.grid.template.location = 0;
xAxes21.dataFields.category = "category";
xAxes21.renderer.cellStartLocation = 0.15;
xAxes21.renderer.cellEndLocation = 0.85;
xAxes21.dy = 10;


yAxes21.min = 0;
let yLabel21 = yAxes21.renderer.labels.template;
yLabel21.fontSize = '1.3rem';
yLabel21.fill = am4core.color("#333333");

let xLabel21 = xAxes21.renderer.labels.template;
xLabel21.fontSize = '1.8rem';
xLabel21.fontWeight = 700;
xLabel21.fill = am4core.color("#333333");


xyChart21.maskBullets = false; // let bullet shows out of the chart

createSeries("value_1", "פתיחות", xyChart21);
createSeries("value_2", "הקלקות", xyChart21);



// Create XYchart3

let xyChart3 = am4core.create("xy__chart_3", am4charts.XYChart);
xyChart3.rtl = true;

let xyChart3Data = [
	{
		"category": "נמענים חדשים פברואר",
		"value_1": 7,
		"value_2": 5,
	},

]

xyChart3.data = xyChart3Data;

let xAxes3 = xyChart3.xAxes.push(new am4charts.CategoryAxis());
let yAxes3 = xyChart3.yAxes.push(new am4charts.ValueAxis());

xAxes3.renderer.grid.template.strokeOpacity = 0;
xAxes3.renderer.grid.template.location = 0;
xAxes3.dataFields.category = "category";
xAxes3.renderer.cellStartLocation = 0;
xAxes3.renderer.cellEndLocation = 1;
xAxes3.dy = 10;

yAxes3.min = 0;
let yLabel3 = yAxes3.renderer.labels.template;
yLabel3.fontSize = '1.3rem';
yLabel3.fill = am4core.color("#333333");

let xLabel3 = xAxes3.renderer.labels.template;
xLabel3.fontSize = '1.8rem';
xLabel3.fontWeight = 700;
xLabel3.fill = am4core.color("#fff");


xyChart3.maskBullets = false; // let bullet shows out of the chart

function createSeries1(field, name, chart) {
	let series = chart.series.push(new am4charts.ColumnSeries());
	series.dataFields.valueY = field;
  	series.dataFields.categoryX = "category";
  	series.name = name;
  	let tooltipText = '{' + field + '}';
  	series.columns.template.tooltipText = tooltipText;
	series.tooltip.getFillFromObject = false;
	series.columns.template.width = am4core.percent(30);
	series.tooltip.background.fill = am4core.color("#000");
	series.tooltip.pointerOrientation = 'left';

  	let bullet = series.bullets.push(new am4charts.LabelBullet);
  	bullet.label.text = "{name}";
  	bullet.label.fontSize = '1.5rem';
  	bullet.label.fill = am4core.color("#333333");
  	bullet.horizontalCenter = "middle";
  	bullet.locationY = 1;
  	bullet.dy = 10;
}

createSeries1("value_1", "פתיחות", xyChart3);
createSeries1("value_2", "הקלקות", xyChart3);


// Chart slider

let slidesArr = [...document.querySelectorAll('.slide')];
let nextButton = document.querySelector('.next__btn');
let prevButton = document.querySelector('.prev__btn');

nextButton.addEventListener('click', () => {
	slidesArr[0].classList.remove('disabled');
})
prevButton.addEventListener('click', () => {
  slidesArr[0].classList.add('disabled');
})


// XYchart 4

let xyChart4 = am4core.create("xy__chart_4", am4charts.XYChart);

xyChart4.data = [{
    "date": new Date(2021, 1, 10, 21, 0),
    "value1": 8.5,
    "value2": 243
}, 
{
    "date": new Date(2021, 1, 10, 21, 1),
    "value1": 11,
    "value2": 256
},
{
    "date": new Date(2021, 1, 10, 21, 2),
    "value1": 26,
    "value2": 300
},
{
    "date": new Date(2021, 1, 10, 21, 3),
    "value1": 35,
    "value2": 273
},
{
    "date": new Date(2021, 1, 10, 21, 4),
    "value1": 28,
    "value2": 305
},
{
    "date": new Date(2021, 1, 10, 21, 5),
    "value1": 56,
    "value2": 210
},
{
    "date": new Date(2021, 1, 10, 21, 6),
    "value1": 44,
    "value2": 223
}, 
{
    "date": new Date(2021, 1, 10, 21, 7),
    "value1": 22,
    "value2": 243
},
{
    "date": new Date(2021, 1, 10, 21, 8),
    "value1": 15,
    "value2": 275
},
{
    "date": new Date(2021, 1, 10, 21, 9),
    "value1": 8.5,
    "value2": 243
},
{
    "date": new Date(2021, 1, 10, 21, 10),
    "value1": 29,
    "value2": 350
},
{
    "date": new Date(2021, 1, 10, 21, 11),
    "value1": 6,
    "value2": 105
},
{
    "date": new Date(2021, 1, 10, 21, 12),
    "value1": 45,
    "value2": 266
}, 
{
    "date": new Date(2021, 1, 10, 21, 13),
    "value1": 33,
    "value2": 243
},
{
    "date": new Date(2021, 1, 10, 21, 14),
    "value1": 12,
    "value2": 205
},
{
    "date": new Date(2021, 1, 10, 21, 15),
    "value1": 21,
    "value2": 251
},
{
    "date": new Date(2021, 1, 10, 21, 16),
    "value1": 36,
    "value2": 296
},
{
    "date": new Date(2021, 1, 10, 21, 17),
    "value1": 27,
    "value2": 283
},];

let dateAxis4 = xyChart4.xAxes.push(new am4charts.DateAxis());
dateAxis4.baseInterval = {
  "timeUnit": "minute",
  "count": 1
};

dateAxis4.startLocation = -1;
dateAxis4.endLocation = 0;

dateAxis4.renderer.grid.template.location = 0.5;
dateAxis4.renderer.minGridDistance = 20;

let yAxes4 = xyChart4.yAxes.push(new am4charts.ValueAxis());
yAxes4.renderer.maxLabelPosition = 0.98;
yAxes4.renderer.inside = true;
yAxes4.renderer.labels.template.dy = -10;

let yLabel4 = yAxes4.renderer.labels.template;
yLabel4.fontSize = '1.3rem';
yLabel4.fill = am4core.color("#333333");

let xLabel4 = dateAxis4.renderer.labels.template;
xLabel4.fontSize = '1.3rem';
xLabel4.fill = am4core.color("#333333");
xLabel4.location = 1.1;
xLabel4.adapter.add('text', (label, target, key) => {
	let minutes = '';
	if (label === undefined) {
		return '';
	}
	else {
		minutes = Number(label[3] + label[4]);
	}
	
	if ((minutes % 5) === 0) {
		return label
	}else {
		return ''
	}
}) 

let series41 = xyChart4.series.push(new am4charts.LineSeries());
series41.name = "Series 1";

series41.dataFields.valueY = "value1";
series41.dataFields.dateX = "date";
let s41Fill = '#6CACDC'
series41.stroke = am4core.color(s41Fill);
series41.fill = am4core.color(s41Fill);
series41.fillOpacity = 0.5;
series41.strokeWidth = 2;

series41.sequencedInterpolation = true;
series41.sequencedInterpolationDelay = 100;


let series42 = xyChart4.series.push(new am4charts.LineSeries());
series42.name = "Series 2";

series42.dataFields.valueY = "value2";
series42.dataFields.dateX = "date";

let s42Fill = '#6CA0DC'
series42.stroke = am4core.color(s42Fill);
series42.fill = am4core.color(s42Fill);
series42.fillOpacity = 0.5;
series42.strokeWidth = 2;

series42.sequencedInterpolation = true;
series42.sequencedInterpolationDelay = 100;

let seriesArr = [{
	color: s41Fill,
	category: 'פתיחות'
},{
	color: s42Fill,
	category: 'הקלקות'
}
];

// Scrollbar chart

let chart = am4core.create("chartdiv", am4charts.XYChart);

chart.data = [ {
    "category": new Date(2021, 9, 12),
    "value": 1
},{
    "category": new Date(2021, 9, 12, 12, 0),
    "value": 1
},  {
    "category": new Date(2021, 9, 13),
    "value": 1
},{
    "category": new Date(2021, 9, 12, 12, 0),
    "value": 1
},{
    "category": new Date(2021, 9, 14),
    "value": 1
},{
    "category": new Date(2021, 9, 12, 12, 0),
    "value": 1
}, 
{
    "category": new Date(2021, 9, 15),
    "value": 1
}, {
    "category": new Date(2021, 9, 12, 12, 0),
    "value": 1
},{
    "category": new Date(2021, 9, 16),
    "value": 1
}, {
    "category": new Date(2021, 9, 12, 12, 0),
    "value": 1
},{
    "category": new Date(2021, 9, 17),
    "value": 1
},{
    "category": new Date(2021, 9, 12, 12, 0),
    "value": 1
},
{
    "category": new Date(2021, 9, 18),
    "value": 1
}, {
    "category": new Date(2021, 9, 12, 12, 0),
    "value": 1
}, {
    "category": new Date(2021, 9, 19),
    "value": 1
},{
    "category": new Date(2021, 9, 12, 12, 0),
    "value": 1
},{
    "category": new Date(2021, 9, 20),
    "value": 1
}, ];

let sbxAxes1 = chart.xAxes.push(new am4charts.DateAxis());

sbxAxes1.startLocation = 0.5;
sbxAxes1.endLocation = 0.5;

sbxAxes1.renderer.grid.template.location = 0.5;
sbxAxes1.renderer.minGridDistance = 60;
sbxAxes1.renderer.grid.template.stroke = "#fff";

let sbLabel = sbxAxes1.renderer.labels.template;
sbLabel.fontSize = '1.3rem';
sbLabel.fill = am4core.color("#333333");
sbLabel.location = 1.1;
sbLabel.dy = 10;

let sbyAxes1 = chart.yAxes.push(new am4charts.ValueAxis());
sbyAxes1.axisRanges.template.label = new am4charts.AxisLabel();
sbyAxes1.axisRanges.template.hidden = true;
sbyAxes1.visible = false;
sbyAxes1.disabled = false;
sbyAxes1.strictMinMax = false;
sbyAxes1.min = "0";
sbyAxes1.max = "1";

sbyAxes1.renderer.maxLabelPosition = 0.98;
sbyAxes1.strokeWidth = 1;
sbyAxes1.fontSize = 0;

let sbseries1 = chart.series.push(new am4charts.LineSeries());
sbseries1.dataFields.valueY = "value";
sbseries1.dataFields.dateX = "category";

sbseries1.fillOpacity = 0;
sbseries1.strokeWidth = 0;

sbseries1.sequencedInterpolation = true;
sbseries1.sequencedInterpolationDelay = 100;

chart.paddingLeft = "0";
chart.paddingTop = "0";
chart.paddingRight = "0";
chart.paddingBottom = "0";


// Scrollbar settings

xyChart4.scrollbarX = new am4charts.XYChartScrollbar();
xyChart4.scrollbarX.series.push(sbseries1)
xyChart4.scrollbarX.id = "hb";
xyChart4.scrollbarX.visible = true;
xyChart4.scrollbarX.disabled = false;
xyChart4.scrollbarX.start = 0.1;
xyChart4.scrollbarX.startGrip = new am4core.ResizeButton();
xyChart4.scrollbarX.endGrip.disabled = true;
xyChart4.scrollbarX.parent = xyChart4.bottomAxesContainer;
xyChart4.scrollbarX.background.fill = am4core.color("#DFDFDF");
xyChart4.scrollbarX.minHeight = 44;
xyChart4.scrollbarX.maxHeight = 44;
xyChart4.scrollbarX.startGrip.background.fill = am4core.color("#fff");
xyChart4.scrollbarX.startGrip.icon.stroke = am4core.color("#333");


// Create legend for XYchart1;

// to create new legend create new series object in seriesArr.

let charXY4Legend = document.getElementById('xy4__legend');

seriesArr.forEach(obj => {
	let legendBlock = setEl('div', 'legend__block', '');
	let legendIcon = setEl('span', 'legend__icon', '');
	let legendText = setEl('p', 'legend__text', '');
	let valTitle = setEl('span', 'val__title', `${obj.category}`);
	legendIcon.style.backgroundColor = obj.color;
	legendText.appendChild(valTitle);
	legendBlock.appendChild(legendIcon);
	legendBlock.appendChild(legendText);
	charXY4Legend.appendChild(legendBlock);
});


//Pie charts 3D


// piechart 5


let pieChart5 = am4core.create("pie__chart_5", am4charts.PieChart3D);

// Let's cut a hole in our Pie chart the size of 40% the radius
pieChart5.innerRadius = am4core.percent(40);

pieChart5.depth = 12;

// Add data
let pc5data = [{
    "category": 'Safari',
    "value": 75,
    "color": am4core.color("#6CACDC"),
},{
  "category": 'Chrome',
    "value": 14,
    "color": am4core.color("#6CA0DC"),
},{
  "category": 'Android',
    "value": 6,
    "color": am4core.color("#6771DC"),
},
{
  "category": 'Other',
    "value": 5,
    "color": am4core.color("#8067DC"),
},];

pieChart5.data = pc5data

// Add and configure Series
let pieSeries5 = pieChart5.series.push(new am4charts.PieSeries3D());
pieSeries5.dataFields.value = "value";
pieSeries5.dataFields.category = "category";

pieChart5.rtl = true;
pieChart5.radius = am4core.percent(98);


pieSeries5.tooltip.disabled = true;
pieSeries5.slices.template.propertyFields.fill = "color";
pieSeries5.ticks.template.disabled = true;
pieSeries5.alignLabels = false;
pieSeries5.labels.template.text = "{value.percent.formatNumber('#.0')}%";
pieSeries5.labels.template.radius = am4core.percent(-30);
pieSeries5.labels.template.fill = am4core.color("white");
pieSeries5.labels.template.fontSize = '1.2rem';
pieSeries5.startAngle = 40;
pieSeries5.endAngle = 400;


let slice5 = pieSeries5.slices.template;
slice5.states.getKey("hover").properties.scale = 1;
slice5.states.getKey("active").properties.shiftRadius = 0;

//piechart 5 legend

let chartPC5Legend = document.getElementById('pc5__legend');

pc5data.forEach(obj => {
  let legendBlock = setEl('div', 'legend__block', '');
  legendBlock.setAttribute('dir', 'ltr');
  let legendIcon = setEl('span', 'legend__icon', '');
  let legendText = setEl('p', 'legend__text', '');
  let valTitle = setEl('span', 'val__title', `${obj.category} `);
  legendIcon.style.backgroundColor = obj.color;
  legendBlock.appendChild(legendIcon);
  legendText.appendChild(valTitle);
  legendBlock.appendChild(legendText);
  chartPC5Legend.appendChild(legendBlock);
  chartPC5Legend.setAttribute('dir', 'ltr');
})


// piechart 6


let pieChart6 = am4core.create("pie__chart_6", am4charts.PieChart3D);

// Let's cut a hole in our Pie chart the size of 40% the radius
pieChart6.innerRadius = am4core.percent(40);

pieChart6.depth = 12;

// Add data
let pc6data = [{
    "category": 'Gmail',
    "value": 97,
    "color": am4core.color("#6CACDC"),
},{
  "category": 'Outlook',
    "value": 3,
    "color": am4core.color("#6CA0DC"),
},];

pieChart6.data = pc6data

// Add and configure Seri6s
let pieSeries6 = pieChart6.series.push(new am4charts.PieSeries3D());
pieSeries6.dataFields.value = "value";
pieSeries6.dataFields.category = "category";

pieChart6.rtl = true;
pieChart6.radius = am4core.percent(98);


pieSeries6.tooltip.disabled = true;
pieSeries6.slices.template.propertyFields.fill = "color";
pieSeries6.ticks.template.disabled = true;
pieSeries6.alignLabels = false;
pieSeries6.labels.template.text = "{value.percent.formatNumber('#.0')}%";
pieSeries6.labels.template.radius = am4core.percent(-30);
pieSeries6.labels.template.fill = am4core.color("white");
pieSeries6.labels.template.fontSize = '1.2rem';
pieSeries6.startAngle = 40;
pieSeries6.endAngle = 400;


let slice6 = pieSeries6.slices.template;
slice6.states.getKey("hover").properties.scale = 1;
slice6.states.getKey("active").properties.shiftRadius = 0;

//piechart 6 legend

let chartPC6Legend = document.getElementById('pc6__legend');

pc6data.forEach(obj => {
  let legendBlock = setEl('div', 'legend__block', '');
  legendBlock.setAttribute('dir', 'ltr');
  let legendIcon = setEl('span', 'legend__icon', '');
  let legendText = setEl('p', 'legend__text', '');
  let valTitle = setEl('span', 'val__title', `${obj.category} `);
  legendIcon.style.backgroundColor = obj.color;
  legendBlock.appendChild(legendIcon);
  legendText.appendChild(valTitle);
  legendBlock.appendChild(legendText);
  chartPC6Legend.appendChild(legendBlock);
  chartPC5Legend.setAttribute('dir', 'ltr');
})

// piechart 7


let pieChart7 = am4core.create("pie__chart_7", am4charts.PieChart3D);

// Let's cut a hole in our Pie chart the size of 40% the radius
pieChart7.innerRadius = am4core.percent(40);

pieChart7.depth = 12;

// Add data
let pc7data = [{
    "category": 'Windows 10',
    "value": 95,
    "color": am4core.color("#6CACDC"),
},{
  "category": 'Android',
    "value": 3,
    "color": am4core.color("#6CA0DC"),
},{
  "category": 'Unknown',
    "value": 2,
    "color": am4core.color("#6771DC"),
},];

pieChart7.data = pc7data

// Add and configure Series
let pieSeries7 = pieChart7.series.push(new am4charts.PieSeries3D());
pieSeries7.dataFields.value = "value";
pieSeries7.dataFields.category = "category";

pieChart7.rtl = true;
pieChart7.radius = am4core.percent(98);


pieSeries7.tooltip.disabled = true;
pieSeries7.slices.template.propertyFields.fill = "color";
pieSeries7.ticks.template.disabled = true;
pieSeries7.alignLabels = false;
pieSeries7.labels.template.text = "{value.percent.formatNumber('#.0')}%";
pieSeries7.labels.template.radius = am4core.percent(-30);
pieSeries7.labels.template.fill = am4core.color("white");
pieSeries7.labels.template.fontSize = '1.2rem';
pieSeries7.startAngle = 20;
pieSeries7.endAngle = 400;


let slice7 = pieSeries7.slices.template;
slice7.states.getKey("hover").properties.scale = 1;
slice7.states.getKey("active").properties.shiftRadius = 0;

//piechart 7 legend

let chartPC7Legend = document.getElementById('pc7__legend');

pc7data.forEach(obj => {
  let legendBlock = setEl('div', 'legend__block', '');
  legendBlock.setAttribute('dir', 'ltr');
  let legendIcon = setEl('span', 'legend__icon', '');
  let legendText = setEl('p', 'legend__text', '');
  let valTitle = setEl('span', 'val__title', `${obj.category} `);
  legendIcon.style.backgroundColor = obj.color;
  legendBlock.appendChild(legendIcon);
  legendText.appendChild(valTitle);
  legendBlock.appendChild(legendText);
  chartPC7Legend.appendChild(legendBlock);
  chartPC5Legend.setAttribute('dir', 'ltr');
})


