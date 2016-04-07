'use strict';

var Xray = require("x-ray");
var fs = require('fs');

var x = new Xray();


x('http://testing-ground.scraping.pro/', '#content > .caseblock:nth-child(3) ', {
    title: 'a',
    link: 'a @href',
    other: x('#content > .caseblock:nth-child(3) a@href',{
        title: 'h1',
        text_links: ['#caseinfo ul li a@href'],
        text_links2: x('#caseinfo ul ', ['li a@href']),          
        text_list: x('#caseinfo ul ', [{link: 'li a@href'}]),        
        content: x('#caseinfo ul li a@href' , 'h1'),
    })
}).write('results.json');