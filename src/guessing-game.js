class GuessingGame {
    constructor() {
        this.MaxValue = null;
    	this.MinValue = null;
    	this.middleValue = null;
    }

    setRange(min, max) {
    	this.maxValue = max;
    	this.minValue = min;
    }

    guess() {
    	this.middleValue = Math.ceil((this.minValue + this.maxValue)/2);
    	return this.middleValue;
    }

    lower() {
    	this.maxValue = this.middleValue;
    	this.middleValue = Math.ceil((this.minValue + this.maxValue)/2);
    	return this.middleValue;
    }

    greater() {
		this.minValue = this.middleValue;
    	this.middleValue = Math.ceil((this.minValue + this.maxValue)/2);
    	return this.middleValue;
    }
}

module.exports = GuessingGame;
