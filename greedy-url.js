function getURL(dataSet) {
    const regex = /(https?:\/\/[^\s]+)/g;
    return dataSet.match(regex) || [];
  }
  
  function greedyQuery(dataSet) {
    const regex = /(https?:\/\/[^\s?]+\?[^&]+&[^&]+&[^&]+)/g;
    return dataSet.match(regex) || [];
  }
  
  function notSoGreedy(dataSet) {
    const regex = /(https?:\/\/[^\s?]+\?[^&]+&[^&]+(&[^&]+)?)/g;
    return dataSet.match(regex) || [];
  }

// str = `http://example.com/hello?you=something&something=you qq 233.123.12.234 qw w wq wqw  wqw  ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsd https://devdocs.io/javascript/global_objects/object/fromentries njnkfsdjnk sfdjn fsp fd192.168.1.123:8080 https://devdocs.io/javascript/global_objects/regexp/@@split\n +
// +     htpp://wrong/url hello %$& wf* ][½¬ http://correct/url?correct=yes è[}£§ https://nan-academy.github.io/js-training/?page=editor#data.nested 255.256.1233.2\n +
// +     ssages has become an accepted http://hummm/how?how=come,
// +   http://www.example.com/mypage.html?crcat=test&crsource=test&crkw=buy-a-loteasy way to communicate 255.256.2 with friends, family and colleagues, including 255.256.555.2 in contexts where a call would be when one knows the other person is busy 192.169.1.23 with family or work activities).; 172.01.123.254:1234\n +
// +     for example, to order products or 10.1.23.7 http://www_example.com/\n +
// +     services fromhttps://regex-performance.github.io/exercises.html\n +
// +     this permits communication even between busy individuals255.253.123.2:8000 https: // . Text messages can also http:// be used to http://example.com/path?name=Branch,
// +   https://192.168.1.123?something=nothing&pro=[23] htts:/nan-academy.github.io/js-training?b=123&a=123/?page=editor#data.nested  Like e-mail and voicemail and unlike calls https://www.notherExample.com/catalog.asp?itemid=232,
// +   http://www.example.com/catalog.asp?itemid=232&template=fresh&crcat=ppc
// -   http://hummm/how?how=come&same=[123,21]&you=nextperson&id=123312&next=123DSAD&ok=true&notOk=true,
// -   http://www.example.com/mypage.html?crcat=test&crsource=test&crkw=buy-a-loteasy,
// -   https://www.notherExample.com/catalog.asp?itemid=232&template=fresh&crcat=ppc&crsource=google&crkw=buy-a-lot&id=3&qwe=ty,
// -   http://www.example.com/catalog.asp?itemid=232&template=fresh&crcat=ppc&crsource=google&crkw=buy-a-lot
  
// `
// console.log(getURL(str));
// console.log(greedyQuery(str));
// console.log(notSoGreedy(str));