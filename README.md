# xray-poc
Proof of concept x-ray scraping library.

Collection for more items [{ }] works only for scraping on direct page not when using a@href crawling.

```
// xray_poc.js
'use strict';

var Xray = require("x-ray");
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
```
if you run: ``` `DEBUG=x-ray node xray_poc.js` & cat results.json```
You will see that the list works well but when you need a list of objects, only the first item in the list appears:

```
{
  "title": "TEXT LIST",
  "link": "http://testing-ground.scraping.pro/textlist",
  "other": {
    "title": "TEXT LIST ",
    "text_links": [
      "http://testing-ground.scraping.pro/textlist?ver=1",
      "http://testing-ground.scraping.pro/textlist?ver=2",
      "http://testing-ground.scraping.pro/textlist?ver=3",
      "http://testing-ground.scraping.pro/textlist?ver=4",
      "http://testing-ground.scraping.pro/textlist?ver=5"
    ],
    "text_links2": [
      "http://testing-ground.scraping.pro/textlist?ver=1",
      "http://testing-ground.scraping.pro/textlist?ver=2",
      "http://testing-ground.scraping.pro/textlist?ver=3",
      "http://testing-ground.scraping.pro/textlist?ver=4",
      "http://testing-ground.scraping.pro/textlist?ver=5"
    ],
    "text_list": [
      {
        "link": "http://testing-ground.scraping.pro/textlist?ver=1"
      }
    ],
    "content": "TEXT LIST (version 1)"
  }
}
```
