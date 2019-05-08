import { Constraints } from './constraints';

/**
 * Stores boolean data so the attribute checkbox values persist. Models the Singleton pattern.
 */
export class AttributeData {
    /**Only instance of the class.*/
    private static instance: AttributeData;

    /**Data for if the counties are checked.*/
    private countiesData: boolean[];
    /**Data for if the years are checked.*/
    private yearsData: boolean[];
    /**Data for if the types are checked.*/
    private typesData: boolean[];

    /**The constraints for consistency.*/
    constraints = new Constraints();

    /**
     * Initializes the arrays.
     */
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
        //this.yearsData[1]=true;

        this.typesData.push(true);
        this.typesData.push(false);
    }

    /**
     * Returns the instance of the class.
     */
    static getInstance() {
        if(!AttributeData.instance) {
            AttributeData.instance = new AttributeData();
        }
        return AttributeData.instance;
    }

    /**
     * Returns the set of specified data.
     * 
     * @param setID The id of the set.
     * @return The set of data.
     */
    getData(setID: number) {
        if(setID === this.constraints.COUNTIES_CONST){
            return this.countiesData;
        } else if(setID === this.constraints.YEARS_CONST) {
            return this.yearsData;
        } else {
            return this.typesData;
        }
    }

    /**
     * Sets a value in one of the sets.
     * 
     * @param setID The id of the set.
     * @param index The index to change.
     * @param value The value to set it to.
     */
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