(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    /**
     * Contains routes to change pages.
     *
     * **Not used in application.
     */
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
        /**
         * Contains routes to change pages.
         *
         * **Not used in application.
         */
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: block;\r\n    left: 0;\r\n\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsUUFBUTs7SUFFUixhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<app-main-tabs></app-main-tabs>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'NC Cancer Statistics';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
        /**
         * The main component of the application.
         */
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _map_box_map_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map-box/map-box.component */ "./src/app/map-box/map-box.component.ts");
/* harmony import */ var _main_tabs_main_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-tabs/main-tabs.component */ "./src/app/main-tabs/main-tabs.component.ts");
/* harmony import */ var _map_screen_map_screen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./map-screen/map-screen.component */ "./src/app/map-screen/map-screen.component.ts");
/* harmony import */ var _stats_screen_stats_screen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./stats-screen/stats-screen.component */ "./src/app/stats-screen/stats-screen.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _main_tabs_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main-tabs.directive */ "./src/app/main-tabs.directive.ts");
/* harmony import */ var _attribute_tabs_attribute_tabs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./attribute-tabs/attribute-tabs.component */ "./src/app/attribute-tabs/attribute-tabs.component.ts");
/* harmony import */ var _attribute_list_attribute_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./attribute-list/attribute-list.component */ "./src/app/attribute-list/attribute-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    /**
     * The main module for the application. Contains declarations of Components
     * and Directives. Also contains imported modules for use throughout the application.
     */
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _map_box_map_box_component__WEBPACK_IMPORTED_MODULE_8__["MapBoxComponent"],
                _main_tabs_main_tabs_component__WEBPACK_IMPORTED_MODULE_9__["MainTabsComponent"],
                _map_screen_map_screen_component__WEBPACK_IMPORTED_MODULE_10__["MapScreenComponent"],
                _stats_screen_stats_screen_component__WEBPACK_IMPORTED_MODULE_11__["StatsScreenComponent"],
                _main_tabs_directive__WEBPACK_IMPORTED_MODULE_13__["MainTabsDirective"],
                _attribute_tabs_attribute_tabs_component__WEBPACK_IMPORTED_MODULE_14__["AttributeTabsComponent"],
                _attribute_list_attribute_list_component__WEBPACK_IMPORTED_MODULE_15__["AttributeListComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]
            ],
            exports: [
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"]
            ],
            providers: [],
            entryComponents: [_map_screen_map_screen_component__WEBPACK_IMPORTED_MODULE_10__["MapScreenComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        })
        /**
         * The main module for the application. Contains declarations of Components
         * and Directives. Also contains imported modules for use throughout the application.
         */
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/attribute-list/attribute-list.component.css":
/*!*************************************************************!*\
  !*** ./src/app/attribute-list/attribute-list.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: block;\r\n    left: 0;\r\n\r\n    height: 100%;\r\n    width: 20ex;\r\n    background-color: lightgray;\r\n}\r\n\r\n.example-viewport {\r\n    height: 100%;\r\n    width: 200px;\r\n    border: 1px solid black;\r\n  }\r\n\r\n.example-item {\r\n    height: 50px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXR0cmlidXRlLWxpc3QvYXR0cmlidXRlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixRQUFROztJQUVSLGFBQWE7SUFDYixZQUFZO0lBQ1osNEJBQTRCO0NBQy9COztBQUVEO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix3QkFBd0I7R0FDekI7O0FBRUQ7SUFDRSxhQUFhO0dBQ2QiLCJmaWxlIjoic3JjL2FwcC9hdHRyaWJ1dGUtbGlzdC9hdHRyaWJ1dGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsZWZ0OiAwO1xyXG5cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAyMGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG4uZXhhbXBsZS12aWV3cG9ydCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/attribute-list/attribute-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/attribute-list/attribute-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<cdk-virtual-scroll-viewport itemSize=\"10\" class=\"example-viewport\">\r\n<form [formGroup]=\"form\">\r\n    <label formArrayName=\"set\" *cdkVirtualFor=\"let name of form.controls.set.controls; let i =index\" class=\"example-item\">\r\n      <input type = \"checkbox\" [formControlName]=\"i\">\r\n      {{set[i].name}}<br>\r\n    </label>\r\n  \r\n</form>\r\n</cdk-virtual-scroll-viewport>"

/***/ }),

/***/ "./src/app/attribute-list/attribute-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/attribute-list/attribute-list.component.ts ***!
  \************************************************************/
/*! exports provided: AttributeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeListComponent", function() { return AttributeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _constraints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constraints */ "./src/app/constraints.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AttributeListComponent = /** @class */ (function () {
    /**
     * Initializes the attribute list to counties.
     * @param formBuilder
     */
    function AttributeListComponent(formBuilder) {
        this.formBuilder = formBuilder;
        /** The current set of items. */
        this.set = [];
        /** Reference to the Constraints class. */
        this.constraints = new _constraints__WEBPACK_IMPORTED_MODULE_2__["Constraints"]();
        this.years = [
            { id: 1, name: '2010' },
            { id: 2, name: '2011' },
            { id: 3, name: '2012' },
            { id: 4, name: '2013' },
            { id: 5, name: '2014' }
        ];
        this.setList(this.constraints.counties);
    }
    /**
     * Changes the list according to input from AttributeTabsComponents.
     * @param strNum 0,1,2 from selected attribute tab.
     */
    AttributeListComponent.prototype.changeList = function (strNum) {
        console.log("strNum", strNum);
        if (strNum === 1) {
            this.setList(this.constraints.years);
        }
        else if (strNum === 2) {
            this.setList(this.constraints.types);
        }
        else {
            this.setList(this.constraints.counties);
        }
    };
    /**
     * Sets the list and updates the view.
     * @param set The new set.
     */
    AttributeListComponent.prototype.setList = function (set) {
        this.set = set;
        var controls = this.set.map(function (c) { return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false); });
        //Updates the view
        this.form = this.formBuilder.group({
            set: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"](controls)
        });
    };
    AttributeListComponent.prototype.ngOnInit = function () { };
    AttributeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attribute-list',
            template: __webpack_require__(/*! ./attribute-list.component.html */ "./src/app/attribute-list/attribute-list.component.html"),
            styles: [__webpack_require__(/*! ./attribute-list.component.css */ "./src/app/attribute-list/attribute-list.component.css")],
        })
        /**
         * The component for the list of attributes with checkboxes.
         */
        ,
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AttributeListComponent);
    return AttributeListComponent;
}());



/***/ }),

/***/ "./src/app/attribute-tabs/attribute-tabs.component.css":
/*!*************************************************************!*\
  !*** ./src/app/attribute-tabs/attribute-tabs.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".attribute-tabs md-content {\r\n    background-color: transparent !important; \r\n}\r\n  \r\n.attribute-tabs md-content md-tabs {\r\n    background: #f6f6f6;\r\n    border: 1px solid #e1e1e1; \r\n}\r\n  \r\n.attribute-tabs md-content md-tabs md-tabs-wrapper {\r\n    background: white; \r\n}\r\n  \r\n.attribute-tabs md-content h1:first-child {\r\n    margin-top: 0; \r\n}\r\n  \r\n:host {\r\n    display: block;\r\n    left: 0;\r\n\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXR0cmlidXRlLXRhYnMvYXR0cmlidXRlLXRhYnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlDQUF5QztDQUM1Qzs7QUFFRDtJQUNJLG9CQUFvQjtJQUNwQiwwQkFBMEI7Q0FDN0I7O0FBRUQ7SUFDSSxrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksZUFBZTtJQUNmLFFBQVE7O0lBRVIsYUFBYTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2F0dHJpYnV0ZS10YWJzL2F0dHJpYnV0ZS10YWJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXR0cmlidXRlLXRhYnMgbWQtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyBcclxufVxyXG4gIFxyXG4uYXR0cmlidXRlLXRhYnMgbWQtY29udGVudCBtZC10YWJzIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxOyBcclxufVxyXG4gIFxyXG4uYXR0cmlidXRlLXRhYnMgbWQtY29udGVudCBtZC10YWJzIG1kLXRhYnMtd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsgXHJcbn1cclxuICBcclxuLmF0dHJpYnV0ZS10YWJzIG1kLWNvbnRlbnQgaDE6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMDsgXHJcbn1cclxuXHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbGVmdDogMDtcclxuXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/attribute-tabs/attribute-tabs.component.html":
/*!**************************************************************!*\
  !*** ./src/app/attribute-tabs/attribute-tabs.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"attribute-tabs\">\r\n  <mat-tab-group (selectedTabChange) = \"tabSelectionChanged($event)\">\r\n      <mat-tab label=\"Counties\"></mat-tab>\r\n      <mat-tab label=\"Years\"></mat-tab>\r\n      <mat-tab label=\"Types\"></mat-tab>\r\n  </mat-tab-group>\r\n</div>"

/***/ }),

/***/ "./src/app/attribute-tabs/attribute-tabs.component.ts":
/*!************************************************************!*\
  !*** ./src/app/attribute-tabs/attribute-tabs.component.ts ***!
  \************************************************************/
/*! exports provided: AttributeTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeTabsComponent", function() { return AttributeTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constraints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constraints */ "./src/app/constraints.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AttributeTabsComponent = /** @class */ (function () {
    function AttributeTabsComponent() {
        /** The emitter for when the tab is changed. */
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Reference to Constraints. */
        this.constraints = new _constraints__WEBPACK_IMPORTED_MODULE_1__["Constraints"]();
    }
    AttributeTabsComponent.prototype.ngOnInit = function () {
    };
    /**
     * Called when a tab selection changes and emits an event.
     * @param event Reference to what tab is selected.
     */
    AttributeTabsComponent.prototype.tabSelectionChanged = function (event) {
        this.changeEvent.emit(event.index);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AttributeTabsComponent.prototype, "changeEvent", void 0);
    AttributeTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-attribute-tabs',
            template: __webpack_require__(/*! ./attribute-tabs.component.html */ "./src/app/attribute-tabs/attribute-tabs.component.html"),
            styles: [__webpack_require__(/*! ./attribute-tabs.component.css */ "./src/app/attribute-tabs/attribute-tabs.component.css")]
        })
        /**
         * The component for the attribute tabs.
         */
        ,
        __metadata("design:paramtypes", [])
    ], AttributeTabsComponent);
    return AttributeTabsComponent;
}());



/***/ }),

/***/ "./src/app/constraints.ts":
/*!********************************!*\
  !*** ./src/app/constraints.ts ***!
  \********************************/
/*! exports provided: Constraints */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constraints", function() { return Constraints; });
/**
 * A class that contains standard data for reuse throughout the application.
 */
var Constraints = /** @class */ (function () {
    function Constraints() {
        this.years = [
            { id: 1, name: '2010' },
            { id: 2, name: '2011' },
            { id: 3, name: '2012' },
            { id: 4, name: '2013' },
            { id: 5, name: '2014' }
        ];
        this.types = [
            { id: 1, name: 'Cancer' },
            { id: 2, name: 'Vital' }
        ];
        this.counties = [
            { id: 1, name: 'Alamance' },
            { id: 2, name: 'Alexander' },
            { id: 3, name: 'Alleghany' },
            { id: 4, name: 'Anson' },
            { id: 5, name: 'Ashe' },
            { id: 6, name: 'Avery' },
            { id: 7, name: 'Beaufort' },
            { id: 8, name: 'Bertie' },
            { id: 9, name: 'Bladen' },
            { id: 10, name: 'Brunswick' },
            { id: 11, name: 'Buncombe' },
            { id: 12, name: 'Burke' },
            { id: 13, name: 'Cabarrus' },
            { id: 14, name: 'Caldwell' },
            { id: 15, name: 'Camden' },
            { id: 16, name: 'Carteret' },
            { id: 17, name: 'Caswell' },
            { id: 18, name: 'Catawba' },
            { id: 19, name: 'Chatham' },
            { id: 20, name: 'Cherokee' },
            { id: 21, name: 'Chowan' },
            { id: 22, name: 'Clay' },
            { id: 23, name: 'Cleveland' },
            { id: 24, name: 'Columbus' },
            { id: 25, name: 'Craven' },
            { id: 26, name: 'Cumberland' },
            { id: 27, name: 'Currituck' },
            { id: 28, name: 'Dare' },
            { id: 29, name: 'Davidson' },
            { id: 30, name: 'Davie' },
            { id: 31, name: 'Duplin' },
            { id: 32, name: 'Durham' },
            { id: 33, name: 'Edgecombe' },
            { id: 34, name: 'Forsyth' },
            { id: 35, name: 'Franklin' },
            { id: 36, name: 'Gaston' },
            { id: 37, name: 'Gates' },
            { id: 38, name: 'Graham' },
            { id: 39, name: 'Granville' },
            { id: 40, name: 'Greene' },
            { id: 41, name: 'Guilford' },
            { id: 42, name: 'Halifax' },
            { id: 43, name: 'Harnett' },
            { id: 44, name: 'Haywood' },
            { id: 45, name: 'Henderson' },
            { id: 46, name: 'Hertford' },
            { id: 47, name: 'Hoke' },
            { id: 48, name: 'Hyde' },
            { id: 49, name: 'Iredell' },
            { id: 50, name: 'Jackson' },
            { id: 51, name: 'Johnston' },
            { id: 52, name: 'Jones' },
            { id: 53, name: 'Lee' },
            { id: 54, name: 'Lenoir' },
            { id: 55, name: 'Lincoln' },
            { id: 56, name: 'McDowell' },
            { id: 57, name: 'Macon' },
            { id: 58, name: 'Madison' },
            { id: 59, name: 'Martin' },
            { id: 60, name: 'Mecklenburg' },
            { id: 61, name: 'Mitchell' },
            { id: 62, name: 'Montgomery' },
            { id: 63, name: 'Moore' },
            { id: 64, name: 'Nash' },
            { id: 65, name: 'New Hanover' },
            { id: 66, name: 'Northampton' },
            { id: 67, name: 'Onslow' },
            { id: 68, name: 'Orange' },
            { id: 69, name: 'Pamlico' },
            { id: 70, name: 'Pasquotank' },
            { id: 71, name: 'Pender' },
            { id: 72, name: 'Perquimans' },
            { id: 73, name: 'Person' },
            { id: 74, name: 'Pitt' },
            { id: 75, name: 'Polk' },
            { id: 76, name: 'Randolph' },
            { id: 77, name: 'Richmond' },
            { id: 78, name: 'Robeson' },
            { id: 79, name: 'Rockingham' },
            { id: 80, name: 'Rowan' },
            { id: 81, name: 'Rutherford' },
            { id: 82, name: 'Sampson' },
            { id: 83, name: 'Scotland' },
            { id: 84, name: 'Stanly' },
            { id: 85, name: 'Stokes' },
            { id: 86, name: 'Surry' },
            { id: 87, name: 'Swain' },
            { id: 88, name: 'Transylvania' },
            { id: 89, name: 'Tyrrell' },
            { id: 90, name: 'Union' },
            { id: 91, name: 'Vance' },
            { id: 92, name: 'Wake' },
            { id: 93, name: 'Warren' },
            { id: 94, name: 'Washington' },
            { id: 95, name: 'Watauga' },
            { id: 96, name: 'Wayne' },
            { id: 97, name: 'Wilkes' },
            { id: 98, name: 'Wilson' },
            { id: 99, name: 'Yadkin' },
            { id: 100, name: 'Yancey' }
        ];
    }
    return Constraints;
}());



/***/ }),

/***/ "./src/app/main-tabs.directive.ts":
/*!****************************************!*\
  !*** ./src/app/main-tabs.directive.ts ***!
  \****************************************/
/*! exports provided: MainTabsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTabsDirective", function() { return MainTabsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainTabsDirective = /** @class */ (function () {
    function MainTabsDirective(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
    MainTabsDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[tab-host]'
        })
        /**
         * A marker that tells MainTabCompenent where in the html to attach a
         * component.
         */
        ,
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], MainTabsDirective);
    return MainTabsDirective;
}());



/***/ }),

/***/ "./src/app/main-tabs/main-tabs.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-tabs/main-tabs.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-tabs md-content {\r\n    background-color: transparent !important; \r\n}\r\n  \r\n.main-tabs md-content md-tabs {\r\n    background: #f6f6f6;\r\n    border: 1px solid #e1e1e1; \r\n}\r\n  \r\n.main-tabs md-content md-tabs md-tabs-wrapper {\r\n    background: white; \r\n}\r\n  \r\n.main-tabs md-content h1:first-child {\r\n    margin-top: 0; \r\n}\r\n  \r\n:host {\r\n    display: block;\r\n    left: 0;\r\n\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi10YWJzL21haW4tdGFicy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUNBQXlDO0NBQzVDOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLDBCQUEwQjtDQUM3Qjs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsUUFBUTs7SUFFUixhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi10YWJzL21haW4tdGFicy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tdGFicyBtZC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7IFxyXG59XHJcbiAgXHJcbi5tYWluLXRhYnMgbWQtY29udGVudCBtZC10YWJzIHtcclxuICAgIGJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTFlMWUxOyBcclxufVxyXG4gIFxyXG4ubWFpbi10YWJzIG1kLWNvbnRlbnQgbWQtdGFicyBtZC10YWJzLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7IFxyXG59XHJcbiAgXHJcbi5tYWluLXRhYnMgbWQtY29udGVudCBoMTpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwOyBcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsZWZ0OiAwO1xyXG5cclxuICAgIGhlaWdodDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main-tabs/main-tabs.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-tabs/main-tabs.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-tabs\">\r\n    <mat-tab-group (selectedTabChange) = \"tabSelectionChanged($event)\">\r\n        <mat-tab label=\"Map\"> <ng-template tab-host></ng-template> </mat-tab>\r\n        <mat-tab label=\"Statistics\"> StatsScreenComponent goes here </mat-tab>\r\n        <mat-tab label=\"Predictions\"> PredictionsScreenComponent goes here </mat-tab>\r\n    </mat-tab-group>\r\n</div>"

/***/ }),

/***/ "./src/app/main-tabs/main-tabs.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-tabs/main-tabs.component.ts ***!
  \**************************************************/
/*! exports provided: MainTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTabsComponent", function() { return MainTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _main_tabs_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main-tabs.directive */ "./src/app/main-tabs.directive.ts");
/* harmony import */ var _map_screen_map_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../map-screen/map-screen.component */ "./src/app/map-screen/map-screen.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainTabsComponent = /** @class */ (function () {
    function MainTabsComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
    }
    /**
     * Initializes the tab selection.
     */
    MainTabsComponent.prototype.ngOnInit = function () {
        this.tabSelectionChanged(null);
    };
    /**
     * When a tab selection changes, update the component.
     * @param event Reference to the selected tab.
     */
    MainTabsComponent.prototype.tabSelectionChanged = function (event) {
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(_map_screen_map_screen_component__WEBPACK_IMPORTED_MODULE_2__["MapScreenComponent"]);
        var viewContainerRef = this.tabHost.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_main_tabs_directive__WEBPACK_IMPORTED_MODULE_1__["MainTabsDirective"]),
        __metadata("design:type", Object)
    ], MainTabsComponent.prototype, "tabHost", void 0);
    MainTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-tabs',
            template: __webpack_require__(/*! ./main-tabs.component.html */ "./src/app/main-tabs/main-tabs.component.html"),
            styles: [__webpack_require__(/*! ./main-tabs.component.css */ "./src/app/main-tabs/main-tabs.component.css")]
        })
        /**
         * The component for the main tabs.
         */
        ,
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], MainTabsComponent);
    return MainTabsComponent;
}());



/***/ }),

/***/ "./src/app/map-box/map-box.component.css":
/*!***********************************************!*\
  !*** ./src/app/map-box/map-box.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-overlay {\r\n    font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;\r\n    background-color: #fff;\r\n    box-shadow: 0 1px 2px rgba(0,0,0,0.10);\r\n    border-radius: 3px;\r\n    position: absolute;\r\n    width: 25%;\r\n    top: 10px;\r\n    left: 10px;\r\n    padding: 10px;\r\n    display: none;\r\n}\r\n\r\n:host {\r\n    display: inline;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLWJveC9tYXAtYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwrREFBK0Q7SUFDL0QsdUJBQXVCO0lBQ3ZCLHVDQUF1QztJQUN2QyxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLGNBQWM7SUFDZCxjQUFjO0NBQ2pCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvbWFwLWJveC9tYXAtYm94LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLW92ZXJsYXkge1xyXG4gICAgZm9udDogMTJweC8yMHB4ICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4xMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/map-box/map-box.component.html":
/*!************************************************!*\
  !*** ./src/app/map-box/map-box.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id='map-overlay' class='map-overlay'></div>\r\n<div class=\"map\" id=\"map\" style='width: 800px; height: 315px;'></div>\r\n\r\n"

/***/ }),

/***/ "./src/app/map-box/map-box.component.ts":
/*!**********************************************!*\
  !*** ./src/app/map-box/map-box.component.ts ***!
  \**********************************************/
/*! exports provided: MapBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapBoxComponent", function() { return MapBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ "./node_modules/mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapBoxComponent = /** @class */ (function () {
    function MapBoxComponent() {
    }
    ;
    MapBoxComponent.prototype.ngOnInit = function () {
        this.buildMap();
        findCounty();
    };
    ;
    MapBoxComponent.prototype.buildMap = function () {
        mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["accessToken"] = 'pk.eyJ1Ijoiam1tYXNzZXkyIiwiYSI6ImNqbnA1bzByaTAweTQzcG1iZmFzb3huanIifQ.XpnPcIFiUfJOwhkqA_UX2w';
        var map = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Map"]({
            container: 'map',
            style: 'mapbox://styles/mapbox/light-v9',
            center: [-80, 35.2],
            interactive: false,
            minZoom: 5.9,
            maxZoom: 5.9,
            zoom: 5.9
        });
        // Create a popup
        var popup = new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__["Popup"]({
            closeButton: false
        });
        //findCounty();
        map.on('load', function () {
            // county polygons uploaded as vector tiles
            map.addSource('counties', {
                "type": "vector",
                "url": "mapbox://jmmassey2.ajq1r4q2"
            });
            map.addLayer({
                "id": "counties",
                "type": "fill",
                "source": "counties",
                "source-layer": "mygeodata-7hcym5",
                "paint": {
                    "fill-outline-color": "rgba(0,0,0,0.1)",
                    "fill-color": "rgba(0,0,0,0.1)"
                }
            }, 'place-city-sm'); // Place polygon under these labels.
            map.addLayer({
                "id": "counties-highlighted",
                "type": "fill",
                "source": "counties",
                "source-layer": "mygeodata-7hcym5",
                "paint": {
                    "fill-outline-color": "#484896",
                    "fill-color": "#6e599f",
                    "fill-opacity": 0.75
                },
                "filter": ["in", "NAME", ""]
            }, 'place-city-sm'); // Place polygon under these labels.
            map.on('mousemove', 'counties', function (e) {
                // Change the cursor style as a UI indicator.
                map.getCanvas().style.cursor = 'pointer';
                //var caseRate = JSON.stringify(findCounty("wake"));
                // Single out the first found feature.
                var feature = e.features[0];
                // Display a popup with the name of the county
                popup.setLngLat(e.lngLat)
                    //.setText(feature.properties.NAME + " cases: " + JSON.stringify(caseRate))
                    .setText(feature.properties.NAME)
                    .addTo(map);
            });
            map.on('mouseleave', 'counties', function () {
                map.getCanvas().style.cursor = '';
                popup.remove();
                map.setFilter('counties-highlighted', ['in', 'NAME', '']);
                this.overlay.style.display = 'none';
            });
        });
    };
    MapBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-box',
            template: __webpack_require__(/*! ./map-box.component.html */ "./src/app/map-box/map-box.component.html"),
            styles: [__webpack_require__(/*! ./map-box.component.css */ "./src/app/map-box/map-box.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapBoxComponent);
    return MapBoxComponent;
}());



/***/ }),

/***/ "./src/app/map-screen/map-screen.component.css":
/*!*****************************************************!*\
  !*** ./src/app/map-screen/map-screen.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: grid;\r\n    left: 0;\r\n    \r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwLXNjcmVlbi9tYXAtc2NyZWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsUUFBUTs7O0NBR1giLCJmaWxlIjoic3JjL2FwcC9tYXAtc2NyZWVuL21hcC1zY3JlZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgXHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/map-screen/map-screen.component.html":
/*!******************************************************!*\
  !*** ./src/app/map-screen/map-screen.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-attribute-tabs (changeEvent)=\"listComp.changeList($event)\"></app-attribute-tabs>\r\n<div class=\"container\"\r\n      fxLayout=\"row\"\r\n      fxLayoutAlign=\"right stretch\">\r\n    <app-attribute-list fxFlex=\"15\" #listComp></app-attribute-list>\r\n    <app-map-box fxFlex></app-map-box>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/map-screen/map-screen.component.ts":
/*!****************************************************!*\
  !*** ./src/app/map-screen/map-screen.component.ts ***!
  \****************************************************/
/*! exports provided: MapScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapScreenComponent", function() { return MapScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapScreenComponent = /** @class */ (function () {
    function MapScreenComponent() {
    }
    MapScreenComponent.prototype.ngOnInit = function () {
    };
    MapScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map-screen',
            template: __webpack_require__(/*! ./map-screen.component.html */ "./src/app/map-screen/map-screen.component.html"),
            styles: [__webpack_require__(/*! ./map-screen.component.css */ "./src/app/map-screen/map-screen.component.css")]
        })
        /**
         * Component for the map screen.
         *
         * **Just a container.
         */
        ,
        __metadata("design:paramtypes", [])
    ], MapScreenComponent);
    return MapScreenComponent;
}());



/***/ }),

/***/ "./src/app/stats-screen/stats-screen.component.css":
/*!*********************************************************!*\
  !*** ./src/app/stats-screen/stats-screen.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXRzLXNjcmVlbi9zdGF0cy1zY3JlZW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/stats-screen/stats-screen.component.html":
/*!**********************************************************!*\
  !*** ./src/app/stats-screen/stats-screen.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  stats-screen works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/stats-screen/stats-screen.component.ts":
/*!********************************************************!*\
  !*** ./src/app/stats-screen/stats-screen.component.ts ***!
  \********************************************************/
/*! exports provided: StatsScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsScreenComponent", function() { return StatsScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatsScreenComponent = /** @class */ (function () {
    function StatsScreenComponent() {
    }
    StatsScreenComponent.prototype.ngOnInit = function () {
    };
    StatsScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stats-screen',
            template: __webpack_require__(/*! ./stats-screen.component.html */ "./src/app/stats-screen/stats-screen.component.html"),
            styles: [__webpack_require__(/*! ./stats-screen.component.css */ "./src/app/stats-screen/stats-screen.component.css")]
        })
        /**
         * Component for the stats screen.
         *
         * **Just a container.
         */
        ,
        __metadata("design:paramtypes", [])
    ], StatsScreenComponent);
    return StatsScreenComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    mapbox: {
        accessToken: 'pk.eyJ1Ijoiam1tYXNzZXkyIiwiYSI6ImNqbnA1bzByaTAweTQzcG1iZmFzb3huanIifQ.XpnPcIFiUfJOwhkqA_UX2w'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\McRae\Documents\NCCancerStats\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map