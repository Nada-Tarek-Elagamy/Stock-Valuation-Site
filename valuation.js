<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stock Valuation Tool</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
        }
        .container {
            max-width: 800px;
            margin: 50px auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
            color: #333;
        }
        form {
            display: flex;
            flex-direction: column;
        }
        label {
            margin-top: 10px;
            font-weight: bold;
        }
        input, select {
            margin-top: 5px;
            padding: 10px;
            font-size: 1rem;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        button {
            margin-top: 20px;
            padding: 10px;
            font-size: 1rem;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        .result {
            margin-top: 20px;
            padding: 10px;
            background: #e9f7ef;
            border: 1px solid #d4edda;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Stock Valuation Tool</h1>
        <form id="valuationForm">
            <label for="stockName">Stock Name:</label>
            <input type="text" id="stockName" placeholder="Enter stock name" required>

            <label for="currentPrice">Current Stock Price:</label>
            <input type="number" id="currentPrice" placeholder="Enter current price" required>

            <label for="eps">Earnings Per Share (EPS):</label>
            <input type="number" id="eps" placeholder="Enter EPS" required>

            <label for="growthRate">Expected Growth Rate (%):</label>
            <input type="number" id="growthRate" placeholder="Enter growth rate" required>

            <label for="discountRate">Discount Rate (%):</label>
            <input type="number" id="discountRate" placeholder="Enter discount rate" required>

            <button type="submit">Calculate Intrinsic Value</button>
        </form>

        <div class="result" id="result" style="display: none;">
            <h2>Valuation Result</h2>
            <p id="resultText"></p>
        </div>
    </div>

    <script src="valuation.js"></script>
</body>
</html>
