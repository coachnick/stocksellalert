/*
 input stock no and buy price
 
 it need to read config file about period and stop loss level
 
 set alert information
 for every 5 mins{
 get stock data 
 check rules
 push msg if need
 update cache

// todo 
// 1. push msg
// 2. get price info
// 3. do schedule process
// 4. date logic
 }
 */

var price;
var days; //store date related 
var stockCode;

function initData(cost){
	price{stopLoss} = cost * 0.85;
	price{warningLevel} = cost * 0.95;
	price{minLevel} = cost * 1.05;
	price{cost} = cost;
	price{belowHigh} = cost;
	price{high} = cost * 1.2; 
	
	days{warningLevel} = 0;
	days{belowCost} = 0;
	days{minLevel} = 0;
}

// push notification
function pushMsg(msg){
	msg = stockCode + ":" + msg;
	
}

// get Stock info from google finance 
function getStockPrice(stockNo){
	
}

function ruleChecking(currentPrice){
	if (price{stopLoss} > currentPrice){
		// alert la
		pushMsg("Stop Loss: " + currentPrice )
	}else if (price{warningLevel} > currentPrice){
		
		// if consequence 2 days, sell it la.... 
		// todo count day
		if (days{warningLevel} >= 2){
			pushMsg("warning level 2 days la sell it la: " + currentPrice);
		}
	}else if (price{cost} > currentPrice){
		// if consequence 3 days, sell it la.... 
		// todo count day
		if (days{belowCost} >= 3){
			pushMsg("below cost 3 days la sell it la: " + currentPrice);
		}
	}else if (price{minLevel} > currentPrice){
		if (days{minLevel} >= 10){
			pushMsg("still not more than 5%.. sell it la " + currentPrice);
		}
	}else if (price{belowHigh} > currentPrice){
		pushMsg("below the high 10% la..." + currentPrice);
	}else if (currentPrice > price{high}){
		price{high} = currentPrice;
		price{belowHigh} = currentPrice * 0.9;	
	}
	
}

// how to run this program?
// use schedule process to run it every 5 mins from 9am to 4:15pm
// - today stock market open ?
//
// the date you buy is day 0.
// when stock market is open, then + 1. 
// reset consequence date when not continue below warning level
