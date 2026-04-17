$(document).ready(function () {
  const canvas = $("#barCanvas")[0];
  const ctx = canvas.getContext("2d");

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
    } = barChartConfig;
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
});
