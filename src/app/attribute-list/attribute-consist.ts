import { Constraints } from '../constraints';

export class AttributeData {
    private static instance: AttributeData;

    private countiesData: boolean[];
    private yearsData: boolean[];
    private typesData: boolean[];

    constraints = new Constraints();

    private constructor() {
        this.countiesData = [];
        this.yearsData = [];
        this.typesData = [];
        for(let i = 0; i < this.constraints.countiesNum; i++) {
            this.countiesData.push(false);
        }

        for(let i = 0; i < this.constraints.yearsNum; i++) {
            this.yearsData.push(false);
        }

        for(let i = 0; i < this.constraints.typesNum; i++) {
            this.typesData.push(false);
        }
    }

    static getInstance() {
        if(!AttributeData.instance) {
            AttributeData.instance = new AttributeData();
        }
        return AttributeData.instance;
    }

    getData(setID: number) {
        if(setID === this.constraints.COUNTIES_CONST){
            return this.countiesData;
        } else if(setID === this.constraints.YEARS_CONST) {
            return this.yearsData;
        } else {
            return this.typesData;
        }
    }

    setData(setID: number, index: number, value: boolean) {
        if(setID === this.constraints.COUNTIES_CONST){
            this.countiesData[index] = value;
        } else if(setID === this.constraints.YEARS_CONST) {
            this.yearsData[index] = value;
            console.log("years: " + this.yearsData);
        } else {
            this.typesData[index] = value;
            console.log("types: " + this.typesData);
        }
    }
} 