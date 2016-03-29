"use strict";angular.module("pvfmApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap","leaflet-directive"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"VendorCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]),angular.module("pvfmApp").controller("VendorCtrl",["$scope",function(a){a.isCollapsed=!1,a.vendorGroups=[{name:"Farm Produce",image:"images/fruit.e241513e.png",selection:!0,vendors:["Webb Ranch","Crescent Farm","Rio de Parras","Specialty Produce","Smit Farm","Sunrise Farm","Half Moon Harvest","Green Eggs-n-Jam","local honey","Bill the Bulb Baron","Winters Fruit Tree (nuts)"]},{name:"Meat & Fish",image:"images/Fish.d7cca287.png",selection:!1,vendors:["Victorian Farmstead Meats","One Ocean Seafood","Haley's Sausage Co."]},{name:"Specialty Items",image:"images/Beer.5e7a5ffe.png",selection:!1,vendors:["Portola Vineyards","Sinbad Catering","Nut 'n Bean","High Note Coffee","Milliken Creek Vineyards","Santa Cruz Pasta Factory","Karnival Popcorn"]},{name:"Bakery & Sweets",image:"images/Bread.291c5eed.png",selection:!1,vendors:["Flourchylde Bakery","Noble Treats Dog Biscuits","Tantalizing Toffee","Spoon & Spatula Bakery","Kidding Around with Chocolate","Shampa's Pies"]},{name:"Food Trucks",image:"images/Food-Truck.9cc18bd9.png",selection:!1,vendors:["Roli Roti (hot rotisserie chicken and potatoes)"]},{name:"Crafts",image:"images/Sewing-Machine.4fa65e3c.png",selection:!1,vendors:["Body and Soul Apothecary","Knife Sharpening by Jim Adams","Jen Raynes Art","J. Carruthers Floral","Earth’s Sister Handbags","Kathena Avelon Jewelry","Dream Light Jewelry","Nancy Wilder Designs","Zubrub","Route One Pumpkin Soaps & Lotion"]}],a.targetGroup=a.vendorGroups[0],a.showGroup=function(b){a.isCollapsed||a.targetGroup!==b?a.isCollapsed||a.targetGroup===b?(a.isCollapsed=!1,a.targetGroup=b):a.targetGroup=b:(a.isCollapsed=!0,a.targetGroup={})},a.updateSelect=function(b){a.vendorGroups.forEach(function(a){a.selection=!1}),b.selection=!a.isCollapsed}}]),angular.module("pvfmApp").controller("MapCtrl",["$scope",function(a){a.center={lat:37.382468,lng:-122.228823,zoom:12},a.markers={marker:{lat:37.382468,lng:-122.228823,focus:!0,icon:{iconUrl:"images/leaf-green.d6cd68e0.png",shadowUrl:"images/leaf-shadow.5f1fd262.png",iconSize:[38,95],shadowSize:[50,64],iconAnchor:[22,94],shadowAnchor:[4,62],popupAnchor:[-3,-76]}}},a.tiles={name:"watercolor",url:"http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png",type:"xyz"},a.$watch("center.zoom",function(b){a.tiles.url=b>12?"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png":"http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png"})}]),angular.module("pvfmApp").controller("PhotoCtrl",["$scope",function(a){a.myInterval=5e3,a.noWrapSlides=!1,a.slides=[{image:"images/coffee.71195623.png"},{image:"images/strawberries1.03f11fc6.jpeg"},{image:"images/mmm_chicken.336575c3.jpeg"},{image:"images/cute_sign.6df60d87.jpeg"},{image:"images/sky.fb10e50c.png"},{image:"images/squash.5fd4a10c.png"}]}]),angular.module("pvfmApp").run(["$templateCache",function(a){a.put("views/about.html","<p>an empty about page</p>"),a.put("views/main.html",'<section class="photo-section" id="photos" ng-controller="PhotoCtrl"> <!-- <div class="alert alert-warning alert-dismissible" role="alert">\n        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n        <p>Knife Sharpening starting <b>January 28th!</b> See you there!</p>\n    </div> --> <div> <carousel interval="myInterval" no-wrap="noWrapSlides"> <slide ng-repeat="slide in slides" active="slide.active"> <img ng-src="{{slide.image}}" style="margin:auto"> </slide> </carousel> </div> </section> <section id="description" class="description-section"> <h2>2-6pm (daylight saving time hours)</h2> <br> <h2>Every Thursday, Year-Round </h2> <br> <h2> 765 Portola Road, Portola Valley</h2> <br> <h2>At Town Center, in front of the Historic Schoolhouse</h2> <br> <hr> </section> <section id="vendors" ng-controller="VendorCtrl" class="vendor-section"> <h2 style="margin-top: -20px"><strong>Browse Our Vendors</strong></h2> <h3 style="margin-top: -10px; margin-bottom: 40px"><small>Choose a category to see who joins us!</small></h3> <div style="width: 75%; margin-bottom: 40px"> <img class="groupimg" ng-repeat="group in vendorGroups" ng-src="{{group.image}}" alt="{{group.name}}" ng-click="showGroup(group); updateSelect(group)" ng-class="{embellish: hover, selected: group.selection}" ng-mouseenter="hover = true" ng-mouseleave="hover = false"> </div> <div collapse="isCollapsed"> <div class="well well-lg"> <h2>{{targetGroup.name}}</h2> <li ng-repeat="vendor in targetGroup.vendors"><h4>{{vendor}}</h4></li> </div> </div> </section> <section style="margin-top: 20px" class="leaflet-section" id="map" ng-controller="MapCtrl"> <div class="row"> <div class="col-lg-12"> <leaflet height="450px" width="100%" defaults="defaults" center="center" markers="markers" tiles="tiles"></leaflet> </div> </div> </section> <!-- <section>\n    <p style="font-size: 125%;">Every Thursday afternoon, in the parking lot in front of the Historic Schoolhouse, the farmers arrive one by one. Tents pop up, fruits and vegetables are unloaded and arranged onto tables. The baker arrives with his warm loaves, the coffee roaster lines up his bags of freshly roasted beans. The sausage maker,the fishmonger, the farmstead meat vendor arrive. Eggs and specialties appear on the tables and trickling in, the shoppers arrive and get in line for the warm loaves. The laughter begins…</p>\n</section> --> <section id="contact" class="contact-section"> <a href="mailto:maggiefoard@mac.com"> <img src="images/mail.5f4fd00a.png" class="groupimg" ng-class="{embellish: hover0}" ng-mouseenter="hover0 = true" ng-mouseleave="hover0 = false"> </a> <a href="https://www.facebook.com/PortolaValleyFarmersMarket?fref=ts" target="_blank"> <img src="images/facebook.421c00ec.png" class="groupimg" ng-class="{embellish: hover}" ng-mouseenter="hover = true" ng-mouseleave="hover = false"> </a> </section>')}]);