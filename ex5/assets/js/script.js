const canvas = document.getElementById("barCanvas");
const ctx = canvas.getContext("2d");

function calculateWidth(data, config) {
  const { padding, barWidth, gap } = config;
  // Tổng chiều rộng các cột và khoảng cách
  const columnsCount = data.length;
  const barsAreaWidth =
    columnsCount * barWidth + Math.max(0, columnsCount - 1) * gap;

  // padding 2 bên + cách trục Y (10px) + khu vực vẽ cột + khoảng đệm
  return padding * 2 + 10 + barsAreaWidth + gap * 2;
}

function calculateHeight(data, config, stepHeight) {
  // Tính maxValue dựa trên giá trị cột lớn nhất trong data để biểu đồ không bị tràn
  const maxColumnValue = Math.max(...data.map((item) => item.value));
  config.maxValue = Math.max(config.maxValue, Math.ceil(maxColumnValue));
  // Chiều cao = padding 2 bên phần trên dưới + chiều cao của khu vực vẽ cột
  return config.padding * 2 + config.maxValue * stepHeight;
}

function drawBarChart() {
  const {
    padding,
    maxValue,
    barWidth,
    gap,
    title,
    yAxisLabel,
    xAxisLabel,
    colColor,
    labelColor,
    textColor,
    lineColor,
    lastLineColor,
    stepHeight,
  } = barChartConfig;

  // Đồng thời gán height và width cho thẻ canvas khi load
  canvas.width = calculateWidth(barChartData, barChartConfig);
  canvas.height = calculateHeight(barChartData, barChartConfig, stepHeight);

  // Từ đó mới tạo chartHeight và chartWidth
  const chartWidth = canvas.width - padding * 2;
  const chartHeight = canvas.height - padding * 2;

  // Tiêu đề
  ctx.font = "19px Arial";
  ctx.textAlign = "center";
  ctx.fillText(title, canvas.width / 2, 30);

  // Trục Y và các line
  ctx.textAlign = "right";
  ctx.font = "10px Arial";
  for (let i = 0; i <= maxValue; i++) {
    const y = canvas.height - padding - (i / maxValue) * chartHeight;
    const xEnd = canvas.width - (padding + 25);
    const xBegin = padding + 10;

    // Vẽ line
    ctx.beginPath();
    ctx.moveTo(xBegin, y);
    ctx.lineTo(xEnd, y);
    ctx.strokeStyle = i === 0 ? lastLineColor : lineColor;
    ctx.stroke();
    ctx.lineWidth = 1;
    ctx.closePath();

    // Label line
    ctx.fillStyle = textColor;
    ctx.fillText(i, padding, y + 5);
  }

  // Vẽ cột và trục X
  barChartData.forEach((item, index) => {
    const x = padding + 10 + index * (barWidth + gap);
    const barHeight = (item.value / maxValue) * chartHeight;
    const y = canvas.height - padding - barHeight;

    // Vẽ cột
    ctx.fillStyle = colColor;
    ctx.fillRect(x, y, barWidth, barHeight);

    // Label cột
    ctx.font = "10px Arial";
    ctx.fillStyle = textColor;
    ctx.textAlign = "center";
    ctx.fillText(item.label, x + barWidth / 2, canvas.height - padding + 15);
  });

  //Thông số chung cho nhãn X, Y
  ctx.fillStyle = labelColor;
  ctx.font = "italic 13px Arial";
  ctx.textAlign = "center";
  //Vẽ nhãn trục X
  ctx.fillText(xAxisLabel, canvas.width / 2, canvas.height - 20);
  //Vẽ nhãn trục Y (Xoay text 90 độ)
  ctx.save();
  ctx.translate(25, canvas.height / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(yAxisLabel, 0, 0);
  ctx.restore();

  //Vẽ chú thích (Legend)
  const legendX = canvas.width - padding - 15;
  const legendY = canvas.height - padding - chartHeight;

  ctx.fillStyle = colColor;
  ctx.fillRect(legendX, legendY, barWidth, 15);
  ctx.font = "12px Arial";
  ctx.fillStyle = textColor;
  ctx.textAlign = "left";
  ctx.fillText("LEVEL", legendX, legendY + 35);
  ctx.fillText("OF", legendX, legendY + 55);
  ctx.fillText("POSITION", legendX, legendY + 75);
}

drawBarChart();

document.addEventListener("DOMContentLoaded", drawBarChart);
