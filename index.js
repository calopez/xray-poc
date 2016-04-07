'use strict';

var Xray = require("x-ray");
var fs = require('fs');
var x = new Xray();

x('http://testing-ground.scraping.pro/', '#content > .caseblock:nth-child(3) ', {
    title: 'a',
    link: 'a @href',
    other: x('#content > .caseblock:nth-child(3) a@href',
    {
        title: 'h1',
        text_links: ['#caseinfo ul li a@href'],
        text_list: x('#caseinfo ul ', [{link: 'li a@href'}]),        
        content: x('#caseinfo ul li a@href' , 'h1'),
/*        text_list: x('#caseinfo ul', [{
            tl: ' li a',
            link: 'li a@href'
            //content: x('#caseinfo ul li a@href' , ['h1'] )
            
          }])*/
 /*       text_list: [{
            tl: '#caseinfo ul li a'
           // content: '#caseinfo ul li a' //, '#content h1')
            
        }]*/
    }
    )

}
/*x('http://www.............com', 'html',
     [{
         letter: 'head title',
         jobs: x('.rcindex table tr', // ['td:first-child']

                 [{
                     job_name: 'td:first-child',
                     //details: x('td:first-child a @href', '.container h1')
                 }]
         )
     }]*/
 )(function(err, results) {


     if (err) {
         console.log('err %0', err);

     } else {
         console.log('results %0', results);
     }



     fs.writeFile('./results2.json', JSON.stringify(results, null, '\t'));
 });
